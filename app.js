const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const pg = require('pg')
const app = express()
let models = require('./models')
const bcrypt = require('bcrypt')

var session = require('express-session')

app.engine('mustache',mustacheExpress())

app.set('views','./views')
app.set('view engine','mustache')

app.use(session({
    secret: "cat",  //random secret hash
    resave: false,
    saveUninitialized: false
}))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended : false }))


// PUBLIC FACING SIDE //

// Index
app.get('/index', function(req,res){
    res.render('index')
})

// Product Page
app.get('/productpage', function(req,res){

    models.Products.findAll().then(function(products){
        res.render('productpage', {list: products})
    })
})

// Cart

app.get('/cart', function(req, res) {
    res.render('cart')
  })
  
  app.post('/cart', function(req, res) {
    models.CartTable.findAll({
      where:{
        
      }
    })
  })


// INVENTORY MGMT SIDE

// Admin Landing
app.get('/adminlanding', function(req,res){
    res.render('adminlanding')
})

// Update Product Categories
app.get('/updatecategories', function(req,res){
    //models.products.findAll().then(function(products){
        res.render('updatecategories')
    //})
})

app.post('/updatecategories', function(req,res){

    let thisCategory = {
        productCategory : req.body.productCategory,
        productGender : req.body.productGender
    }

    models.Products.create(newCategory).then(function(){

    res.redirect('/updatecategories')
    })
})

models.productcategories.findOne().then(function(productcategories){
    console.log(productcategories)
})


// Update Products
app.get('/updateproducts', function(req,res){
    //models.products.findAll().then(function(products){
        res.render('updateproducts')
    //})
})

app.post('/updateproducts', function(req,res){


    let newProduct = {
        productName : req.body.productName,
        productSize : req.body.productSize,
        productPrice : req.body.productPrice,
        productColor : req.body.productColor,
        productURL : req.body.productURL,
        productQuantity: req.body.productQuantity

    }

    models.Products.create(newProduct).then(function(){
    res.redirect('/updateproducts')
})
})

models.Products.findOne().then(function(Products){
    console.log(Products)
})


// Stock On Hand
app.get('/stockonhand', function(req,res){

    models.Products.findAll().then(function(products){
        res.render('stockonhand', {list: products})
    })
})



// Contact Us
app.get('/contactus', function(req,res){
    //models.products.findAll().then(function(products){
        res.render('contactus')
    //})
})

app.post('/contactus', function(req,res){

    const { contactName, contactEmail, contactComment} = req.body
    console.log(contactName, contactEmail, contactComment)
    let thisComment = global.db.ContactUs.build({
        contactName : contactName,
        contactEmail : contactEmail,
        contactComment : contactComment
    })

    thisComment.save().then(function(savedComment){
        console.log("Saved successful", savedComment)
    })
    res.redirect('/contactus')
})

models.ContactUs.findOne().then(function(ContactUs){
    console.log(ContactUs)
})


// AUTHENTICATION //

// USER

// Sign Up 
  
app.get('/signIn', function(req,res){
      res.render('signin')
    })
  
app.post('/signUp', function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let newUser = {
          first_name : req.body.first_name,
          last_name : req.body.last_name,
          email : req.body.email,
          address : req.body.address,
          username : req.body.username,
          password : hash
    }
  
    models.User.create(newUser).then(function(){
        res.redirect('/signIn')
        })
    })
})
  
// Sign In
  
app.post('/signIn',function(req,res,next){
  
    models.User.findOne( {where: {username : req.body.usernameSI}}).then(function(user) {
        bcrypt.compare(req.body.passwordSI, user.password, function(err,result) {
            if(result) {
            if(req.session) {
                req.session.username = req.body.usernameSI
                var hour = 1800000
                req.session.cookie.expires = new Date(Date.now() + hour)
                req.session.cookie.maxAge = hour
                }
            res.redirect('/shop')
            } else {
            res.redirect('/errorSignIn')
            }
        })
    })
})
  
// Render Sign In Success
app.get('/shop', function(req,res) {
    res.render('shop')
})
  
// Sign Out
app.post('/logOut', function(req, res){
    req.session.destroy()
    res.clearCookie('connect.sid', {path : '/'});
    res.redirect('/signin')
})
  
// Render Sign In Error
app.get('/errorSignIn', function(req,res) {
    res.render('errorSignIn')
})
  
  // ADMIN //
  
  //SIGN UP//
  
app.get('/admin', function(req,res){
    res.render('admin')
})
  
app.post('/adminSignUp', function(req, res){
    bcrypt.hash(req.body.adminPassword, 10, function(err, hash) {
        let newAdmin = {
            username : req.body.adminUsername,
            password : hash
        }
  
    models.Admin.create(newAdmin).then(function(){
        res.redirect('/admin')
        })
    })
})
  
// Sign in
app.post('/adminSignIn',function(req,res,next){
  
    models.Admin.findOne({username : req.body.adminUsernameSI}).then(function(user) {
        bcrypt.compare(req.body.adminPasswordSI, user.password, function(err,result) {
            if(result) {
                res.redirect('/shop')
            } else {
                res.redirect('/errorSignIn')
            }
        })
    })
})

// SIGN OUT //
// app.post('/logOut', function(req, res){
//   req.session.destroy()
//   res.clearCookie('connect.sid', {path : '/'});
//   res.redirect('/signin')
// })



// Server
app.listen(3000, () => console.log('I am listening on 3000!'))