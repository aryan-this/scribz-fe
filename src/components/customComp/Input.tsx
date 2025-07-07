// export function Input({ref, placeholder}: { placeholder: string; ref?: any }) {
//     return(<div>
//         <input ref={ref} className='px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg w-50' placeholder={placeholder} type='text' ></input>
        
//     </div>)
    
// }


import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className="px-4 py-2 ml-2 mt-2 border-black border-2 rounded-lg w-50"
        type="text"
        {...props}
      />
    );
  }
);

// Optional: Set display name for better debugging
Input.displayName = "Input";
