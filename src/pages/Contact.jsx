import React, { useState } from "react";
import CustomButton, {
  BUTTON_VARIANTS,
} from "../components/common/buttons/CustomButton";
import CustomFormInput, {
  INPUT_TYPES,
} from "../components/common/inputs/CustomFormInput";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear field-specific error
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const { name, email, subject, message } = formData;
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email format";
      }
    }

    // Subject validation
    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Fake form check
    const { name, email, subject, message } = formData;
    alert("Form submitted successfully!");
    console.log("Form submitted:", { name, email, subject, message });
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1">
      <div className="flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-left text-black mb-8">
            Send a message to us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-black"
          >
            <CustomFormInput
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type={INPUT_TYPES.TEXT}
              variant={errors.name ? "error" : "default"}
              errorMessage={errors.name}
            />
            <CustomFormInput
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type={INPUT_TYPES.EMAIL}
              variant={errors.email ? "error" : "default"}
              errorMessage={errors.email}
            />
            <CustomFormInput
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              type={INPUT_TYPES.TEXT}
              variant={errors.subject ? "error" : "default"}
              errorMessage={errors.subject}
            />

            {/* message field - textarea */}
            <div className="flex flex-col">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none border-gray-300 focus:ring-red-500"
                rows="5"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </div>

            <CustomButton
              text="Send Message"
              type="submit"
              variant={BUTTON_VARIANTS.PRIMARY}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
