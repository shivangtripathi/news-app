import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity, Linking} from 'react-native';
import { addToFavourites, removeFromFavourites } from '../actions/action';
import { useDispatch } from 'react-redux';
import Snackbar from 'react-native-snackbar';

const {width} = Dimensions.get('screen');

const NewsCard = ({article,isFavourties}) => {

    const dispatch = useDispatch();

    const { item } = article;
    const {summary, headline, imageUrl, link} = item;

    async function handleClick(){
        await Linking.openURL(link);
    }

    function handleAddToFavourties(){
        dispatch(addToFavourites(article));
        Snackbar.show({
            text: 'Added to favourites',
            duration: Snackbar.LENGTH_SHORT,
          });
          
     
    }

    function handleRemoveFromFavourites(){
        dispatch(removeFromFavourites(article));
        Snackbar.show({
            text:"Removed from favourties",
            duration:Snackbar.LENGTH_SHORT
        })
    }

    return (
        <TouchableOpacity
            style={styles.listStyle}
            activeOpacity={0.9}
            onPress={()=>  handleClick()}>
            <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
            <View>
                <Text style={styles.headlineText} numberOfLines={2} ellipsizeMode={'tail'}>{headline}</Text>
                <Text style={styles.summaryText}  numberOfLines={3}  ellipsizeMode={'tail'}>{summary}</Text>                    
            </View>

            {isFavourties ? 

            <TouchableOpacity activeOpacity={0.9} style={styles.favaouriteButton} onPress={()=>handleRemoveFromFavourites()}>
                <Text style={styles.buttonText}> Remove </Text>
            </TouchableOpacity> : <TouchableOpacity activeOpacity={0.9} style={styles.favaouriteButton} onPress={()=>handleAddToFavourties()}>
                <Text style={styles.buttonText}> Add to favourites </Text>
            </TouchableOpacity> }
        </TouchableOpacity>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    listStyle:{
        marginTop:10,
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:'rgba(255,255,255,0.7)',
        flexDirection:'column',
        borderBottomWidth:1.5,
        borderColor:'#888',
        justifyContent:'space-between'
    },
    infoContainer:{
        width:width-20,
    },
    imageStyle:{
        width:width*0.75,
        borderRadius:5,
        alignSelf:'center',
        aspectRatio:4/3,
    },
    headlineText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:16,
        marginTop:10,
    },
    summaryText:{
        color:'#000',
        fontSize:14,
        marginTop:10,
    },
    favaouriteButton:{
        marginLeft:5,
        backgroundColor:"rgb(188,0,0)",
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:20,
        width:width*0.5,
        borderRadius:5
    },
    buttonText:{
        color:"#fff",
        fontSize:14
    }

})