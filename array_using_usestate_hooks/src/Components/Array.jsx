import React, { useState } from 'react'
import './Array.css'

const Array = () => {

    const bioData = [
        {id: 0, name: "Parimal"},
        {id: 1, name: "Uttkarsh"},
        {id: 2, name: "Bullu"},
        {id: 3, name: "ArchProtios"}
    ];

    const [myArray, setMyArray] = useState(bioData);

    const arrayClear = () => {
        setMyArray([]);
    }

    return (
        <>
            {
                myArray.map((elem) => <h1 className='array'>Id: {elem.id} & Name: {elem.name} </h1>)
            }
            <button onClick={arrayClear}>Clear</button>
        </>
    )
}

export default Array
