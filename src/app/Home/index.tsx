import { View, Image,  } from "react-native"
import { styles } from "./styles"
import {Button} from "@/components/Button"

export default function Home() {

  return (
    // No React (JS ou Native) só podemos retornar um único elemento pai, por isso que se colocar mais de uma View ao lado dessa View que tem, vai dar erro!

    <View style={styles.container}>
      <Image 
      style = {styles.logo}
      source={require("@/assets/logo.png")}
      />


    {/* Aqui eu não estou chamando o componente "Button" e sim chamando a Função "Button" */}
      <Button 
      title = "Entrar" 
      />
    
    
    </View>

  )

}


