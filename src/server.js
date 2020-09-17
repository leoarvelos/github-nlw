//Servidor

const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    saveSucess
} = require('./pages')

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos (css, scrikpts, imagens)
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/save-sucess", saveSucess)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)
