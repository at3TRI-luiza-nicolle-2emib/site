module.exports = (app)=>{
    app.get('/generic2', (req,res)=>{
        res.render('generic2.ejs')
    })
}

