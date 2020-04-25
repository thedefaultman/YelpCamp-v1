const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

//temp array for campground
var campgrounds = [
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=Pexels"},
    {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-4817872?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=chulmin1700"},
    {name: "Mountain Goat", image: "https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744176267cd2944ec7_960.jpg&user=Free-Photos"},
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=Pexels"},
    {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-4817872?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=chulmin1700"},
    {name: "Mountain Goat", image: "https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744176267cd2944ec7_960.jpg&user=Free-Photos"},
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=Pexels"},
    {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-4817872?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2c72d3914ec65a_960.jpg&user=chulmin1700"},
    {name: "Mountain Goat", image: "https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744176267cd2944ec7_960.jpg&user=Free-Photos"}
]

//landing page route
app.get("/", function (req, res) {  
    res.render("landing")
})

//campgrounds page route
app.get("/campgrounds", function (req, res) {  
    res.render("campgrounds", {campgrounds: campgrounds})
})

app.get("/campgrounds/new", function (req, res) {  
    res.render("new.ejs")
})


//post route
app.post("/campgrounds", function (req, res) {  
    //get data from form and add to camps array
    let name = req.body.name
    let image = req.body.image
    let newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    //redirect to camps page
    res.redirect("/campgrounds")

})


app.listen(3000, function () {  
    console.log("YELPCAMP SERVER HAS STARTED");
})