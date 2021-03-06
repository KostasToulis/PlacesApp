import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNRestart from 'react-native-restart';

import Icon from 'react-native-vector-icons/Ionicons'


function SettingsScreen(){

    const logoutHandler = () => {
        RNRestart.Restart();
    }

    return(
        <View style={styles.container}>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>Welcome to Places</Text>
            </View>            
            <View style={styles.list}>
                <Text style={styles.title}>About</Text>
                <Text style={styles.item}>
                    Places is an app designed to help users navigate through sites of interest within a city.
                </Text>
                <Text style={styles.item}>
                    Use the User Screen to overview your previous activity and set the available time for the generated path.
                </Text>
                <Text style={styles.item}>
                    Use the Map Screen to view site recommendations and the path that leads you to them.
                </Text>
                <Text style={styles.item}>
                    Approach a site to leave a photo and upload a picture!
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
                <TouchableOpacity              
                    onPress = {
                        logoutHandler
                    }
                >
                    <LinearGradient
                        colors={['#f05454','#FF1D1D']}
                        style={styles.buttonStyle}    
                    > 
                        <Icon 
                            name='log-out-outline'
                            size={40}
                            color='white'    
                        />                   
                        <Text 
                            style = {styles.buttonText}
                        >
                            Sign Out
                        </Text>
                    </LinearGradient>                   
                </TouchableOpacity>
            </View>
        </View>  
    );     
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1E31',
        flex: 1,
        paddingTop: 23
    },
    loginBttn: {
        // color:'white',
        backgroundColor:'white'
    },
    loginText: {
        color:'blue'
    },
    registerButton: {

    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
    },
    title: {
        fontSize: 30,
        color: '#ffffff',
        // marginBottom: 30,
        marginTop: 0,
        paddingLeft: 10,
        paddingBottom: 10,
        // paddingTop: 20,
        
    },
    item :{
        fontSize: 19,
        color: '#ffffff',
        paddingBottom: 25,
        // paddingLeft: 15,
        // paddingTop: 10,
    },
    list: {
        flex: 2,
        backgroundColor: '#2F3454',
        padding: 15,
        // paddingBottom: 40,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    buttonStyle: {
      
        borderWidth: 1,
        
        borderColor: '#FF3E00',
        height: 80,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        marginBottom: 15,
    },
});