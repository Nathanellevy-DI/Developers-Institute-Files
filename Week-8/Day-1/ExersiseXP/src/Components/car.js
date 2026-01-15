import { useState } from "react";
import Garage from "./garage";

function Car({ carInfo }) {
  const [color] = useState("red");

  return (
    <div>
      <h1>
        This car is {color} {carInfo.model}
      </h1>

      <Garage size="small" />
    </div>
  );
}

export default Car;
