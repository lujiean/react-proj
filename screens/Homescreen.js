import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        // <View style={styles.home}>
        //     <Text>Home Screen</Text>
        //     <Button
        //         onPress={() => navigation.navigate('AboutScreen')}
        //         title="Go About Page"
        //     />
        // </View>

        // <View style={styles.container}>
        //     <View style={styles.topBox} />
        //     <View style={styles.bottomBox} />
        //     <View style={styles.topBox} />
        // </View>

        <View style={styles.container}>
            <TouchableHighlight style={styles.topBox} onPress={() => navigation.navigate('HomeListScreen')}>
                <Image style={styles.homeBanner} source={require('../assets/house.png')} />
            </TouchableHighlight>
            <View style={styles.bottomBox} />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topBox: {
        flex: 1,
        backgroundColor: '#CCE5FF'
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#FFFFCC'
    },
    homeBanner: {
        bottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    }
});

export default HomeScreen;