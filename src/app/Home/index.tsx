import { View, Text, Image } from "react-native"
import { styles } from "./styles"

export default function Home() {

  return (
    // No React (JS ou Native) só podemos retornar um único elemento pai, por isso que se colocar mais de uma View ao lado dessa View que tem, vai dar erro!

    <View style={styles.container}>
      <Image 
      style = {styles.logo}
      source={require("@/assets/logo.png")}
      />
    </View>

  )

}


