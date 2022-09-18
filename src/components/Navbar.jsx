import React, {useContext} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import logo from "../../assets/logo2.png"
import logoutIcon from "../../assets/Group.png"
import logoForTablet from "../../assets/logofortablet.png"
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const {user, signOut} = useContext(AuthContext)
    const {width} = Dimensions.get("window")

    const onPressHandler = () => {
        signOut()
    }
    return (
        <SafeAreaView style={styles.container}>
            {
                width < 720 ? (
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                ) : (
                    <Image
                        style={styles.logo}
                        source={logoForTablet}
                    />
                )
            }
            {
                user != null
                    ?
                    <TouchableOpacity onPress={() => onPressHandler()}>
                        <Image
                            source={logoutIcon}
                            style={styles.logout}
                        />
                    </TouchableOpacity>

                    : null
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E4B062",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: "15%",
    },
    logout: {
        margin: "5%",
        width: 60,
        height: 60,
        resizeMode: 'contain',
        tintColor: '#27569C'
    },
    logo: {
        margin: '5%',
        resizeMode: 'contain',
    }
});

export default Navbar;
