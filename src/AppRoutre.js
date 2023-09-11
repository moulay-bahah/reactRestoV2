import { Route, Routes } from "react-router-dom"
import App from "./App"
import Categorie from "./componte/pages/Categorie"
import Food from "./componte/pages/Food"
import PageForm from "./componte/pages/PageForm"
import Formfood from "./componte/pages/Formfood"
import Info from "./componte/pages/info/Info"
import PageUpdateForm from "./componte/pages/PageUpdateForm"

export default function AppRoutre(id) {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Categorie" element={<Categorie />} />
      <Route path="/Food/:id" element={<Food />} />
      <Route path="/Form/:id" element={<PageForm />} />
      <Route path="/Formfood/:id" element={<Formfood />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/PageUpdateForm/:id" element={<PageUpdateForm />} />
    </Routes>
    );
} 