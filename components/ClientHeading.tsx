import React from "react";

const ClientHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div>
      <h1
        className={`relative mx-auto w-fit text-4xl md:text-5xl text-[#e58a25] text-center font-extrabold mb-10 before:absolute before:w-0 before:h-1 before:bg-[#e58a25] before:bottom-[-18px] before:right-1 before:duration-300 before:hover:w-[95%] ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default ClientHeading;
