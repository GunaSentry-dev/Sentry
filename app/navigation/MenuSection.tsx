import { List,ListItemButton,ListItem   } from "@mui/material";
import { ReactNode } from "react";
import { MenuSectionLinks } from "~/constants/common-constants";



export default function MenuSection()
{
    return(
        <>
         <List
         component="nav"
         className="flex flex-row items-center bg-white p-2 shadow-md rounded-lg bg-tertiary"
         >
            {
                MenuSectionLinks?.map((section,index):any=>{
                 return (<ListItem key={index} >
                <ListItemButton  className=" rounded-md hover:bg-gray-200 transition">
                   {section?.text}
                </ListItemButton>
               </ListItem>)
                })
            }
        
         </List>
        </>
    )
}