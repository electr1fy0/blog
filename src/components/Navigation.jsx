import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="pb-3 flex font-medium text-lg border-b border-neutral-200 justify-between items-center mb-6">
      <div className="text-neutral-700 ">
        <Link to="/">electr1fy0's blog</Link>
      </div>
      <div className="text-base">Github</div>
    </nav>
  );
};

export default Navigation;
