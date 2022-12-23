// @ts-nocheck
import mongoose from 'mongoose';

//сохранение предыдущего подключения к mongodb
const connection = {};
// подключение к mongodb
async function connect() {
  if (connection.isConnected) {
    console.log('уже подключенный');
    return;
  }
  // очередь соединений
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    // если = 1, то мы подключены
    if (connection.isConnected === 1) {
      console.log('использовать предыдущее подключение');
      return;
    }
    // если !== 1, нужно отключиться
    await mongoose.disconnect();
  }
  // используем подключение к БД
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('новое соединение');
  connection.isConnected = db.connections[0].readyState;
}
// отключение от mongodb
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE.ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('не отключен');
    }
  }
}

// определить объект БД
const db = { connect, disconnect };
export default db;
