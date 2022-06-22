export class RatioInvalidError extends Error {
  public readonly statusCode: number = 422;
  public readonly code: string = 'IMAGE_RATIO_INVALID';

  constructor(message?: string) {
    super(message);
  }
}
