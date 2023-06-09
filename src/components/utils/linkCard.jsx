import React from "react";

export const LinkCard = (props) => {
  
  const data=new Date().toJSON().slice(11,19);
  return (
    <div class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
      </div>
      <div class="p-6">
        <h5 class="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Meeting {props.index+1}
        </h5>
        <a className="py-2 px-4 bg-blue-500 text-white cursor-pointer rounded-md" href={props.link.link}>{props.link.link}</a>
      </div>
      <div class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Meeting Time scheduled {data}
      </div>
    </div>
  );
};
