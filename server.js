const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize, syncDatabase } = require('./config/database');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Importing routes
const messageRoutes = require('./routes/messageRoutes');
const logEntryRoutes = require('./routes/logEntryRoutes');
const receivingUserRoutes = require('./routes/receivingUserRoutes');
const userDataRoutes = require('./routes/userDataRoutes');
const sourceInfoRoutes = require('./routes/sourceInfoRoutes');
const errorRoutes = require('./routes/errorRoutes');
const metricRoutes = require('./routes/metricsRoutes');
const metricValueRoutes = require('./routes/metricValueRoutes');

// Using routes
app.use('/api/messages', messageRoutes);
app.use('/api/logentries', logEntryRoutes);
app.use('/api/receivingusers', receivingUserRoutes);
app.use('/api/userdata', userDataRoutes);
app.use('/api/sourceinfo', sourceInfoRoutes);
app.use('/api/errors', errorRoutes);
app.use('/api/metrics', metricRoutes);
app.use('/api/metricvalues', metricValueRoutes);

app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
  await syncDatabase(); // Sync the database before starting the server
});
