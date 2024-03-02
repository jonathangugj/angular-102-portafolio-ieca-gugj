const http=require('http')

const PORT=3000

const server = http.createServer(async (req, res)=>{
    res.writeHead(200,{"Content-Type": "application/json"})

    try {
        console.log(`obteniendo data...`)
        const resData = await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(resData)
        const data = await resData.json()

        console.log(`Presentando data>>>`)

        res.end(JSON.stringify(data,null,'\t'));    

    } catch (error) {
        console.error(error)
    }

    
})

server.listen(PORT,()=>{
    console.log(`Servidor levantado en puerto ${PORT}`)
})