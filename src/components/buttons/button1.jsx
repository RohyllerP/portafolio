import React from 'react'

function Button1({text}) {
    return (
        <div className='animacion-header'>
            <button className='buttonThree anima-button'>{text}</button>
            <img id="anima-img" src="/iconos/flecha-arriba.png" alt="flecha" />
            <div className='animacion-4'></div>
            <div className='animacion-5'></div>
        </div>
    )
}

export default Button1