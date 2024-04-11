import { useContext, useEffect, useState } from "react";
import Posts from "./Listposts";
import { ComponentContext } from "./context";
import { useLoaderData } from "react-router-dom";

const Makeposts = () => {

  const postlist=useLoaderData();

  /*const Makeposting=()=>{

    console.log("Hello");

    useEffect(fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {addIntialPosts(json.posts)},[]));

  }*/



  /*useEffect(() => {
    
    const controller= new AbortController();
    const signal=controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((json) => {
        addIntialPosts(json.posts);
      });

    return ()=>{
      console.log("Cancellation is Done");
      controller.abort();
    };},[]);

    /*{fetching && <LoadingPost></LoadingPost>}
    {!fetching && postlist.length === 0 && <Message></Message>}*/

  return (
    <>

      {postlist.map((post) => (
        <Posts key={post.userId} post={post}></Posts>
      ))}
    </>
  );

  
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
      .then((data) => {
        return data.posts;
      });
  };
export default Makeposts;
