const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true})

const app = new express()
const ejs = require('ejs')
const { resourceUsage } = require('process')

const fileUpload = require('express-fileupload')
const validateMiddleWare = require('./middleware/validationMiddleware')
const expressSession = require('express-session')


app.set('view engine', 'ejs')

// use the middleware to parse json bodies 
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store',validateMiddleWare)
app.use(expressSession({
    secret:'keyboard cat'
}))

app.listen(3000, () => {
    console.log('App listening on port 3000')
})

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

app.get('/',homeController)
app.get('/post/:id',getPostController)
app.get('/posts/new',newPostController)

app.post('/posts/store',storePostController)

app.get('/auth/register', newUserController)

app.post('/users/register',storeUserController)

app.get('/auth/login', loginController)

app.post('/users/login',loginUserController)
