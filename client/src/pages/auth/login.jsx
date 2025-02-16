import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "./../../components/common/Form";
import { loginFormControls } from "./../../config/index";
import { loginUser } from "./../../store/auth-slice/index";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";

const initalState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initalState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="max-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Sign in your account
        </h1>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2 text-center">
        Don't have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

export default AuthLogin;
