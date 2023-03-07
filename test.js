const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true})

var id = "63fa7c0b098a2c05b80c69b0"

BlogPost.findByIdAndDelete(id,{
    title:'updated title'
},(error,blogpost)=> {
    console.log(error,blogpost)
})

/*
<li class="nav-item">
    <a class="nav-link" href="/about">About</a></li>
<li class="nav-item">
    <a class="nav-link" href="/post">Sample Post</a></li>
<li class="nav-item">
    <a class="nav-link" href="/contact">Contact</a></li>


app.get('/about', (req, res)=> {
    res.render('about')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})
*/