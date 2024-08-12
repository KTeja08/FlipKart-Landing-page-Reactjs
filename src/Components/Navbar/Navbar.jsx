import React, { useState } from 'react'; 
import Styles from './Navbar.module.css';
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ wishlist = [], cart = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <div className={Styles.navbar}>
      <div className={Styles.flex}>
        <div className={Styles.logo}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
            alt="logo" 
          />
        </div>

        <div className={Styles.input}>
          <div className={Styles.search}>
            <CiSearch className={Styles.searchIcon} />
            <input 
              type="text" 
              placeholder='Search for Products, Brands and More'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              onClick={handleSearchSubmit}
              className={Styles.searchButton}
            >
              Search
            </button>
          </div>
        </div>

        <div className={Styles.user}>
          <div className={Styles.user2}>
            <img 
              className={Styles.fill} 
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" 
              alt="user-logo" 
            />
            <span>Login</span>
            <RiArrowDropDownLine className={Styles.dropDown} />
          </div>

          <div className={Styles.hoverLogin}>
            <div className={Styles.newUser}>
              <p>New Customer?</p>
              <a href="#">Sign Up</a>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" 
                alt="user_logo" 
              />
              <span>My Profile</span>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" 
                alt="f_zone" 
              />
              <span>Flipkart Plus Zone</span>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" 
                alt="orders" 
              />
              <span>Orders</span>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" 
                alt="wish" 
              />
              <span>Wishlist ({wishlist.length})</span>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" 
                alt="reward" 
              />
              <span>Rewards</span>
            </div>

            <div className={Styles.f_Item}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" 
                alt="Gift Cards" 
              />
              <span>Gift Cards</span>
            </div>
          </div>
        </div>

        <div className={Styles.cart_logo}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" 
            alt="cart-logo" 
          />
          <span>Cart ({cart.length})</span>
        </div>

        <div className={Styles.seller}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" 
            alt="seller-logo" 
          />
          <span>Become a Seller</span>
        </div>

        <div className={Styles.dots}>
          <div className={Styles.dots2}>
            <img 
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" 
              alt="3-dots" 
            />
          </div>

          <div className={Styles.Fr_Item}>
            <div className={Styles.Fr}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" 
                alt="bell" 
              />
              <span>Notifications Preferences</span>
            </div>

            <div className={Styles.Fr}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" 
                alt="earphone" 
              />
              <span>24x7 Customer Care</span>
            </div>

            <div className={Styles.Fr}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" 
                alt="arrow" 
              />
              <span>Advertise</span>
            </div>

            <div className={Styles.Fr}>
              <img 
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" 
                alt="download" 
              />
              <span>Download App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


