

"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface FormValues {
  FILE: File | null;
}

const FileUpload = () => {
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const formik = useFormik({
    initialValues: {
      FILE: null,
    },

    validationSchema: yup.object({
      FILE: yup
        .mixed()
        .required("Required!")
        .test("FILE_SIZE", "FIle size Too Big , must be within 1024 *1024", (value: File | null) => {
          return value !== null && value.size < 1024 * 1024;
        })
        .test("FILE_FORMAT", "Unsupported Format", (value: File | null) => {
          return value !== null && SUPPORTED_FORMATS.includes(value.type);
        }),
    }),

    onSubmit: (values: FormValues) => {
      console.log(values.FILE);
    },
  });

  return (
    <div>
      <h1 className="text-center text-2xl py-5 font-bold">Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="file">
          <input
            className="border border-gray-500 px-6 py-3"
            onChange={(e) => formik.setFieldValue("FILE", e.target.files?.[0] || null)}
            type="file"
            id="file"
            name="FILE"
            required
          />
          <p className="text-red-500">
            {formik.touched.FILE && formik.errors.FILE}
          </p>
        </div>
        <br />
        <br />
        <button className="border px-3 py-2 border-gray-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileUpload;


// accept={SUPPORTED_FORMATS.join("")}
