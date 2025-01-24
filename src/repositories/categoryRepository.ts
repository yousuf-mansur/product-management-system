// src/repositories/categoryRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const categoryRepository = {
  async create(data: { categoryTitle: string; description?: string }) {
    return prisma.category.create({ data });
  },

  async getAll() {
    return prisma.category.findMany({
      include: { subCategories: true },
    });
  },

  async getById(id: number) {
    return prisma.category.findUnique({
      where: { id },
      include: { subCategories: true },
    });
  },

  async update(
    id: number,
    data: { categoryTitle?: string; description?: string }
  ) {
    return prisma.category.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.category.delete({ where: { id } });
  },
};
