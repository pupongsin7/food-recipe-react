import { Input } from "@mui/material"
import { useEffect, useState } from "react"
export default function Search(props){
    const [searchQuery,setSearch] = useState('')
    const triggerSearch = (event) =>{
        // if((event.target.value).trim().length > 1)props.searchQ(event.target.value)
        props.searchQ(event.target.value)
        // console.log(event.target.value)
    }
    return(
        <Input placeholder="Search"  onChange={triggerSearch}/>
    )
}
