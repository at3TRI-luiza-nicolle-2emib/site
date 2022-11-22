module.exports = (app)=>{
    app.get('/generic3', (req,res)=>{
        res.render('generic3.ejs')
    })
}

