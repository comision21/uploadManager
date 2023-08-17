const {readJSON, writeJSON} = require('../data')

module.exports = {
    index : (req,res) => {
        return res.render('productsOneImage')
    },
    add : (req,res) => {
        return res.render('productsAddOneImage')
    },
    create : (req,res) => {

        const products = readJSON('productsOneImage.json');

        products.push({
            id : products.length ? products[products.length -1 ].id + 1 : 1,
            name: req.body.name,
            image : req.file ? req.file.filename : null
        })

        writeJSON(products,'productsOneImage.json')

        return res.redirect('/')
    },
    edit : (req,res) => {
        return res.render('productEditOneImage')
    },
    update : (req,res) => {
        return res.send(req.body)
    },
    remove : (req,res) => {
        return res.send('Producto eliminado')
    }
}