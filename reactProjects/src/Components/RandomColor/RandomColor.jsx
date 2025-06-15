import React, { useEffect, useState } from 'react'
import './style.css'

const RandomColor = () => {

    const [typeOfClr, settypeOfClr] = useState("hex")
    const [color, setcolor] = useState("#000000")

    const randomIndex = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleHexColor = () => {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += arr[randomIndex(arr.length)];
        }
        setcolor(hex)
    }

    const handleRgbColor = () => {
        let rgb = "rgb(" + randomIndex(255) + ", " + randomIndex(255) + ", " + randomIndex(255) + ")"
        setcolor(rgb)
    }

    useEffect(() => {
        if(typeOfClr === "rgb") handleRgbColor();
        else handleHexColor();
    },[typeOfClr])

    return (
        <div className='colorBox' style={
            { background: color }
        }>
            <div className='button-group'>
                <button onClick={() => settypeOfClr('hex')}>Generate hex color</button>
                <button onClick={() => settypeOfClr('rgb')}>Generate rgb color</button>
                <button onClick={typeOfClr === 'hex' ? handleHexColor : handleRgbColor}>Generate random color</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '35px',
                    marginTop: '50px'
                }}
            >
                <h3>{typeOfClr === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>

        </div>
    )
}

export default RandomColor