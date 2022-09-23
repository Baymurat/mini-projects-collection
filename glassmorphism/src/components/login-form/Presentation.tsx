import React, { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Form } from "react-bootstrap";
import cx from "classnames";
import BouncingSquare from "@components/square";
import BluredBackground from "@components/blured-background";
import styles from "./styles.module.scss";
import validationSchema from "./validationSchema";

type Props = {
  onSubmit: (values: FormValues) => void;
}

type FormValues = {
  userName: string;
  password: string;
}

const Presentation: FC<Props> = ({ onSubmit }) => (
  <>
    <BluredBackground
      background="#ff359b"
      height={600}
      top={-350}
      width={600}
    />
    <BluredBackground
      background="#fffd87"
      bottom={-150}
      left={100}
      width={500}
      height={500}
    />
    <BluredBackground
      background="#00d2ff"
      bottom={50}
      right={100}
      width={300}
      height={300}
    />
    <div className={styles.box}>
      <BouncingSquare
        top={-50}
        right={-60}
        width={100}
        height={100}
        animationDelay={1}
      />
      <BouncingSquare
        top={150}
        left={-100}
        width={120}
        height={120}
        animationDelay={2}
      />
      <BouncingSquare
        bottom={50}
        right={-60}
        width={80}
        height={80}
        animationDelay={3}
      />
      <BouncingSquare
        bottom={-80}
        left={100}
        width={50}
        height={50}
        animationDelay={4}
      />
      <BouncingSquare
        top={-80}
        left={140}
        width={60}
        height={60}
        animationDelay={5}
      />

      <div className={styles.container}>
        <div className={styles.form}>
          <h2>Login form</h2>
          <Formik
            <FormValues>
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={(values) => {
              onSubmit(values);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, errors }) => (
              <FormikForm>
                <div className={styles.inputBox}>
                  <Form.Group>
                    <Form.Control
                      className={cx({ "is-invalid": errors.userName })}
                      type="text"
                      placeholder="Username"
                      name="userName"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className={styles.inputBox}>
                  <Form.Group controlId="password">
                    <Form.Control
                      className={cx({ "is-invalid": errors.password })}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className={styles.inputBox}>
                  <Button
                    type="submit"
                    variant="primary"
                  >
                    Login
                  </Button>
                </div>
                <p className={styles.forget}>Forgot password <a href="#">Click here</a></p>
                <p className={styles.forget}>Don't have any account <a href="#">Sign up</a></p>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </>
);

export default Presentation;
