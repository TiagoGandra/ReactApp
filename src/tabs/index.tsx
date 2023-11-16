import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from "./home";
import Perfil from "./perfil";
import Cards from "./cartoes";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#002851'
  },
  tabBarActiveTintColor: '#339cff',
  tabBarInactiveTintColor: '#fff'
}

const tabs = [
  // {
  //   id: 1,
  //   name: 'Home', 
  //   component: Home,
  //   icon: 'home'
  // },
  {
    id: 1,
    name: 'Cards', 
    component: Cards,
    icon: 'calendar'
  },
  {
    id: 2,
    name: 'Perfil', 
    component: Perfil,
    icon: 'person'
  },

]
export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
    { tabs.map((tab) => (
      <Tab.Screen
        key={tab.id}
        name={tab.name}
        component={tab.component}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (<Ionicons name={tab.icon} color={color} size={size}/>),
        }}
      />
    ))}
    </Tab.Navigator>
  );
}
