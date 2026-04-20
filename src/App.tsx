import { RouterProvider } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import { router } from "./router/index.tsx";

function App() {
  return (
    <MathJaxContext config={{ tex: { inlineMath: [["$", "$"]] } }}>
      <RouterProvider router={router} />
    </MathJaxContext>
  );
}

export default App;
