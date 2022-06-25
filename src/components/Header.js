import React, {useState, useEffect} from 'react'
import Main from './Main'

function Header(){

    const [formData, setFormData] = useState({
        color: '#000000',
        colorScheme: 'monochrome'
    })

    const [color, setColor] = useState([])
    const [click, setClick] = useState(false)

    function handleChange(event){
        const {name, value} = event.target
        setFormData(preState => {
            return{
                ...preState,
                [name]: value
            }
        })
    }
    
    let colorBox
    
    useEffect(()=>{
        fetch(`https://www.thecolorapi.com/scheme?hex=${formData.color.substring(1)}&mode=${formData.colorScheme}`)
        .then(response => response.json())
        .then(data => setColor(data.colors))
    }, [click])

    function submitData(){
        console.log(formData)
        console.log(color)
        console.log(click)
        setClick(state => !state)
    }

    colorBox = color.map(item => (
        <Main
            key={item.hex.value}
            color={item.hex.value}
        />
    ))

    return(
        <>
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
        <main>
            {colorBox}
        </main>
      </>
    )
}

export default Header
