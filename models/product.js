const {Schema, model} = require('mongoose');

const ProductSchema = Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    price: {
        type: Boolean,
        default: 0.0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String
    },
    brand: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    }
});

ProductSchema.methods.toJSON = function() {
    const {__v, status, ...data} = this.toObject();
    return data
}

module.exports = model('Product', ProductSchema);