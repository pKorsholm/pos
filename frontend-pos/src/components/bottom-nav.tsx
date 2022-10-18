import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Cart from "./templates/cart"
import Search from "./templates/store"

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  )
}

export default MyTabs
