import { useLayoutEffect } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealDetailPage({ route }) {
  const navigation = useNavigation();

  const mealId = route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal]);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step)=>(<Text key={step}>{step}</Text>))}
    </View> 
  );
}

export default MealDetailPage;
