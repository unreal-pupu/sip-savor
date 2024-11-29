/* eslint-disable no-unused-vars */
import React from 'react'
import './FoodMenu.css'
import MENU1 from '../../assets/MENU1.jpg'
import MENU2 from '../../assets/MENU2.jpg'
import MENU3 from '../../assets/MENU3.jpg'
import MENU4 from '../../assets/MENU4.jpg'
import MENU5 from '../../assets/MENU5.jpg'
import MENU6 from '../../assets/MENU6.jpg'
import MENU7 from '../../assets/MENU7.jpg'
import MENU8 from '../../assets/MENU8.jpg'
import WEM from '../../assets/WEM.jpg'
import PAS1 from '../../assets/PAS1.jpg'
import PAS2 from '../../assets/PAS2.jpg'
import SAL3 from '../../assets/SAL3.jpg'
import SAL4 from '../../assets/SAL4.jpg'
import SAL5 from '../../assets/SAL5.jpg'
import SAL6 from '../../assets/SAL6.jpg'
import SAL7 from '../../assets/SAL7.jpg'
import SAL8 from '../../assets/SAL8.jpg'
import SAL9 from '../../assets/SAL9.jpg'
import SAL1 from '../../assets/SAL1.jpg'
import PASTA1 from '../../assets/PASTA1.jpg'
import PASTA2 from '../../assets/PASTA2.jpg'
import PASTA3 from '../../assets/PASTA3.jpg'
import PASTA4 from '../../assets/PASTA4.jpg'
import PASTA5 from '../../assets/PASTA5.jpg'
import PASTA6 from '../../assets/PASTA6.jpg'
import PASTA7 from '../../assets/PASTA7.jpg'
import HK from '../../assets/HK.jpg'
import SEA1 from '../../assets/SEA1.jpg'
import SEA2 from '../../assets/SEA2.jpg'
import SEA3 from '../../assets/SEA3.jpg'
import SEA4 from '../../assets/SEA4.jpg'
import SEA5 from '../../assets/SEA5.jpg'
import SEA6 from '../../assets/SEA6.jpg'
import SEA7 from '../../assets/SEA7.jpg'
import SEA8 from '../../assets/SEA8.jpg'
import SEA9 from '../../assets/SEA9.jpg'
import IT1 from '../../assets/IT1.jpg'
import IT2 from '../../assets/IT2.jpg'
import IT3 from '../../assets/IT3.jpg'
import IT4 from '../../assets/IT4.jpg'
import CONT1 from '../../assets/CONT1.jpg'
import CONT2 from '../../assets/CONT2.jpg'
import CONT3 from '../../assets/CONT3.jpg'
import CONT5 from '../../assets/CONT5.jpg'
import CONT6 from '../../assets/CONT6.jpg'
import CONT7 from '../../assets/CONT7.jpg'
import CONT8 from '../../assets/CONT8.jpg'
import CONT10 from '../../assets/CONT10.jpg'
import CONT11 from '../../assets/CONT11.jpg'
import CONT12 from '../../assets/CONT12.jpg'
import CONT13 from '../../assets/CONT13.jpg'
import CONT14 from '../../assets/CONT14.jpg'
import GGGG1 from '../../assets/GGGG1.jpg'
import GGGG2 from '../../assets/GGGG2.jpg'
import GGGG3 from '../../assets/GGGG3.jpg'
import GGGG4 from '../../assets/GGGG4.jpg'
import GGGG5 from '../../assets/GGGG5.jpg'
import GGGG6 from '../../assets/GGGG6.jpg'
import GGGG7 from '../../assets/GGGG7.jpg'
import BBQ from '../../assets/BBQ.jpg'
import Ha from '../../assets/Ha.jpg'
import HL from '../../assets/HL.jpg'
import House from '../../assets/House.jpg'
import QA from '../../assets/QA.jpg'
import CHEF1 from '../../assets/CHEF1.jpg'
import CHEF2 from '../../assets/CHEF2.jpg'
import CHEF3 from '../../assets/CHEF3.jpg'
import CHEF4 from '../../assets/CHEF4.jpg'
import CHEF5 from '../../assets/CHEF5.jpg'
import CHEF6 from '../../assets/CHEF6.jpg'
import CHEF7 from '../../assets/CHEF7.jpg'
import CHEF8 from '../../assets/CHEF8.jpg'
import CHEF9 from '../../assets/CHEF9.jpg'
import QE from '../../assets/QE.jpg'
import Pizzar from '../../assets/Pizzar.jpg'
import QF from '../../assets/QF.jpg'
import AFR1 from '../../assets/AFR1.JPG'
import AFR2 from '../../assets/AFR2.JPG'
import AFR3 from '../../assets/AFR3.JPG'
import AFR4 from '../../assets/AFR4.JPG'
import AFR5 from '../../assets/AFR5.JPG'
import DEST1 from '../../assets/DEST1.jpg'
import DEST2 from '../../assets/DEST2.jpg'
import DEST3 from '../../assets/DEST3.jpg'
import DEST4 from '../../assets/DEST4.jpg'
import DEST5 from '../../assets/DEST5.jpg'
import DEST6 from '../../assets/DEST6.jpg'
import DEST7 from '../../assets/DEST7.jpg'
import DEST8 from '../../assets/DEST8.jpg'


const FoodMenu = () => {
  return (
    <>
     <div className='foodmenu-container'>
      <div className='menu-category'>
      <h2>Flavorful Bites</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={MENU7} alt="" />
                    <div className="food-details">
                        <h3>Air Fryer Mozzarella Sticks</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={MENU1} alt="" />
                    <div className="food-details">
                        <h3>Garlic Shrimp Crostini with Avocado</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={MENU2} alt="" />
                    <div className="food-details">
                        <h3>Shrimp Fritters with Lime Mayonnais</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={MENU4} alt="" />
                    <div className="food-details">
                        <h3>Mushroom Bruschetta</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={MENU5} alt="" />
                    <div className="food-details">
                        <h3>Grilled Savory Beef Kebabs</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={MENU6} alt="" />
                    <div className="food-details">
                        <h3>Tomato Tartlets with Puff Pastry</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={MENU8} alt="" />
                    <div className="food-details">
                        <h3>Grilled Shrimp and Chorizo</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={MENU3} alt="" />
                    <div className="food-details">
                        <h3>Sausage Cream Cheese Crescents</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>
      </div>

      <div className='menu-category'>
      <h2>Fresh Fare</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={PAS1} alt="" />
                    <div className="food-details">
                        <h3>Ambrosia Salad</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={PAS2} alt="" />
                    <div className="food-details">
                        <h3>Potato Salad</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={SAL3} alt="" />
                    <div className="food-details">
                        <h3>Caesar Salad</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={SAL1} alt="" />
                    <div className="food-details">
                        <h3>Golden Corral Crab Salad</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SAL5} alt="" />
                    <div className="food-details">
                        <h3>Mixed Berry Fruit Salad</h3>                    
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SAL6} alt="" />
                    <div className="food-details">
                        <h3>Greek Yogurt Fruit Salad </h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SAL9} alt="" />
                    <div className="food-details">
                        <h3>Peach Caprese Salad</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SAL8} alt="" />
                    <div className="food-details">
                        <h3>Paleo Grilled Chicken Cobb Salad</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>
      </div>

      <div className='menu-category'>
      <h2>Tasty Offerings</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={PASTA3} alt="" />
                    <div className="food-details">
                        <h3>Aglio e Olio</h3>                    
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={PASTA4} alt="" />
                    <div className="food-details">
                        <h3>Creamy Chicken Alfredo Fettuccine</h3>               
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={PASTA5} alt="" />
                    <div className="food-details">
                        <h3>Spaghetti Bolognese</h3>                   
                     <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={PASTA1} alt="" />
                    <div className="food-details">
                        <h3>Pasta Fiesta</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={PASTA2} alt="" />
                    <div className="food-details">
                        <h3>Spaghetti Marinara</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={PASTA6} alt="" />
                    <div className="food-details">
                        <h3>Macaroni Salad</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={HK} alt="" />
                    <div className="food-details">
                        <h3>Macaroni Salad</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={PASTA7} alt="" />
                    <div className="food-details">
                        <h3>Honey Pepper Chicken Mac and Cheese</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>
      </div>

      <div className='menu-category'>
      <h2>Unforgettable Flavors</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={SEA1} alt="" />
                    <div className="food-details">
                        <h3>Grilled Lobster Tails</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={SEA2} alt="" />
                    <div className="food-details">
                        <h3>Spaghetti alle Vongole</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={SEA3} alt="" />
                    <div className="food-details">
                        <h3>Clam Chowder in a Bread Bowl</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={SEA4} alt="" />
                    <div className="food-details">
                        <h3>Seared Scallops with Fennel and Orange</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SEA5} alt="" />
                    <div className="food-details">
                        <h3>Baked Sea Scallops</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SEA7} alt="" />
                    <div className="food-details">
                        <h3>Seafood Boil</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SEA9} alt="" />
                    <div className="food-details">
                        <h3>Lemon Grilled Salmon</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={SEA8} alt="" />
                    <div className="food-details">
                        <h3>Garlic Butter Shrimp</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>

      </div>

      <div className='menu-category'>
      <h2>Savor the Moment</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={IT1} alt="" />
                    <div className="food-details">
                        <h3>Sicilian Eggplant Caponata</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={IT2} alt="" />
                    <div className="food-details">
                        <h3>Classic Tiramisu</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={IT3} alt="" />
                    <div className="food-details">
                        <h3>Beef Lasagna</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={IT4} alt="" />
                    <div className="food-details">
                        <h3>Focaccia</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT1} alt="" />
                    <div className="food-details">
                        <h3>Shakshuka</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT10} alt="" />
                    <div className="food-details">
                        <h3>Roasted Tomato and Bell Pepper Soup</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT11} alt="" />
                    <div className="food-details">
                        <h3>Cream of Mushroom Soup</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT2} alt="" />
                    <div className="food-details">
                        <h3>Palafei Pita Sandwich</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>
      </div>

      <div className='menu-category'>
      <h2>Bite into Flavor</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={CONT3} alt="" />
                    <div className="food-details">
                        <h3>Dim Sum</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CONT5} alt="" />
                    <div className="food-details">
                        <h3>Futomaki Sushi Rolls</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CONT6} alt="" />
                    <div className="food-details">
                        <h3>Creamy Garlic Parmesan Chicken Pasta</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CONT7} alt="" />
                    <div className="food-details">
                        <h3>Garlic Parmesan Wings</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT8} alt="" />
                    <div className="food-details">
                        <h3>Succulent Beef Wellington</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT12} alt="" />
                    <div className="food-details">
                        <h3>Grilled Lobster with Garlic & Herb Butter</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT13} alt="" />
                    <div className="food-details">
                        <h3>Grilled Squid</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CONT14} alt="" />
                    <div className="food-details">
                        <h3>Oven-baked Potatoes</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>
      </div>

      <div className='menu-category'>
      <h2>Gastronomic Goodies</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={GGGG2} alt="" />
                    <div className="food-details">
                        <h3>Vegetable Fried Rice</h3>
                        <p className="price">$5.99</p>
                        <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                    </div>
                </div>
                <div class="food-item">
                    <img src={GGGG3} alt="" />
                    <div className="food-details">
                        <h3>Pork Fried Rice</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={GGGG4} alt="" />
                    <div className="food-details">
                        <h3>Shrimp Fried Rice</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={GGGG5} alt="" />
                    <div className="food-details">
                        <h3>Pineapple Fried Rice</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={House} alt="" />
                    <div className="food-details">
                        <h3>Oven Roasted Piri Piri Chicken</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={Ha} alt="" />
                    <div className="food-details">
                        <h3>Pan-seared Steak with Garlic Butter</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={QA} alt="" />
                    <div className="food-details">
                        <h3>Cripsy Edge Buttermilk Pancake</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={GGGG1} alt="" />
                    <div className="food-details">
                        <h3>Burger</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>

            

      </div>

      <div className='menu-category'>
      <h2>Taste Adventures</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={GGGG6} alt="" />
                    <div className="food-details">
                        <h3>Charcuterie Board(Meat & Cheese Platter)</h3>
                        <p className="price">$10.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={GGGG7} alt="" />
                    <div className="food-details">
                        <h3>Mediterranean Hummus Platter with Crudites and Pita Bread</h3>
                        <p className="price">$11.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CHEF1} alt="" />
                    <div className="food-details">
                        <h3>Vegan Cauliflower Gyros</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CHEF2} alt="" />
                    <div className="food-details">
                        <h3>Hearty Beef Stew</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CHEF3} alt="" />
                    <div className="food-details">
                        <h3>Roasted Plantain & Black Bean Vegan Bowl</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CHEF4} alt="" />
                    <div className="food-details">
                        <h3>Mushroom and Spinach Omelette with Avocado</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CHEF5} alt="" />
                    <div className="food-details">
                        <h3>Vegan Cheeseburger Salad Bowls</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CHEF6} alt="" />
                    <div className="food-details">
                        <h3>Veggie Spinach Wraps with Hummus</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={QE} alt="" />
                    <div className="food-details">
                        <h3>Jamaican Beef Patty</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={QF} alt="" />
                    <div className="food-details">
                        <h3>Honey infused Strawberry & Citrus boost</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>

            

      </div>

      <div className='menu-category'>
      <h2>Handcrafted Dishes</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={CHEF7} alt="" />
                    <div className="food-details">
                        <h3>Egusi Soup</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={AFR1} alt="" />
                    <div className="food-details">
                        <h3>Tagine</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={AFR3} alt="" />
                    <div className="food-details">
                        <h3>Bunny Chow</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={CHEF8} alt="" />
                    <div className="food-details">
                        <h3>Banga Soup</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={AFR2} alt="" />
                    <div className="food-details">
                        <h3>Jozi Biltong Slices </h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={CHEF9} alt="" />
                    <div className="food-details">
                        <h3>Afang Soup</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={AFR4} alt="" />
                    <div className="food-details">
                        <h3>Thiakry</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={AFR5} alt="" />
                    <div className="food-details">
                        <h3>Hearty Lamb & Vegetable Potjie</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>

            

      </div>

      <div className='menu-category'>
      <h2>Epicurean Pleasures</h2>
            <div className="food-items">
                <div className="food-item">
                    <img src={DEST8} alt="" />
                    <div className="food-details">
                        <h3>Vegan No-Bake Coffe Cheesecakes</h3>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={DEST1} alt="" />
                    <div className="food-details">
                        <h3>Caramel Brownie Cheesecake</h3>
                        <p className="price">$5.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={DEST2} alt="" />
                    <div className="food-details">
                        <h3>Classic Vanilla Panna Cotta</h3>
                        <p className="price">$6.49</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
                <div class="food-item">
                    <img src={DEST3} alt="" />
                    <div className="food-details">
                        <h3>Chocolate Strawberry Cake</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={DEST4} alt="" />
                    <div className="food-details">
                        <h3>Baileys Cookies and Cream Parfaits </h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={DEST5} alt="" />
                    <div className="food-details">
                        <h3>Baileys Chocolate Cheesecake Trifle</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={DEST6} alt="" />
                    <div className="food-details">
                        <h3>Lemon Blueberry Shortbread Mousse</h3>
                        <p className="price">$7.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>

                <div class="food-item">
                    <img src={DEST7} alt="" />
                    <div className="food-details">
                        <h3>Banana Cream Pie Chia Pudding</h3>
                        <p className="price">$3.99</p>
                    </div>
                    <div className="drink-button-container">
                 <button className="add-to-cart">add</button>
                 <button className="pay-now">Pay</button>
            </div>
                </div>
            </div>

            

      </div>
    </div>
    </>
  )
}

export default FoodMenu