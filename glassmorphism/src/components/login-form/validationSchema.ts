import * as Yup from "yup";

export default Yup.object().shape({
  userName: Yup.string().required("Required field"),
  password: Yup.string().required("Required field").min(5),
});
