module.exports = {
    index : (req,res) => {
        return res.render('productsMultipleImages')
    },
    add : (req,res) => {
        return res.render('productsAddMultipleImages')
    },
    create : (req,res) => {
        return res.send(req.body)
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