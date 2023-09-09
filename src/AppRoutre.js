import { Route, Routes } from "react-router-dom"
import App from "./App"
import Categorie from "./componte/pages/Categorie"
import Food from "./componte/pages/Food"
import PageForm from "./componte/pages/PageForm"
import Formfood from "./componte/pages/Formfood"

export default function AppRoutre(id) {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Categorie" element={<Categorie />} />
      <Route path="/Food/:id" element={<Food />} />
      <Route path="/Form" element={<PageForm />} />
      <Route path="/Formfood/:id" element={<Formfood />} />
    </Routes>
    );
} 