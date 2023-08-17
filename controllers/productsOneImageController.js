module.exports = {
    index : (req,res) => {
        return res.render('productsOneImage')
    },
    add : (req,res) => {
        return res.render('productsAddOneImage')
    },
    create : (req,res) => {
        return res.send(req.body)
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