// src/services/brandService.ts
import { brandRepository } from '../repositories/brandRepository';

export const brandService = {
  async createBrand(brandTitle: string, description?: string) {
    // Add validation logic here
    return brandRepository.create({ brandTitle, description });
  },

  async getAllBrands() {
    return brandRepository.getAll();
  },

  async getBrandById(id: number) {
    const brand = await brandRepository.getById(id);
    if (!brand) {
      throw new Error('Brand not found');
    }
    return brand;
  },

  async updateBrand(id: number, brandTitle?: string, description?: string) {
    // Add validation logic here
    return brandRepository.update(id, { brandTitle, description });
  },

  async deleteBrand(id: number) {
    return brandRepository.delete(id);
  },
};
