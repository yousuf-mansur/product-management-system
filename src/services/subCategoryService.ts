// src/services/subCategoryService.ts
import { subCategoryRepository } from '../repositories/subCategoryRepository';

export const subCategoryService = {
  async createSubCategory(
    subCatTitle: string,
    categoryId: number,
    description?: string
  ) {
    // Add validation logic here
    return subCategoryRepository.create({
      subCatTitle,
      categoryId,
      description,
    });
  },

  async getAllSubCategories() {
    return subCategoryRepository.getAll();
  },

  async getSubCategoryById(id: number) {
    const subCategory = await subCategoryRepository.getById(id);
    if (!subCategory) {
      throw new Error('SubCategory not found');
    }
    return subCategory;
  },

  async updateSubCategory(
    id: number,
    subCatTitle?: string,
    description?: string,
    categoryId?: number
  ) {
    // Add validation logic here
    return subCategoryRepository.update(id, {
      subCatTitle,
      description,
      categoryId,
    });
  },

  async deleteSubCategory(id: number) {
    return subCategoryRepository.delete(id);
  },
};
