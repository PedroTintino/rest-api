import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({ id } : DeleteCustomerProps){
        if(!id){
            throw new Error('Missing id param!')
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Client not found!")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Client deleted!" }

    }
}

export { DeleteCustomerService }