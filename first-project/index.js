const express =require('express')
const res = require('express/lib/response')
const app =express()
app.get('/', (req,res,next) => {
    res.send('Hello!!')
})

app.listen(3000) //5000,3000,8000,8080

