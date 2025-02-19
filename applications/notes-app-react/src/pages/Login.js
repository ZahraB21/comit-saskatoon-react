import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../components/Button";
import { AccountContext } from "../contexts/AccountProvider";
import { NotesContext } from "../contexts/NotesProvider";
import { StatusContext } from "../contexts/StatusProvider";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const history = useHistory();
  const { handleSubmitLogin } = useContext(AccountContext);
  const { isLoading, updateLoadingStatus, error } = useContext(StatusContext);
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <h2>Login</h2>
      <Form
        onSubmit={async (event) => {
          updateLoadingStatus(true);
          event.preventDefault();
          await handleSubmitLogin(values);
          updateLoadingStatus(false);
          if (!error) {
            history.push("/notes");
          }
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {error && error.message}
    </Wrapper>
  );
}
