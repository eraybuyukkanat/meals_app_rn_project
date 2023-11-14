import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoryScreens";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {Ionicons} from '@expo/vector-icons'
import MealDetailPage from "./screens/MealDetailScreen";
import { Text } from "react-native";
import { Button } from "react-native";
import FavoriteScreen from "./screens/FavoriteScreen";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {backgroundColor: "#351401"},
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({color,size})=>{
          return <Ionicons color={color} size={size} name="list" />
        }
      }}/>
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
        drawerIcon: ({color,size})=>{
          return <Ionicons color={color} size={size} name="star" />
        }
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route,navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen name="MealDetailPage" component={MealDetailPage} options={{title: "About the Meal"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
