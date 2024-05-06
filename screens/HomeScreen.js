import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
            .signOut()                        //sistemden cıkıs yapar.
            .then(() => {
                navigation.navigate('Login')  //cıkıs basarılı ıse logine gider.
            })
            .catch((error) => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email : {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.ButtonText}>Cıkıs Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        width:'60%',
        marginTop:40
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
})