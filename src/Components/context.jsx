import { createContext, useReducer,useCallback } from "react";

export const ComponentContext = createContext({
  postlist: [],
  createpost: () => {},
  deletepost: () => {},
  addIntialPosts: () => {},
});

const functioningItem = (currPostlist, action) => {
  let newItems = currPostlist;

  if (action.type === "DELETE_POST") {
    newItems = currPostlist.filter(
      (item) => item.userId !== action.payload.postId
    );
  } 
  else if (action.type === "CREATE_POST") {
    console.log("Hello");
    newItems = [action.payload, ...currPostlist];

  } else if (action.type === "ADD_Intial_post") {
    newItems = action.payload;
  }
  return newItems;
};

const ContextProvider = ({ children }) => {
  const [postlist, createList] = useReducer(functioningItem, DefaultPost);

  const createpost = (post) => {
    createList({
      type: "CREATE_POST",
      payload: post,
    });
  };

  const deletepost = useCallback(
    (postId) => {
      createList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [createList]
  );

  const addIntialPosts = (posts) => {
    createList({
      type: "ADD_Intial_post",
      payload: posts,
    });
  };

  return (
    <ComponentContext.Provider
      value={{
        postlist,
        createpost,
        deletepost,
        addIntialPosts,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

const DefaultPost = [];

export default ContextProvider;
