import { ButtonList } from "./ButtonList";
import { Display } from "./Display";

export default function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

function Calculator() {
  return (
    <div className="calc">
      <Display />
      <ButtonList />
    </div>
  );
}
