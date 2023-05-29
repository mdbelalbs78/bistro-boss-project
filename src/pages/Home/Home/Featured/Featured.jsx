import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
      <SectionTitle
        subHeading="check-it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-500 bg-slate-50 bg-opacity-60">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug,20, 2060</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            odit, sapiente magnam deserunt, placeat debitis unde delectus
            necessitatibus non harum, autem corrupti! Soluta asperiores adipisci
            facere incidunt dicta sequi, tempore distinctio rerum aliquid saepe.
            Animi consequatur omnis accusantium nostrum veritatis!
          </p>
          <button className="btn btn-outline btn-info border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
