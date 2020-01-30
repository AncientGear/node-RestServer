// ===================
// Puerto
// ===================

process.env.PORT = process.env.PORT || 3000;

// ===================
// Entorno
// ===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===================
// Vencimiento del Token
// ===================
// 60 seg
// 60 min

process.env.CADUCITY_TOKEN = '2h';

// ===================
// SEED de autentificación
// ===================

process.env.SEED = process.env.SEED || 'secret';

// ===================
// Base de datos
// ===================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost/cafe'    
} else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;