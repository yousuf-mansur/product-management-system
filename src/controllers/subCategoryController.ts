// src/controllers/subCategoryController.ts
import { Request, Response } from 'express';
import { subCategoryService } from '../services/subCategoryService';

export const subCategoryController = {
  async createSubCategory(req: Request, res: Response) {
    try {
      const { subCatTitle, categoryId, description } = req.body;
      const subCategory = await subCategoryService.createSubCategory(
        subCatTitle,
        categoryId,
        description
      );
      res.status(201).json(subCategory);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async getAllSubCategories(req: Request, res: Response) {
    try {
      const subCategories = await subCategoryService.getAllSubCategories();
      res.json(subCategories);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async getSubCategoryById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const subCategory = await subCategoryService.getSubCategoryById(id);
      res.json(subCategory);
    } catch (error) {
      res.status(404).json({
        error: error instanceof Error ? error.message : 'SubCategory not found',
      });
    }
  },

  async updateSubCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { subCatTitle, description, categoryId } = req.body;
      const subCategory = await subCategoryService.updateSubCategory(
        id,
        subCatTitle,
        description,
        categoryId
      );
      res.json(subCategory);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async deleteSubCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await subCategoryService.deleteSubCategory(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },
};
