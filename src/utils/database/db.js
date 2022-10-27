const { mongoose } = require("mongoose");

require("dotenv").config();
const DB_URL = process.env.DB_URL;

//condicional para comprobar que la url de la bd funcione
if (!DB_URL) throw new Error("No puedo conectarme a la base de datos :(");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL);

    const { name, host } = db.connection;
    console.log(
      `Estas conectado a la base de datos ${name} en el host ${host}`
    );
  } catch {
    console.log(`No puedo conectarme a la base de datos por culpa de ${error}`);
  }
};

module.exports = {
    connectDb,
    DB_URL
}
    

