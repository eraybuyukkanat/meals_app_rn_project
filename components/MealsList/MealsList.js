import { View } from "react-native";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;
