import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login, { createPostAction } from './Login.jsx';
import Makeposts,{postLoader} from './Components/Post.jsx';

const router=createBrowserRouter([{path:"/",element:<App></App>,children:[{path:"/",element:<App></App>},{path:"/display-posts",element:<Makeposts></Makeposts>,loader:postLoader},{path:"/make-post",element:<Login></Login>,action:createPostAction}]}]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
