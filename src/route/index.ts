import EmployeeScreen from '../screen/Employee'
import HomeScreen from '../screen/Home'
import Snake from '../screen/Snake'

export const routes = [
    {
        path: '/snake', name: "Snake", component: Snake
    },
    {
        path: '/employee', name: "EmployeeScreen", component: EmployeeScreen
    },
    {
        path: '/', name: "HomeScreen", component: HomeScreen
    }
]