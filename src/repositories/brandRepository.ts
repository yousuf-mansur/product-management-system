// src/repositories/brandRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const brandRepository = {
  async create(data: { brandTitle: string; description?: string }) {
    return prisma.brand.create({ data });
  },

  async getAll() {
    return prisma.brand.findMany({
      include: { products: true },
    });
  },

  async getById(id: number) {
    return prisma.brand.findUnique({
      where: { id },
      include: { products: true },
    });
  },

  async update(
    id: number,
    data: { brandTitle?: string; description?: string }
  ) {
    return prisma.brand.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.brand.delete({ where: { id } });
  },
};
