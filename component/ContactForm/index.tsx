"use client";

import { client } from "@/lib/sanity/client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
type FormType = Yup.InferType<typeof ContactSchema>;
const ContactForm = () => {
  const handleSubmit = async (values: FormType) => {
    console.log(values);
    try {
      await client.create({
        _type: "contactForm",
        name: values.name,
        email: values.email,
        message: values.message,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-fit mx-auto flex flex-col items-center mt-30 p-6 rounded-4xl shadow-2xl gap-4 border-2">
        <h1 className="text-4xl text-center text-white my-4">Contact Form</h1>
        <Field
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="outline-1 w-lg p-2 text-white placeholder:text-gray-500 focus:outline-blue-500"
        ></Field>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="outline-1 w-lg p-2 text-white  placeholder:text-gray-500 focus:outline-blue-500"
        ></Field>
        <Field
          id="message"
          name="message"
          placeholder="Enter your message"
          className="outline-1 w-lg p-2 text-white  placeholder:text-gray-500 focus:outline-blue-500"
        ></Field>
        <button
          type="submit"
          className="bg-neutral-500 rounded-2xl text-xl px-8 py-2 text-white "
        >
          SUBMIT
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
