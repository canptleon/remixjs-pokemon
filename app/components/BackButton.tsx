import { useNavigate } from "@remix-run/react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" bg-[#ffcb08] text-white p-4 absolute text-center top-5 left-0 rounded-br-[999px] rounded-tr-[999px]  mr-auto"
    >
      Back
    </button>
  );
};
