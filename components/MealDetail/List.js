import { Text, View, StyleSheet } from "react-native";

function List({data}) {
  return data.map((data) => (
    <View style={styles.listItem} key={data}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497' 
    },
    itemText: {
        color: "#351401",
        textAlign: "center"
    }
});
