import * as express from 'express';
import { log, constants } from './common';


// Setup express.
const app = express();


app.get('/', (req, res) => {
  res.send({
    time: new Date(),
  });
});



/**
 * Starts the server.
 */
export async function start(options: { port: number }) {
  const PORT = options.port;
  app.listen(PORT, () => {
    const env = constants.IS_DEV ? 'dev' : 'prod';
    log.info.gray(`\n${log.magenta('Running on')} ${log.cyan(PORT)} (${env})`);
  });
}


// Init.
start({ port: 8080 });
