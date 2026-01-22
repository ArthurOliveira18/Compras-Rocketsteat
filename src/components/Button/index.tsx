import { TouchableOpacity,TouchableOpacityProps,Text } from "react-native";

import {styles} from "./style"

// No typescript eu preciso declarar que tipo de props seria essa, por isso coloquei um "title : string"
// Mesmo sem isso daqui, eu consigo chamar lá o <Button title = "NomeDeExemplo"/> 
type Props = TouchableOpacityProps & {

    title: string
   
}

// Aqui eu estou desestruturando a minha "Props" e assim não vou precisar colocar o "props : Props", ali eu já coloco diretamente a minha propriedade que eu desejo
export function Button ({title,  ...rest}: Props){
    return(
        <TouchableOpacity style = {styles.container} activeOpacity={0.5} {...rest}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )

}