import React, { useState } from 'react';
import Styles from './Flex.module.css';

const Flex = ({ addToWishlist, addToCart }) => {
    const products = [
        {
            id: 1,
            name: 'moto edge 40 neo',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=90',
            description: 'incl of offers',
        },
        {
            id: 2,
            name: 'vivo t2 pro 5g',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90',
            description: 'incl of offers',
        },
        {
            id: 3,
            name: 'poco m6 pro',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=90',
            description: 'incl of offers',
        },
        {
            id: 4,
            name: 'redmi 12 5G',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=90',
            description: 'incl of offers',
        },
        {
            id: 5,
            name: 'POCO X6 Neo 5G',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/p/r/q/x6-neo-5g-mzb0ggrin-poco-original-imagyxngnrhzx96z.jpeg?q=90',
            description: 'incl of offers',
        },
        {
            id: 6,
            name: 'poco m6 5G',
            image: 'https://rukminim1.flixcart.com/image/210/210/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=90',
            description: 'incl of offers',
        },
    ];

    return (
        <div className={Styles.main}>
      <p className={Styles.heading}>Best Deals on Smartphones</p>

      <div className={Styles.flexbox}>
        {products.map((product) => (
          <div key={product.id} className={Styles.item}>
            <img src={product.image} alt={product.name} className={Styles.largeImage} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <button className={Styles.addToWishlistButton} onClick={() => addToWishlist(product)}>
              Wishlist
            </button>
            <button className={Styles.addToCartButton} onClick={() => addToCart(product)}>
              Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flex;
