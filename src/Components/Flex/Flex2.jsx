import React from 'react';
import Styles from './Flex2.module.css';
const Flex = () => {
    return (
        <div className={Styles.main}>
            <p className={Styles.heading}>Bestsellers on Fashion</p>

            <div className={Styles.flexbox}>

                <div className={Styles.f1}>
                    <div>
                        <img src="https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg" alt="fashion" />
                        <p>Reebook, Hrx & more</p>
                        <p>Min 60% off</p>
                    </div>

                    <div>
                        <img src="https://assets.ajio.com/medias/sys_master/root/20240406/jTor/6610dc8616fd2c6e6aa17c06/-473Wx593H-466855053-yellow-MODEL.jpg" alt="fashion2" />
                        <p>Stylish Kurti</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://5.imimg.com/data5/VH/BL/PA/SELLER-96763193/fond-of-mens-cotton-shirts.jpg" alt="fashion3" />
                        <p>Men Shirts</p>
                        <p>incl of offers</p>
                    </div>

                    <div>
                        <img src="https://thumbs.dreamstime.com/b/people-wearing-different-colored-blank-shirts-photo-five-blue-black-red-gold-green-t-similar-to-colours-olympic-75702269.jpg" alt="fashion4" />
                        <p>T-shirts</p>
                        <p>under Rs 200</p>
                    </div>

                    <div>
                        <img src="https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2021-12-15at23.18.33_1_1200x1200.jpg?v=1639593723" alt="fashion4" />
                        <p>jewellery</p>
                        <p>offers</p>
                    </div>

                    <div>
                        <img src="https://assets.ajio.com/medias/sys_master/root/20230728/GBrh/64c3db50a9b42d15c979555c/-473Wx593H-466398360-green-MODEL.jpg" alt="fashion4" />
                        <p>Sarees</p>
                        <p>offers</p>
                    </div>


                </div>

                
            </div>
        </div>
    );
};

export default Flex;