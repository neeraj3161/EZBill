import { Alert, StyleSheet, Text, View, StatusBar } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native';



const SplashScreen = () => {
    const navigations = useNavigation();

const [load,shouldLoad] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            navigations.navigate("Stack");
            
        shouldLoad(false);
        },4000);
      },[])

  return (
    
    <View style={styles.mainContainer}>
        <StatusBar hidden={true}/>
      <Text style={styles.txt}>EZ Bill</Text>
      <Text style={styles.txt}>V1.0.0</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#525FE1',
        height:'100%',
        width:'100%'
    },
    txt:{
        fontSize:20,
        color:'white'
    }
})