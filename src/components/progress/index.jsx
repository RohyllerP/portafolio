import React from "react";
import styled,{keyframes} from "styled-components";

const rotate = keyframes`
  from {
    width:0%;
  }

  to {
    width: ${(props) => props.width};
  }
`;
const Agregar = styled.div`
    width: ${(props) => props.width};
    padding: 5px;
    height: 5px;
    border-radius: 3px;
    background-color: #FF5D00;
    animation: ${rotate} 2s linear;
`;
function Index({ text, textTwo, width }) {
    return (
        <div style={{"marginBottom": "30px"}}>
            <div className="flex">
                <p>{text}</p>
                <span>{textTwo}</span>
            </div>
            <div className='progressOne'>
                <Agregar width={width}></Agregar>
            </div>
        </ div>
    )
}

export default Index