import express from 'express';
import userRoutes from './routes/users';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggeruiexpress from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

app.use('/docs',swaggeruiexpress.serve, swaggeruiexpress.setup(specs));
export default app

 