const express = require('express');
const cors = require('cors'); // Optional but recommended for React Native
const app = express();
const port = 5000;

const db = require('./models');
const productRoutes = require('./routes/productRoutes');

// ✅ Middleware
app.use(cors());          // Enable CORS for your React Native app
app.use(express.json());  // Parse JSON request bodies

// ✅ Routes
app.use('/api/products', productRoutes);

// ✅ Test endpoint
app.get('/', (req, res) => res.send('Inventory API Running...'));

// ✅ Sync DB & start server
db.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
