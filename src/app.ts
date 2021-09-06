import express, { Express } from 'express';

const {
  APP_PORT,
} = process.env;

class App {
  private readonly app: Express;

  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = Number(APP_PORT) || 5000;

    this.setupHealthCheck();
  }

  private setupHealthCheck() {
    this.app.get('/', (req, res, next) => {
      res.send('Server running!🚀');
    });
  }

  public listen() {
    return this.app.listen(this.port, () => {
      // TODO - ADD LOGGER
      console.log(`Server running on http://localhost:${this.port}🚀`);
    });
  }
}

export default App;
