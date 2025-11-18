declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PG_USER: string;
      PG_PWD: string;
      PG_HOST: string;
      PG_PORT: number;
      PG_DB: string;
    }
  }
}

export {}