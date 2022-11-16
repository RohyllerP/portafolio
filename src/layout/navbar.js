import React,{useRef, useState} from 'react'
import Button from '../components/buttons/button1';
import ButtonTwo from '../components/buttons/button2';

function Navbar() {
    const [display,setDisplay] = useState('none');

    return (
        <div id="div-header" className='p-body'>
            <nav id="header-nav" className="flex">
                <div>
                    <h1>RP</h1>
                </div>
                <div id="div-header-ul">
                    <ul id="header-ul">
                        <li><a href="/#">Sobre mi</a></li>
                        <li><a href="/#">Experiencia</a></li>
                        <li><a href="/#">Contactarme</a></li>
                        <li className='renegado'><button className='buttonOne'><a href="/#">Curriculum</a></button></li>
                    </ul>
                </div>
                <div style={{display}}>
                    <div >
                        <p>menu</p>
                    </div>
                </div>
            </nav>
            <div className='div-menu'>
                <ButtonTwo />
            </div>
            

            <div id="content-img" className='flex'>
                <div className='content-img-div-1'>
                    <h1>Freelancer Frontend y administrador de bases de datos</h1>
                    <br />
                    <p>Mi nombre es Rohyller Pereira <span className='color-orange'>!!</span></p>
                    <br />
                    <p>
                    Desde que tengo memoria me ha gustado <strong className='color-orange'>mucho la tecnología</strong> y 
                    que mejor que diseñar sitios webs responsive
                    donde demuestro las cosas que puedo hacer.
                    </p>
                    <br/>
                    <Button text="Contactarme" />
                </div>
                <div className='content-img-div-2'>
                    <img id="header-img" src="/img/handsome.png" alt="handsome man" />
                </div>
            </div>
        </div>
    )
}

export default Navbar