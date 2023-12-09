import {FastifyRequest, FastifyReply} from 'fastify';
import { ListCustomersService }  from '../services/ListCustomersService';

class ListCustomersController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const listCostumersService = new ListCustomersService();

        const customers = await listCostumersService.execute();

        res.send(customers);
    }
}

export{ ListCustomersController }