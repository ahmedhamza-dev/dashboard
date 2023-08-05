import { TextField } from "@mui/material";
import Input from "../../../components/Input";
import { useTranslation } from "react-i18next";

const CreateProduct = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Input label="Hi" />
      </div>
      <div className="col-md-6">
        <Input label="Hi" />
      </div>
    </div>
  )
}

export default CreateProduct;