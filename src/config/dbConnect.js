import mongoose from "mongoose";

mongoose.connect('mongodb+srv://mwantony:centromaisfreedomundo28%2F03%2F2007@cluster0.zpbtjct.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection

export default db

