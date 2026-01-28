import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {styles} from "./style"
import { FilterStatus } from "@/types/filterStatus";
import { StatusIcon } from "../StatusIcon/statusIcon";



type Props = TouchableOpacityProps & {

    status: FilterStatus,
    isActive: Boolean
}

export function Filter({status, isActive, ...rest} :Props) {
    return(
        <TouchableOpacity 
        style = {[styles.container , {opacity: isActive ? 1 : 0.5}]}
        activeOpacity={0.8}
        >
            <StatusIcon status={status}/>
            <Text style = {styles.title} >
                {/* Isso aqui é um IF ternário, o ponto de interrogação é o True, "Se for verdade, então faça isso" e o segundo seria, o "False" da parada  */}
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}