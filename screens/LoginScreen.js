import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email,password)

    const navigation = useNavigation();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {    //kullanıcının oturum durumu degistiginde tetiklenir. 
            if(user){                          //ve user varsa home a yonlendirme islemini yapar
                navigation.navigate('Home');
            }
        })
    },[])


    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)   //firebase'e kullanıcı kaydeder.
            .then((userCredentials) => {                       //basarılı olursa then calısır
                const user = userCredentials.user;
                console.log('Kaydolan kullanıcı:', user.email);
            })
            .catch((error) => alert(error.message));
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)      //login islemi yapar
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Giriş yapan kullanıcı : ', user.email)
            })
            .catch((error) => alert(error.message));
    }

    return (  //text inputa tıklanıldıgında otomatik kaydirma yapar.
        <KeyboardAvoidingView style={styles.container} behavior='padding'>   
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Sifre'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Giris Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlinedButton]}>
                    <Text style={styles.outlinedButtonText}>Kayıt ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '75%'
    },
    input: {
        backgroundColor: 'white',
        padding: 14,
        marginTop: 10,
        borderRadius: 10
    },
    buttonContainer: {
        width: '50%',
        marginTop: 35
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    outlinedButton: {
        backgroundColor: 'white',
        marginTop: 10
    },
    outlinedButtonText: {
        color: '#0782F9',
        fontSize: 16,
        fontWeight: '700'
    }
})