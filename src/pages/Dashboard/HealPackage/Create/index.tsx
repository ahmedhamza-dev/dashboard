import Card from "../../../../components/Card";
import Helmet from "../../../../components/Helmet";
import Input from "../../../../components/Input";

const CreateProduct = () => {
  return (
    <>
      <Helmet title="Heal Package" buttonProps={{text: 'Save'}} />
      <Card>
        <div className="row">
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Name" />
          </div>
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Arabic Name" />
          </div>
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Costing" />
          </div>
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Price" />
          </div>
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Category" />
          </div>
          <div className="col-md-6 mt-2 mb-2">
            <Input label="Description" />
          </div>
        </div>
      </Card>
    </>
  )
}

export default CreateProduct;