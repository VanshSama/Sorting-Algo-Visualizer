import { Route, Routes } from "react-router";
import "./App.css";
import Sorting from "./Components/Sorting";
import BubbleSort from "./Components/BubbleSort";
import SelectionSort from "./Components/SelectionSort";
import InsertionSort from "./Components/InsertionSort";
import MergeSort from "./Components/MergeSort";
import QuickSort from "./Components/QuickSort";

function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sorting />}>
          <Route path="/" element={<BubbleSort />} />
          <Route path="/selection" element={<SelectionSort />} />
          <Route path="/insertion" element={<InsertionSort />} />
          <Route path="/merge" element={<MergeSort />} />
          <Route path="/quick" element={<QuickSort />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
