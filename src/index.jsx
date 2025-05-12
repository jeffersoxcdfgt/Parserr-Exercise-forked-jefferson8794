import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

function App() {
  // State
  const [result, setResult] = useState(0);
  let operation = "+";

  // FORMIK FORMS
  const formik = useFormik({
    // Initial State
    initialValues: {
      number1: "",
      number2: "",
      opeartion: "",
    },

    // On Submit
    onSubmit: async () => {
      const data = { ...formik.values };
      const res = Number(data.number1) + Number(data.number2);
      setResult(res);
    },
  });

  function onOperationClick(value) {
    operation = value;
  }

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
      <div className="App">
        <h1>Calculator</h1>

        <div className="number-inputs">
          <TextField
            required
            fullWidth
            onChange={formik.handleChange}
            label="Number 1"
            name="number1"
            value={formik.values.number1}
            placeholder="0"
          />

          <TextField
            required
            fullWidth
            onChange={formik.handleChange}
            label="Number 2"
            name="number2"
            value={formik.values.number2}
            placeholder="0"
          />
        </div>

        <Button type="submit" onClick={onOperationClick("+")}>
          +
        </Button>
        <Button type="submit" onClick={onOperationClick("-")}>
          -
        </Button>
        <Button type="submit">*</Button>
        <Button type="submit">/</Button>
        <h2>{result}</h2>
      </div>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
