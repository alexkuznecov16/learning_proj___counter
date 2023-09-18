import { Button, Text } from 'react-native';

export default function displayApp({ decreaseNumber, increaseNumber, number }) {
    return (
        <>
            <Button title='-' color={'red'} onPress={decreaseNumber}></Button>
            <Text>{number < 10 && number >= 0 ? '0' + number : number}</Text>
            <Button title='+' color={'green'} onPress={increaseNumber}></Button>
        </>
    );
}
