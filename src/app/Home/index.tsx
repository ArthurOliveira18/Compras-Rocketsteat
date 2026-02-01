import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/filterStatus"
import { Item } from "@/components/Item"
import { Import } from "lucide-react-native"
import { use, useState } from "react"


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function Home() {

  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState ("")
  const [items, setItems] = useState<any>([])

  function handleAdd(){
    if(!description.trim()){
      return Alert.alert("Adicionar" ,  "Informe uma descrição para adicionar")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      filter: FilterStatus.PENDING
    }

  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/logo.png")}
      />
      <View style={styles.form}>
        <Input 
        placeholder="O que você precisa comprar?" 
        onChangeText={setDescription}
        />
       
        <Button 
        title="Adicionar" 
        onPress={handleAdd}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status} 
                isActive = {status === filter} 
                onPress={() => setFilter(status)}
                />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Muda o status")}
              onRemove={() => console.log("Remove")}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
        />


      </View>


    </View >

  )

}


