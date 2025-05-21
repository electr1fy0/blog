import { Link } from "react-router-dom";

const BlogItem = ({ title, date, link }) => {
  return (
    <div className="space-y-4">
      <div className="justify-between items-center flex my-4 ">
        <div>
          <Link to={link}>
            <p className="text-neutral-700 underline decoration-neutral-300 decoration-2 tracking-wide underline-offset-2 hover:decoration-neutral-500 cipher">
              {title}
            </p>
          </Link>
        </div>
        <div className="text-neutral-500 ">{date}</div>
      </div>
    </div>
  );
};

export default BlogItem;
