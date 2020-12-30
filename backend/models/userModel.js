import mongoose from 'mongoose';

const faveSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      ref: 'Product',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const cartASchema = new mongoose.Schema(
  {
    id: {
      type: String,
      ref: 'Product',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const shippingSchema = {
  address: { type: String,  },
  city: { type: String,  },
  postalCode: { type: String,  },
  country: { type: String,  },
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  cart: [cartASchema],
  faveList: [faveSchema],
  shipping: shippingSchema,
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
