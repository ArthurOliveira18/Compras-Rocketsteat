import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/filterStatus"
import { Item } from "@/components/Item"


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

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
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {
            Array.from({ length: 100 }).map((_, index) => (  
                <Item
                  key={index}
                  data={{ status: FilterStatus.DONE, description: "Café" }}
                  onStatus={() => console.log("Muda o status")}
                  onRemove={() => console.log("Remove")}
                />
            ))
          }
        </ScrollView>


      </View>


    </View >

  )

}


