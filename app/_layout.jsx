import React, { useState } from 'react';
import { View } from 'react-native';
import DisplayApp from './Components/DisplayApp';

function App() {
    const [number, setNumber] = useState(0);

    const decreaseNumber = () => {
        setNumber(number - 1);
    };

    const increaseNumber = () => {
        setNumber(number + 1);
    };
    return (
        <View style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <DisplayApp decreaseNumber={decreaseNumber} increaseNumber={increaseNumber} number={number} />
        </View>
    );
}

export default App;
