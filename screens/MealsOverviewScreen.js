import { FlatList, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayingMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId,navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return (
      <MealItem
        title={mealItemsProps.title}
        imageUrl={mealItemsProps.imageUrl}
        duration={mealItemsProps.duration}
        complexity={mealItemsProps.complexity}
        affordability={mealItemsProps.affordability}
        id={mealItemsProps.id}
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
