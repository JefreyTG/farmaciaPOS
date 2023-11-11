// src/components/Database.js
import { Low, SyncAdapter } from 'lowdb/lib';
import { FileSync } from 'lowdb/adapters/FileSync';

const adapter = new FileSync('./src/db.json');
const db = new Low(new SyncAdapter(adapter));
db.data = { products: [] }; // Puedes inicializar los datos aquí

export default db;
