import React from "react";

function Main(){
    return(
       <main>
        <div className="color-bar">
          <div className="color-one color" id="color-one"></div>
          <h3 id="color-code-one">#F55A5A</h3>
        </div>
        <div class="color-bar">
          <div className="color-two color" id="color-two"></div>
          <h3 id="color-code-two">#2B283A</h3>
        </div>
        <div className="color-bar">
          <div className="color-three color" id="color-three"></div>
          <h3 id="color-code-three">#FBF3AB</h3>
        </div>
        <div className="color-bar">
          <div className="color-four color" id="color-four"></div>
          <h3 id="color-code-four">#AAD1B6</h3>
        </div>
        <div className="color-bar">
          <div className="color-five color" id="color-five"></div>
          <h3 id="color-code-five">#D5D4D8</h3>
        </div>
      </main>
    )
}

export default Main