export class TooLargeDimensionError extends Error {
  public readonly statusCode: number = 422;
  public readonly code: string = 'IMAGE_DIMENSION_LARGER_THAN_SUPPORTED';

  constructor(message?: string) {
    super(message);
  }
}
