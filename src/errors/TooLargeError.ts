export class TooLargeError extends Error {
  public readonly statusCode: number = 422;
  public readonly code: string = 'IMAGE_SIZE_LARGER_THAN_SUPPORTED';

  constructor(message?: string) {
    super(message);
  }
}
