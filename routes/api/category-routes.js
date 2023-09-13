const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to fetch'});
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: [{ model: Product}],
    });
  
  if (!category) {
    return res.status(404).json({error:'Category not found'})
  }
  res.status(200).json(category);
} catch (err) {
  console.error(err);
  res.status(500).json({ error: 'Unable to fetch category'});
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to create a new category'});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryId },
    });
    if (updatedCategory[0] === 0) {
      return res.status(404).json({error: 'Category not found'});
    }
    res.status(200).json({ message: 'Category updated successfully'});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Unable to update the category'});
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryId },
    });
    if (deletedCategory === 0) {
      return res.status(404).json({ error: 'Category not found'});
    }
    res.status(200).json({ message: 'Category deleted successfully'});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to delete the category'});
  }
});

module.exports = router;
