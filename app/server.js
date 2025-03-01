import express from 'express' // Load express
import mongoose from 'mongoose' // Load mongoose
import bodyParser from 'body-parser' // Load bodyParser
import cors from 'cors' // Load cors
import logger from './log/logger' // Load logger
import config from 'config' // Load config (environment)
import router from './routes/web.router' // Load root router
import apiRouter from './routes/api.router' // Load api router
import cookieParser from 'cookie-parser';

logger.info('Starting: ' + config.app.name + '....');
logger.info('Connecting to MongoDB Instance: ' + config.db);

const db = mongoose.connection;
const port = process.env.PORT || config.app.port;

mongoose.connect(config.db, config.options);

db.on('connecting', function () {
  logger.info('connecting to MongoDB...')
});

db.on('error', function (error) {
  logger.error('Could not connect to MongoDB!');
  logger.error(error.message);
  mongoose.disconnect()
});

db.on('connected', function () {
  logger.info('MongoDB connected!')
});

db.once('open', function () {
  logger.info('MongoDB connection opened!')
});

db.on('reconnected', function () {
  logger.info('MongoDB reconnected!')
});

db.on('disconnected', function () {
  logger.info('MongoDB disconnected!')
});

// Create the app
// ============================================================================================
const app = express(db);

app.enable('trust proxy');

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Enable CORS on Express server instance
app.use(cors());

// Configure app routes
app.use('/api', apiRouter);
app.use('/', router);

// Start the app by listening on <port>
// ===========================================================================================
app.listen(port);

// Logging initialization
logger.info(config.app.name + ' listening on port: ' + port);

export default app
