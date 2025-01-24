// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Categories
  const categories = await prisma.category.createMany({
    data: [
      { categoryTitle: 'Electronics', description: 'Devices and gadgets' },
      { categoryTitle: 'Clothing', description: 'Apparel and fashion' },
      {
        categoryTitle: 'Home & Kitchen',
        description: 'Household items and appliances',
      },
    ],
  });

  // Seed Subcategories
  const subCategories = await prisma.subCategory.createMany({
    data: [
      {
        subCatTitle: 'Smartphones',
        categoryId: 1,
        description: 'Mobile phones and smart devices',
      },
      {
        subCatTitle: 'Laptops',
        categoryId: 1,
        description: 'Portable computers',
      },
      {
        subCatTitle: "Men's Wear",
        categoryId: 2,
        description: 'Clothing for men',
      },
      {
        subCatTitle: "Women's Wear",
        categoryId: 2,
        description: 'Clothing for women',
      },
      {
        subCatTitle: 'Kitchen Appliances',
        categoryId: 3,
        description: 'Cooking and food preparation tools',
      },
      {
        subCatTitle: 'Home Decor',
        categoryId: 3,
        description: 'Decorative items for home',
      },
    ],
  });

  // Seed Brands
  const brands = await prisma.brand.createMany({
    data: [
      {
        brandTitle: 'Apple',
        description: 'Technology and consumer electronics',
      },
      { brandTitle: 'Samsung', description: 'Electronics and home appliances' },
      { brandTitle: 'Nike', description: 'Sports and athletic wear' },
    ],
  });

  // Seed Products
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'iPhone 13',
        description: 'Latest smartphone from Apple',
        price: 799.99,
        stockQuantity: 100,
        subCategoryId: 1,
        brandId: 1,
        specifications: {
          storage: '128GB',
          screenSize: '6.1 inches',
          color: 'Blue',
        },
      },
      {
        name: 'Samsung Galaxy S21',
        description: 'Flagship Android smartphone',
        price: 699.99,
        stockQuantity: 80,
        subCategoryId: 1,
        brandId: 2,
        specifications: {
          storage: '256GB',
          screenSize: '6.2 inches',
          color: 'Phantom Gray',
        },
      },
      {
        name: 'Nike Running Shoes',
        description: 'Comfortable athletic footwear',
        price: 129.99,
        stockQuantity: 50,
        subCategoryId: 3,
        brandId: 3,
        specifications: {
          size: '42',
          material: 'Breathable mesh',
          type: 'Running',
        },
      },
    ],
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
