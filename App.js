import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoryScreens";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailPage from "./screens/MealDetailScreen";
import { Text } from "react-native";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
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
          <Stack.Screen name="MealDetailPage" component={MealDetailPage}  />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
