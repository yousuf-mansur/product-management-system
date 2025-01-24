// src/controllers/brandController.ts
import { Request, Response } from 'express';
import { brandService } from '../services/brandService';

export const brandController = {
  async createBrand(req: Request, res: Response) {
    try {
      const { brandTitle, description } = req.body;
      const brand = await brandService.createBrand(brandTitle, description);
      res.status(201).json(brand);
    } catch (error) {
      res
        .status(500)
        .json({
          error: error instanceof Error ? error.message : 'An error occurred',
        });
    }
  },

  async getAllBrands(req: Request, res: Response) {
    try {
      const brands = await brandService.getAllBrands();
      res.json(brands);
    } catch (error) {
      res
        .status(500)
        .json({
          error: error instanceof Error ? error.message : 'An error occurred',
        });
    }
  },

  async getBrandById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const brand = await brandService.getBrandById(id);
      res.json(brand);
    } catch (error) {
      res
        .status(404)
        .json({
          error: error instanceof Error ? error.message : 'Brand not found',
        });
    }
  },

  async updateBrand(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { brandTitle, description } = req.body;
      const brand = await brandService.updateBrand(id, brandTitle, description);
      res.json(brand);
    } catch (error) {
      res
        .status(500)
        .json({
          error: error instanceof Error ? error.message : 'An error occurred',
        });
    }
  },

  async deleteBrand(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await brandService.deleteBrand(id);
      res.status(204).send();
    } catch (error) {
      res
        .status(500)
        .json({
          error: error instanceof Error ? error.message : 'An error occurred',
        });
    }
  },
};
