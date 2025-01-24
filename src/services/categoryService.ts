// src/services/categoryService.ts
import { categoryRepository } from '../repositories/categoryRepository';

export const categoryService = {
  async createCategory(categoryTitle: string, description?: string) {
    // Add validation logic here
    return categoryRepository.create({ categoryTitle, description });
  },

  async getAllCategories() {
    return categoryRepository.getAll();
  },

  async getCategoryById(id: number) {
    const category = await categoryRepository.getById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  },

  async updateCategory(
    id: number,
    categoryTitle?: string,
    description?: string
  ) {
    // Add validation logic here
    return categoryRepository.update(id, { categoryTitle, description });
  },

  async deleteCategory(id: number) {
    return categoryRepository.delete(id);
  },
};
