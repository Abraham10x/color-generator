import React, {useState, useEffect} from 'react'

function Header(){

    const [formData, setFormData] = useState({
        color: '',
        colorScheme: ''
    })

    function handleChange(event){
        const {name, value} = event.target
        setFormData(preState => {
            return{
                ...preState,
                [name]: value
            }
        })
    }

    function submitData(){
        console.log(formData)
    }

    return(
        <header>
            <input type="color" 
                className="color-input" 
                id="color-input"
                value={formData.color}
                onChange={handleChange}
                name="color"
            />
            <select 
                id="color-scheme" 
                onChange={handleChange}
                value={formData.colorScheme}
                name="colorScheme"
            >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
            </select>
            <button id="btn" onClick={submitData}>Get color scheme</button>
      </header>
    )
}

export default Header
