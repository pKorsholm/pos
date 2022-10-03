import React from "react"
import Head from "next/head"
import Image from "next/image"
import SideBar from "../components/sidebar"
import Products from "../components/products"

export default function Home() {
  return (
    <div>
      <Products />
    </div>
  )
}
