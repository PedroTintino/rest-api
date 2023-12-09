import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from './controllers/ListCustomersController'
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get('/test', async (req: FastifyRequest, res: FastifyReply) => {
        return { ok:true }
    })

    fastify.post('/customer', async (req: FastifyRequest, res: FastifyReply ) => {
        return new CreateCustomerController().handle(req, res)
    })
  
    fastify.get('/customers', async (req: FastifyRequest, res: FastifyReply ) => {
        return new ListCustomersController().handle(req, res)
    })
  
    fastify.delete('/customer', async (req: FastifyRequest, res: FastifyReply ) => {
        return new DeleteCustomerController().handle(req, res)
    })

}