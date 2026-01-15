import Car from "./Components/car";
import Phone from "./Components/phone";
import Color from "./Components/color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car carInfo={carinfo} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
