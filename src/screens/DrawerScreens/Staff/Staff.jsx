import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ManageStaffDash from './ManageStaffDash';

const Staff = () => {
  
  const navigations = useNavigation();
  return (
     <>
    
    <View style={styles.mainContainer}>
    <View style={styles.topNavBar}>
    <TouchableOpacity onPress={()=>{navigations.navigate("Home")}}>
          <Image style={{margin:20, tintColor:'#fff'}} source={require('../../../assets/icons/arrow_back.png')} resizeMode='contain' />
          </TouchableOpacity>
      <View>
          <Text style={styles.brandNameTxt}>Manage Staff</Text>
        </View>
        <View style={styles.icons}>
          
       
        </View>
        
    </View>

<ManageStaffDash/>


  </View>

    </>
  )
}

export default Staff

const styles = StyleSheet.create({
  mainContainer:{
    color:'#000'
  },
  topNavBar:{
    height:60,
    backgroundColor:'#525FE1',
    alignItems: 'center',
    flexDirection:'row',
    
    width:'100%'
  },

  brandNameTxt:{
    color:'#fff',
    fontSize:20,
    fontWeight:'500',
    marginLeft:10
  },

  icons:{
    flexDirection:'row'
  }
})