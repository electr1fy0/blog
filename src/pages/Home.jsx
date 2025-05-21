import BlogItem from "../components/BlogItem";

const Home = () => {
  return (
    <div className="list">
      {" "}
      <BlogItem
        title="My first year in Engineering"
        date="25 Jun"
        link="/first-year"
      />
      <div>
        <BlogItem title="Second Brain" date="21 May" link="/second-brain" />
      </div>
    </div>
  );
};

export default Home;
