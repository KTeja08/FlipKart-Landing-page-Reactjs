import React from 'react';
import Styles from './StyleSection.module.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoChevronRight } from "react-icons/go";

const StyleSection = () => {
    return (

        <div className={Styles.parent}>
            <div className={Styles.main}>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="Grocery" />
                    <p>Grocery</p>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="Mobiles" />
                    <p>Mobiles</p>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" />

                    <div className={Styles.dropdown}>
                        <div className={Styles.dropy}>
                            <p>Fashion  </p>
                            <RiArrowDropDownLine className={Styles.icon} />
                        </div>
                        <div className={Styles.menu}>
                            <ul className={Styles.mainMenu}>

                                <li>Men's Top Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Top Wear</li>
                                        <li>All</li>
                                        <li>Men's T-Shirts</li>
                                        <li>Men's Causaul Shirts</li>
                                        <li>Men's Formal Shirts</li>
                                        <li>Men's Kurtas</li>
                                        <li>Men's Ethnic Sets</li>
                                        <li>Men's Blazers</li>
                                        <li>Men's Raincoat</li>
                                        <li>Men's Windcheaters</li>
                                        <li>Men's Suit </li>
                                        <li>Men's Fabrics</li>
                                    </ul>
                                </li>

                                <li>Men's Bottom Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Bottom Wear</li>
                                        <li>All</li>
                                        <li>Men's Jeans</li>
                                        <li>Men's Trousers</li>
                                        <li>Men's Trackpants</li>
                                        <li>Men's Shorts</li>
                                        <li>Men's Cargos</li>
                                        <li>Men's Threefourths</li>
                                        <li>Men's Pyjamas & Loungepants</li>
                                        <li>Men's Dhoti</li>
                                        <li>Men's Ethnic Pyjama</li>
                                    </ul>
                                </li>

                                <li>Wommen Ethnic <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Wommen Ethnic  </li>
                                        <li>All</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas & Kurtis</li>
                                        <li>Women Kurta Sets & Salwar Suits</li>
                                        <li>Ethnic Dresses</li>
                                        <li>Women Dress Materials</li>
                                        <li>Women Gowns</li>
                                        <li>Women Lehenga Cholis</li>
                                        <li>Women Leggings & Patialas</li>
                                        <li>Women Palazzos & Shararas</li>
                                        <li>Women Blouse</li>
                                        <li>Women Dupatta</li>
                                    </ul>
                                </li>

                                <li>Men Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men Footwear</li>
                                        <li>All</li>
                                        <li>Men's Sports Shoes</li>
                                        <li>Men's Casual Shoes</li>
                                        <li>Men's Sandals & Floaters</li>
                                        <li>Men's Slippers & Flip Flops</li>
                                        <li>Men's Formal Shoes</li>
                                        <li>Men's Ethnic Shoes</li>
                                        <li>Shoe Care</li>
                                    </ul>

                                </li>


                                <li>Women Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Footwear</li>
                                        <li>All</li>
                                        <li>Women Flats</li>
                                        <li>Women Heels</li>
                                        <li>Women Wedges</li>
                                        <li>Women Slipper Flip Flops</li>
                                        <li>Women Casual Shoes</li>
                                        <li>Women Sports Shoes</li>
                                        <li>Women Ballerinas</li>
                                        <li>Women Ethnic Shoes</li>
                                        <li>Women Sneakers</li>
                                        <li>Women Walking Shoes</li>
                                        <li>Women Boots</li>
                                    </ul>
                                </li>


                                <li>Watches and Accessories <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Watches and Accessories</li>
                                        <li>Men & Women Watches</li>
                                        <li>Men & Women Sunglasses</li>
                                        <li>Wallets</li>
                                        <li>Men & Women Belts</li>
                                        <li>Men Fashion Jewellery</li>
                                        <li>Precious Articles</li>
                                        <li>Kids Accessories</li>
                                        <li>Women Fashion Jewellery</li>

                                    </ul>
                                </li>

                                <li>Women Western <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Western</li>
                                        <li>All</li>
                                        <li>Women Tops</li>
                                        <li>Women Dresses</li>
                                        <li>Women T-shirts & Polo T-shirts</li>
                                        <li>Women Jeans</li>
                                        <li>Women Nighties & Night Dresses</li>
                                        <li>Women Nightsuit</li>
                                        <li>Women Track Pants</li>
                                        <li>Women Trouser</li>
                                        <li>Women Jumpsuit</li>
                                        <li>Women Shapewear</li>
                                        <li>Women Sports Bra</li>

                                    </ul>
                                </li>

                                <li>Bags, Suitcases & Luggage <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Bags, Suitcase & Luggage</li>
                                        <li>All</li>
                                        <li>Bags & Backpacks</li>
                                        <li>Suitcases & Trolleys</li>
                                        <li>Dufflebags</li>
                                        <li>Rucksacks</li>
                                        <li>Handbags</li>
                                        <li>Slingbags</li>
                                        <li>Women's Clutches & Wallets</li>
                                        <li>Messenger Bags</li>
                                        <li>Travel Accessories</li>
                                    </ul>
                                </li>

                                <li>Kids <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Kids</li>
                                        <li>All</li>
                                        <li>Girls Dresses</li>
                                        <li>Boys & Girls Tshirts</li>
                                        <li>Boys & Girls Combosets</li>
                                        <li>Boys & Girls Ethnic Wear</li>
                                        <li>Boys & Girls Jeans</li>
                                        <li>Boys & Girls Shorts</li>
                                        <li>Boys & Girls Trackpants</li>
                                        <li>Boys & Girls Innerwear</li>
                                        <li>Infant Wear</li>
                                        <li>Kids Slipper Flip Flops</li>
                                        <li>Kids Sports Shoes</li>
                                    </ul>
                                </li>

                                <li>Essentials <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Essentials</li>
                                        <li>Men's Briefs & Trunks</li>
                                        <li>Men's Vests</li>
                                        <li>Men's Boxers</li>
                                        <li>Women Lingerie Sets</li>
                                        <li>Women Bra</li>
                                        <li>Women Panty</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas</li>
                                        <li>Women Kurta Sets</li>
                                        <li>Boys Innerwear</li>
                                        <li>Boys Innerwear</li>
                                        <li>Girls Innerwear</li>
                                        <li>Women Slipper Flip Flops</li>
                                    </ul>
                                </li>

                                <li>Winter <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Winter</li>
                                        <li>All</li>
                                        <li>Men's Jackets</li>
                                        <li>Men's Sweatshirts</li>
                                        <li>Men's Sweaters</li>
                                        <li>Men's Thermals</li>
                                        <li>Women's Jackets</li>
                                        <li>Women's Sweatshirts</li>
                                        <li>Women's Sweaters</li>
                                        <li>Women's Shrugs</li>
                                        <li>Kids SweatShirts</li>
                                        <li>Kids Jackets</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                    </div>


                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="Electronics" />

                    <div className={Styles.dropdown2}>
                        <div className={Styles.dropy}>
                            <p>Electronics</p>
                            <RiArrowDropDownLine className={Styles.icon} />
                        </div>
                        <div className={Styles.menu}>
                            <ul className={Styles.mainMenu}>

                                <li>Electronics items<span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>Computer</li>
                                        <li>All</li>
                                        <li>Men's T-Shirts</li>
                                        <li>Men's Causaul Shirts</li>
                                        <li>Men's Formal Shirts</li>
                                        <li>Men's Kurtas</li>
                                        <li>Men's Ethnic Sets</li>
                                        <li>Men's Blazers</li>
                                        <li>Men's Raincoat</li>
                                        <li>Men's Windcheaters</li>
                                        <li>Men's Suit </li>
                                        <li>Men's Fabrics</li>
                                    </ul>
                                </li>

                                <li>Men's Bottom Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Bottom Wear</li>
                                        <li>All</li>
                                        <li>Men's Jeans</li>
                                        <li>Men's Trousers</li>
                                        <li>Men's Trackpants</li>
                                        <li>Men's Shorts</li>
                                        <li>Men's Cargos</li>
                                        <li>Men's Threefourths</li>
                                        <li>Men's Pyjamas & Loungepants</li>
                                        <li>Men's Dhoti</li>
                                        <li>Men's Ethnic Pyjama</li>
                                    </ul>
                                </li>

                                <li>Wommen Ethnic <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Wommen Ethnic  </li>
                                        <li>All</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas & Kurtis</li>
                                        <li>Women Kurta Sets & Salwar Suits</li>
                                        <li>Ethnic Dresses</li>
                                        <li>Women Dress Materials</li>
                                        <li>Women Gowns</li>
                                        <li>Women Lehenga Cholis</li>
                                        <li>Women Leggings & Patialas</li>
                                        <li>Women Palazzos & Shararas</li>
                                        <li>Women Blouse</li>
                                        <li>Women Dupatta</li>
                                    </ul>
                                </li>

                                <li>Men Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men Footwear</li>
                                        <li>All</li>
                                        <li>Men's Sports Shoes</li>
                                        <li>Men's Casual Shoes</li>
                                        <li>Men's Sandals & Floaters</li>
                                        <li>Men's Slippers & Flip Flops</li>
                                        <li>Men's Formal Shoes</li>
                                        <li>Men's Ethnic Shoes</li>
                                        <li>Shoe Care</li>
                                    </ul>

                                </li>


                                <li>Women Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Footwear</li>
                                        <li>All</li>
                                        <li>Women Flats</li>
                                        <li>Women Heels</li>
                                        <li>Women Wedges</li>
                                        <li>Women Slipper Flip Flops</li>
                                        <li>Women Casual Shoes</li>
                                        <li>Women Sports Shoes</li>
                                        <li>Women Ballerinas</li>
                                        <li>Women Ethnic Shoes</li>
                                        <li>Women Sneakers</li>
                                        <li>Women Walking Shoes</li>
                                        <li>Women Boots</li>
                                    </ul>
                                </li>


                                <li>Watches and Accessories <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Watches and Accessories</li>
                                        <li>Men & Women Watches</li>
                                        <li>Men & Women Sunglasses</li>
                                        <li>Wallets</li>
                                        <li>Men & Women Belts</li>
                                        <li>Men Fashion Jewellery</li>
                                        <li>Precious Articles</li>
                                        <li>Kids Accessories</li>
                                        <li>Women Fashion Jewellery</li>

                                    </ul>
                                </li>

                                <li>Women Western <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Western</li>
                                        <li>All</li>
                                        <li>Women Tops</li>
                                        <li>Women Dresses</li>
                                        <li>Women T-shirts & Polo T-shirts</li>
                                        <li>Women Jeans</li>
                                        <li>Women Nighties & Night Dresses</li>
                                        <li>Women Nightsuit</li>
                                        <li>Women Track Pants</li>
                                        <li>Women Trouser</li>
                                        <li>Women Jumpsuit</li>
                                        <li>Women Shapewear</li>
                                        <li>Women Sports Bra</li>

                                    </ul>
                                </li>

                                <li>Bags, Suitcases & Luggage <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Bags, Suitcase & Luggage</li>
                                        <li>All</li>
                                        <li>Bags & Backpacks</li>
                                        <li>Suitcases & Trolleys</li>
                                        <li>Dufflebags</li>
                                        <li>Rucksacks</li>
                                        <li>Handbags</li>
                                        <li>Slingbags</li>
                                        <li>Women's Clutches & Wallets</li>
                                        <li>Messenger Bags</li>
                                        <li>Travel Accessories</li>
                                    </ul>
                                </li>

                                <li>Kids <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Kids</li>
                                        <li>All</li>
                                        <li>Girls Dresses</li>
                                        <li>Boys & Girls Tshirts</li>
                                        <li>Boys & Girls Combosets</li>
                                        <li>Boys & Girls Ethnic Wear</li>
                                        <li>Boys & Girls Jeans</li>
                                        <li>Boys & Girls Shorts</li>
                                        <li>Boys & Girls Trackpants</li>
                                        <li>Boys & Girls Innerwear</li>
                                        <li>Infant Wear</li>
                                        <li>Kids Slipper Flip Flops</li>
                                        <li>Kids Sports Shoes</li>
                                    </ul>
                                </li>

                                <li>Essentials <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Essentials</li>
                                        <li>Men's Briefs & Trunks</li>
                                        <li>Men's Vests</li>
                                        <li>Men's Boxers</li>
                                        <li>Women Lingerie Sets</li>
                                        <li>Women Bra</li>
                                        <li>Women Panty</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas</li>
                                        <li>Women Kurta Sets</li>
                                        <li>Boys Innerwear</li>
                                        <li>Boys Innerwear</li>
                                        <li>Girls Innerwear</li>
                                        <li>Women Slipper Flip Flops</li>
                                    </ul>
                                </li>

                                <li>Winter <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Winter</li>
                                        <li>All</li>
                                        <li>Men's Jackets</li>
                                        <li>Men's Sweatshirts</li>
                                        <li>Men's Sweaters</li>
                                        <li>Men's Thermals</li>
                                        <li>Women's Jackets</li>
                                        <li>Women's Sweatshirts</li>
                                        <li>Women's Sweaters</li>
                                        <li>Women's Shrugs</li>
                                        <li>Kids SweatShirts</li>
                                        <li>Kids Jackets</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" alt="Home & Furniture" />

                    <div className={Styles.dropdown3}>
                        <div className={Styles.dropy}>
                            <p>Home & Furniture</p>
                            <RiArrowDropDownLine className={Styles.icon} />
                        </div>
                        <div className={Styles.menu}>
                            <ul className={Styles.mainMenu}>

                                <li>Men's Top Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Top Wear</li>
                                        <li>All</li>
                                        <li>Men's T-Shirts</li>
                                        <li>Men's Causaul Shirts</li>
                                        <li>Men's Formal Shirts</li>
                                        <li>Men's Kurtas</li>
                                        <li>Men's Ethnic Sets</li>
                                        <li>Men's Blazers</li>
                                        <li>Men's Raincoat</li>
                                        <li>Men's Windcheaters</li>
                                        <li>Men's Suit </li>
                                        <li>Men's Fabrics</li>
                                    </ul>
                                </li>

                                <li>Men's Bottom Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Bottom Wear</li>
                                        <li>All</li>
                                        <li>Men's Jeans</li>
                                        <li>Men's Trousers</li>
                                        <li>Men's Trackpants</li>
                                        <li>Men's Shorts</li>
                                        <li>Men's Cargos</li>
                                        <li>Men's Threefourths</li>
                                        <li>Men's Pyjamas & Loungepants</li>
                                        <li>Men's Dhoti</li>
                                        <li>Men's Ethnic Pyjama</li>
                                    </ul>
                                </li>

                                <li>Wommen Ethnic <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Wommen Ethnic  </li>
                                        <li>All</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas & Kurtis</li>
                                        <li>Women Kurta Sets & Salwar Suits</li>
                                        <li>Ethnic Dresses</li>
                                        <li>Women Dress Materials</li>
                                        <li>Women Gowns</li>
                                        <li>Women Lehenga Cholis</li>
                                        <li>Women Leggings & Patialas</li>
                                        <li>Women Palazzos & Shararas</li>
                                        <li>Women Blouse</li>
                                        <li>Women Dupatta</li>
                                    </ul>
                                </li>

                                <li>Men Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men Footwear</li>
                                        <li>All</li>
                                        <li>Men's Sports Shoes</li>
                                        <li>Men's Casual Shoes</li>
                                        <li>Men's Sandals & Floaters</li>
                                        <li>Men's Slippers & Flip Flops</li>
                                        <li>Men's Formal Shoes</li>
                                        <li>Men's Ethnic Shoes</li>
                                        <li>Shoe Care</li>
                                    </ul>

                                </li>


                                <li>Women Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Footwear</li>
                                        <li>All</li>
                                        <li>Women Flats</li>
                                        <li>Women Heels</li>
                                        <li>Women Wedges</li>
                                        <li>Women Slipper Flip Flops</li>
                                        <li>Women Casual Shoes</li>
                                        <li>Women Sports Shoes</li>
                                        <li>Women Ballerinas</li>
                                        <li>Women Ethnic Shoes</li>
                                        <li>Women Sneakers</li>
                                        <li>Women Walking Shoes</li>
                                        <li>Women Boots</li>
                                    </ul>
                                </li>


                                <li>Watches and Accessories <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Watches and Accessories</li>
                                        <li>Men & Women Watches</li>
                                        <li>Men & Women Sunglasses</li>
                                        <li>Wallets</li>
                                        <li>Men & Women Belts</li>
                                        <li>Men Fashion Jewellery</li>
                                        <li>Precious Articles</li>
                                        <li>Kids Accessories</li>
                                        <li>Women Fashion Jewellery</li>

                                    </ul>
                                </li>

                                <li>Women Western <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Western</li>
                                        <li>All</li>
                                        <li>Women Tops</li>
                                        <li>Women Dresses</li>
                                        <li>Women T-shirts & Polo T-shirts</li>
                                        <li>Women Jeans</li>
                                        <li>Women Nighties & Night Dresses</li>
                                        <li>Women Nightsuit</li>
                                        <li>Women Track Pants</li>
                                        <li>Women Trouser</li>
                                        <li>Women Jumpsuit</li>
                                        <li>Women Shapewear</li>
                                        <li>Women Sports Bra</li>

                                    </ul>
                                </li>

                                <li>Bags, Suitcases & Luggage <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Bags, Suitcase & Luggage</li>
                                        <li>All</li>
                                        <li>Bags & Backpacks</li>
                                        <li>Suitcases & Trolleys</li>
                                        <li>Dufflebags</li>
                                        <li>Rucksacks</li>
                                        <li>Handbags</li>
                                        <li>Slingbags</li>
                                        <li>Women's Clutches & Wallets</li>
                                        <li>Messenger Bags</li>
                                        <li>Travel Accessories</li>
                                    </ul>
                                </li>

                                <li>Kids <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Kids</li>
                                        <li>All</li>
                                        <li>Girls Dresses</li>
                                        <li>Boys & Girls Tshirts</li>
                                        <li>Boys & Girls Combosets</li>
                                        <li>Boys & Girls Ethnic Wear</li>
                                        <li>Boys & Girls Jeans</li>
                                        <li>Boys & Girls Shorts</li>
                                        <li>Boys & Girls Trackpants</li>
                                        <li>Boys & Girls Innerwear</li>
                                        <li>Infant Wear</li>
                                        <li>Kids Slipper Flip Flops</li>
                                        <li>Kids Sports Shoes</li>
                                    </ul>
                                </li>

                                <li>Essentials <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Essentials</li>
                                        <li>Men's Briefs & Trunks</li>
                                        <li>Men's Vests</li>
                                        <li>Men's Boxers</li>
                                        <li>Women Lingerie Sets</li>
                                        <li>Women Bra</li>
                                        <li>Women Panty</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas</li>
                                        <li>Women Kurta Sets</li>
                                        <li>Boys Innerwear</li>
                                        <li>Boys Innerwear</li>
                                        <li>Girls Innerwear</li>
                                        <li>Women Slipper Flip Flops</li>
                                    </ul>
                                </li>

                                <li>Winter <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Winter</li>
                                        <li>All</li>
                                        <li>Men's Jackets</li>
                                        <li>Men's Sweatshirts</li>
                                        <li>Men's Sweaters</li>
                                        <li>Men's Thermals</li>
                                        <li>Women's Jackets</li>
                                        <li>Women's Sweatshirts</li>
                                        <li>Women's Sweaters</li>
                                        <li>Women's Shrugs</li>
                                        <li>Kids SweatShirts</li>
                                        <li>Kids Jackets</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" alt="Appliances" />
                    <p>Appliances</p>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="Travel" />
                    <p>Travel</p>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="Beauty, Toys & More" />
                    <div className={Styles.dropdown4}>
                        <div className={Styles.dropy}>
                            <p>Beauty, Toys & More</p>
                            <RiArrowDropDownLine className={Styles.icon} />
                        </div>
                        <div className={Styles.menu}>
                            <ul className={Styles.mainMenu}>

                                <li>Men's Top Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Top Wear</li>
                                        <li>All</li>
                                        <li>Men's T-Shirts</li>
                                        <li>Men's Causaul Shirts</li>
                                        <li>Men's Formal Shirts</li>
                                        <li>Men's Kurtas</li>
                                        <li>Men's Ethnic Sets</li>
                                        <li>Men's Blazers</li>
                                        <li>Men's Raincoat</li>
                                        <li>Men's Windcheaters</li>
                                        <li>Men's Suit </li>
                                        <li>Men's Fabrics</li>
                                    </ul>
                                </li>

                                <li>Men's Bottom Wear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men's Bottom Wear</li>
                                        <li>All</li>
                                        <li>Men's Jeans</li>
                                        <li>Men's Trousers</li>
                                        <li>Men's Trackpants</li>
                                        <li>Men's Shorts</li>
                                        <li>Men's Cargos</li>
                                        <li>Men's Threefourths</li>
                                        <li>Men's Pyjamas & Loungepants</li>
                                        <li>Men's Dhoti</li>
                                        <li>Men's Ethnic Pyjama</li>
                                    </ul>
                                </li>

                                <li>Wommen Ethnic <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Wommen Ethnic  </li>
                                        <li>All</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas & Kurtis</li>
                                        <li>Women Kurta Sets & Salwar Suits</li>
                                        <li>Ethnic Dresses</li>
                                        <li>Women Dress Materials</li>
                                        <li>Women Gowns</li>
                                        <li>Women Lehenga Cholis</li>
                                        <li>Women Leggings & Patialas</li>
                                        <li>Women Palazzos & Shararas</li>
                                        <li>Women Blouse</li>
                                        <li>Women Dupatta</li>
                                    </ul>
                                </li>

                                <li>Men Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Men Footwear</li>
                                        <li>All</li>
                                        <li>Men's Sports Shoes</li>
                                        <li>Men's Casual Shoes</li>
                                        <li>Men's Sandals & Floaters</li>
                                        <li>Men's Slippers & Flip Flops</li>
                                        <li>Men's Formal Shoes</li>
                                        <li>Men's Ethnic Shoes</li>
                                        <li>Shoe Care</li>
                                    </ul>

                                </li>


                                <li>Women Footwear <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Footwear</li>
                                        <li>All</li>
                                        <li>Women Flats</li>
                                        <li>Women Heels</li>
                                        <li>Women Wedges</li>
                                        <li>Women Slipper Flip Flops</li>
                                        <li>Women Casual Shoes</li>
                                        <li>Women Sports Shoes</li>
                                        <li>Women Ballerinas</li>
                                        <li>Women Ethnic Shoes</li>
                                        <li>Women Sneakers</li>
                                        <li>Women Walking Shoes</li>
                                        <li>Women Boots</li>
                                    </ul>
                                </li>


                                <li>Watches and Accessories <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Watches and Accessories</li>
                                        <li>Men & Women Watches</li>
                                        <li>Men & Women Sunglasses</li>
                                        <li>Wallets</li>
                                        <li>Men & Women Belts</li>
                                        <li>Men Fashion Jewellery</li>
                                        <li>Precious Articles</li>
                                        <li>Kids Accessories</li>
                                        <li>Women Fashion Jewellery</li>

                                    </ul>
                                </li>

                                <li>Women Western <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Women Western</li>
                                        <li>All</li>
                                        <li>Women Tops</li>
                                        <li>Women Dresses</li>
                                        <li>Women T-shirts & Polo T-shirts</li>
                                        <li>Women Jeans</li>
                                        <li>Women Nighties & Night Dresses</li>
                                        <li>Women Nightsuit</li>
                                        <li>Women Track Pants</li>
                                        <li>Women Trouser</li>
                                        <li>Women Jumpsuit</li>
                                        <li>Women Shapewear</li>
                                        <li>Women Sports Bra</li>

                                    </ul>
                                </li>

                                <li>Bags, Suitcases & Luggage <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Bags, Suitcase & Luggage</li>
                                        <li>All</li>
                                        <li>Bags & Backpacks</li>
                                        <li>Suitcases & Trolleys</li>
                                        <li>Dufflebags</li>
                                        <li>Rucksacks</li>
                                        <li>Handbags</li>
                                        <li>Slingbags</li>
                                        <li>Women's Clutches & Wallets</li>
                                        <li>Messenger Bags</li>
                                        <li>Travel Accessories</li>
                                    </ul>
                                </li>

                                <li>Kids <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Kids</li>
                                        <li>All</li>
                                        <li>Girls Dresses</li>
                                        <li>Boys & Girls Tshirts</li>
                                        <li>Boys & Girls Combosets</li>
                                        <li>Boys & Girls Ethnic Wear</li>
                                        <li>Boys & Girls Jeans</li>
                                        <li>Boys & Girls Shorts</li>
                                        <li>Boys & Girls Trackpants</li>
                                        <li>Boys & Girls Innerwear</li>
                                        <li>Infant Wear</li>
                                        <li>Kids Slipper Flip Flops</li>
                                        <li>Kids Sports Shoes</li>
                                    </ul>
                                </li>

                                <li>Essentials <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Essentials</li>
                                        <li>Men's Briefs & Trunks</li>
                                        <li>Men's Vests</li>
                                        <li>Men's Boxers</li>
                                        <li>Women Lingerie Sets</li>
                                        <li>Women Bra</li>
                                        <li>Women Panty</li>
                                        <li>Women Sarees</li>
                                        <li>Women Kurtas</li>
                                        <li>Women Kurta Sets</li>
                                        <li>Boys Innerwear</li>
                                        <li>Boys Innerwear</li>
                                        <li>Girls Innerwear</li>
                                        <li>Women Slipper Flip Flops</li>
                                    </ul>
                                </li>

                                <li>Winter <span><GoChevronRight /></span>
                                    <ul className={Styles.innerMenu}>
                                        <li>More in Winter</li>
                                        <li>All</li>
                                        <li>Men's Jackets</li>
                                        <li>Men's Sweatshirts</li>
                                        <li>Men's Sweaters</li>
                                        <li>Men's Thermals</li>
                                        <li>Women's Jackets</li>
                                        <li>Women's Sweatshirts</li>
                                        <li>Women's Sweaters</li>
                                        <li>Women's Shrugs</li>
                                        <li>Kids SweatShirts</li>
                                        <li>Kids Jackets</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" alt="Two Wheelers" />

                    <div className={Styles.dropdown5}>
                        <div className={Styles.dropy}>
                            <p>Two Wheelers</p>
                            <RiArrowDropDownLine className={Styles.icon} />
                        </div>
                        <div className={Styles.menu2}>
                            <ul className={Styles.mainMenu2}>
                                <li>Petrol Vehicles</li>
                                <li>Electric Vehicles</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StyleSection;