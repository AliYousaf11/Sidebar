import Accordion from "../view/Accordion/Index";
import Model from "../view/Model/Index";
import Pagination from "../view/Pagination/Index";
import Search from "../view/SearchBar/Index";
import UserApi from "../view/UserApi/UserApi";
import Todo from "../view/TODO/Todo";
import Carousel from "../view/Carousel/Index";
export const RoutesPath = [
  {
    path: "/",
    element: <Accordion />,
  },
  {
    path: "/carousel",
    element: <Carousel />,
  },
  {
    path: "/model",
    element: <Model />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/userapi",
    element: <UserApi />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];
