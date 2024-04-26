import TodoContainer from "./components/TodoContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="min-h-screen bg-zinc-200 px-4 py-12 font-rubik">
      <div className="flex justify-center">
        <TodoContainer />
        <ToastContainer />
      </div>
    </main>
  );
}

export default App;
