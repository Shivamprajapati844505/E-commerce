import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/Auth/AuthLayout";
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
          <  Route path="login" element={<AuthLogin/>}/>
          <  Route path="register" element={<AuthRegister/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
