import { useContext, useRef } from "react";
import { PostList } from "../store /postList";
import { redirect, useNavigate,Form } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  const handleSubmit = (event) => {


  };
  return (
    <>
      <Form method="Post" className="create-post">
        <div class="mb-3">
          <label for="userId" class="form-label">
            Enter User Id
          </label>
          <input name ="userId" type="text" class="form-control" id="userId" />
        </div>
        <div class="mb-3">
          <label for="tittle" class="form-label">
            Post Tittle
          </label>
          <input
           name ="title"
            type="text"
            class="form-control"
            id="tittle"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            Post Content
          </label>
          <textarea name="body" type="text" class="form-control" id="tittle" />
        </div>
        <div class="mb-3">
          <label for="reactions" class="form-label">
            Number Of Reactions
          </label>
          <textarea
            name='reactions'
            type="text"
            class="form-control"
            id="reactions"
          />
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">
            Tags
          </label>
          <textarea name='tags' type="text" class="form-control" id="tags" />
        </div>
        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};
export async function createPostAction (data){
 const formDta = await data.request.formData();
 const postData = Object.fromEntries(formDta);
 console.log(postData);
      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData)
      })
        .then((res) => res.json())

        .then((post) => {
          console.log(post);
          navigate("/");
        });
return redirect ('/');
}
export default CreatePost;
