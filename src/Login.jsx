import { useContext } from "react";
import { ComponentContext } from "./Components/context";
import { useNavigate,Form, redirect } from "react-router-dom";

const Login = () => {

  const Navigate=useNavigate();

  const { createpost } = useContext(ComponentContext);

  /*const HandleButton = () => {

    event.preventDefault();

    const useridelement = userId.current.value;
    const userTitleValue = userTitle.current.value;
    const UserBodyelement = UserBody.current.value;
    const UserReactionselement = UserReactions.current.value;

    console.log("Handledbutton is running");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: useridelement,
        title: userTitleValue,
        body:UserBodyelement,
        reactions:UserReactionselement,
      
      }),
    })
      .then((res) => res.json())
      .then(posting=>{createpost(posting);console.log(posting)});
      Navigate("/display-posts");


    userId.current.value="";
    userTitle.current.value="";
    UserBody.current.value="";
    UserReactions.current.value="";

  }; */


  return (
    <>
      <Form method="POST" className="Formrow">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="UserId"
            aria-describedby="emailHelp"
            placeholder="Enter User id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title of the Post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Post Body
          </label>
          <textarea
            type="text"
            className="form-control"
            name="Body"
            rows="3"
            id="exampleInputPassword1"
            placeholder="Tell more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            className="form-control"
            name="Reactions"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data){

  const dataForm= await data.request.formData();
  const postdata= Object.fromEntries(dataForm);

  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json())
      .then(posting=>{createpost(posting);console.log(posting)});
    
  return redirect("/");
}

export default Login;
