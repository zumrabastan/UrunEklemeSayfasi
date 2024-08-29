"use client";
import Link from 'next/link';
import AddProduct from '../add-product/page';
import Products from "../products/page";



const Home = () => {

  return (
    <div className='flex items-center justify-center min-h-screen space-x-4'>
        <Link className='text-white font-bold py-2 px-4 rounded border-solid border-2
        transition ease-in-out delay-150 bg-violet-400 hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-200  ' 
        href ='/add-product'>Add product</Link><br></br>
        <Link className='text-white font-bold py-2 px-4 rounded border-solid border-2
        transition ease-in-out delay-150 bg-violet-400 hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-300' 
        href ='/products'>Product List</Link>
    </div>
  )
}
 
export default Home;