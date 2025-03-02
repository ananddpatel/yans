import { app } from './server';
import dotenv from 'dotenv';
import { logger } from './logger';

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => logger.info(`Example app listening on PORT ${PORT}!`));
