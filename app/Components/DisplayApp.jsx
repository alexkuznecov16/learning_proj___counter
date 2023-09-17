import { Button, Text } from 'react-native';

export default function displayApp({ decreaseNumber, increaseNumber, number }) {
    return (
        <>
            <Button title='-' color={'red'} onPress={decreaseNumber}></Button>
            <Text>{number}</Text>
            <Button title='+' color={'green'} onPress={increaseNumber}></Button>
        </>
    );
}
