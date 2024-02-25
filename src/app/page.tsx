"use client"

import Header from "@/components/header";
import HomeScreen from "@/pages/home";
import { useState } from "react";

export default function Home() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    <HomeScreen/>
    </div>
  );
}
