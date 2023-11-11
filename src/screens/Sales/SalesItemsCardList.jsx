import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const salonServices = [];

for (let i = 1; i <= 1000; i++) {
  const service = {
    key: i.toString(),
    price: Math.floor(Math.random() * 200) + 50, // Random price between 50 and 250
    name: getRandomServiceName(),
    qty: Math.floor(Math.random() * 3) + 1, // Random quantity between 1 and 3
  };
  salonServices.push(service);
}

function getRandomServiceName() {
  const services = [
    'Haircut',
    'Manicure',
    'Pedicure',
    'Facial',
    'Massage',
    'Coloring',
    'Waxing',
    'Eyebrow Styling',
    'Nail Art',
    'Spa Package',
    'Head Massage',
    'Hair Color'
  ];

  const randomIndex = Math.floor(Math.random() * services.length);
  return services[randomIndex];
}



const numberOfColumn = 3;


const SalesItemsCardList = ({text}) => {


    useEffect(() => {
        const lowercasedSearchTerm = text.toLowerCase();
    
        const filteredData = salonServices.filter((data) =>
          data.name.toLowerCase().includes(lowercasedSearchTerm)
        );
    
        setData(filteredData);
      }, [text]);


    console.log(text);

//     const filteredData = salonServices.filter((data) =>
//       data.name.toLowerCase().includes(text)
//     );

//     console.log(filteredData)

    
const [data,setData]= useState(salonServices)


    renderItem = ({item,index}) =>{
        return (
     <View style={styles.itemCard}>


<View style={styles.imgContainer}>
    <Image source={require('../../assets/Images/salon.jpeg')} resizeMode='cover'/>
    
    </View>
    <View style={styles.detailsContainer}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.amntTxtContainer}>
            <Text style={styles.infoTxt}>x{item.qty}</Text>
        </View>
        <View style={styles.amntTxtContainer}>
        <Text style={styles.infoTxt}>{item.price}</Text>
        </View>
        </View>
        <View style={styles.itemNameContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        </View>
       
</View>

</View>
     
        )
    }



  return (
    
    <FlatList
     data={data}
     numColumns={numberOfColumn}
     initialNumToRender={5}
     windowSize={100}
     maxToRenderPerBatch={100}
     removeClippedSubviews={true}
     keyExtractor={(item) => item.key}
     getItemLayout={(data, index) => ({
        length: 150,
        offset: 150 * index,
        index,
      })}
      
     renderItem={this.renderItem}
/>
  )
}

export default SalesItemsCardList

const styles = StyleSheet.create({
    itemListMainContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        
    },
    itemCard:{
        width:100,
        height:150,
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        margin:5,
        marginBottom:15,
        borderWidth:1,
        borderColor:'#D0D4CA',
        overflow:'hidden'

    },

   

    imgContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:'40%',
        overflow:'hidden',
        
    },

    detailsContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    itemName:{
        color:'#000000',
        padding:8,
        paddingBottom:0

    },
    amntTxtContainer:{
        height:20,
        width:40,
        marginTop:8,
        justifyContent:'center',
        alignItems:'center'
    },
    infoTxt:{
        fontSize:14,
        color:'#8D8D8D'
    },
    itemNameContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})