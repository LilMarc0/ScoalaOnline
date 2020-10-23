const express = require('express');
const router = express.Router();        

const {Category} = require('../models')

router.get('/', (req, res)=>{
    Category.findAll().then(ctgs => res.send(ctgs));
})



router.get('/:id', (req, res) => {
    Category.findById(req.params.id).then(cat => res.send(cat))
});

router.put('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send('Category with submitted ID not found');
    }
    try {
      const updatedCategory = await category.update({ name: req.body.name });
      res.send(updatedCategory);
    } catch(err) {
      res.status(400).send(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send('Category with submitted ID not found');
    }
    await category.destroy();
    res.send(category);
  });

module.exports = router