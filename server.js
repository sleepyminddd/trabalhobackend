const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const sequelize = require('./src/config/database');
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/v1/user/:id', (req, res) => {

  res.json({
    id: req.params.id,
    firstname: 'user firstname',
    surname: 'user surname',
    email: 'user@mail.com',
  });
});

app.use(express.json());
app.use('/v1', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

  const categoryRoutes = require('./routes/categoryRoutes');
app.use('/v1/category', categoryRoutes);
