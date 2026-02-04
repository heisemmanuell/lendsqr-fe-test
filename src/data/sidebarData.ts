
import BriefCase from "../assets/images/briefcase.svg?react"
import DashboardHome from "../assets/images/home.svg?react"
import UserFriends from "../assets/images/user-friends.svg?react"
import Guarantors from "../assets/images/guarantors.svg?react"
import Loans from "../assets/images/money-sack.svg?react"
import DecisionModels from "../assets/images/decision.svg?react"
import Savings from "../assets/images/piggy-bank.svg?react"
import MoneyBag from "../assets/images/loan-request.svg?react"
import Whitelist from "../assets/images/whitelist.svg?react"
import Karma from "../assets/images/karma.svg?react"
import SavingsProducts from "../assets/images/savings-product.svg?react"
import Coins from "../assets/images/coins-solid.svg?react"
import Transaction from "../assets/images/transaction.svg?react"
import Galaxy from "../assets/images/galaxy.svg?react"
import UserCog from "../assets/images/user-cog.svg?react"
import Scroll from "../assets/images/scroll.svg?react"
import ChartBar from "../assets/images/chart-bar.svg?react"
import Slider from "../assets/images/sliders.svg?react"
import BadgePercent from "../assets/images/badge-percent.svg?react"
import Clipboard from "../assets/images/clipboard-list.svg?react"
import Tire from "../assets/images/tire.svg?react"

export const Tab = [
  {
    name: "Switch Organization",
    icon: BriefCase,
  }
]

export const sidebarSections = [
  {
    title: "",
    items: [{ label: "Dashboard", icon: DashboardHome, path: "/dashboard" }],
  },
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", icon: UserFriends, path: "/users" },
      { label: "Guarantors", icon: Guarantors, path: "/guarantors" },
      { label: "Loans", icon: Loans, path: "/loans" },
      { label: "Decision Models", icon: DecisionModels, path: "/decision-models" },
      { label: "Savings", icon: Savings, path: "/savings" },
      { label: "Loan Requests", icon: MoneyBag, path: "/loan-requests" },
      { label: "Whitelist", icon: Whitelist, path: "/whitelist" },
      { label: "Karma", icon: Karma, path: "/karma" },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization", icon: BriefCase, path: "/organization" },
      { label: "Loan Products", icon: MoneyBag, path: "/loan-products" },
      { label: "Savings Products", icon: SavingsProducts, path: "/savings-products" },
      { label: "Fees and Charges", icon: Coins, path: "/fees" },
      { label: "Transactions", icon: Transaction, path: "/transactions" },
      { label: "Services", icon: Galaxy, path: "/services" },
      { label: "Service Account", icon: UserCog, path: "/service-account" },
      { label: "Settlements", icon: Scroll, path: "/settlements" },
      { label: "Reports", icon: ChartBar, path: "/reports" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences", icon: Slider, path: "/preferences" },
      { label: "Fees and Pricing", icon: BadgePercent, path: "/pricing" },
      { label: "Audit Logs", icon: Clipboard, path: "/audit-logs" },
    ],
  },
];
