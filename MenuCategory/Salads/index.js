import { View, Text,Image, TouchableOpacity,ScrollView,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { FontFamily,Colors } from '../../../assets/Util/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SaladsPage() {
  
  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <ImageBackground
      source={require('../../images/background6.png')}
       style={{flex:1,resizeMode:'cover'}}>


      <View style={{alignSelf:'flex-end', paddingRight:15,padding:10}}>

         <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
           <FontAwesome name="bars" size={30} color={'red'}/>
         </TouchableOpacity>
      </View>

        <ScrollView>

            <View> 
        <Text style={styles.TitlePizza}> Salads </Text>

          <View style={styles.ProductBox}>

            <Text style={styles.ProductName}> Garden Salad </Text>
               <Image source={require('../../images/gardenSalad.png')}
                style={{width:150, height:150,marginLeft:100,borderRadius:80 }}/>

             <View style={styles.priceBox}> 
                <Text style={styles.Price}>Small 7.00$        Large 14.00$</Text> 
             </View>
              
                <View style={styles.SizeQtdBox}> 
                  <View style={styles.sizeBox}> 
                     <Text style={styles.Size}> Sizes </Text>
                  </View>

               <View style={styles.sizeOptionsBox}>
                  <View style={styles.sizesOpttions}> 
                     <Text style={styles.SizeOptionsText}> S </Text>
                  </View>
                 <View style={styles.sizesOpttions}> 
                        <Text style={styles.SizeOptionsText}> L </Text>
                 </View>
                  
               </View>

                  <View style={styles.qtdBox}> 
                    <Text style={styles.Qtd}> Qtd </Text>
                    <Text style={styles.QtdText}> + </Text>
                    <Text style={styles.QtdText} > 1 </Text>
                    <Text style={styles.QtdText} > - </Text>
                 </View>
              </View>

          <TouchableOpacity> 
            <View style={styles.AddCartBox}> 
                <Text style={styles.AddCartText}> Add To Cart </Text>
            </View>
         </TouchableOpacity>

     </View>

        <View style={styles.ProductBox}>
            <Text style={styles.ProductName}> Greek Salad </Text>
               <Image source={require('../../images/greekSalad.jpeg')}
               style={{width:150, height:150,marginLeft:100 ,borderRadius:80 }}/>

             <View style={styles.priceBox}> 
                <Text style={styles.Price}>Small 7.00$        Large 14.00$</Text> 
             </View>
              
                <View style={styles.SizeQtdBox}> 
                  <View style={styles.sizeBox}> 
                    <Text style={styles.Size}>Sizes </Text>
                  </View>

                   <View style={styles.sizeOptionsBox}>
                     <View style={styles.sizesOpttions}> 
                        <Text style={styles.SizeOptionsText}> S </Text>
                     </View>
                     <View style={styles.sizesOpttions}> 
                        <Text style={styles.SizeOptionsText}> L </Text>
                     </View>
                </View>

                  <View style={styles.qtdBox}> 
                    <Text style={styles.Qtd}> Qtd </Text>
                    <Text style={styles.QtdText}> + </Text>
                    <Text style={styles.QtdText} > 1 </Text>
                    <Text style={styles.QtdText} > - </Text>
                  </View>
              </View>

          <TouchableOpacity> 
            <View style={styles.AddCartBox}> 
                <Text style={styles.AddCartText}> Add To Cart </Text>
            </View>
           </TouchableOpacity>
        </View>


      <View style={styles.ProductBox}>
            <Text style={styles.ProductName}> Cobb Salad </Text>
               <Image source={require('../../images/cobbsalad.png')}
                style={{width:130, height:135,marginLeft:100,borderRadius:80 }}/>

             <View style={styles.priceBox}> 
                 <Text style={styles.Price}>Small 7.00$        Large 14.00$</Text> 
             </View>
              
                <View style={styles.SizeQtdBox}> 
                  <View style={styles.sizeBox}> 
                    <Text style={styles.Size}> Sizes </Text>
                  </View>

              <View style={styles.sizeOptionsBox}>
                  <View style={styles.sizesOpttions}> 
                     <Text style={styles.SizeOptionsText}> S </Text>
                  </View>
                  <View style={styles.sizesOpttions}> 
                        <Text style={styles.SizeOptionsText}> L </Text>
                  </View>
              </View>

                  <View style={styles.qtdBox}> 
                    <Text style={styles.Qtd}> Qtd </Text>
                    <Text style={styles.QtdText}> + </Text>
                    <Text style={styles.QtdText} > 1 </Text>
                    <Text style={styles.QtdText} > - </Text>
                 </View>
              </View>

          <TouchableOpacity> 
            <View style={styles.AddCartBox}> 
                <Text style={styles.AddCartText}> Add To Cart </Text>
            </View>
          </TouchableOpacity>
      </View>

       

        <View style={styles.ProductBox}>
            <Text style={styles.ProductName}> Ceaser Salad </Text>
              <Image source={require('../../images/ceaserSalad.png')}
               style={{width:140, height:140,marginLeft:100,borderRadius:80}}/>

            <View style={styles.priceBox}> 
                <Text style={styles.Price}>Small 7.00$        Large 14.00$</Text> 
             </View>
              
                <View style={styles.SizeQtdBox}> 
                  <View style={styles.sizeBox}> 
                    <Text style={styles.Size}> Sizes </Text>
                 </View>

             <View style={styles.sizeOptionsBox}>
                  <View style={styles.sizesOpttions}> 
                     <Text style={styles.SizeOptionsText}> S </Text>
                 </View>
                 <View style={styles.sizesOpttions}> 
                     <Text style={styles.SizeOptionsText}> L </Text>
                 </View>
              </View>

                  <View style={styles.qtdBox}> 
                    <Text style={styles.Qtd}> Qtd </Text>
                    <Text style={styles.QtdText}> + </Text>
                    <Text style={styles.QtdText} > 1 </Text>
                    <Text style={styles.QtdText} > - </Text>
                 </View>
              </View>

          <TouchableOpacity> 
            <View style={styles.AddCartBox}> 
                <Text style={styles.AddCartText}> Add To Cart </Text>
            </View>
          </TouchableOpacity>
        </View>

       
        </View>
       </ScrollView>
     </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f8f9fa',
},
    TitlePizza:{
   alignSelf:'center',
      fontSize:40,
      fontFamily: FontFamily.Montserrat,
      color:'#011c43',
      paddingBottom:30
    },
    ProductBox:{
      flex:1,
        justifyContent:'center',
        alignSelf:'center',
       width:350,
       height:280,
       paddingTop:70,
       shadowOffset: {width: -9, height: 4},  
       shadowOpacity: 0.9,  
      shadowRadius: 9,  
      backgroundColor:'#f8f9fa',  
      shadowColor: 'black',  
      elevation: 9,  
      borderRadius:25,
      borderBottomWidth:70,
     borderColor:'#fb8500',
    marginBottom:30
  },
    ProductName:{
      fontSize:18,
      fontFamily: FontFamily.Montserrat,
      color:'red',
      paddingTop:25,
      paddingLeft:30
    },
    Price:{
        fontSize:12,
        fontFamily: FontFamily.Poppins,
        color:'#011c43',
        marginTop:15
    },
    priceBox:{
       justifyContent:'center',
       alignItems:'center',
       marginTop:-10
   },
    Size:{
        fontSize:14,
        fontFamily: FontFamily.Montserrat,
        color: 'red'
  },
    Qtd:{
        fontSize:14,
        fontFamily: FontFamily.Montserrat,
        paddingLeft:5,
        color:'red'
   },
    SizeQtdBox:{
    

    },
    QtdText:{
      color: 'red'
    },
    sizeBox:{
        width:60,
        height:20,
       shadowOffset: {width: -4, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 9,  
        backgroundColor: 'white',
        borderRadius: 20,  
        shadowColor: '#52006A',  
       elevation: 10,  
        alignItems:'center',
        marginLeft:10,
       marginTop:5
    },
    qtdBox:{
        flexDirection:"row",
        width:90,
        height:20,
       shadowOffset: {width: -4, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 9,  
        backgroundColor: 'white',
        borderRadius: 20,  
        shadowColor: '#52006A',  
          elevation: 10,  
        alignItems:'center',
        justifyContent:'center',
        marginLeft:190,
        marginTop:-60
    },
    AddCartBox:{
       width:100,
        height:30,
       shadowOffset: {width: -4, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 9,  
        backgroundColor: '#011c43',
        borderRadius: 20,  
        shadowColor: '#52006A',  
        elevation: 10,  
        alignItems:'center',
        justifyContent:'center',
         marginLeft:240,
       marginTop:40
    },
    AddCartText:{
        color:'white'
    },
    sizeOptionsBox:{
        flexDirection:'row',
  },
    sizesOpttions:{
        width:30,
        height:30,
       shadowOffset: {width: -4, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.9,  
        shadowRadius: 9,  
        backgroundColor: 'white',
        borderRadius: 20,  
        shadowColor: '#52006A',  
        elevation: 10,  
        alignItems:'center',
        alignContent:'center',
        marginLeft:25,
        marginTop:10,
        justifyContent:'center',
    },
    SizeOptionsText:{
   fontWeight:'bold',
   color:'red'
    }

})