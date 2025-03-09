import {
  Category,
  Label,
  People,
  Apple,
  Dashboard,
  LocationCity,
  ColorLens,
  EditAttributes,
  PhoneAndroid,
  Store,
  ShoppingBasket,
} from "@mui/icons-material";

export const SIDE_ITEMS = [
  { href: "/dashboard", Icon: Dashboard, text: "داشبورد" },
  { href: "/dashboard/badges", Icon: Label, text: "برچسب‌ها" },
  { href: "/dashboard/brands", Icon: Apple, text: "برند" },
  { href: "/dashboard/categories", Icon: Category, text: "دسته‌بندی کالاها" },
  { href: "/dashboard/cities", Icon: LocationCity, text: "شهرها" },
  { href: "/dashboard/colors", Icon: ColorLens, text: "رنگ‌ها" },
  { href: "/dashboard/features", Icon: EditAttributes, text: "ویژگی‌ها" },
  { href: "/dashboard/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/dashboard/users", Icon: People, text: "کاربران" },
  { href: "/dashboard/sellers", Icon: Store, text: "فروشندگان" },
  { href: "/dashboard/orders", Icon: ShoppingBasket, text: "سفارشات" },
];
