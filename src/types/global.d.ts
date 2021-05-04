export {};

declare global {
  namespace NodeJS {
    interface Global {
      __BASE_DIRECTORY: string;
    }
  }
}