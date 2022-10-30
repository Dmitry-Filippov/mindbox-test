import { FC, ReactNode } from "react";
import "./ToDosCards.css";

type ToDosCardsProps = {
  children: ReactNode;
};

const ToDosCards: FC<ToDosCardsProps> = ({ children }) => {
  return <ul className="todos-cards">{children}</ul>;
};

export default ToDosCards;
