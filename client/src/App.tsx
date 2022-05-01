import get from "lodash/get";
import * as React from "react";
import Button from "./components/button";
import InputField from "./components/inputField";

const defaultForm = {
  addressTo: "",
  amount: "",
  keyword: "",
  message: "",
};

const App = () => {
  const [form, setForm] = React.useState(defaultForm);

  const connectWallet = () => {};

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = get(event, "target.name", "");
    const value = get(event, "target.value", "");
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="App p-5">
      <div className="flex justify-e">
        <Button onClick={connectWallet} type="button">
          Connect
        </Button>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="mt-2">
            <InputField
              value={get(form, "addressTo", "")}
              placeholder="Address To"
              name="addressTo"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <InputField
              value={get(form, "amount", "")}
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <InputField
              value={get(form, "keyword", "")}
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <InputField
              value={get(form, "message", "")}
              placeholder="Enter Message"
              name="message"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
