# SL/VF Technical Take Home
Demo Site: https://swing-left.vercel.app

![Site Preview](https://repository-images.githubusercontent.com/1097743852/e961394b-d913-4f6c-af36-9dff07c69379)

## Technical Details
Database creation and cleanup scripts still live in the `scripts` directory, but has been converted to ESM and pulls their config from a new `.env` file in the root of the project.

Data is ingested with DBT. The sample CSV is in `data/swingleft/seeds` with another seed file to help with state name normalization. There is a single model in `data/swingleft/models` that hammers both files into shape and loads it into Postgres.

The fontend still uses Next.js. No frontend component framework was used. Test POC is written with Playwright. I've included additional stylelint and eslint configs.

Node's Postgres config lives in the `.env` file. DBT's Postgres config is located in `data/swingleft/profile.yml`. In an ideal world we would have a single source of truth.

A demo version of the site is deployed to Vercel at https://swing-left.vercel.app. To support this without having to spin up a production API server and Postgres database, the API response is mocked in `src/app/assets/data/mock.ts` and used as a fallback if data can not be loaded from the API. In dev mode, the site will use the API and local Postgres database. If run in prod with `yarn build && yarn start` it will use this mock data as a fully static website.

## Running the Project
1. Pull down the repo.
2. Install DBT `pip install dbt-core dbt-postgres`
3. Run PostgreSQL Locally (e.g. with https://postgresapp.com)
4. Ensure PostgreSQL has a user `postgres` with password `test`.
5. Install dependencies with `npm install` or `yarn`
6. Bootstrap the database by running `npm run bootstrap` or `yarn bootstrap`
7. Run tests with `npm run test` or `yarn test`
8. Run the project with `npm run dev` or `yarn dev`
9. Visit the site at http://localhost:3000
10. Clean up your postgres DB with `npm run cleanup` or `yarn cleanup`