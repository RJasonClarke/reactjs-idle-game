import React from 'react';

const Upgrades = ({props}) => {

    const handleClick = () => {
        const currentCount = props.count
        console.log(currentCount)
        if(currentCount >= 5){
            currentCount.setState(currentCount - 5)
        } else {
            console.log("Nope")
        }
    }

    return (
        <div>
            <h1>Upgrades</h1>
            <ul>
                <li><button onClick={handleClick}>Gnats</button></li>
                <li><button onClick={handleClick}>Flies</button></li>
                <li><button onClick={handleClick}>Beetles</button></li>
            </ul>
        </div>
    );
};

export default Upgrades;