import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string()
        .max(40, "Subject must be 40 characters or less")
        .required("Required"),
      message: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
        setSubmitting(true)
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/message",
          values
        );
        if (res.data.success) {
          alert(res.data.message);
          resetForm();
        } else {
          alert("Something went Wrong!");
        }

        
      } catch (error) {
        console.log(error.message);
        alert("Something went Wrong!");
      }
      finally{
        setSubmitting(false)
      }
    },
  });

  return (
    <div className="bg-white dark:bg-gray-900 shadow-2xl">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Want to collaborate? Want to send feedback about my work? Need details
          about my Business plan? Let me know.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div className="flex">
            <div className="w-1/2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="harish@mail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-1/2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Harish"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              required
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-600">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#149ddd] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {submitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
