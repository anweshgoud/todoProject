import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ComponentContext } from "./context";
const Posts = ({ post }) => {

    const {deletepost}=useContext(ComponentContext)
  return (
    <>
      <div className="card Posts" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.userId)}>
            <MdDelete />
          </span>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {post.body}
          </h6>
          <p className="card-text"></p>
          <p className="card-link">{`Number of likes :${post.reactions}`}</p>
        </div>
      </div>
    </>
  );
};

export default Posts;
