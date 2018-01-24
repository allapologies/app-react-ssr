import React from 'react';

const HomePage = () => (
    <div>
        <div>Home component</div>
        <button onClick={()=> console.log('CLICKED')}>Click me</button>
    </div>
);

export default {
    component: HomePage
}
