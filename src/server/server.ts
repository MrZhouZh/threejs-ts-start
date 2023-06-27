import express from 'express'
import path from 'node:path'
import http from 'node:http'

const port = 3000

class App {
  private server: http.Server
  private port: number

  constructor(port: number) {
    this.port = port
    const app = express()
    app.use(express.static(path.join(__dirname, '../client')))

    this.server = new http.Server(app)
  }

  public start() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port: ${this.port}.`)
    })
  }
}

new App(port).start()
