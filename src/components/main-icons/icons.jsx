import React from 'react'
const datos = [
    {
        id: 1,
        url: "/iconos/cadif1.png",
        web: "https://cadif1.com/",
        width: "140px",
        height: "50px",
        alt: "Cadif1"
    },
    {
        id: 2,
        url: "/iconos/udemy.png",
        web: "https://www.udemy.com/",
        width: "100px",
        height: "70px",
        alt: "Udemy"
    },
    {
        id:3, 
        url: "/iconos/youtube.png",
        web: "https://www.youtube.com/",
        width: "70px",
        height: "60px",
        alt: "Youtube"
    },
    {
        id:4,
        url: "/iconos/gracosoft.png",
        web: "https://gracosoft.com/",
        width: "180px",
        height: "40px",
        alt: "Gracosoft"
    },
    {
        id: 5,
        url: "/iconos/open-bootcamp.png",
        web: "https://open-bootcamp.com/",
        width: "80px",
        height: "50px",
        alt: "Open bootcamp"
    }
]

function Example({web,src,width,height,alt}) {
    return(
        <div>
            <a href={web} target="_blank"><img src={src} width={width} height={height} alt={alt} /></a>
        </div>
    )
}
function Icons() {
    return (
        <div className="div-icons flex">
            {
                datos.map((post) => (
                    <div key={post.id}>
                        <Example 
                            web={post.web}
                            src={post.url}
                            width={post.width}
                            height={post.height}
                            alt={post.alt}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Icons