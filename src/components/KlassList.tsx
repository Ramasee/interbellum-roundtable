import React from "react";
import { Link } from "react-router-dom";

import "./KlassList.css";
import { requireAll } from "../utils";
import { SquareButton } from "./SquareButton";

const icons = requireAll(require.context("../assets/icons", false));

const KLASSES = [
  {
    name: "Engineer",
    icon: icons["class_engineer"],
    path: "/engineer",
  },
];

const KLASSES2 = [
  {
    name: "Rune Scribe",
    icon: icons["class_runescribe"],
    path: "/runescribe",
  },
];

interface Props {}

export const KlassList: React.FC<Props> = () => {
  console.log(icons);

  return (
   <>
    <ul className="KlassList">
      {KLASSES.map((klass) => (
        <li className="KlassList-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
	<ul className="KlassList2">
      {KLASSES2.map((klass) => (
        <li className="KlassList2-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
   </>
  );
};
