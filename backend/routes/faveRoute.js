import express from 'express';
import Favourites from '../models/faveModel';

const router = express.Router();

router.get('/', async (req, res) => {
  const product = await Product.findOne({ _id: req.body.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});


// router.get('/', async (req, res) => {
//   const id = req.query.id ? { id: req.query.id } : {};
//   const products = await Product.find({ ...id}).sort(
//     sortOrder
//   );
//   res.send(products);
// });


export default router;
