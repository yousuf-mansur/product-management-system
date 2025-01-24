// src/repositories/subCategoryRepository.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const subCategoryRepository = {
  async create(data: {
    subCatTitle: string;
    categoryId: number;
    description?: string;
  }) {
    return prisma.subCategory.create({ data });
  },

  async getAll() {
    return prisma.subCategory.findMany({
      include: {
        category: true,
        products: true,
      },
    });
  },

  async getById(id: number) {
    return prisma.subCategory.findUnique({
      where: { id },
      include: {
        category: true,
        products: true,
      },
    });
  },

  async update(
    id: number,
    data: { subCatTitle?: string; description?: string; categoryId?: number }
  ) {
    return prisma.subCategory.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.subCategory.delete({ where: { id } });
  },
};
