export class TypeError extends Error {
  public readonly statusCode: number = 422;
  public readonly code: string = 'IMAGE_TYPE_NOT_SUPPORTED';

  constructor(message?: string) {
    super(message);
  }
}
