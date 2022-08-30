import React, { memo } from 'react'
import classNames from 'classnames'



const FieldItem = ({ handleClick, itemValue } :
    {
        handleClick: () => void,
        itemValue: number
    }) => {

    const itemStyles = classNames(`d-flex w-[20px] h-[20px] border-2 border-solid`, itemValue ? 'bg-pink-300' : '')

    return (
        <div
            className={itemStyles}
            onClick={handleClick}
        />
    )
}

export default memo(FieldItem)