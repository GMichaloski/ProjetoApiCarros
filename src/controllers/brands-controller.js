import { prisma } from "../helpers/utils";

export const GET = async (_, reply) => {
  try {
    return await prisma.brand.findMany();
  } catch (error) {
    reply.status(500).send("Impossível carregar os posts");
  }
};

export const POST = async (req, reply) => {
  const { name } = req.body;
  try {
    const post = await prisma.brand.create({
      data: { name },
    });
    return reply.send(post);
  } catch (error) {
    reply.status(500).send("Impossível realizar o post");
  }
};

export const PUT = async (req, reply) => {
  const { id, name } = req.body;
  try {
    const edit = await prisma.brand.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
    return reply.send(edit);
  } catch (error) {
    reply.status(400).send("Impossível fazer a atualização");
  }
};

export const DELETE = async (req, reply) => {
  const { id } = req.body;
  try {
    const deleted = await prisma.brand.delete({
      where: {
        id: id,
      },
    });
    return reply.send(deleted);
  } catch (error) {
    reply.status.send("Impossível deletar");
  }
};
