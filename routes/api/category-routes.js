const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const CategoryData = await Category.findAll()({
      include:[Product],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [Product],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
    try {
      const CategoryData = await Category.update(req,body, {
        where: {
          id: req.params.id,
        },
    });
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
