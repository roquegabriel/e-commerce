import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item }) => {

  // cart context
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  //Destructure item
  const { id, title, image, price, amount } = item
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className='max-w-[80px]' />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)}>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          {/* quantity */}
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className='flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className='flex h-full flex-1 justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex flex-1 items-center justify-around'>$ {price}</div>
            {/* final price  */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem