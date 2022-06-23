import React from 'react'

function Header(){
    return(
        <header>
            <input type="color" class="color-input" id="color-input" />
            <select id="color-scheme">
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
            </select>
            <button id="btn">Get color scheme</button>
      </header>
    )
}

export default Header
