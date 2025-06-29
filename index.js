import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const URL_API = "https://newsapi.org/v2/";
const apiKey = ""; // <-- Place tour NEWS apiKey here

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", async (req,res) => {
    res.render("index.ejs");
});

app.post("/filter", async (req,res) => {
    const query = req.body.query;
    const pages = req.body.pages;
    const type = req.body.type;
    const place = req.body.place;
    const config = {
        params:{
            q: query,
            pageSize: pages,
            apiKey: apiKey, 
        }
    }
    if(type == "all"){
        const sort = req.body.sort;
        const date1 = req.body.date1;
        const date2 = req.body.date2;
        var endPoint = "everything";
        config.params.sortBy = sort;
        config.params.language = place;
        config.params.from = date1;
        config.params.to = date2;
    }else{
        const category = req.body.category;
        var endPoint = "top-headlines";
        config.params.country = place;
        config.params.category = category;
    }

    try{
        const response = await axios.get(URL_API + endPoint, config);
        const result = response.data;
        res.render("index.ejs", {news: result.articles});
    }catch(error){
        console.log(error.response.status);
        console.log(error.response.data);
        console.log(error.config.url); 
        res.render("index.ejs");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});