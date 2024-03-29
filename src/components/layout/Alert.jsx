import { useContext } from "react";

import AlertContext from "../../context/alert/AlertContext";

function Alert(){
  const { alert } = useContext(AlertContext);

  return(
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2 ml-80">
        {alert.type === "error" && (
          <svg className="w-7 h-7 flex-none mt-0.5"
          fill="none"
          viewBox="0 0 24 24">

          <circle cx="12" cy="12" r="12" fill="#FECDD3"/>
            <path d="M8 8l8 8M16 8l-8 8"
            stroke="#B91C1C"
            strokeWidth="2"/>
          </svg>
        )}
        <p className="flex-1 text-lg font-semibold lending-7 text-black mr-20">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
};

export default Alert;