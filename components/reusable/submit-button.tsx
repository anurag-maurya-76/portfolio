import React from "react";
import { experimental_useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      type="submit"
      className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center active:scale-105 hover:scale-110 hover:bg-gray-950 disabled:scale-100 disabled:opacity-75"
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
