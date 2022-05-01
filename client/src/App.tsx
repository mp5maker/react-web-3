import get from "lodash/get";
import * as React from "react";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = get(event, "target.name", "");
    const value = get(event, "target.value", "");
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div className="p-5 flex justify-e">
        <button onClick={connectWallet} type="button">
          Connect
        </button>
      </div>
      <div>
        <InputField
          value={get(form, "addressTo", "")}
          placeholder="Address To"
          name="addressTo"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputField
          value={get(form, "amount", "")}
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputField
          value={get(form, "keyword", "")}
          placeholder="Keyword (Gif)"
          name="keyword"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputField
          value={get(form, "message", "")}
          placeholder="Enter Message"
          name="message"
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
