import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("please, type invalid email!")
    .required("The email is required!"),
});
