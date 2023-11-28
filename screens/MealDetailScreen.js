import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { View, ScrollView } from "react-native";
import { Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useNavigation } from "@react-navigation/native";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { Button } from "react-native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailPage({ route }) {
  const navigation = useNavigation();
  const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
  const dispatch = useDispatch();
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.id;
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  function headerButtonPressHandler(){
    if(mealIsFavorite){
      dispatch(removeFavorite({id: mealId}))
    }else{
      dispatch(addFavorite({id: mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>{
        return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} size={24} color="white" onPress={headerButtonPressHandler} />
      }
    });
  }, [navigation,headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />

    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />

        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailPage;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: "center"
  }
});
