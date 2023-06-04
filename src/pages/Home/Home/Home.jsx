import { Helmet } from "react-helmet";
import PopulerManue from "../../PopulerManue/PopulerManue";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerManue></PopulerManue>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;