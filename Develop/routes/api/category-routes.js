const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async  (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
  const allCategories = await Category.findAll({
    include: [{model: Product}]
  });
    console.log(allCategories);
    res.json(allCategories);
  } catch(err) {
    console.log(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const selectedCategory = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.json(selectedCategory);
  } catch(err) {
    res.json(err);
  } 

});

router.post('/', async (req, res) => {
  // create a new category
try{
  const newCategory = await Category.create({category_name : req.body.category_name});
  res.json(newCategory);
} catch (err){
  console.log(err);
  res.json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updatedCategory = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    });
    res.json(updatedCategory);
  } catch (err){
    console.log(err);
    res.json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
  const deletedCategory = await Category.destroy({
    where : {
      id: req.params.id,
    },
  });
  res.json(deletedCategory);
  } catch (err){
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
