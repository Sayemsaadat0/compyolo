"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface formValues {
  email: string;
  password: string;
  confirm_Password: string;
  website: string;
}

const NewForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_Password: "",
      website: " ",
    },
    // validation using scheema
    validationSchema: yup.object({
      email: yup.string().nullable().email(),
      password: yup.string().min(6, "password must be atleast 6 characters"),
      confirm_Password: yup
        .string()
        .oneOf([yup.ref("password")], "password must be same "),
      website: yup.string().url().nullable(),
    }),

    onSubmit: (value: formValues, { resetForm }) => {
      console.log(value);
      //   resetForm({ value: " " });
    },
  });
  //   console.log(formik.errors);
  return (
    <div>
      <h1 className="text-center text-2xl py-5  font-bold">email pass confirm pass and  web </h1>
      <form onSubmit={formik.handleSubmit}>
        {/* email */}
        <div className="email">
          <input
            className="border  border-gray-500 px-6 py-3"
            placeholder="Enter Your Email"
            onChange={formik.handleChange}
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            required
          />

          <p className="text-red-500">
            {formik.errors.email && formik.errors.email}
          </p>
        </div>
        <br />

        {/* passwpord */}
        <div className="password">
          <input
            className="border  border-gray-500 px-6 py-3"
            placeholder="Password"
            onChange={formik.handleChange}
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            required
          />
          <p className="text-red-500">
            {formik.errors.password && formik.errors.password}
          </p>
        </div>
        <br />

        {/* confrm password */}
        <div className="confirm_password">
          <input
            className="border  border-gray-500 px-6 py-3"
            placeholder="Password"
            onChange={formik.handleChange}
            type="password"
            id="confirm_Password"
            name="confirm_Password"
            value={formik.values.confirm_Password}
            required
          />
          <p className="text-red-500">
            {formik.errors.confirm_Password && formik.errors.confirm_Password}
          </p>
        </div>
        <br />
        {/* website */}
        <div className="website">
          <input
            className="border  border-gray-500 px-6 py-3"
            placeholder="WEbsite Url"
            onChange={formik.handleChange}
            type="url"
            id="website"
            name="website"
            value={formik.values.website}
            required
          />
          <p className="text-red-500">
            {formik.errors.website && formik.errors.website}
          </p>
        </div>
        <br />

        <button className="border px-3 py-2 border-gray-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewForm;
