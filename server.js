const express =require("express")
const path = require("path")

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.use((req, res, next) => {
  setTimeout(next, Number(process.env.LATENCY_MS || 0));
});

app.listen(PORT, () => {
    console.log(`Servern körs på http://localhost:${PORT}`)
})

const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)  