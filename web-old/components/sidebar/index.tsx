import React from "react"
import HistoryIcon from "../icons/history"
import TagIcon from "../icons/tag"
import { useRouter } from "next/router"

type MenuItemType = {
  icon: React.ReactNode
  link: string
}

const menuItems = [
  { icon: <TagIcon />, link: "/" },
  { icon: <HistoryIcon />, link: "/history" },
]

const MenuItem: React.FC<MenuItemType> = ({ icon, link }) => {
  const router = useRouter()
  const isActive = router.pathname === link
  return (
    <a href={link}>
      <div
        className={`cursor-pointer rounded-base hover:bg-grey-70 p-small flex justify-between space-x-small items-center ${
          isActive ? "bg-grey-70" : ""
        }`}
      >
        <span className="text-grey-0">{icon}</span>
      </div>
    </a>
  )
}

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col space-y-small h-full pt-large px-small">
      {menuItems.map((item: MenuItemType, i: number) => (
        <div key={i}>
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  )
}

export default SideBar
