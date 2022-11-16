import React,{useRef} from 'react'

function Button2() {
  return (
    <>
        <input type="checkbox" id="btn-menu" />
        <label for="btn-menu" class="lbl-menu">
            <span id="spn1"></span>
            <span id="spn2"></span>
            <span id="spn3"></span>
        </label>
    </>
  )
}

export default Button2