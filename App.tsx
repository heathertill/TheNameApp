/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Fonts } from './src/utils/Fonts';


interface IAppProps { }
interface IAppState { users: { id: number, name: string }[], show: boolean }


class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {
            users: [],
            show: false
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let users = await res.json();
            this.setState({ users })
        } catch (e) {
            console.log(e)
        };
    };

    toggleShow() {
        this.setState({ show: !this.state.show })
    }

    renderNames() {
        if (this.state.show === true) {
            return (
                <View >
                    {this.state.users.map(user => (
                        <Text key={user.id} style={styles.textStyle}>{user.name}</Text>
                    ))}
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>The Official List of Names</Text>
                <ScrollView contentContainerStyle={{ flex: 1 }} >
                    <View >
                        {this.renderNames()}
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.toggleShow()}>
                    <Text style={styles.textStyle}>Show Names</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9FB7B9',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 25,
        margin: 5,
        color: 'white',
        fontFamily: Fonts.Oswald

    },
    titleStyle: {
        fontSize: 32,
        marginTop: 80,
        marginBottom: 20,
        color: 'white',
        fontFamily: Fonts.OswaldMd
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#46B1C9',
        borderRadius: 50,
        justifyContent: 'center',
        marginTop: 20,
        color: 'white',
        fontFamily: Fonts.OswaldMd,
        alignItems: 'center',
        marginBottom: 80
    },
    names: {
        justifyContent: 'center'
    }
});

export default App;

