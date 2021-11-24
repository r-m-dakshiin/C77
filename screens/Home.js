import React, { Component } from 'react';
import { Text,
     View,
      Stylesheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
    
 } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
           <View style={styles.container}>
               <SafeAreaView style={styles.AndroidSafeArea}/>
                <ImageBackground source = {require('../assets/bg_image.png')} 
                style={styles.backgroundImage}/>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>ISS TRACKER APP</Text>
                </View>

                
                <TouchableOpacity style={styles.routeCard} onPress={() =>
                this.props.navigation.navigator("IssLocation")}
                >
                <Text style={styles.routeText}>ISS LOCATION</Text>
                <Text style = {styles.knowMore}>{"Know More...>"}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source={require("../assets/iss_icon.png")} style = {styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.routeCard} onPress={() =>
                this.props.navigation.navigator("Meteors")
            }>
                <Text style={styles.routeText}>Meteors</Text>
                <Text style={styles.knowMore}>{"Know More...>"}</Text>
                <Text style={styles.bgDigit}>2</Text>
                <Image source={require("../assets/meteor_icon.png")} style = {styles.iconImage}/>

            </TouchableOpacity>




           </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",
        
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",

    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",

    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30,

    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15,
    
    },
    bgDigit:{
        position:"absolute",
        color:"#808080",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
    },
    AndroidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight:0,

    },
    iconImage:{
        postiton:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    }
});