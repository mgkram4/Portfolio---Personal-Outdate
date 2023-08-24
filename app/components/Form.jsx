import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Toast = () => (
  <div
    id="toast-simple"
    className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow"
    role="alert"
  >
    <svg
      className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
      />
    </svg>
    <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
  </div>
);

const MyForm = () => {
  const form = useRef();
  const [isToastVisible, setToastVisibility] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nk0e6m",
        "template_a7ii43d",
        form.current,
        "cB7ZaTK1YdUSKMpB8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToastVisibility(true); // Show the toast when the message is sent successfully
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form} className="py-4">
      <div className="flex text-4xl p-8 font-bold justify-center items-center text-gray-800">
        Let&apos;s Connect
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="floating_subject" // Changed type to "text" instead of "Subject"
          id="floating_subject" // Changed the id to "floating_subject"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_subject"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Subject
        </label>
      </div>
      <div className="relative z-0 w-full mb-8 group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
        >
          Your message
        </label>
        <textarea
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit" // Added type="submit" to make it a submit button
          className="flex justify-center items-center mb-4 bg-slate-50 shadow-md font-semibold text-lg p-4  rounded-xl transition-transform duration-300 hover:bg-[rgba(101,74,121,1)] hover:text-slate-50 hover:opacity-95 hover:shadow-2xl"
        >
          Send
        </button>
      </div>

      {/* Conditionally render the toast based on the isToastVisible state */}
      {isToastVisible && <Toast />}
    </form>
  );
};

export default MyForm;
