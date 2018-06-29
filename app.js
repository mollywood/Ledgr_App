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

// AUTHENTICATION //

// USER

// Sign Up

// app.get('/signIn', function(req,res){
//       res.render('signin')
//     })
//
// app.post('/signUp', function(req, res){
//     bcrypt.hash(req.body.password, 10, function(err, hash) {
//         let newUser = {
//           first_name : req.body.first_name,
//           last_name : req.body.last_name,
//           email : req.body.email,
//           address : req.body.address,
//           username : req.body.username,
//           password : hash
//     }
//
//     models.User.create(newUser).then(function(){
//         res.redirect('/signIn')
//         })
//     })
// })
//
// // Sign In
//
// app.post('/signIn',function(req,res,next){
//
//     models.User.findOne( {where: {username : req.body.usernameSI}}).then(function(user) {
//         bcrypt.compare(req.body.passwordSI, user.password, function(err,result) {
//             if(result) {
//             if(req.session) {
//                 req.session.userID = user.id
//                 var hour = 1800000
//                 req.session.cookie.expires = new Date(Date.now() + hour)
//                 req.session.cookie.maxAge = hour
//                 console.log(req.session.id)
//                 }
//             res.redirect('sessions/productpage')
//             } else {
//             res.redirect('/signIn')
//             }
//         })
//     })
// })
//
// // Validate USER Session
// function validateUserLogin(req,res,next) {
//
//   if(req.session.userID) {
//     next()
//   } else {
//       res.redirect('/signin')
//   }
// }
//
// app.all('/sessions/*',validateUserLogin,function(req,res,next){
//   next()
// })
//
// // Render Sign In Success
// // app.get('/shop', function(req,res) {
// //     res.render('shop')
// // })
//
//
// // USER SIGN OUT //
// app.post('/logOut', function(req, res){
//     req.session.destroy()
//     res.clearCookie('connect.sid', {path : '/'});
//     res.redirect('/signIn')
// })
//
// // Render Sign In Error
// app.get('/errorSignIn', function(req,res) {
//     res.render('errorSignIn')
// })
//
//   // ADMIN //
//
//   //SIGN UP//
//
// app.get('/adminSignIn', function(req,res){
//     res.render('adminSignIn')
// })
//
// app.post('/adminSignUp', function(req, res){
//     bcrypt.hash(req.body.adminPassword, 10, function(err, hash) {
//         let newAdmin = {
//             username : req.body.adminUsername,
//             password : hash
//         }
//
//     models.Admin.create(newAdmin).then(function(){
//         res.redirect('/admin')
//         })
//     })
// })
//
// // SIGN IN //
// app.post('/adminSignIn',function(req,res,next){
//
//     models.Admin.findOne({username : req.body.adminUsernameSI}).then(function(admin) {
//         bcrypt.compare(req.body.adminPasswordSI, admin.password, function(err,result) {
//             if(result) {
//               if(req.session) {
//                 req.session.adminId = admin.id
//                 var hour = 1800000
//                 req.session.cookie.expires = new Date(Date.now() + hour)
//                 req.session.cookie.maxAge = hour
//                 }
//                 res.redirect('/admin/adminlanding')
//             } else {
//                 res.redirect('/adminSignIn')
//             }
//         })
//     })
// })
//
// // Validate ADMIN Session //
//
// function validateAdminLogin(req,res,next) {
//   // console.log(req.session.adminId)
//
//   if(req.session.adminId) {
//     next()
//   } else {
//       res.redirect('/adminSignIn')
//   }
// }
//
// app.all('/admin/*',validateAdminLogin,function(req,res,next){
//   next()
// })
//
// // ADMIN LOG OUT //
// app.post('/adminLogOut', function(req, res){
//     req.session.destroy()
//     res.clearCookie('connect.sid', {path : '/'});
//     res.redirect('/adminSignIn')
// })

// PUBLIC FACING SIDE //

// Index
app.get('/index', function(req,res){
    res.render('index')
})

// Product Page
app.get('/sessions/productpage', function(req,res){

    models.Products.findAll().then(function(products){
        res.render('sessions/productpage', {list: products})
    })
})

// Cart

function addValues(items) {
  let i = 0
  var total = 0
  for(i = 0; i < items.length; i++) {
    total += items[i].totalAmt
  }
  return total
}

app.get('/sessions/cart', function(req, res) {
  models.CartTable.findAll({
    where:{
      sessionID : 'EeYAm4J5bPGZj547SDayLYahpLJ3ayD4'
    }
  }).then(function(items) {
    res.render('sessions/cart', {shoppingCart : items, sum : addValues(items)})
  })
})

//DELETING ITEMS CART //

app.post('/deleteItem', function(req,res) {
  console.log(req.body.id)
  models.CartTable.destroy({

    where: {
      id : req.body.delete
    }
    }).then(function(){
      res.redirect('sessions/cart')
  })
})


// INVENTORY MGMT SIDE

// Admin Landing
app.get('/admin/adminlanding', function(req,res){
    res.render('admin/adminlanding')
})

// Update Product Categories
app.get('/admin/updatecategories', function(req,res){
    //models.products.findAll().then(function(products){
        res.render('admin/updatecategories')
    //})
})

app.post('/admin/updatecategories', function(req,res){

    let newCategory = {
        productCategory : req.body.productCategory,
        productGender : req.body.productGender
    }

    models.productcategories.create(newCategory).then(function(){

    res.redirect('admin/updatecategories')
    })
})

// Update Products
app.get('/admin/updateproducts', function(req,res){

    models.productcategories.findAll().then(function(productcategories){
        res.render('admin/updateproducts', {cats: productcategories})

    })
})

app.post('/admin/updateproducts', function(req,res){


    let newProduct = {
        productName : req.body.productName,
        productSize : req.body.productSize,
        productPrice : req.body.productPrice,
        productColor : req.body.productColor,
        productURL : req.body.productURL,
        productQuantity: req.body.productQuantity,
        productCategoryID: req.body.productCategoryID
    }

    console.log(newProduct)
    models.Products.create(newProduct).then(function(){
    res.redirect('admin/updateproducts')
})
})

// Stock On Hand
app.get('/admin/stockonhand', function(req,res){

    models.Products.findAll({
        include: [{
            model: models.productcategories,
            as : 'productcategories'
        }]
    }).then(function(products){

        res.render('admin/stockonhand', {list: products})
    })
})

//Modify Stock On Hand

app.post('/modify', function(req,res) {
  let quantity = req.body.quantity

  if(req.body.action == "add") { models.Products.update({productQuantity : (parseInt(quantity) + parseInt(req.body.amtChange))},

{
  where: {
    id : req.body.productID
  }
}).then(function(){
  res.redirect('admin/stockonhand')
})} else {models.Products.update({productQuantity : (parseInt(quantity) - parseInt(req.body.amtChange))},

{
where: {
  id : req.body.productID
}
}).then(function(){
res.redirect('admin/stockonhand')
})
}
})

// PUSH TO CART

app.post('/addToCart', function(req,res) {

  let cartItem = {
    ProductName : req.body.name,
    ProductSize : req.body.size,
    ProductPrice : req.body.price,
    ProductColor: req.body.color,
    Quantity: req.body.quantityAmt,
    ProductId : req.body.productID,
    UserId : req.session.userID,
    sessionID : req.session.id,
    id : req.body.id,
    totalAmt : (parseInt(req.body.quantityAmt) * parseInt(req.body.price))
  }
      console.log(cartItem)
      models.CartTable.create(cartItem).then(function(){
        res.redirect('sessions/productpage')
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

// Server
app.listen(3000, () => console.log('I am listening on 3000!'))
