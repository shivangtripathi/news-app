import { StyleSheet, View } from 'react-native'
import React from 'react'
import RenderNewsList from '../components/render-news-list';
import { useSelector } from 'react-redux';

const Favourites = () => {

  const favourites = useSelector((state)=>state.favourites);
  return (
      <View style={styles.container}>
          <RenderNewsList news={favourites}/>
      </View> 
  )
}

export default Favourites

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})