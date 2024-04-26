import { AiOutlineLoading3Quarters } from "react-icons/ai";

type TSpinner = {
  size?: number;
  style?: string;
};

const Spinner = ({ size, style }: TSpinner) => {
  return (
    <div className={`animate-spin ${style}`}>
      <AiOutlineLoading3Quarters size={size} />
    </div>
  );
};

export default Spinner;
