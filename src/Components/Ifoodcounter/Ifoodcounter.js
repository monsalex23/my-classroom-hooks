import React, { useState, useEffect } from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=>{
        // document.getElementById('moeda').innerHTML = 2.00 *value
        console.log(`el style del boton actual es: ${buttonStyle}`)
    },[buttonStyle])

    function down() {

        if (value <= 1) {
            setButtonStyle('counter-button-minus-desactive')
            //mudar el css

        }
        if (value > 0) {
            setValue(value - 1)
        }
    }

    function up() {
        setValue(value + 1)
        setButtonStyle('counter-button-minus-active')
    }

    return (
        <div className='counter-wrapper'>
            <button className={buttonStyle} onClick={down}>
                -
            </button>
            <p>{value}</p>
            <button className='counter-button-plus-active' onClick={up}>
                +
            </button>

            <button id='moeda'>20,00 r$

            </button>
        </div>
    )
}