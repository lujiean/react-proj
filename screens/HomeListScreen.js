import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';

import HouseItem from '../components/HouseItem';

// const HomeListScreen = () => {
class HomeListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        }
    };

    componentDidMount() {
        return fetch("https://www.akshatpaul.com/list-properties")
            .then((response) => response.json())
            .then((responseJson) => { this.setState({ dataSource: responseJson, }) })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            // <View>
            //     <HouseItem name=" Mr. Johns Conch house" address=" 12th Street, Neverland" images='http://hmp.me/ol5' />
            // </View>

            < FlatList data={this.state.dataSource}
                renderItem={({ item }) => <HouseItem {...item} />
                }
                keyExtractor={(item, index) => index.toString()}
            />
            // <ScrollView>
            //     <Text>Scroll me plz</Text>
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            //     <Image source={{ uri: "'http://hmp.me/ol5", width: 64, height: 64 }} />
            // </ScrollView>
        )
    }
};

const MOCK_DATA = [
    {
        name: 'Mr. Johns Conch house',
        address: '12th Street, Neverland',
        images: 'http://hmp.me/ol5'
    },
    {
        name: 'Mr. Pauls Mansion',
        address: '625, Sec-5,  Ingsoc',
        images: 'http://hmp.me/ol6'
    },
    {
        name: 'Mr. Nalwayas Villa',
        address: '11, Heights, Oceania',
        images: 'http://hmp.me/ol7'
    },
    {
        name: 'Mr. Johns Conch house',
        address: '12th Street, Neverland',
        images: 'http://hmp.me/ol5'
    },
    {
        name: 'Mr. Pauls Mansion',
        address: '625, Sec-5,  Ingsoc',
        images: 'http://hmp.me/ol6'
    },
    {
        name: 'Mr. Nalwayas Villa',
        address: '11, Heights, Oceania',
        images: 'http://hmp.me/ol7'
    },
    {
        name: 'Mr. Johns Conch house',
        address: '12th Street, Neverland',
        images: 'http://hmp.me/ol5'
    },
    {
        name: 'Mr. Pauls Mansion',
        address: '625, Sec-5,  Ingsoc',
        images: 'http://hmp.me/ol6'
    },
    {
        name: 'Mr. Nalwayas Villa',
        address: '11, Heights, Oceania',
        images: 'http://hmp.me/ol7'
    }
]

export default HomeListScreen;