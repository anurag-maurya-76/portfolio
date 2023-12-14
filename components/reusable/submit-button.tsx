import React from "react";
import { experimental_useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      type="submit"
      className="flex h-[3rem] w-[8rem] items-center justify-center rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:opacity-75 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      <React.Fragment>
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <div>Submit</div>
        )}
      </React.Fragment>
    </button>
  );
};

export default SubmitButton;
