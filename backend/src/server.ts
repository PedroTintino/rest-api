import fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';

const app = fastify({ logger: true })

// Middleware 
app.setErrorHandler(( err, req, res) => {
    res.code(400).send({ message: err.message })
})

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try{
        await app.listen({ port: 3333 })
    } catch(err){
        process.exit(1)
    }

}

start()