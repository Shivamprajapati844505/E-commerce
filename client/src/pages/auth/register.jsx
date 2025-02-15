import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "./../../components/common/Form";
import { registerFormControls } from "./../../config/index";

const initalState = {
  username: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initalState);

  function onSubmit() {}

  return (
    <div className="max-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Create new account
        </h1>
        
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2 text-center">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
    </div>
  );
}

export default AuthRegister;
