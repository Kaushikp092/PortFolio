import React from "react";

const Project = () => {
  return (
    <>
      <span
        className="flex justify-center text-2xl md:text-4xl lg:text-5xl font-semibold  text-white/75"
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
        }}
      >
        Projects
      </span>
      <div
        className="flex justify-center items-center md:text-2xl lg:text-4xl font-semibold leading-tight tracking-[-0.02em] text-white/75 max-w-10/12"
        style={{
          margin: "2rem",
        }}
      >
        Projects are currently under development and will be added to this portfolio soon.
      </div>
    </>
  );
};

export default Project;
