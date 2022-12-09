const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', async (req, res) => {
  try {
    const TagData = await Tag.findAll()({
      include:[{model: Product, through: ProductTag, as: "tagged_product"}],
    });
    res.status(200).json(TagData);
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
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.create(req.body);
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
    try {
      const TagData = await Tag.update({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(TagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({
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
