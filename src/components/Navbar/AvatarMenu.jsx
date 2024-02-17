"use client"
import { logout } from "@/actions/auth";
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Button } from "@chakra-ui/react";

export default function AvatarMenu({name}){
    const displayname = !!name ? name : ""; 
    return(
        <Menu>
            <Avatar name={displayname} size={"md"} as={MenuButton} />
            <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={()=>{logout()}} >Logout</MenuItem>
            </MenuList>
        </Menu> 
    )
}