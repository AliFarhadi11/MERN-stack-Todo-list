import React, { Dispatch, SetStateAction } from "react";
import { FaRegEdit } from "react-icons/fa";
type TEditButton = {
  setIsEditClicked: Dispatch<SetStateAction<boolean>>;
};

const EditButton: React.FC<TEditButton> = ({ setIsEditClicked }) => {
  return (
    <button onClick={() => setIsEditClicked((prev) => !prev)}>
      <FaRegEdit className="pointer-events-none" />
    </button>
  );
};

export default EditButton;
