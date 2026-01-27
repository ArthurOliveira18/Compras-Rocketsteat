import { View, Image, } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/filterStatus"

export default function Home() {

  return (
    // No React (JS ou Native) só podemos retornar um único elemento pai, por isso que se colocar mais de uma View ao lado dessa View que tem, vai dar erro!

    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/logo.png")}
      />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />

        {/* Aqui eu não estou chamando o componente "Button" e sim chamando a Função "Button" */}
        <Button title="Entrar"/>
      </View>

      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive={true}/>
        <Filter status={FilterStatus.PENDING} isActive={false}/>
      </View>


    </View >

  )

}


