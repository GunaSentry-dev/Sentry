import { Box } from "@mui/material";
import { Outlet } from "@remix-run/react";
import { ReactNode } from "react";
import Footer from "~/navigation/Footer";
import MenuSection from "~/navigation/MenuSection";



export default function DefaultLayout({children}:{children:ReactNode})
{
    return(
        <>
        <MenuSection/>
        <Box >
            {children}
        </Box>
        <Footer/>
        </>
    )
}