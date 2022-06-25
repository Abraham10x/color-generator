import React from "react";

function Main({color}){
  const styles = {
    backgroundColor: color
  }
    return(
        <div className="color-bar">
          <div style={styles} className="color-one color" id="color-one"></div>
          <h3 id="color-code-one">{color}</h3>
        </div>
    )
}

export default Main