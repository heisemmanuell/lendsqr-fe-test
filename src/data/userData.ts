import Users from '../assets/images/users.svg' 
import ActiveUsers from '../assets/images/active_users.svg'
import UserLoans from '../assets/images/loans.svg'
import UserSavings from '../assets/images/savings.svg'

interface FeaturesProps {
  id: number;
  feature: string;
  icon: string;
  total: string;
  bg: string;
}

export const userData: FeaturesProps[] = [
  { "id": 1, "feature": "users", "icon": Users, "total": "2,453", "bg": "rgba(223, 24, 255, 0.1)" },
  { "id": 2, "feature": "active users", "icon": ActiveUsers, "total": "2,453", "bg": "rgba(87, 24, 255, 0.1)" },
  { "id": 3, "feature": "users with loans", "icon": UserLoans, "total": "12,453", "bg": "rgba(245, 95, 68, 0.1)" },
  { "id": 4, "feature": "users with savings", "icon": UserSavings, "total": "102,453", "bg": "rgba(255, 51, 102, 0.1)" },
]
