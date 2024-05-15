import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";
import { seed } from "../prisma/seed/seed";
import { loginAndGetTokens } from "./utils";
import * as cookieParser from "cookie-parser";

const newTechName = "anotherLayerJS";
const updatedTechName = "updatedLayerJS";

//Tests require the following state and seed data to execute successfully:
//Logged in as user Jessica Williamson, member of voyage team 2, as team member 8
//Team 2 must have at least one tech in category 1 , with at least one vote
//Tech item 3 has not been been voted on by team member 8

describe("Techs Controller (e2e)", () => {
    let app: INestApplication;
    let prisma: PrismaService;
    let accessToken: any;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        await seed();
        app = moduleFixture.createNestApplication();
        prisma = moduleFixture.get<PrismaService>(PrismaService);
        app.useGlobalPipes(new ValidationPipe());
        app.use(cookieParser());
        await app.init();
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await app.close();
    });

    beforeEach(async () => {
        await loginAndGetTokens(
            "jessica.williamson@gmail.com",
            "password",
            app,
        ).then((tokens) => {
            accessToken = tokens.access_token;
        });
    });

    describe("GET voyages/teams/:teamId/techs - get data on all tech categories and items", () => {
        it("should return 200 and array of tech categories, populated with techs and votes", async () => {
            const teamId: number = 2;

            return await request(app.getHttpServer())
                .get(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .expect(200)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.arrayContaining([
                            //main response body array
                            {
                                id: expect.any(Number),
                                name: expect.any(String),
                                description: expect.any(String),
                                teamTechStackItems: expect.any(Array),
                            },
                        ]),
                    );
                })
                .expect((res) => {
                    expect(res.body[0].teamTechStackItems).toEqual(
                        //nested teamTechStackItems array
                        expect.arrayContaining([
                            {
                                id: expect.any(Number),
                                name: expect.any(String),
                                teamTechStackItemVotes: expect.any(Array),
                            },
                        ]),
                    );
                })
                .expect((res) => {
                    expect(
                        res.body[0].teamTechStackItems[0]
                            .teamTechStackItemVotes,
                    ).toEqual(
                        //nested teamTechStackItemsVotes array
                        expect.arrayContaining([
                            {
                                votedBy: {
                                    member: {
                                        id: expect.any(String),
                                        firstName: expect.any(String),
                                        lastName: expect.any(String),
                                        avatar: expect.any(String),
                                    },
                                },
                            },
                        ]),
                    );
                });
        });
    });
    describe("POST voyages/teams/:teamId/techs - add new tech item", () => {
        it("should return 201 if new tech item successfully added", async () => {
            const teamId: number = 2;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: newTechName,
                    techCategoryId: 1,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(201)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            teamTechStackItemVoteId: expect.any(Number),
                            teamTechId: expect.any(Number),
                            teamMemberId: expect.any(Number),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        }),
                    );
                });
        });

        it("- verify that new tech is present in database", async () => {
            const techStackItem = await prisma.teamTechStackItem.findMany({
                where: {
                    name: newTechName,
                    categoryId: 1,
                },
            });
            return expect(techStackItem[0].name).toEqual(newTechName);
        });

        it("should return 401 unauthorized if not logged in", async () => {
            const teamId: number = 2;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs`)
                .set("Authorization", `Bearer ${undefined}`)
                .send({
                    techName: newTechName,
                    techCategoryId: 1,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(401)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: "Unauthorized",
                            statusCode: 401,
                        }),
                    );
                });
        });

        it("should return 404 if invalid teamId provided", async () => {
            const teamId: number = 9999999;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: newTechName,
                    techCategoryId: 1,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(404)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 404,
                        }),
                    );
                });
        });

        it("should return 409 if tech already exists in database", async () => {
            const teamId: number = 2;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: newTechName,
                    techCategoryId: 1,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(409)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            error: "Conflict",
                            message: expect.any(String),
                            statusCode: 409,
                        }),
                    );
                });
        });
    });

    describe("PATCH voyages/teams/:teamId/techs - update tech stack item of the team", () => {
        it("should return 200 and update a tech stack item", async () => {
            const teamId: number = 2;
            const techId: number = 1;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: updatedTechName,
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(200)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            voyageTeamMemberId: expect.any(Number),
                            voyageTeamId: expect.any(Number),
                            teamTechStackItemVotes: expect.any(Array),
                        }),
                    );
                    expect(res.body.teamTechStackItemVotes).toEqual(
                        expect.arrayContaining([
                            {
                                votedBy: {
                                    member: {
                                        id: expect.any(String),
                                        firstName: expect.any(String),
                                        lastName: expect.any(String),
                                        avatar: expect.any(String),
                                    },
                                },
                            },
                        ]),
                    );
                    expect(res.body.name).toEqual(updatedTechName);
                });
        });
        it("should return 404 for invalid tech Id", async () => {
            const teamId: number = 2;
            const techId: number = 9999999;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: updatedTechName,
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(404)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 404,
                        }),
                    );
                });
        });
        it("should return 400 for invalid request body", async () => {
            const teamId: number = 2;
            const techId: number = 1;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(400);
        });
        it("should return 400 for invalid request body", async () => {
            const teamId: number = 2;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: updatedTechName,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(400);
        });
        it("should return 400 for invalid request body", async () => {
            const teamId: number = 2;
            const techId: number = 1;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: updatedTechName,
                    techId: techId,
                })
                .expect(400);
        });
        it("should return 403 if a user tries to PATCH a tech stack item created by someone else", async () => {
            const teamId: number = 2;
            const techId: number = 3;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techName: updatedTechName,
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(403);
        });
        it("should return 401 unauthorized if not logged in", async () => {
            const teamId: number = 2;
            const techId: number = 5;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs`)
                .set("Authorization", `Bearer ${undefined}`)
                .send({
                    techName: updatedTechName,
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(401);
        });
    });
    describe("DELETE voyages/teams/:teamId/techs - delete tech stack item", () => {
        it("should return 200 after deleting a tech stack item", async () => {
            const teamId: number = 2;
            const techId: number = 5;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(200)
                .expect(async () => {
                    const deletedTechStackItem =
                        await prisma.teamTechStackItem.findFirst({
                            where: {
                                id: techId,
                            },
                        });
                    expect(deletedTechStackItem).toBeNull();
                });
        });
        it("should return 404 if invalid tech id provided", async () => {
            const teamId: number = 2;
            const techId: number = 9999999;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(404)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 404,
                        }),
                    );
                });
        });
        it("should return 404 if invalid team id is provided", async () => {
            const teamId: number = 9999999;
            const techId: number = 1;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(404)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 404,
                        }),
                    );
                });
        });
        it("should return 403 if a user tries to DELETE a resource created by someone else", async () => {
            const teamId: number = 2;
            const techId: number = 3;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(403)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 403,
                        }),
                    );
                });
        });
        it("should return 400 if invalid request body", async () => {
            const teamId: number = 2;
            const techId: number = 5;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    techId: techId,
                })
                .expect(400);
        });
        it("should return 400 if invalid request body", async () => {
            const teamId: number = 2;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Cookie", accessToken)
                .send({
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(400);
        });
        it("should return 401 if user is not logged in", async () => {
            const teamId: number = 2;
            const techId: number = 5;
            const teamMemberId: number = 8;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs`)
                .set("Authorization", `Bearer ${undefined}`)
                .send({
                    techId: techId,
                    voyageTeamMemberId: teamMemberId,
                })
                .expect(401);
        });
    });

    describe("POST voyages/teams/:teamId/techs/:teamTechId - add user vote for tech item", () => {
        it("should return 200 if vote successfully added", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(201)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            teamTechStackItemVoteId: expect.any(Number),
                            teamTechId: expect.any(Number),
                            teamMemberId: expect.any(Number),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String),
                        }),
                    );
                });
        });

        it("- verify that new tech vote is present in database", async () => {
            const techStackVote = await prisma.teamTechStackItemVote.findMany({
                where: {
                    teamTechId: 3,
                    teamMemberId: 8,
                },
            });
            return expect(techStackVote[0].teamMemberId).toEqual(8);
        });

        it("should return 401 unauthorized if not logged in", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Authorization", `Bearer ${undefined}`)
                .expect(401)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: "Unauthorized",
                            statusCode: 401,
                        }),
                    );
                });
        });

        it("should return 400 if invalid teamId provided", async () => {
            const teamId: number = 9999999;
            const techId: number = 3;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(400)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: expect.any(String),
                            statusCode: 400,
                        }),
                    );
                });
        });

        it("should return 409 if user vote for tech already exists", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .post(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(409)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: "Conflict",
                            statusCode: 409,
                        }),
                    );
                });
        });
    });

    describe("DELETE voyages/teams/:teamId/techs/:teamTechId - delete user vote for tech", () => {
        it("should return 200 if tech vote deleted", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(200)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: "This vote was deleted",
                            statusCode: 200,
                        }),
                    );
                });
        });

        it("- verify that new tech vote is deleted from database", async () => {
            const techStackVote = await prisma.teamTechStackItemVote.findMany({
                where: {
                    teamTechId: 3,
                    teamMemberId: 8,
                },
            });
            return expect(techStackVote[0]).toEqual(undefined);
        });

        it("should return 200 if tech last vote was deleted and team tech stack item is deleted", async () => {
            const teamId: number = 2;
            const techId: number = 9;
            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(200)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message:
                                "The vote and tech stack item were deleted",
                            statusCode: 200,
                        }),
                    );
                });
        });

        it("- verify that tech stack Item was deleted from database", async () => {
            const techStackItem = await prisma.teamTechStackItem.findFirst({
                where: {
                    name: newTechName,
                },
            });
            return expect(techStackItem).toBeNull();
        });

        it("should return 401 unauthorized if not logged in", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Authorization", `Bearer ${undefined}`)
                .expect(401)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: "Unauthorized",
                            statusCode: 401,
                        }),
                    );
                });
        });

        it("should return 400 if invalid teamId provided", async () => {
            const teamId: number = 99999;
            const techId: number = 3;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(400)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: expect.any(String),
                            error: "Bad Request",
                            statusCode: 400,
                        }),
                    );
                });
        });

        it("should return 404 if vote to delete does not exist", async () => {
            const teamId: number = 2;
            const techId: number = 3;

            return request(app.getHttpServer())
                .delete(`/voyages/teams/${teamId}/techs/${techId}`)
                .set("Cookie", accessToken)
                .expect(404)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.objectContaining({
                            message: "Record to delete does not exist.",
                            error: "Not Found",
                            statusCode: 404,
                        }),
                    );
                });
        });
    });

    describe("PATCH voyages/teams/:teamId/techs/selections - updates isSelected value of tech stack items", () => {
        it("should return 200 and an array of updated techs, if successful", async () => {
            const teamId: number = 2;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs/selections`)
                .set("Cookie", accessToken)
                .send({
                    categories: [
                        {
                            categoryId: 1,
                            techs: [
                                {
                                    techId: 1,
                                    isSelected: true,
                                },
                            ],
                        },
                    ],
                })
                .expect(200)
                .expect("Content-Type", /json/)
                .expect((res) => {
                    expect(res.body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                categoryId: expect.any(Number),
                                isSelected: expect.any(Boolean),
                                name: expect.any(String),
                            }),
                        ]),
                    );
                });
        });

        it("should return 400 if more than 3 selections in a category", async () => {
            const teamId: number = 2;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs/selections`)
                .set("Cookie", accessToken)
                .send({
                    categories: [
                        {
                            categoryId: 1,
                            techs: [
                                {
                                    techId: 1,
                                    isSelected: true,
                                },
                                {
                                    techId: 2,
                                    isSelected: true,
                                },
                                {
                                    techId: 3,
                                    isSelected: true,
                                },
                                {
                                    techId: 4,
                                    isSelected: true,
                                },
                            ],
                        },
                    ],
                })
                .expect(400);
        });

        it("should return 400 invalid team id provided", async () => {
            const teamId: number = 3;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs/selections`)
                .set("Cookie", accessToken)
                .send({
                    categories: [
                        {
                            categoryId: 1,
                            techs: [
                                {
                                    techId: 1,
                                    isSelected: true,
                                },
                            ],
                        },
                    ],
                })
                .expect(400);
        });

        it("should return 401 unauthorized if not logged in", async () => {
            const teamId: number = 2;

            return request(app.getHttpServer())
                .patch(`/voyages/teams/${teamId}/techs/selections`)
                .set("Authorization", `Bearer ${undefined}`)
                .send({
                    categories: [
                        {
                            categoryId: 1,
                            techs: [
                                {
                                    techId: 1,
                                    isSelected: true,
                                },
                            ],
                        },
                    ],
                })
                .expect(401);
        });
    });
});
