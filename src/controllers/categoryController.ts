// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import { categoryService } from '../services/categoryService';

export const categoryController = {
  async createCategory(req: Request, res: Response) {
    try {
      const { categoryTitle, description } = req.body;
      const category = await categoryService.createCategory(
        categoryTitle,
        description
      );
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async getCategoryById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const category = await categoryService.getCategoryById(id);
      res.json(category);
    } catch (error) {
      res.status(404).json({
        error: error instanceof Error ? error.message : 'Category not found',
      });
    }
  },

  async updateCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { categoryTitle, description } = req.body;
      const category = await categoryService.updateCategory(
        id,
        categoryTitle,
        description
      );
      res.json(category);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },

  async deleteCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await categoryService.deleteCategory(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },
};
