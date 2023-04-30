import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import RenderNewsList from '../components/render-news-list';
import NetInfo from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';

const News = () => {

  const [news,setNews] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  const [offset,setOffset] = React.useState(0);
  const [connected,setIsConnected] = React.useState(false);

  NetInfo.fetch().then(state => {
    if(state.isConnected){
      setIsConnected(true);
    }
  });

  React.useEffect(()=>{
      fetch('https://api.smallcase.com/news/getNews?count=20&offset=0').then((res)=>res.json()).then((json)=>{
      setOffset(offset+20);
      setNews(json.data)
      setLoading(false);
  }).catch(err =>{
    setLoading(false);
    Snackbar.show({
      text:"Error loading news",
      duration:Snackbar.LENGTH_SHORT
    })
  });
  },[connected])
  
  const fetchMoreData = () =>{
      fetch(`https://api.smallcase.com/news/getNews?count=20&offset=${offset}`).then((res)=>res.json()).then((json)=>{
      setOffset(offset+20);
      setNews([...news,...json.data]);
      }).catch((err)=>{
        setLoading(false);
        Snackbar.show({
          text:"Error loading news",
          duration:Snackbar.LENGTH_SHORT
        })
      })
  }

  if(!connected){
    return(
      <View style={styles.emptyContainer}>
        <Text style={{color:"#000",fontSize:16}}>Please check your internet connection !</Text>
      </View> 
    )

  }

  return (
      <View style={styles.container}>
          {loading ? (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator color="#ff00ff" size={'large'}/>
            </View>
          ): <RenderNewsList news={news} fetchMoreData={fetchMoreData}/> }
      </View> 
  )
}

export default News

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  emptyContainer:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:"center"
  }
})