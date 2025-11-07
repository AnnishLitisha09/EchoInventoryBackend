const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const db = require('./models');
const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Inventory API Running...'));

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
