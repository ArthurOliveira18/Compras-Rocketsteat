import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {styles} from "./style"
import { FilterStatus } from "@/types/filterStatus";

type Props = TouchableOpacityProps & {

    status: FilterStatus,
    isActive: Boolean
}

export function Filter({status, isActive, ...rest} :Props) {
    return(
        <TouchableOpacity 
        style = {[styles.container , {opacity: isActive ? 1 : 0.5}]}>
            <Text style = {styles.title} >
                {/* Isso aqui é um IF ternário, o ponto de interrogação é o True, "Se for verdade, então faça isso" e o segundo seria, o "False" da parada  */}
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}