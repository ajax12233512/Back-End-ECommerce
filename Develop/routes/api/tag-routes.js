const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const allTags = await Tag.findAll({
      include: [{model: ProductTag}]
    });
      console.log(allTags);
      res.json(allTags);
    } catch(err) {
      console.log(err);
      res.json(err);
    }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const selectedTag = await Tag.findByPk(req.params.id, {
      include: [{model: ProductTag}]
    });
    res.json(selectedTag);
  } catch(err) {
    res.json(err);
  } 

});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({tag_name : req.body.tag_name});
    res.json(newTag);
  } catch (err){
    console.log(err);
    res.json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const updatedTag = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    });
    res.json(updatedTag);
  } catch (err){
    console.log(err);
    res.json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const deletedTag = await Tag.destroy({
      where : {
        id: req.params.id,
      },
    });
    res.json(deletedTag);
    } catch (err){
      console.log(err);
      res.json(err);
    }
});

module.exports = router;
