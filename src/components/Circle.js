import React from "react";


const Circle = () => {
    return <span className="dot">{Math.random() * (30 - 1) + 1 }</span>
}

export default Circle