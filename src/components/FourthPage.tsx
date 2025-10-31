import React, { useState } from "react";
import About from "./About";
import Description from "./Description";
import { seventhDescription } from "@/utils/constants";

export default function FourthPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [errors, setErrors] = useState({
    Name: false,
    Email: false,
    Message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    const newErrors = {
      Name: formData.Name.trim() === "",
      Email: !validateEmail(formData.Email),
      Message: formData.Message.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  }

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call with timeout
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: formData }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Reset form after successful submission
      setFormData({ Name: "", Email: "", Message: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error if needed
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <About
        headerDesc="Get In Touch"
        paraDesc="Don't be shy"
        belowParaDesc="Let's connect and discuss your next project."
      />
      <div className=" bg-gray-50 rounded-2xl p-4 selection:bg-black selection:text-white border-gray-200 border-2 ">
        <form onSubmit={onSubmitHandler} className="flex flex-col ">
          <label className="text-black text-sm p-0.5" htmlFor="Name">
            Name
          </label>
          <input
            className={`${
              errors.Name ? "border-red-500" : "border-gray-200"
            } rounded-2xl text-black placeholder:text-gray-500 placeholder:text-[0.800rem] border-2 bg-white m-1 p-1`}
            placeholder="Your Name"
            type="text"
            name="Name"
            value={formData.Name}
            onChange={onChangeHandler}
          />
          {errors.Name && (
            <p className="text-red-500 text-xs">What should I call you?</p>
          )}
          <label className="text-black text-sm p-0.5" htmlFor="Email">
            Email
          </label>
          <input
            className={`${
              errors.Email ? "border-red-500" : "border-gray-200"
            } rounded-2xl text-black placeholder:text-gray-500 placeholder:text-[0.800rem] border-2 bg-white m-1 p-1`}
            type="email"
            name="Email"
            value={formData.Email}
            placeholder="your@email.com"
            onChange={onChangeHandler}
          />
          {errors.Email && (
            <p className="text-red-500 text-xs">
              Please enter a valid email address
            </p>
          )}
          <label className="text-black text-sm p-0.5" htmlFor="Message">
            Message
          </label>
          <textarea
            className={`${
              errors.Message ? "border-red-500" : "border-gray-200"
            } rounded-2xl text-black placeholder:text-gray-500 placeholder:text-[0.800rem] border-2 bg-white m-1 p-1`}
            placeholder="What's on your mind?"
            rows={3}
            name="Message"
            value={formData.Message}
            onChange={onChangeHandler}
          />
          {errors.Message && (
            <p className="text-red-500 text-xs">Don't leave me hanging</p>
          )}
          {isSuccess && (
            <p className="text-green-500 text-sm text-center mt-2">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          <button
            className={`inline-flex items-center m-4 justify-center gap-2 font-sans font-medium min-w-11 min-h-11 rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-4 py-2 text-sm ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            <span className="">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            {!isSubmitting && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>
        </form>
      </div>
      <Description
        descriptionArray={seventhDescription}
        descriptionTitle="Other Ways to Reach Me"
      />
    </>
  );
}
