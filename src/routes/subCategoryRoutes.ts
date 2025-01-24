// src/routes/subCategoryRoutes.ts
import { Router } from 'express';
import { subCategoryController } from '../controllers/subCategoryController';

const router = Router();

router.post('/', subCategoryController.createSubCategory);
router.get('/', subCategoryController.getAllSubCategories);
router.get('/:id', subCategoryController.getSubCategoryById);
router.put('/:id', subCategoryController.updateSubCategory);
router.delete('/:id', subCategoryController.deleteSubCategory);

export default router;
