const {readJSON, writeJSON} = require('../data')

module.exports = {
    index : (req,res) => {
        return res.render('productsMultipleImages')
    },
    add : (req,res) => {
        return res.render('productsAddMultipleImages')
    },
    create : (req,res) => {

        const products = readJSON('productsMultipleImages.json');

        products.push({
            id : products.length ? products[products.length -1 ].id + 1 : 1,
            name: req.body.name,
            images : req.files.map(file => file.filename)
        })

        writeJSON(products,'productsMultipleImages.json')

        return res.redirect('/')
    },
    edit : (req,res) => {
        return res.render('productEditMultipleImages')
    },
    update : (req,res) => {
        return res.send(req.body)
    },
    remove : (req,res) => {
        return res.send('Producto eliminado')
    }
}