import { Helmet } from "react-helmet-async";
import Cover from "../pages/Shared/Cover/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import desertImg from "../assets/menu/dessert-bg.jpeg";
import saladImg from "../assets/menu/salad-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import soupImg from "../assets/menu/pizza-bg.jpg";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {

  const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
          <SectionTitle
          //  main cover 
           subHeading="Don't Miss" heading="ToDays Offer"
          ></SectionTitle>
          {/* offerd menu items  */}
          <MenuCategory items={offered}></MenuCategory>
          {/* dessert menu items  */}
          <MenuCategory
           items={desserts}title="dessert"img={desertImg}
          ></MenuCategory>
          <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
          <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
          <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
