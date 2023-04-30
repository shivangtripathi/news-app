import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import NewsCard from './news-card';

const RenderNewsList = ({news,fetchMoreData=null}) => {

  const handleFetchMoreData = () => {
    if(fetchMoreData!=null){
      fetchMoreData();
    }else{
      console.log("action not allowed");
    }
  }


  return (
    <View style={styles.container}>
      <FlatList 
        data={news}
        bounces={false}
        scrollEventThrottle={32}
        style={{paddingHorizontal:20}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        onEndReached={handleFetchMoreData}
        onEndReachedThreshold={0.6}
        renderItem={(item)=> {return(
            <NewsCard article={item} isFavourties={fetchMoreData==null}/>
        )} }
      />
    </View>
  )
}

export default RenderNewsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
      },
})