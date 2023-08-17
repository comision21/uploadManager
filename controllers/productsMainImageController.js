module.exports = {
    index : (req,res) => {
        return res.render('productsMainImage')
    },
    add : (req,res) => {
        return res.render('productsAddMainImage')
    },
    create : (req,res) => {
        return res.send(req.body)
    },
    edit : (req,res) => {
        return res.render('productEditMainImage')
    },
    update : (req,res) => {
        return res.send(req.body)
    },
    remove : (req,res) => {
        return res.send('Producto eliminado')
    }
}