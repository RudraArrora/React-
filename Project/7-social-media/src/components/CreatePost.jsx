import { useContext, useRef } from "react";
import {PostList} from "../store /postList";

const CreatePost = () => {
const {addPost} = useContext(PostList);
  const userIdE = useRef();
  const posrtTittleE = useRef();
  const reactionsE = useRef();
  const bodyE = useRef();
  const tagsE = useRef();


const handleSubmit = (event)=>{
event.preventDefault();
const userId =userIdE.current.value;
const postTittle= posrtTittleE.current.value;
const postBody = bodyE.current.value;
const reactions = reactionsE.current.value;
const tags = tagsE.current.value.split(/(\s+)/);
userIdE.current.value = " ";
posrtTittleE.current.value = " ";
bodyE.current.value =  " ";
reactionsE.current.value = " ";
tagsE.current.value =  " ";
addPost(userId,postTittle,postBody,reactions,tags);
  }
  return (
    <>
      <form className="create-post"  onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="userId" class="form-label">
            Enter User Id
          </label>
          <input ref={userIdE} type="text" class="form-control" id="userId" />
        </div>
        <div class="mb-3">
          <label for="tittle" class="form-label">
            Post Tittle
          </label>
          <input ref={posrtTittleE} type="text" class="form-control" id="tittle" />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            Post Content
          </label>
          <textarea ref={bodyE} type="text" class="form-control" id="tittle" />
        </div>
        <div class="mb-3">
          <label for="reactions" class="form-label">
            Number Of Reactions
          </label>
          <textarea ref={reactionsE} type="text" class="form-control" id="reactions" />
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">
           Tags 
          </label>
          <textarea ref={tagsE} type="text" class="form-control" id="tags" />
        </div>
        <button type="submit" class="btn btn-primary">
          Post 
        </button>
      </form>
    </>
  );
};
export default CreatePost;
