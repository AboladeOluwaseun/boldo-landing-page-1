import React from "react";
import styles, { colors, buttonStyle } from "../styles/style";
import Button from "./Button";
import BlogCard from "./BlogCard";
import { blogs } from "@/constants";

const Blog = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center mt-10`}
    >
    
        <div className= 'flex flex-1 gap-3 flex-col items-center md:text-center'>
          <p className={`${styles.paragraph} text-Gray`}>Our Blog</p>
          <h1 className={`text-[36px] max-w-[842px]`}>Value proposition accelerator product management venture</h1>
        </div>
        <div className="flex flex-1 flex-col sm:flex-row flex-wrap gap-[6.25rem] my-[5rem] items-center justify-start sm:justify-center w-full relative z-[1]">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                key={blog.id}
                index={index}
                date={blog.date}
                author={blog.author}
                authorImg={blog.authorImg}
                content={blog.content}
                blogImg={blog.blogImg}
              />
            );
          })}
        </div>
        <div >
          <Button type={"Blog"} style={buttonStyle.whiteButton} />
        </div>
    </div>
  );
};

export default Blog;
