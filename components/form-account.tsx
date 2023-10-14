"use client";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";
import * as z from "zod";

// Define your form schema using zod
const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    // You can use zod's built-in validation as normal
    .min(2, {
      message: "Email must be at least 2 characters.",
    }),

  firstname: z
    .string({
      required_error: "Firstname is required.",
    })
    // You can use zod's built-in validation as normal
    .min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
  lastname: z
    .string({
      required_error: "Lastname is required.",
    })
    // You can use zod's built-in validation as normal
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    }),

  // Enum will show a select
  status: z.enum(["Student", "Developer", "Company"]),
});

const AccountForm = () => {
  return (
    <AutoForm formSchema={formSchema} fieldConfig={{}}>
      <AutoFormSubmit>Update</AutoFormSubmit>
    </AutoForm>
  );
};

export default AccountForm;
