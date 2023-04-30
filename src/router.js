import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Favourites, News } from './views';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MainStackNavigator = createStackNavigator();

function MainStack() {
  return (
    <MainStackNavigator.Navigator screenOptions={{
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold",
        letterSpacing:0.9
      },
      headerTitleAlign:"center",
      headerStyle:{
        backgroundColor:"rgb(188,0,0)",
      }
    }}>
      <MainStackNavigator.Screen name="News" component={News} options={{title:"Latest News"}}/>
      <MainStackNavigator.Screen name="Favourites" component={Favourites} />
    </MainStackNavigator.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Main" 
        component={MainStack}
        options={{
          headerShown:false,
          tabBarActiveBackgroundColor:"rgb(188,0,0)",
          tabBarLabel:"Home",
          tabBarActiveTintColor:"#fff",
          tabBarInactiveTintColor:"#000",
          tabBarIcon: ({ color }) => {
            return (
              <Icon name="home" size={24} color={color}/>
            );
          },
        }} />
      <Tab.Screen 
        name="FavouritesTab" 
        component={Favourites}
        options={{
          headerTitle:"Favourties",
          headerStyle:{
            backgroundColor:"rbg(188,0,0)"
          },
          tabBarActiveBackgroundColor:"rgb(188,0,0)",
          tabBarLabel:"Favourties",
          tabBarActiveTintColor:"#fff",
          tabBarInactiveTintColor:"#000",
          tabBarIcon: ({ color }) => {
            return (
              <Icon name="heart" size={24} color={color}/>
            );
          },
        }} />
    </Tab.Navigator>
  );
}