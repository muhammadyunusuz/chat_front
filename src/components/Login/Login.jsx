import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Chat from "../Chat/Chat";
import { FormGroup, Form, Label, Input, Button, FormText } from "reactstrap";

export default function Login() {
  const [token, setToken] = useAuth();
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (
      username.length != 0 &&
      username.match(
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
      )
    ) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  }, [username]);

  useEffect(() => {
    if (
      password.length != 0 &&
      password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
    ) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }, [password]);

  if (token) {
    return <Chat />;
  }

  return (
    <section className="vh-100 d-flex justify-content-center flex-column align-items-center">
      <h1>Login</h1>

      <Form className="mt-2 w-50">
        <FormGroup>
          <Label for="username"></Label>
          <Input
            bsSize="lg"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete="off"
            invalid={!validUsername}
            onKeyUp={(e) => setUsername(e.target.value)}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password"></Label>
          <Input
            bsSize="lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            invalid={!validPassword}
            onKeyUp={(e) => setPassword(e.target.value)}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!validPassword && (
            <FormText>
              Please least one upper case, one lower case English letter , least
              one digit, least one special character and minimum eight in length
            </FormText>
          )}
        </FormGroup>
        <Button
          disabled={!(validPassword && validUsername)}
          className="mt-3 w-100"
          size="lg"
        >
          Login
        </Button>
      </Form>
    </section>
  );
}
