import React from 'react'

function Checkbox({ title, name, id, value, onchange }) {
    return (
        <>
            <div className='flex gap-2'>
                <input
                    type='checkbox'
                    name={name}
                    id={id}
                    value={value}
                    onChange={onchange}
                />
                <label htmlFor=''>{title}</label>
            </div>
        </>
    )
}

export default Checkbox
