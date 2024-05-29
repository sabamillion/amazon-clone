import React, { useContext } from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

function Header() {

    const [{ user, basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
},0)

    return (
        <section className={classes.fixed}>
            <section>
                <div className={classes.header_container}>
                    {/* logo section below */}
                    <div className={classes.logo_container}>
                        <Link to="/">
                            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                        </Link>
                        <div className= {classes.delivery} >
                            <span>
                                <SlLocationPin/>
                            </span>
                            <div>
                                <p>Delivering to</p>
                                <span>Virginia</span>
                            </div>           
                        </div>
                    </div>
                    {/* search section below */}
                    <div className={classes.search}>
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" name="" id="" placeholder='Search Amazon'></input>
                    <BsSearch size={38} />
                    </div>  
                {/* right side link below */}
                    <div className={classes.order_container}>
                        <Link to="" className={classes.language}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="US Flag" />
                            <select name="" id="">
                                <option value="">EN</option>
                            </select>
                        </Link>
                    {/* three far right components below */}
                        <Link to={!user && "/auth"}>
                            <div>
                                {user ? (
                                        <>
                                        <p>Hello {user?.email?.split("@")[0]}</p>
                                        <span onClick={()=>auth.signOut()}>Sign Out</span>
                                        </>                                        
                                ) : (
                                    <>
                                        <p>Hello, Sign In</p>
                                        <span>Account & Lists</span>    
                                    </>                                         
                                    )}                                 
                            </div>                   
                        </Link>
                        {/* orders section below */}
                        <Link to='/orders' >
                        <p>Returns</p>
                        <span>& Orders</span>
                        </Link>
                    {/* cart section below*/}
                        <Link to="/cart" className={classes.cart}>
                            <BiCart size={35} />
                            <span>{ totalItem }</span>
                        </Link>      
                    </div> 
                </div>  
            </section>
    <LowerHeader />
        </section>
    );
};

export default Header;