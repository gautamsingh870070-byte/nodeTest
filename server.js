const app = require('./src/app');
//const db = require('./src/config/db');
const logger = require('./src/config/logger');


const PORT = 5000;

logger.info('Node.js application started');

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});