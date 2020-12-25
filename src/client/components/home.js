import React from 'react';

const Home = () => {

    const clickMe = () => {
        console.log("press me")
    }

    return (
        <div>

            <div>Home Component</div>
            <button onClick={clickMe}>Press Me</button>
        </div>
    )

}


export default Home;
