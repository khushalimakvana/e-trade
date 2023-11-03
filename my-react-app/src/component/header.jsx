import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/Homepage/asset 0.png';
// import Search from '../assets/search.png.svg'
import Heart from '../assets/heart.svg'
import Cart from '../assets/cart.svg'
import Person from '../assets/persone.svg'

export default function Header(){
    return (
        <>
            <div className="main header ">
                <div className='bg-black text-white'>
                    <div className="header flex justify-between ">
                        <div className="left-section flex pl-72 ">
                            <Dropdown className=''>
                                <Dropdown.Toggle className='focus:border-none text-white' variant="" id="">English</Dropdown.Toggle>
                                <Dropdown.Menu className=''>
                                    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className='focus:border-none text-white' variant="" id="">USD</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AUD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className=''>
                            <ul className='flex pe-56'>
                                <li className='pr-8'>Help</li>
                                <li className='pr-8'>Join Us</li>
                                <li className='pr-8'>Sign In</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="flex bg-white rounded-2xl mb-3 ">
                        <img src={Logo} className='pt-1 mt-4 ml-80' alt="" />
                        <ul className='flex justify-center mt-4 font-bold'>
                            <div className='ml-20'>
                                <Dropdown>
                                    <Dropdown.Toggle className='focus:border-none font-bold relative border-b-[3px]' variant="" id="">Home</Dropdown.Toggle>

                                    <Dropdown.Menu className=''>
                                        <Dropdown.Item href="#/action-1" className=''>Home-Elecctronics</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Home-NFT</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Home-Fashion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Home-Jewellery</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Home-Furniture</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Home-Multipurpose</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">RTL-Version</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pl-5'>
                                <Dropdown>
                                    <Dropdown.Toggle className='focus:border-none font-bold' variant="" id="">Shop</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Shop With Slidebar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Shop No Slidebar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 4</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 5</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 6</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 7</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Product-Variation 8</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pl-5'>
                                <Dropdown>
                                    <Dropdown.Toggle className='focus:border-none font-bold' variant="" id="">Pages</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Wishlist</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Chechout</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Accout</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Sign Up</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Sign In</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Forget passward</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Reset Passward</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Privacy Policy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Coming Soon</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">404 Error</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Typography</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pt-2 ml-7'>About</div>
                            <div className='ml-7'>
                                <Dropdown>
                                    <Dropdown.Toggle className='focus:border-none font-bold ' variant="" id="">Blog</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Blog List</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Blog Grid</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Standard Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Gallery Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Video Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Audio Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Quote Post</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='pt-2 pl-7'>Contact</div>
                            <div className='pl-24 pt-1 font-normal'>
                                <div className=' border border-gray-500 rounded-md  text-center text-gray-500'>
                                    <button className='pl-3 pr-10 pb-2 pt-2'>What are you looking for?</button>
                                </div>
                            </div>
                        </ul>
                        <div className='flex mt-4'>
                            {/* <img src={Search} className='' alt="" /> */}
                            <img src={Heart} className='h-6 mt-2 ml-4' alt="" />
                            <img src={Cart} className='h-6  mt-2 ml-3'  alt="" />
                            <img src={Person}  className='h-6 mt-2 ml-3' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}       