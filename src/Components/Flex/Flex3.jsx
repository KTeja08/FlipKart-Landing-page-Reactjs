import React from 'react';
import Styles from './Flex2.module.css';
const Flex = () => {
    return (
        <div className={Styles.main}>
            <p className={Styles.heading}>Future Brands</p>

            <div className={Styles.flexbox}>

                <div className={Styles.f1}>
                    <div>
                        <img src="https://thenfapost.com/wp-content/uploads/2022/07/Flipkart-Virtual-testing-.jpg" alt="fashion" />
                        <p>Reebook, Hrx & more</p>
                        <p>Min 60% off</p>
                    </div>

                    <div>
                        <img src="https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg" alt="fashion2" />
                        <p>Stylish Kurti</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://img.freepik.com/free-psd/horizontal-banner-template-fashion-shopping-store_23-2148786821.jpg" alt="fashion3" />
                        <p>Men Shirts</p>
                        <p>incl of offers</p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Flex;