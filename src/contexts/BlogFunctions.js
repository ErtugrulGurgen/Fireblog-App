import { createContext, useContext, useEffect, useState } from "react";
import {
  getDatabase,
  push,
  ref,
  set,
  update,
  remove,
  onValue,
} from "firebase/database";

export const addBlog = (blogValue) => {
  const db = getDatabase();
  const userRef = ref(db, "blogs");
  const newUserRef = push(userRef);
  set(newUserRef, blogValue);
};

export const updateBlog = (id, data) => {
  const db = getDatabase();
  const updates = {};
  updates[`blogs/${id}`] = data;
  return update(ref(db), updates);
};

export const deleteBlog = (id) => {
  const db = getDatabase();
  remove(ref(db, `blogs/${id}`));
};

export const useBlogs = () => {
  const [blog, setBlog] = useState();
  useEffect(() => {
    const db = getDatabase();
    const blogRef = ref(db, "blogs");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogList = [];
      for (let id in data) {
        blogList.push({ id, ...data[id] });
      }
      console.log(snapshot.val());
      setBlog(blogList);
    });
  }, []);
  return blog;
};

// export const BlogContext = createContext();

// export const useBlog = () => {
//   return useContext(BlogContext);
// }

// const BlogContextProvider = ({ children }) => {
//   const [blog, setBlog] = useState();
//   const getBlog = (id) => {
//   const result = blog?.filter((item) => item.id === id);
//   return result;
//   };
//   useEffect(() => {
//     const db = getDatabase();
//     const blogRef = ref(db, "blogs");
//     onValue(blogRef, (snapshot) => {
//       const data = snapshot.val();
//       const blogList = [];
//       for (let id in data) {
//         blogList.push({ id, ...data[id] });
//       }
//       console.log(snapshot.val());
//       setBlog(blogList);
//     });
//   }, []);
//   return (
//     <BlogContext.Provider value={{ blog, getBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// }