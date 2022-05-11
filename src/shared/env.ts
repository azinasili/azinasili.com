export const enum Environment {
  Production = 'production',
  Development = 'development',
  Test = 'test',
}

export const isProduction = process.env.NODE_ENV === Environment.Production;
export const isDevelopment = process.env.NODE_ENV === Environment.Development;
export const isTest = process.env.NODE_ENV === Environment.Test;
