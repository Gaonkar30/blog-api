const express =require('express');
const articleRoutes=require('./routes/articleRoutes');
require('./config/db.config');
const app=express();
app.use(express.json());
app.use('/api',articleRoutes);
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
});
