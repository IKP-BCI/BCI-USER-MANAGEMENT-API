/* eslint-disable @typescript-eslint/no-inferrable-types */
export class NotExistsError extends Error {
  public statusCode: number = 404;
}
