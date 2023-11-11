import { FlatList, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayingMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemsProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration

    }
    return (
      <MealItem
        title={mealItemsProps.title}
        imageUrl={mealItemsProps.imageUrl}
        duration={mealItemsProps.duration}
        complexity={mealItemsProps.complexity}
        affordability={mealItemsProps.affordability}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={displayingMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;
