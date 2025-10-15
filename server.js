const express = require('express');
const cors = require('cors'); // Tambahkan ini
const app = express();
const PORT = 3001; // Gunakan port berbeda dari Tahap 1

// Middleware
app.use(cors()); // Middleware CORS
app.use(express.json()); // Middleware Body Parser untuk JSON

// Custom Middleware untuk Logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Home Page for API');
});

// ... (Kode sebelumnya)

// Panggil logika routing khusus
const bookRoutes = require('./routes/books'); 

// Pasang router ke path '/api/books'
app.use('/api/books', bookRoutes); 

// ... (Kode app.listen)

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});