import { FilterStatus} from "@/types/filterStatus";
import {CircleDashed, CircleCheck } from "lucide-react-native"


export function StatusIcon({status} : {status: FilterStatus}){

    return status === FilterStatus.DONE ? (
        <CircleCheck color={"#2c46b1"} size={18}/>
    ) : (
        <CircleDashed  color={"#000"} size={18}/>
    )
}