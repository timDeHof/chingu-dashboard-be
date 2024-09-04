import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { AtStrategy } from "./strategies/at.strategy";
import { RtStrategy } from "./strategies/rt.strategy";
import { DiscordStrategy } from "./strategies/discord.strategy";
import { DiscordAuthService } from "./discord-auth.service";
import { EmailService } from "src/utils/emails/sendEmail";
import { MailConfigModule } from "src/config/mail/mailConfig.module";
import { AppConfigModule } from "src/config/app/appConfig.module";
import { AuthConfigModule } from "src/config/auth/authConfig.module";
import { OAuthConfigModule } from "src/config/0auth/oauthConfig.module";
import { AuthConfig } from "src/config/auth/auth.interface";

@Module({
    imports: [
        AppConfigModule,
        AuthConfigModule,
        OAuthConfigModule,
        UsersModule,
        PassportModule,
        MailConfigModule,
        JwtModule.registerAsync({
            imports: [AuthConfigModule],
            useFactory: async (authconfig: AuthConfig) => ({
                secret: authconfig.secrets.JWT_SECRET,
                signOptions: { expiresIn: "1d" },
            }),
            inject: ["Auth-Config"],
        }),
    ],
    providers: [
        EmailService,
        AuthService,
        LocalStrategy,
        AtStrategy,
        RtStrategy,
        DiscordStrategy,
        {
            provide: "DISCORD_OAUTH",
            useClass: DiscordAuthService,
        },
    ],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
