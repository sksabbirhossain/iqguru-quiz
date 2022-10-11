import React from "react";

const Blogs = () => {
  return (
    <div className="m-5 ">
      <h3 className=" text-center text-sky-500 py-2 shadow-sm">Blog Page</h3>

      <div className="my-5 shadow-sm py-5 px-3">
        <h5>1. What is the purpose of the react router?</h5>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="my-5 shadow-sm py-5 px-3">
        <h5>2. How does context api works in react?</h5>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="my-5 shadow-sm py-5 px-3">
        <h5>3. what is useref hook in react?</h5>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
