class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

const errorHanlder = (err, _req, res) => {
  if(err instanceof AppError) {
    console.log(`ErrorCode: ${err.statusCode}, Message: ${err.message}`)
    res.sendStatus(err.statusCode)
  }
  else {
    console.log(err)
    res.sendStatus(500).json({message: 'Internal Server Error'})
  }
}

module.exports = { AppError, errorHanlder }
