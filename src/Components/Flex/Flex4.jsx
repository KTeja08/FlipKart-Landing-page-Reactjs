import React from 'react';
import Styles from './Flex4.module.css';
const Flex = () => {
    return (
        <div className={Styles.main}>
            <p className={Styles.heading}>Home Essentials</p>

            <div className={Styles.flexbox}>

                <div className={Styles.f1}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/816hUIjTgTL._AC_UF894,1000_QL80_.jpg" alt="fashion" />
                        <p>Reebook, Hrx & more</p>
                        <p>Min 60% off</p>
                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/81enx7lbVWL._AC_UF894,1000_QL80_.jpg" alt="fashion2" />
                        <p>Stylish Kurti</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://bankeybiharihandloom.com/wp-content/uploads/2021/09/1051298.jpg" alt="fashion3" />
                        <p>Men Shirts</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://vivagifts.in/wp-content/uploads/2023/05/Kids-Lunch-Box.jpg" alt="fashion4" />
                        <p>T-shirts</p>
                        <p>under Rs 200</p>
                    </div>

                    <div>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2022/08/water-bottle-2048px-mira.jpg" alt="fashion4" />
                        <p>jewellery</p>
                        <p>offers</p>
                    </div>

                    <div>
                        <img src="https://n-lighten.in/wp-content/uploads/Nordic-Modern-Creative-Feather-Light-Led-Wall-Lamp-Bedroom-Bedside-Lighting-Living-Room-Tv-Background-Wall-4.jpg" alt="fashion4" />
                        <p>jewellery</p>
                        <p>offers</p>
                    </div>

                    <div className={Styles.f2}>
                    <img src="https://assets-news.housing.com/news/wp-content/uploads/2016/04/23094336/How-to-choose-the-perfect-decor-lights-for-your-room-FB-1200x700-compressed-1200x700.jpg" alt="9" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Flex;