import { Route, Routes } from "react-router-dom"
import { GradeProvider } from "./context"
import Layout from "./layouts/Layout"
import Home from "./routes/home/Home"
import Contributes from "./routes/contribute/Contributes"

const App = () => {
  return (
    <>
      <GradeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contributes" element={<Contributes />} />
          </Route>
        </Routes>
      </GradeProvider>
    </>
  )
}

export default App
