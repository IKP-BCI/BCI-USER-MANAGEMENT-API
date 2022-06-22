export class TencentError extends Error {
  constructor(public code: string, description: string) {
    super(description);
  }
}
