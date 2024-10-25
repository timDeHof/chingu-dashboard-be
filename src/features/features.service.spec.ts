import { Test, TestingModule } from "@nestjs/testing";
import { FeaturesService } from "./features.service";
import { PrismaService } from "@/prisma/prisma.service";
import { GlobalService } from "@/global/global.service";
import { prismaMock } from "@/prisma/singleton";
import { CustomRequest } from "@/global/types/CustomRequest";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import { FeatureCategory, ProjectFeature, VoyageTeam } from "@prisma/client";
/* import { UpdateFeatureDto } from "./dto/update-feature.dto";
import { UpdateFeatureOrderAndCategoryDto } from "./dto/update-feature-order-and-category.dto"; */

const userReq = {
    userId: "aa9d050e-5756-4c3c-bc04-071f39f53663",
    email: "test@test.com",
    roles: ["voyager"],
    isVerified: true,
    voyageTeams: [{ teamId: 1, memberId: 1 }],
};

const mockFeature = {
    id: 1,
    teamMemberId: 1,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    featureCategoryId: 1,
    order: 1,
    description: "It is a very good feature that is very useful for the team",
};

const mockVoyageTeam = {
    id: 1,
};

const mockTeamId: number = 1;
const mockTeamMemberId: number = 1;
const requestMock = {
    user: userReq,
} as any as CustomRequest;

const mockGlobalService = {
    getVoyageTeamMemberId: jest.fn(),
};

const dtoCreateMock: CreateFeatureDto = {
    description: "Chingu is a global collaboration platform",
    featureCategoryId: 1,
};

const mockFeaturesArray = [
    {
        id: 1,
        teamMemberId: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        featureCategoryId: 1,
        order: 1,
        description:
            "It is a very good feature that is very useful for the team",
        addedBy: {
            member: {
                firstName: "Larry",
                lastName: "Castro",
                id: "18093ad0-88ef-4bcd-bee8-322749c876bd",
                avatar: "https://gravatar.com/avatar/90383a4ee0fb891c1ec3374e6a593a6c6fd88166d4fd45f796dabeaba7af836d?s=200&r=g&d=wavatar\n",
            },
        },
    },
    {
        id: 2,
        teamMemberId: 2,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        featureCategoryId: 2,
        order: 2,
        description:
            "It is a very good feature that is very useful for the team",
        addedBy: {
            member: {
                firstName: "Larry",
                lastName: "Castro",
                id: "18093ad0-88ef-4bcd-bee8-322749c876bd",
                avatar: "https://gravatar.com/avatar/90383a4ee0fb891c1ec3374e6a593a6c6fd88166d4fd45f796dabeaba7af836d?s=200&r=g&d=wavatar\n",
            },
        },
    },
];

const mockFeatureCategory = [
    {
        name: "must have",
        id: 1,
        description: "features that define your MVP",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    },
    {
        name: "should have",
        id: 2,
        description:
            '"stretch goals" to be worked on when you’ve implemented all the "Must Haves"',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    },
    {
        name: "nice to have",
        id: 3,
        description:
            '"stretch goals" to be worked on when you’ve implemented all the "Must Haves" and "Should Haves"',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    },
];

/* const dtoUpdateMock: UpdateFeatureDto = {
    teamMemberId: 1,
    description: "It is the best feature",
};

const dtoUpdateOrderAndCategoryMock: UpdateFeatureOrderAndCategoryDto = {
    order: 2,
    featureCategoryId: 2,
}; */

describe("FeaturesService", () => {
    let service: FeaturesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FeaturesService,
                {
                    provide: PrismaService,
                    useValue: prismaMock,
                },
                {
                    provide: GlobalService,
                    useValue: mockGlobalService,
                },
            ],
        }).compile();

        service = module.get<FeaturesService>(FeaturesService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("createFeature", () => {
        it("createFeature service should be defined", async () => {
            expect(service.createFeature).toBeDefined();
        });

        it("should create a new feature", async () => {
            prismaMock.projectFeature.findFirst.mockResolvedValue(null);
            prismaMock.voyageTeam.findFirst.mockResolvedValue(
                mockVoyageTeam as VoyageTeam,
            );
            prismaMock.featureCategory.findFirst.mockResolvedValue({
                id: 1,
            } as FeatureCategory);
            prismaMock.projectFeature.create.mockResolvedValue(mockFeature);
            mockGlobalService.getVoyageTeamMemberId.mockReturnValue(
                mockTeamMemberId,
            );

            const result = await service.createFeature(
                requestMock,
                mockTeamId,
                dtoCreateMock,
            );

            expect(result).toEqual(mockFeature);
            expect(prismaMock.projectFeature.create).toHaveBeenCalledWith({
                data: {
                    teamMemberId: mockTeamMemberId,
                    description: dtoCreateMock.description,
                    featureCategoryId: dtoCreateMock.featureCategoryId,
                    order: 1,
                },
            });
        });
    });
    describe("findFeatureCategories", () => {
        it("findFeatureCategories service should be defined", async () => {
            expect(service.findFeatureCategories).toBeDefined();
        });

        it("should return all feature categories", async () => {
            prismaMock.featureCategory.findMany.mockResolvedValue(
                mockFeatureCategory,
            );

            const result = await service.findFeatureCategories();

            expect(result).toBeArray;
            expect(result).toHaveLength(3);
            expect(result[0]).toEqual({
                name: expect.any(String),
                id: expect.any(Number),
                description: expect.any(String),
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date),
            });
            expect(prismaMock.featureCategory.findMany).toHaveBeenCalled();
        });
    });

    describe("findAllFeatures", () => {
        it("findAllFeatures service should be defined", async () => {
            expect(service.findAllFeatures).toBeDefined();
        });

        it("should return all features", async () => {
            prismaMock.projectFeature.findMany.mockResolvedValue(
                mockFeaturesArray,
            );
            prismaMock.voyageTeam.findFirst.mockResolvedValue(
                mockVoyageTeam as VoyageTeam,
            );

            const result = await service.findAllFeatures(
                mockTeamId,
                requestMock,
            );

            expect(result).toBeArray;
            expect(result).toHaveLength(2);
            expect(result[0]).toEqual({
                id: expect.any(Number),
                teamMemberId: expect.any(Number),
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date),
                featureCategoryId: expect.any(Number),
                order: expect.any(Number),
                description: expect.any(String),
                addedBy: {
                    member: {
                        firstName: expect.any(String),
                        lastName: expect.any(String),
                        id: expect.any(String),
                        avatar: expect.any(String),
                    },
                },
            });
            expect(prismaMock.projectFeature.findMany).toHaveBeenCalledWith({
                where: {
                    addedBy: {
                        voyageTeamId: mockTeamId,
                    },
                },
                select: {
                    id: true,
                    description: true,
                    order: true,
                    createdAt: true,
                    updatedAt: true,
                    teamMemberId: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    addedBy: {
                        select: {
                            member: {
                                select: {
                                    id: true,
                                    avatar: true,
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
                orderBy: [{ category: { id: "asc" } }, { order: "asc" }],
            });
        });
    });
    describe("findOneFeature", () => {
        it("findOneFeature service should be defined", async () => {
            expect(service.findOneFeature).toBeDefined();
        });

        it("should return a single feature", async () => {
            prismaMock.projectFeature.findFirst.mockResolvedValue(
                mockFeaturesArray[0],
            );
            prismaMock.projectFeature.findUnique.mockResolvedValue({
                teamMemberId: mockTeamMemberId,
            } as ProjectFeature);

            const result = await service.findOneFeature(
                mockFeaturesArray[0].id,
                requestMock,
            );

            expect(result).toEqual({
                id: expect.any(Number),
                teamMemberId: expect.any(Number),
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date),
                featureCategoryId: expect.any(Number),
                order: expect.any(Number),
                description: expect.any(String),
                addedBy: {
                    member: {
                        firstName: expect.any(String),
                        lastName: expect.any(String),
                        id: expect.any(String),
                        avatar: expect.any(String),
                    },
                },
            });
            expect(prismaMock.projectFeature.findFirst).toHaveBeenCalledWith({
                where: {
                    id: mockFeature.id,
                },
                select: {
                    id: true,
                    description: true,
                    order: true,
                    createdAt: true,
                    updatedAt: true,
                    teamMemberId: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    addedBy: {
                        select: {
                            member: {
                                select: {
                                    id: true,
                                    avatar: true,
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            });
            expect(prismaMock.projectFeature.findUnique).toHaveBeenCalledWith({
                where: {
                    id: mockFeature.id,
                },
                select: {
                    teamMemberId: true,
                },
            });
        });
    });
});
