import { Image, Platform } from "react-native";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({ title, imageUrl, duration, complexity, affordability,id}) {


  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={()=>{navigation.navigate("MealDetailPage",{id: id,title: title})}}
      >
        <View>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
        <MealDetails affordability={affordability} duration={duration} complexity={complexity} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
 
});
