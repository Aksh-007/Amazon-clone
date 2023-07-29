import app from './app.js';
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 8080

// App listening on 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/v1 in  ${process.env.DEV_MODE} mode`);
});

 