import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

// export default AboutScreen = () => {
// export default class AboutScreen extends React.Component {
//     render() {
const AboutScreen = () => {
    return (
        <View style={styles.about}>
            <Text>About Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    about:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AboutScreen;