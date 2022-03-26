import { prisma } from "../helpers/utils.js";

export const getAll = async (_, reply) => {
  try {
    const brands = await prisma.brand.findMany();
    return brands;
  } catch (error) {
    console.log(error);
    return reply.status(500).send("Impossível carregar os posts");
  }
};

export const create = async (req, reply) => {
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

export const edit = async (req, reply) => {
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

export const remove = async (req, reply) => {
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
