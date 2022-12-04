const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

outer.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll()({
      include:[{model: Product, through: ProductTag, as: "tagged_product"}],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include:[{model: Product, through: ProductTag, as: "tagged_product"}],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
    try {
      const TagData = await Category.update({
        tag_name: req.body.tag_name,
        where: {
          id: req.params.id
        },
      });
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
