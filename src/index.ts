import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as hpp from 'hpp';
import * as cors from 'cors';
import * as compress from 'compression'
import * as cookieParser from 'cookie-parser'

const PORT = 8080;
const HOST = '0.0.0.0';

//App
const app = express();

//middlewares
app.use(bodyParser.json())
  .use(morgan('dev'))
  .use(hpp())
  .use(compress())
  .use(cors({optionsSucessStatus:200}))
  .use(cookieParser())
  .use(helmet())



const rootHandler = (req, res) => {
  res.send({status:'welcome'});
}

app.get('/', rootHandler)
app.get('/test', rootHandler)


app.listen(PORT, HOST);
console.log(`server listening on ${HOST}:${PORT}`)