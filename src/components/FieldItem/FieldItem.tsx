import React from 'react'
import classNames from 'classnames'



const FieldItem = ({ handleClick, itemValue, itemWidth }:
    {
        handleClick: () => void, 
        itemValue: number,
        itemWidth: number
    }) => {

    const itemStyles = classNames(`d-flex w-[${itemWidth}px] h-[${itemWidth}px] border-2 border-solid`, itemValue ? 'bg-pink-300' : '') 
      
    return (
        <div
            className={itemStyles}
            onClick={handleClick}
            style={{
               
            }}>

        </div>
    )
}

export default FieldItem