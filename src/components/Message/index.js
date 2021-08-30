import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants/authors";

export const Message = ({ text, author }) => {
  const name = useSelector(selectName);
  return (
    <div>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};
