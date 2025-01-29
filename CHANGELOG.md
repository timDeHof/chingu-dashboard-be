# Changelog

> [!IMPORTANT]
> All notable changes to this project will be documented in this file.

> [!NOTE]
> The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), <br/>
> and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). <br/>
> Another example [here](https://co-pilot.dev/changelog) <br/>

> [!TIP]
> MAJOR version when you make incompatible API changes <br/>
> MINOR version when you add functionality in a backward compatible manner <br/>
> PATCH version when you make backward compatible bug fixes <br/>

## [1.2.0-alpha](https://github.com/timDeHof/chingu-dashboard-be/compare/v1.1.0-alpha...v1.2.0-alpha) (2025-01-29)


### Features

* **app.module.ts:** add AppConfigModule to the application module imports ([7ab06c6](https://github.com/timDeHof/chingu-dashboard-be/commit/7ab06c6c0955892b53f9ffb2c329577e1fc82bd5))
* **app.module.ts:** add AuthConfigService to the application module imports ([a460330](https://github.com/timDeHof/chingu-dashboard-be/commit/a4603305735c4953ee77fc4a792874ab1b2fed5a))
* **app.module.ts:** add DbConfigModule to imports for database configuration ([3819275](https://github.com/timDeHof/chingu-dashboard-be/commit/3819275140f4da70ee1cbe45cbc49b974c49b94b))
* **app.module.ts:** add MailConfigModule to the application module imports ([506d0b9](https://github.com/timDeHof/chingu-dashboard-be/commit/506d0b974a768c866d90b49a6946d96748fa3a9f))
* **auth.module.ts:** add EmailService and configuration modules to the Auth module ([1dd2366](https://github.com/timDeHof/chingu-dashboard-be/commit/1dd2366a537b7b67e292a6567fb306b2b89d83d0))
* **auth.module.ts:** add OAuthConfigModule to the authentication module imports ([595804f](https://github.com/timDeHof/chingu-dashboard-be/commit/595804f38e25e9b263e5bbd116bc0aefb7bfb008))
* **auth.ts:** import AuthConfigService to manage authentication configuration ([514bf88](https://github.com/timDeHof/chingu-dashboard-be/commit/514bf88d8188050333875704b5561784aaaa6a89))
* **authConfig.service.ts:** add AuthConfigService to manage environment variables for authentication configuration ([38a475a](https://github.com/timDeHof/chingu-dashboard-be/commit/38a475a5384cf2b7199504fb50d79b3ffc6f6baa))
* **auth:** enhance authentication configuration with structured types and error handling ([71332a7](https://github.com/timDeHof/chingu-dashboard-be/commit/71332a70f7acad9a8d1a495a7da45cb70870b7f4))
* **auth:** implement authentication configuration module and service ([eec130a](https://github.com/timDeHof/chingu-dashboard-be/commit/eec130ac087a5471a4ea24432c7d5b606c41395f))
* **auth:** implement password hashing and comparison functions with configuration support ([491d7ec](https://github.com/timDeHof/chingu-dashboard-be/commit/491d7ec2a0e8e6515386140e43ab29316ae43960))
* **auth:** integrate AppConfigService for frontend URL management and update tests accordingly ([4d59ae5](https://github.com/timDeHof/chingu-dashboard-be/commit/4d59ae5f5d1f6758b5913a918bb1ba0f2e4d1447))
* **auth:** integrate AuthConfigModule and refactor secret management for improved configuration handling ([820d96d](https://github.com/timDeHof/chingu-dashboard-be/commit/820d96d3a07712f9056f1163f02b935adbef0375))
* **auth:** integrate MailConfigService for dynamic frontend URL and update JWT secret handling ([bf0ce10](https://github.com/timDeHof/chingu-dashboard-be/commit/bf0ce10e9769e5e962e840002012e21a88cf3ba9))
* **changelog:** add entry for types and validation of environment variables ([67196ea](https://github.com/timDeHof/chingu-dashboard-be/commit/67196ead5986ab6af1e072118ab44921e6ef3104))
* **config:** add application configuration module and service for environment variables ([c98bf0a](https://github.com/timDeHof/chingu-dashboard-be/commit/c98bf0adf4ec287a9ca7b80094fc663ca0c3cb25))
* **controllers:** implement pagination for fetching solo projects with offset and page size ([7c04a4b](https://github.com/timDeHof/chingu-dashboard-be/commit/7c04a4bac3fb5382234f23070e81d5c2323df2b1))
* **database:** add database configuration module and service for environment variable management ([69a28d2](https://github.com/timDeHof/chingu-dashboard-be/commit/69a28d29f8ae674719d014a99525cfefd595d363))
* **development.module.ts:** add AppConfigModule to DevelopmentModule imports ([f7355fd](https://github.com/timDeHof/chingu-dashboard-be/commit/f7355fd3d2659ccaacabdc2be076207184a5fb24))
* **global/global.service.ts:** add support for retrieving discord and github profile information from user's OAuth profiles ([574d1ba](https://github.com/timDeHof/chingu-dashboard-be/commit/574d1baffb7a554c3dac35e7c30884209e47b530))
* **global/selects/users.select.ts:** add providerUserId field to user OAuth profile select ([574d1ba](https://github.com/timDeHof/chingu-dashboard-be/commit/574d1baffb7a554c3dac35e7c30884209e47b530))
* **global/types/users.types.ts:** add providerUserId field to UserWithProfile type ([574d1ba](https://github.com/timDeHof/chingu-dashboard-be/commit/574d1baffb7a554c3dac35e7c30884209e47b530))
* **jest-e2e.json:** add Prisma directory to moduleNameMapper for better test coverage ([b0d39e5](https://github.com/timDeHof/chingu-dashboard-be/commit/b0d39e5ec349f2d9ce0e406bfc0bbf8fe7e7e7f8))
* **logging:** add morgan middleware for request logging with custom logger ([e612829](https://github.com/timDeHof/chingu-dashboard-be/commit/e6128299bc3f4108837b18370bcf8ef9347d24f2))
* **mail.config.ts:** add frontendUrl to mail configuration for better integration with frontend services ([a769e4b](https://github.com/timDeHof/chingu-dashboard-be/commit/a769e4b7c08ae4b0378156961f28bfb44f5940cf))
* **mail:** add Mail configuration module and service for Mailjet API integration ([a20c188](https://github.com/timDeHof/chingu-dashboard-be/commit/a20c18818240a0b7f19ad3fe04fab3802c49b073))
* **main.ts:** integrate AppConfigService and MailConfigService for better configuration management ([41688b9](https://github.com/timDeHof/chingu-dashboard-be/commit/41688b9c72cc452070006247cf9ee2e1ec5d661d))
* **mock-data.ts:** add mock data for testing sprints service ([7d52c4c](https://github.com/timDeHof/chingu-dashboard-be/commit/7d52c4cf9ce5c80c816aa8f4030ae53dd7de4368))
* **mock-data.ts:** move mock-data.ts from sprints to global/mocks directory ([7e3a990](https://github.com/timDeHof/chingu-dashboard-be/commit/7e3a99004447c974a6f67f4eb851bc9c6b416f42))
* **oauth:** implement OAuth configuration module with validation schema ([db140a8](https://github.com/timDeHof/chingu-dashboard-be/commit/db140a8a0303d9e56c7aca187b1736c2bc3305f9))
* **OAuth:** rename the  folder to ([0369d1c](https://github.com/timDeHof/chingu-dashboard-be/commit/0369d1c0226ba97dec2a09ac7ccc2a349cac734c))
* **package.json:** add @types/node-mailjet for TypeScript support of node-mailjet ([4e46624](https://github.com/timDeHof/chingu-dashboard-be/commit/4e46624c4f17f30f0d00d43f1cf99c80114fb9c6))
* **prisma/seed/forms/solo-project.ts:** add new question for "Tier" input type to solo project form ([ff6ed91](https://github.com/timDeHof/chingu-dashboard-be/commit/ff6ed91f7aaa927e005371c1a0f8661b8979b4d4))
* **prisma/seed/solo-project.ts:** add new solo project with option choices for "Tier" question ([ff6ed91](https://github.com/timDeHof/chingu-dashboard-be/commit/ff6ed91f7aaa927e005371c1a0f8661b8979b4d4))
* **prisma/seed/voyage-teams.ts:** add support for adding tech stack categories to voyage teams ([c3e1365](https://github.com/timDeHof/chingu-dashboard-be/commit/c3e13658b5174966025c71e186e374c0dfa692e0))
* **prisma:** add authorId to solo project seeds for better data integrity ([5a596cd](https://github.com/timDeHof/chingu-dashboard-be/commit/5a596cd56e60ff41e56b1e0bb58ccf79959017d0))
* **prisma:** add solo project seeding logic to populate sample data for testing ([7c04a4b](https://github.com/timDeHof/chingu-dashboard-be/commit/7c04a4bac3fb5382234f23070e81d5c2323df2b1))
* **prisma:** create Comment model and update SoloProject to use Comment model for comments ([ba64698](https://github.com/timDeHof/chingu-dashboard-be/commit/ba6469853192404cbca9153d6ef4b6a6d08970fd))
* **prisma:** enhance SoloProjectComment model to support parent-child relationships for comments ([739f956](https://github.com/timDeHof/chingu-dashboard-be/commit/739f95611adee0555adc5dfa21d80ee4a6fd2c89))
* **prisma:** integrate ConfigModule for dynamic database configuration ([34f5ffa](https://github.com/timDeHof/chingu-dashboard-be/commit/34f5ffa2c467b9e1fbe54820d6303df3e4cb9c56))
* **seed:** add new comments to solo projects for improved data seeding in the database ([9baab30](https://github.com/timDeHof/chingu-dashboard-be/commit/9baab305e072978dac48cb68479869aeea66d6e9))
* **solo-project.types.ts:** extend SoloProjectWithPayload type to include responseGroup and its responses ([6f0becb](https://github.com/timDeHof/chingu-dashboard-be/commit/6f0becb843acdafab9506e323719eff3586b439b))
* **solo-projects.controller.ts:** add Swagger documentation for the getAllSoloProjects endpoint, including error responses ([0586689](https://github.com/timDeHof/chingu-dashboard-be/commit/05866892060d462958f3b74570168dd433b1c9b9))
* **solo-projects.response.ts:** add parentCommentId property to Comment class to support nested comments ([3e6da0a](https://github.com/timDeHof/chingu-dashboard-be/commit/3e6da0ad373c85d9861c9e71942ca66307127149))
* **solo-projects.response.ts:** add SoloProjectResponseMeta class to encapsulate pagination metadata ([3e6da0a](https://github.com/timDeHof/chingu-dashboard-be/commit/3e6da0ad373c85d9861c9e71942ca66307127149))
* **solo-projects.response.ts:** update SoloProjectsResponse class to include data and meta properties for a more structured response ([3e6da0a](https://github.com/timDeHof/chingu-dashboard-be/commit/3e6da0ad373c85d9861c9e71942ca66307127149))
* **solo-projects.service.ts:** add responseGroup and its responses to the formatted solo project data ([6f0becb](https://github.com/timDeHof/chingu-dashboard-be/commit/6f0becb843acdafab9506e323719eff3586b439b))
* **solo-projects.service.ts:** add UserWithProfile and SoloProjectWithPayload types to enhance type safety and data handling ([e5ecd4e](https://github.com/timDeHof/chingu-dashboard-be/commit/e5ecd4eaab938826c166f17ad6b824823a7da776))
* **solo-projects/solo-projects.controller.ts:** add ApiResponse for getAllSoloProjects endpoint to document the response schema ([574d1ba](https://github.com/timDeHof/chingu-dashboard-be/commit/574d1baffb7a554c3dac35e7c30884209e47b530))
* **solo-projects/solo-projects.response.ts:** create a response DTO to document the structure of the solo projects response ([574d1ba](https://github.com/timDeHof/chingu-dashboard-be/commit/574d1baffb7a554c3dac35e7c30884209e47b530))
* **sprints.controller.spec.ts:** extended test coverage for SprintsController ([a350caa](https://github.com/timDeHof/chingu-dashboard-be/commit/a350caad8cb14556bc365b7810be21f3a8f69412))
* **sprints.service.spec.ts:** import Agenda from Prisma client ([619b6ae](https://github.com/timDeHof/chingu-dashboard-be/commit/619b6ae6812584d1a4a54267a2c733edbd1d7bf8))
* **sprints.service.spec:** created unit tests for the sprint's service methods ([37bc4b5](https://github.com/timDeHof/chingu-dashboard-be/commit/37bc4b5ca5cd55a3092e24d755e90e7d68bf4365))
* **src/global/global.service.ts:** add new formatResponses function to transform response data into a more readable format ([ff6ed91](https://github.com/timDeHof/chingu-dashboard-be/commit/ff6ed91f7aaa927e005371c1a0f8661b8979b4d4))
* **src/solo-projects/solo-projects.service.ts:** update formatSoloProject function to use the new formatResponses function and include the input type information for each question ([ff6ed91](https://github.com/timDeHof/chingu-dashboard-be/commit/ff6ed91f7aaa927e005371c1a0f8661b8979b4d4))
* **tests:** extend Jest with additional matchers for better testing ([ea49075](https://github.com/timDeHof/chingu-dashboard-be/commit/ea49075481a5f8a48115005908d74407be028ab8))
* **tsconfig:** add path mapping and include additional directories for TypeScript compilation ([47790b0](https://github.com/timDeHof/chingu-dashboard-be/commit/47790b0f624dcb4b6837765aa3f014780bb90b5f))


### Bug Fixes

* **auth.module.ts:** remove signOptions from JWT configuration to simplify auth setup ([4e9782a](https://github.com/timDeHof/chingu-dashboard-be/commit/4e9782accf065e1e8f6510c5c21d1658e3ec4887))
* **auth.module.ts:** update import path for EmailService to use relative path ([1e56b32](https://github.com/timDeHof/chingu-dashboard-be/commit/1e56b323e55f4ab1a1ca387f726b994a9dcedce1))
* **auth:** correct import paths in auth.controller.spec.ts and auth.service.spec.ts to ensure proper module resolution ([e9d7189](https://github.com/timDeHof/chingu-dashboard-be/commit/e9d71893a4b78c146b05bb7a5f576f6ed235d0f6))
* **auth:** inject AuthConfigService to retrieve JWT secrets for improved security ([e797e4e](https://github.com/timDeHof/chingu-dashboard-be/commit/e797e4ea8f2e26645125bdbbef36ea3f116849ee))
* **auth:** update returnTokensOnLoginSuccess to use the new setCookie method for setting tokens in response cookies ([598de2a](https://github.com/timDeHof/chingu-dashboard-be/commit/598de2a8112ce453580d138105b4f78c95e0e196))
* **config:** remove default port value in app configuration to enforce explicit port setting ([dfef892](https://github.com/timDeHof/chingu-dashboard-be/commit/dfef892add7223d901db37201eab606a9f48751e))
* **development.service.ts:** replace direct process.env.NODE_ENV check with appConfigService for better abstraction ([0272f9e](https://github.com/timDeHof/chingu-dashboard-be/commit/0272f9e5236911b0d2a691a565e0bbeea2a4f6f8))
* **development.service.ts:** update import path for AppConfigService to correct relative path ([d7c2582](https://github.com/timDeHof/chingu-dashboard-be/commit/d7c258252e89d008136e34b5a71d5502d2726c36))
* **discord.strategy.ts:** correct import path for OAuthConfig interface to match directory structure ([b0fa0a5](https://github.com/timDeHof/chingu-dashboard-be/commit/b0fa0a5802cf496b35259cefd9463e45f4784c04))
* **eslint.config.mjs:** correct import and plugin names, adjust tsconfig.json path ([feadabd](https://github.com/timDeHof/chingu-dashboard-be/commit/feadabd38759c3fd09f20ae2732401bdad812f3f))
* **global.service.ts:** change InternalServerErrorException to BadRequestException for invalid sort field ([0586689](https://github.com/timDeHof/chingu-dashboard-be/commit/05866892060d462958f3b74570168dd433b1c9b9))
* **main.ts:** update CORS origin configuration to use regex for localhost to allow any port ([d83a097](https://github.com/timDeHof/chingu-dashboard-be/commit/d83a0970fbeb03efa121986e382189d01a722198))
* **main.ts:** update CORS origin to allow any port on localhost for development ([2625654](https://github.com/timDeHof/chingu-dashboard-be/commit/2625654a8949bbc1b17d3cebc8d525b767571587))
* **package.json:** downgrade several packages to ensure compatibility ([cf9e090](https://github.com/timDeHof/chingu-dashboard-be/commit/cf9e0900874274aad6a3f7a60e3e1ccef41e81e2))
* **package.json:** update prisma seed script to include tsconfig-paths/register ([1fd300c](https://github.com/timDeHof/chingu-dashboard-be/commit/1fd300c68df44234fb4052f9dd0a853df6245744))
* **prisma/seed/responses/helper.ts:** remove unnecessary console.log statement ([ff6ed91](https://github.com/timDeHof/chingu-dashboard-be/commit/ff6ed91f7aaa927e005371c1a0f8661b8979b4d4))
* **prisma/seed:** update seed data to reflect new comment structure and add additional solo project entry ([739f956](https://github.com/timDeHof/chingu-dashboard-be/commit/739f95611adee0555adc5dfa21d80ee4a6fd2c89))
* **rt.strategy.ts:** inject AuthConfigService to retrieve JWT secrets for refresh token strategy ([68f468b](https://github.com/timDeHof/chingu-dashboard-be/commit/68f468bd2cb6bd8f3988ff88d9d0ea2e93ced9f6))
* **seed/users.ts:** update import path for hashPassword function to reflect new directory structure ([f4c0cee](https://github.com/timDeHof/chingu-dashboard-be/commit/f4c0ceed54cb45041ba95de7a8b01c0bff57270e))
* **tasks.service.ts:** correct import path for PrismaService ([c39b51b](https://github.com/timDeHof/chingu-dashboard-be/commit/c39b51b09b07d13cd463a1afab9367422d1f2abe))
* **tests:** correct usage of jest-extended matchers in various test files ([2361bb0](https://github.com/timDeHof/chingu-dashboard-be/commit/2361bb07973f0cd6bb4da3ec3e040ef3917560b5))
* **tests:** corrected 'toBeArray' and 'toBeObject' to be called as functions instead as a property access. ([249c8dc](https://github.com/timDeHof/chingu-dashboard-be/commit/249c8dc51ddd9e4aeb51b98178b551fd58e3835a))
* **users.ts:** update import path for hashPassword function to reflect new directory structure ([9468a64](https://github.com/timDeHof/chingu-dashboard-be/commit/9468a6482254514019039244d549237781958a7f))
* **voyage.ts:** correct the startDate format by changing the day from 064 to 06 to ensure valid date parsing ([03d6b5b](https://github.com/timDeHof/chingu-dashboard-be/commit/03d6b5b2b8e5f4f72e86fe15f006036f7b02f8a9))
* **voyage.ts:** update date values for solo project deadline, certificate issue date, and showcase publish date to reflect accurate timelines ([f6986aa](https://github.com/timDeHof/chingu-dashboard-be/commit/f6986aa8c5d458d017f0e72c5742ed3e5c7141c9))

## [Unreleased]
- Updated readme for installation part ([#225])(https://github.com/chingu-x/chingu-dashboard-be/pull/225)
- Updated nestjs packages to latest version ([#233])(https://github.com/chingu-x/chingu-dashboard-be/pull/233)
- Refactoring of email service + unit tests ([#232](https://github.com/chingu-x/chingu-dashboard-be/pull/232))
- Added version release link to Swagger docs ([#218](https://github.com/chingu-x/chingu-dashboard-be/pull/231))
- Fixed POST voyages/teams/{teamId}/techs bug , verify that categoryId is owned by correct team ([#229](https://github.com/chingu-x/chingu-dashboard-be/pull/229))
### Added

### Changed

### Fixed


- fixed POST voyages/teams/{teamId}/techs bug , verify that categoryId is owned by correct team ([#229](https://github.com/chingu-x/chingu-dashboard-be/pull/229))
### Removed

## [v1.1.0-alpha]
- Refactoring of email service + unit tests ([#232](https://github.com/chingu-x/chingu-dashboard-be/pull/232))


### Added

### Changed

### Fixed

### Removed

## [v1.1.0-alpha]

### Added

- Added same site property to the clear cookies function ([#218](https://github.com/chingu-x/chingu-dashboard-be/pull/218))
- Added routes for teams to create own tech stack categories([#208](https://github.com/chingu-x/chingu-dashboard-be/pull/208))
- Added unit tests for Features controller and services ([#220](https://github.com/chingu-x/chingu-dashboard-be/pull/220))
- Added GET endpoint for solo project ([#223](https://github.com/chingu-x/chingu-dashboard-be/pull/223))
- Added units test for sprints ([#224](https://github.com/chingu-x/chingu-dashboard-be/pull/224))

### Changed

- Updated cors origin list ([#218](https://github.com/chingu-x/chingu-dashboard-be/pull/218))
- refactored unit tests for the ideations controller and services([#219](https://github.com/chingu-x/chingu-dashboard-be/pull/219))
- revised tech selections route to update only one tech per request([#221](https://github.com/chingu-x/chingu-dashboard-be/pull/221))
- Updated readme for installation part ([#225])(https://github.com/chingu-x/chingu-dashboard-be/pull/225)

### Fixed

### Removed

## [v1.0.2-alpha]

### Added

- Add units tests for the forms controller and services([#204](https://github.com/chingu-x/chingu-dashboard-be/pull/204))
- Add same site property to cookie ([#212](https://github.com/chingu-x/chingu-dashboard-be/pull/212))
- Add same site property to cookie in refresh endpoint ([#214](https://github.com/chingu-x/chingu-dashboard-be/pull/214))
- Add new comment model ([#213](https://github.com/chingu-x/chingu-dashboard-be/pull/213))

### Changed

- Update PostgreSQL image to timescale/timescaledb-ha:pg16 to match railway postgres image ([#210](https://github.com/chingu-x/chingu-dashboard-be/pull/210))
- refactored e2e tests to use absolute import paths ([#207](https://github.com/chingu-x/chingu-dashboard-be/pull/207))
- Updated seed data of user voyage roles and added new users([#206](https://github.com/chingu-x/chingu-dashboard-be/pull/206))
- Refactored e2e tests to use absolute import paths ([#207](https://github.com/chingu-x/chingu-dashboard-be/pull/207))
- Update solo project model ([#213](https://github.com/chingu-x/chingu-dashboard-be/pull/213))
- Update readme to include more instructions for using the test database ([#213](https://github.com/chingu-x/chingu-dashboard-be/pull/213))
- refactored unit tests to use absolute import paths ([#215](https://github.com/chingu-x/chingu-dashboard-be/pull/215))

### Fixed

- Fix cors localhost address ([#205](https://github.com/chingu-x/chingu-dashboard-be/pull/205))
- Fix voyages/sprints/teams/{teamId} returning wrong meetingIds ([#209](https://github.com/chingu-x/chingu-dashboard-be/pull/209))
- Fix one of the regex in cors origin list ([#211](https://github.com/chingu-x/chingu-dashboard-be/pull/211))

### Removed

## [v1.0.1-alpha]

### Added

- Add units tests for the teams controller & services([#189](https://github.com/chingu-x/chingu-dashboard-be/pull/189))
- Add discord oauth and e2e test ([#194](https://github.com/chingu-x/chingu-dashboard-be/pull/194))
- Add morgan middleware for request logging with custom logger ([#200](https://github.com/chingu-x/chingu-dashboard-be/pull/200))
- Add CASL permissions for Team Sprint endpoint ([#193](https://github.com/chingu-x/chingu-dashboard-be/pull/193))
- Add units tests for the teams resource controller & services([#201](https://github.com/chingu-x/chingu-dashboard-be/pull/201))
- Add github workflow for PR reminders ([#202](https://github.com/chingu-x/chingu-dashboard-be/pull/202))

### Changed

- updated changelog ([#195](https://github.com/chingu-x/chingu-dashboard-be/pull/195))
- Update accepted localhost port and docker compose file for a custom network setup ([#199](https://github.com/chingu-x/chingu-dashboard-be/pull/199))

### Fixed

- Fix seed data for alpha test (check in form question changes, gravatar) ([#190](https://github.com/chingu-x/chingu-dashboard-be/pull/190))
- Fix voyageNumber generation from sprintId for check-in submissions ([#186](https://github.com/chingu-x/chingu-dashboard-be/pull/186))
- revised 2 checkin questions for alpha test ([#192](https://github.com/chingu-x/chingu-dashboard-be/pull/192))
- Fix seed checkin form data for PO and SM , and voyage-role for team 6 ([#196](https://github.com/chingu-x/chingu-dashboard-be/pull/196))
- Bug add check for team id in place memberId ([#197](https://github.com/chingu-x/chingu-dashboard-be/pull/197))
- Update check-in form question ids validation (`checkQuestionsInFormById`) to accept an array of form titles ([#198](https://github.com/chingu-x/chingu-dashboard-be/pull/198))

### Removed

## [v1.0.0-alpha]

### Added

- Add @ApiResponse tags to resources ([#76](https://github.com/chingu-x/chingu-dashboard-be/pull/76))
- Add @ApiResponse tags to ideations and features ([#65](https://github.com/chingu-x/chingu-dashboard-be/pull/77))
- Add refresh token functionality and global guard to protect all routes ([#78](https://github.com/chingu-x/chingu-dashboard-be/pull/78))
- Add status to voyage table and return in /me endpoint ([#79](https://github.com/chingu-x/chingu-dashboard-be/pull/79))
- Add github action for STG ([#81](https://github.com/chingu-x/chingu-dashboard-be/pull/81))
- Add CHANGELOG.md ([#84](https://github.com/chingu-x/chingu-dashboard-be/pull/84))
- Add Role/Permission guard ([#97](https://github.com/chingu-x/chingu-dashboard-be/pull/97))
- Add e2e tests for auth controller ([#102](https://github.com/chingu-x/chingu-dashboard-be/pull/102))
- Add e2e tests for techs controller ([#103](https://github.com/chingu-x/chingu-dashboard-be/pull/103))
- Add check-in form database implementation and seed data ([#105](https://github.com/chingu-x/chingu-dashboard-be/pull/105))
- Add e2e tests for forms controller ([#107](https://github.com/chingu-x/chingu-dashboard-be/pull/107))
- Add e2e tests for resources controller ([#109](https://github.com/chingu-x/chingu-dashboard-be/pull/109))
- Add e2e tests for sprint controller ([#113](https://github.com/chingu-x/chingu-dashboard-be/pull/113))
- Add new endpoint to revoke refresh token ([#116](https://github.com/chingu-x/chingu-dashboard-be/pull/116))
- Add meetingId to sprints/teams endpoint (([#119](https://github.com/chingu-x/chingu-dashboard-be/pull/119)))
- Add new endpoint to select tech stack items ([#125](https://github.com/chingu-x/chingu-dashboard-be/pull/125))
- Add check in form response table, seed data, POST endpoint for submitting check in form ([#126](https://github.com/chingu-x/chingu-dashboard-be/pull/126))
- Add multiple device support ([#128](https://github.com/chingu-x/chingu-dashboard-be/pull/128))
- Add voyage project submission form seed ([#131](https://github.com/chingu-x/chingu-dashboard-be/pull/131))
- Add voyage project submission controller, service, e2e tests, responses seed ([#133](https://github.com/chingu-x/chingu-dashboard-be/pull/133))
- Add new endpoints to select/reset team project ideation ([#136](https://github.com/chingu-x/chingu-dashboard-be/pull/136))
- Add CASL ability for Access control ([#141](https://github.com/chingu-x/chingu-dashboard-be/pull/141))
- Add sprint checkin form submission status for a user ([#149](https://github.com/chingu-x/chingu-dashboard-be/pull/149))
- new command to run both e2e and unit test ([#148](https://github.com/chingu-x/chingu-dashboard-be/pull/148))
- allow edit and delete for tech stack item([#152](https://github.com/chingu-x/chingu-dashboard-be/pull/152))
- Add voyage project submission status to `/me` endpoint ([#158](https://github.com/chingu-x/chingu-dashboard-be/pull/158))
- Add e2e tests for teams controller ([#162](https://github.com/chingu-x/chingu-dashboard-be/pull/162))
- Add swagger access info, add forms authorization and e2e tests ([#160](https://github.com/chingu-x/chingu-dashboard-be/pull/160))
- Add voyages unit test, also had to update all files (seed, tests, services) to meet strict null rule due to prismaMock requirements ([#163](https://github.com/chingu-x/chingu-dashboard-be/pull/163))
- Add e2e tests for users controller ([#165](https://github.com/chingu-x/chingu-dashboard-be/pull/165))
- Add GET endpoint for check-in form responses ([#166](https://github.com/chingu-x/chingu-dashboard-be/pull/166))
- Add weekly sprint checkin forms for product owner and scrum master ([#167](https://github.com/chingu-x/chingu-dashboard-be/pull/167))
- Add e2e test for features controller ([#168](https://github.com/chingu-x/chingu-dashboard-be/pull/168))
- Add endpoint to reseed the database ([#170](https://github.com/chingu-x/chingu-dashboard-be/pull/170))
- Add new @unverified decorator to 4 routes, updated permission guard ([#171](https://github.com/chingu-x/chingu-dashboard-be/pull/171))
- Add CASL permissions for Tech endpoint ([#174](https://github.com/chingu-x/chingu-dashboard-be/pull/174))
- Add CASL permissions for Team Resource endpoint ([#177](https://github.com/chingu-x/chingu-dashboard-be/pull/177))
- Add units tests for the users controller & services([#179](https://github.com/chingu-x/chingu-dashboard-be/pull/178))
- Add CASL permissions for Team features endpoint ([#184](https://github.com/chingu-x/chingu-dashboard-be/pull/184))
- Add production seed for alpha test ([#185](https://github.com/chingu-x/chingu-dashboard-be/pull/185))
- Add types and validation to env variables ([#187](https://github.com/chingu-x/chingu-dashboard-be/pull/187))

### Changed

- Update docker compose and scripts in package.json to include a test database container and remove usage of .env.dev to avoid confusion ([#100](https://github.com/chingu-x/chingu-dashboard-be/pull/100))
- Restructure seed/-index.ts to work with e2e tests, and add --runInBand to e2e scripts[#101](https://github.com/chingu-x/chingu-dashboard-be/pull/101)
- Update changelog ([#104](https://github.com/chingu-x/chingu-dashboard-be/pull/104))
- Update test.yml to run e2e tests on pull requests to the main branch [#105](https://github.com/chingu-x/chingu-dashboard-be/pull/105)
- Update email templates to use domain in environment variables [#110](https://github.com/chingu-x/chingu-dashboard-be/pull/110)
- Update /forms /forms/id response to include subQuestions [#115](https://github.com/chingu-x/chingu-dashboard-be/pull/115)
- Add role and permission guard to some existing routes (features, forms, ideations, teams) [#112](https://github.com/chingu-x/chingu-dashboard-be/pull/112)
- Refactor voyages endpoint paths to follow API naming conversion [#123](https://github.com/chingu-x/chingu-dashboard-be/pull/123)
- Refactor resources PATCH and DELETE URI [#127](https://github.com/chingu-x/chingu-dashboard-be/pull/127)
- Modified response for GET voyages/teams/{teamId}/resources, adding user id value [#129](https://github.com/chingu-x/chingu-dashboard-be/pull/129)
- Modified response for POST /api/v1/voyages/teams/{teamId}/techs/{teamTechId} & DELETE /api/v1/voyages/teams/{teamId}/techs/{teamTechId}, refactor id as teamTechStackItemVoteId value [#138](https://github.com/chingu-x/chingu-dashboard-be/pull/138)
- updated meeting model schema to include optional description field [#135](https://github.com/chingu-x/chingu-dashboard-be/pull/135)
- Remove teamMeetings from response for getSprintDatesByTeamId [#139](https://github.com/chingu-x/chingu-dashboard-be/pull/139)
- Updated response for route GET sprints/meetings/{meetingId} to include updatedAt for agendas [#140](https://github.com/chingu-x/chingu-dashboard-be/pull/140)
- Updated response for route GET /sprints/teams/{teamId} to include voyage start and end dates [#147](https://github.com/chingu-x/chingu-dashboard-be/pull/147)
- Update test github actions workflow with timeout [#143](https://github.com/chingu-x/chingu-dashboard-be/pull/143)
- Refractor of all form title reference to use values from formTitle.ts [#145](https://github.com/chingu-x/chingu-dashboard-be/pull/145)
- Update/Add more form input types [#146](https://github.com/chingu-x/chingu-dashboard-be/pull/146)
- Update seed files (include a time for sprint end dates, add url input type) [#151](https://github.com/chingu-x/chingu-dashboard-be/pull/151)
- Update the deleteFeature method to use a DeleteFeatureResponse and return an object with a successful status and a message [#150](https://github.com/chingu-x/chingu-dashboard-be/pull/150)
- Update seed data to include voyage 49-51 [#152](https://github.com/chingu-x/chingu-dashboard-be/pull/152)
- Updated Sprints routes with 401 response when not logged in [#157](https://github.com/chingu-x/chingu-dashboard-be/pull/157)
- Updated DELETE ideation-vote service to also delete ideation when no votes remain [#161](https://github.com/chingu-x/chingu-dashboard-be/pull/161)
- Refactored the prisma models to be grouped by domain type [#172](https://github.com/chingu-x/chingu-dashboard-be/pull/172)
- Updated response for GET teams/:teamId/techs to include isSelected value for techs [#173](https://github.com/chingu-x/chingu-dashboard-be/pull/173)
- Refactor ideation endpoints to remove redundant teamId params [#175](https://github.com/chingu-x/chingu-dashboard-be/pull/175)
- Squashed migration files into one [#176](https://github.com/chingu-x/chingu-dashboard-be/pull/176)
- Update prisma schema to include oauth [#181](https://github.com/chingu-x/chingu-dashboard-be/pull/181)

### Fixed

- Fix failed tests in app and ideation due to the change from jwt token response to http cookies ([#98](https://github.com/chingu-x/chingu-dashboard-be/pull/98))
- Fix a bug in PATCH /meetings/{meetingId}/forms/{formId} where it's not accepting an array of responese (updated validation pipe, service, and tests) ([#121](https://github.com/chingu-x/chingu-dashboard-be/pull/121))
- Fix unit tests where mocked req doesn't match new CustomRequest type ([#122](https://github.com/chingu-x/chingu-dashboard-be/pull/122))
- Fix bug with reading roles after reseeding causes the db to not recognize the tokens stored by the user's browser ([#134](https://github.com/chingu-x/chingu-dashboard-be/pull/134))
- Fix form responses giving error and not inserting values when the boolean value is false ([#156](https://github.com/chingu-x/chingu-dashboard-be/pull/156))
- Fix a bug for check on voyageTeamMemberId ([#159](https://github.com/chingu-x/chingu-dashboard-be/pull/159))
- Fix users unit test failing due to a schema change ([#182](https://github.com/chingu-x/chingu-dashboard-be/pull/182))

### Removed

- Removed email from reset-password request body ([#118](https://github.com/chingu-x/chingu-dashboard-be/pull/118))
- Removed Roles and Permission guards and decorators([#141](https://github.com/chingu-x/chingu-dashboard-be/pull/141))
