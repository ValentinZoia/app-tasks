import moongose from 'mongoose';
import dotenv from 'dotenv';

//Cargar variables de entorno
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();  // Carga las variables de .env si no está en producción
  } else {
    dotenv.config({ path: '.env.production' });  // Carga las variables de .env.production si está en producción
  }

dotenv.config();

//Obtener la URI  de MongoDB desde las variavles de entorno
const MONGO_URI = 'mongodb://localhost:27017/todo-app';

export const connectDB = async () => {
    try {

        await moongose.connect(MONGO_URI);
        console.log('MongoDB connected');

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);//Salir de la app si no se puede conectar
    }
}