import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

function Subtitle({children}){
   
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomWidth: 2,
        padding: 8,
        marginHorizontal: 12,
        borderBottomColor: "#e2b497",
        marginVertical: 4
      },
      subtitle: {
        color: "#e2b497",
        fontWeight: "bold",
        fontSize: 18,
        margin: 4,
        
        textAlign: "center",
        
      },
})