import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator, TouchableWithoutFeedback
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import { FlashList } from '@shopify/flash-list';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Get Random Data
const salonServices = [];
const getRandomData = () => {
  for (let i = 1; i <= 200; i++) {
    const service = {
      key: i.toString(),
      price: Math.floor(Math.random() * 200) + 50, // Random price between 50 and 250
      name: getRandomServiceName(),
      qty: 0, // Random quantity between 1 and 3
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
      'Hair Color',
    ];

    const randomIndex = Math.floor(Math.random() * services.length);
    return services[randomIndex];
  }
};
getRandomData();
const numberOfColumn = 3;

//filter logic
// const lowercasedSearchTerm = text.toLowerCase();

//         const filteredData = salonServices.filter((data) =>
//           data.name.toLowerCase().includes(lowercasedSearchTerm)
//         );

//         setData(filteredData);




const SalesItemsCardList = ({text}) => {

  useEffect(() => {
    getData(skip,20);
    // console.log(text);
    // const lowercasedSearchTerm = text.toLowerCase();
    //         const filteredData = salonServices.filter((data) =>
    //       data.name.toLowerCase().includes(lowercasedSearchTerm)
    //     );

    //     console.log(salonServices.length);
    //     console.log(filteredData.length)
    //     setData[filteredData];
  }, []);




  const [data, setData] = useState('');
  const [skip, setSkip] = useState(0);
  const [loader,setLoader] = useState(true);

  const manageItemClick = (index) => {
    console.log(`index: ${index}`);
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].qty += 1;
      return newData;
    });
  };

  const getData = (skip,limit)=>{
    var newArray = salonServices.slice(skip).slice(0,limit);
    if(data.length == 0)
    {
        setData(newArray)
    }else{
        setData([...data,...newArray]);
    }
    
    setLoader(false);
}


  renderItem = useCallback(({item, index}) => {
      
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>manageItemClick(index)}>
        <View style={styles.itemCard}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/Images/salon.jpeg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
      </TouchableOpacity>
    );
  },[data]);

  const callEndReached = useCallback(()=>{
    setLoader(true);
    console.log("Reached end of page")
    setSkip(skip+data.length);
    setTimeout(()=>{
        getData(skip,20);
    },5000)
    console.log('got');


    
  })

 


  const keyExtractor = useCallback((item,index)=>`${item.key}`,[])

  const itemSeperatorComponent = useCallback(()=>{return(<View style={{height:20}}></View>)})

  const listFooterComponent = useCallback(()=>{
    return(<ActivityIndicator size={'large'}/>)
  })

  return (
    <FlashList
    data={data}
    numColumns={numberOfColumn}
    keyExtractor={keyExtractor}
    style={{ marginBottom: 150 }}
    ItemSeparatorComponent={itemSeperatorComponent}
    onEndReached={callEndReached}
    onEndReachedThreshold={0.2}
    ListFooterComponent={loader && listFooterComponent}
    disableScrollViewPanResponder={true}
    removeClippedSubviews={true}
    estimatedItemSize={150}
    renderItem={renderItem}
    initialNumToRender={20} // Adjust based on your item size and device performance
    maxToRenderPerBatch={10} // Adjust based on your item size and device performance
    windowSize={10} // Adjust based on your item size and device performance
  />

  );
};

export default SalesItemsCardList;

const styles = StyleSheet.create({
  itemListMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  itemCard: {
    width: 100,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    margin: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D0D4CA',
    overflow: 'hidden',
  },

  imgContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '40%',
    overflow: 'hidden',
  },

  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    color: '#000000',
    padding: 8,
    paddingBottom: 0,
  },
  amntTxtContainer: {
    height: 20,
    width: 40,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: 14,
    color: '#8D8D8D',
  },
  itemNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
