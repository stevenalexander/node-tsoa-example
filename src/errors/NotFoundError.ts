class NotFoundError extends Error {
  status: number

  constructor() {
      super('Not found')
      this.status = 404
  }
}
