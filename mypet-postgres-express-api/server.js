const express = require('express');


const app = express();
const port = 5000;
const userRoutes = require("./src/user/userRoutes");
const vetRoutes = require("./src/vet/vetRoutes");
const petRoutes = require("./src/pet/petRoutes");
const clinicRoutes = require("./src/clinic/clinicRoutes");
const commentRoutes = require("./src/comment/commentRoutes");
const cityRoutes = require("./src/city/cityRoutes");
const districtRoutes = require("./src/district/districtRoutes");
const streetRoutes = require("./src/street/streetRoutes");
const productRoutes = require("./src/product/productRoutes");
const serviceRoutes = require("./src/service/serviceRoutes");
const campaignRoutes = require("./src/campaign/campaignRoutes");



app.use(express.json());

app.get("/", (req,res) => {
    res.send("");
});


app.use('/user', userRoutes);
app.use('/vet', vetRoutes);
app.use('/pet', petRoutes);
app.use('/clinic', clinicRoutes);
app.use('/comment', commentRoutes);
app.use('/city', cityRoutes);
app.use('/district', districtRoutes);
app.use('/street', streetRoutes);
app.use('/product', productRoutes);
app.use('/service', serviceRoutes);
app.use('/campaign', campaignRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
