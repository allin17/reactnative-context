import React, {useContext, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AuthContext} from "../context/AuthContext";

const {width} = Dimensions.get('window')

const LoginScreen = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const { signIn } = useContext(AuthContext)

    const onSubmitHandler = () => {

        //dummy auth verification
        if(login == "Lama" && password == "123") {
            signIn(login, password)
        } else {
            setError(true)
        }
    }



    return (
            <SafeAreaView style={styles.containerTablet}>
                <View style={styles.form}>
                {error && <Text style={styles.error}>Wrong credentials!</Text>}

                <Text style={styles.header}>Authorization</Text>

                    <View>
                    <View style={styles.formTabletContainer}>
                        <Text style={styles.label}>login</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={login => setLogin(login)}
                        />
                    </View>
                    <View style={styles.formTabletContainer}>
                        <Text style={styles.label}>password</Text>
                        <TextInput
                            style={styles.input}
                            type="password"
                            onChangeText={password => setPassword(password)}
                        />
                    </View>
                    </View>

                <TouchableOpacity
                    style={styles.button}
                    title="Submit"
                    onPress={onSubmitHandler}
                >
                    <Text style={styles.label}>Submit</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 'wrap',
        margin: '5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: "blue",
        borderWidth: 4,
        height: 330,
    },
    containerTablet: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {

    },
    formTabletContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    form: {
        width: width>720 ?'70%':'90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: "blue",
        borderWidth: 4,
    },
    header: {
        fontWeight: 'bold',
        fontSize: width*0.04,
        color: '#27569C',
        margin: width*0.02
    },
    label: {
        fontWeight: "bold",
        fontSize: width*0.04,
        marginTop: width*0.02,
        marginBottom: width*0.02,
    },
    input: {
        borderStyle: 'solid',
        borderColor: "blue",
        borderWidth: 4,
        borderRadius: 7,
        width: '65%',
        padding: width*0.02,
        fontSize: width*0.05,
        height: width*0.1,
        backgroundColor: '#D9D9D9',
        marginTop: width*0.02
    },
    button: {
        marginTop: "10%",
        borderRadius: 10,
        width: '70%',
        height: "15%",
        backgroundColor: "#E4B062",
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        color: 'red'
    }
});


export default LoginScreen;
