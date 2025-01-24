// src/routes/index.ts
import { Router } from 'express';
import categoryRoutes from './categoryRoutes';
import subCategoryRoutes from './subCategoryRoutes';
import brandRoutes from './brandRoutes';

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/subcategories', subCategoryRoutes);
router.use('/brands', brandRoutes);

export default router;
