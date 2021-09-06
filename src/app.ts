import express, { Express } from 'express';
import logger from './helpers/logger';

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
      res.json({ message: 'Server running!🚀' });
    });
  }

  public listen() {
    return this.app.listen(this.port, () => {
      logger.info(`Server running on http://localhost:${this.port}🚀`);
    });
  }
}

export default App;
