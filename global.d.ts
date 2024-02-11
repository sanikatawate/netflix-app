import { PrismaClient } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
}

declare global {
    namespace globalThis {
      var __GOOGLE_TRANSLATION_CONFIG__: {
        languages: LanguageDescriptor[];
        defaultLanguage: string;
      };
    }
  }

declare global{
  interface Window{
    google?: any,
    googleTranslateElementInit? : any;
  }
}