import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

  import {View} from 'react-native' 

function DrawerContentMain (props) {
  return (
        <DrawerContentScrollView {...props}>
    
    <View style={{marginTop:50}}>
    <DrawerItemList {...props} />
    </View>
  </DrawerContentScrollView>
  )
}

export default DrawerContentMain
