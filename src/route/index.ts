import EmployeeScreen from '../screen/Employee'
import HomeScreen from '../screen/Home'

export const routes = [
    {
        path: '/employee', name: "EmployeeScreen", component: EmployeeScreen
    },
    {
        path: '/', name: "HomeScreen", component: HomeScreen
    }
]