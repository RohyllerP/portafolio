import React from 'react';
import Progress from "../components/progress/index";
import Icons from "../components/main-icons/icons";

function Main() {
  return (
    <div>
      <div id="main" className='p-body'>
        <h2>Skills</h2>
        <div className='main-progress grid-main'>
          <Progress text="Javascript" textTwo="50%" width="50%" />
          <Progress text="Mysql" textTwo="80%" width="80%" />
          <Progress text="React" textTwo="60%" width="60%" />
          <Progress text="Html y css" textTwo="90%" width="90%" />
          <Progress text="Node js" textTwo="30%" width="30%" />
          <Progress text="Next js" textTwo="60%" width="60%" />
          <Progress text="Git" textTwo="30%" width="30%" />
        </div>
        <div className='div-plataformas'>
          <h3>Plataformas e institutos: </h3>
          <p className='p-bajo'>Todas estas empresas me ayudaron a mi aprendizaje.</p>
          <div className='div-main-icons'>
            <Icons />
          </div>
        </div>
      </div>
      <div id="main-proyectos" className='main-proyectos p-body'>
        <section className="main-section-1">
          <article>
            <div className='nube-div'>
              <div id="img-nube">
                <p className='p-nube'>Todas estas certificaciones fueron en base a diferentes pruebas tanto <span className='color-orange'>online</span> como <span className='color-orange'>presencial.</span>
                </p>
                <p className='p-nube'>Si quieres ver mas certificaciones entra en mi perfil de linkedin:</p>
                <button className='buttonOne'><a href="/#">Click aqui</a></button>
              </div>
              <img id="img-main" src="/img/man.png" alt="man"/> 
            </div>
            <div className='div-cartelera flex'>
              <div className='img-cartelera'>
                <p><a href="https://drive.google.com/file/d/1_gEIM-6nxcfSllqdmcBBBxaH3XaBd2HV/view" target="_blank">Carrera Fundamentos de programación</a></p>
              </div>
              <div className='img-cartelera'>
                <p><a href="https://drive.google.com/file/d/1PXpi-jo_zMP1u2sGUo1qpBYSsLqP0-6y/view" target="_blank">Mysql (bases de datos)</a></p>
              </div>
              <div className='img-cartelera'>
                <p><a href="https://www.udemy.com/certificate/UC-5be10443-489d-4b91-9e43-041b420441f9/" target="_blank">React js</a></p>
              </div>
              <div className='img-cartelera'>
                <p><a href="https://drive.google.com/file/d/1zD56YpkjO3YH14QAffmsnkn89_SeRyR6/view" target="_blank">Ingles A1</a></p>
              </div>
            </div>
            
          </article>
        </section>
      </div>
    </div>
  )
}

export default Main