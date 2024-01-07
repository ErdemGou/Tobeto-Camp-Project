import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  const initialValues = { title: "", price: 10 };

  const schema = Yup.object({
    title: Yup.string().required("Ürün adi zorunlu"),
    price: Yup.number().required("Ürün fiyati zorunlu"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <TobetoTextInput name="title" placeholder="Ürün Adı" />
        <TobetoTextInput name="price" placeholder="Ürün Fiyati" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
