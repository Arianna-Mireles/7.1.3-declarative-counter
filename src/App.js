import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h4>Counter: {counter}</h4>
        </div>
    )
}

export default App;
