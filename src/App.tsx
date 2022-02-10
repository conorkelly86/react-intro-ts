import React from "react";
import "./index.css";
import { Card, CardProps } from "./components/Card";

export interface AppProps {
  card?: CardProps;
}

export const App: React.FC<AppProps> = ({ card }) => {
  return (
    <div className="bg-pl-grey flex justify-center">
      <Card name="Liverpool F.C" />
    </div>
  );
};
