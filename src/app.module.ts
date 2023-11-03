import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { IdeationsModule } from "./ideations/ideations.module";
import { TeamsModule } from "./teams/teams.module";
import { TechsModule } from "./techs/techs.module";
import { HealthCheckController } from "./HealthCheck/health-check.controller";
import { HealthCheckService } from "./HealthCheck/health-check.service";
import { UsersModule } from "./users/users.module";
import { SprintsModule } from "./sprints/sprints.module";
import { FormsModule } from "./forms/forms.module";
import { ResourcesModule } from "./resources/resources.module";
import { AuthModule } from "./auth/auth.module";
import { FeaturesModule } from "./features/features.module";


@Module({
    imports: [
        UsersModule,
        PrismaModule,
        IdeationsModule,
        TeamsModule,
        TechsModule,
        UsersModule,
        SprintsModule,
        FormsModule,
        ResourcesModule,
        AuthModule,
        FeaturesModule,
    ],
    controllers: [HealthCheckController],
    providers: [HealthCheckService],
})
export class AppModule {}
