"use client";
import React from "react";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import * as z from "zod";

const formShema = z.object({
  password: z
    .string({
      required_error: "Password is required.",
    })
    .describe("Update your password")
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
});
const HandlingPassword = () => {
  return (
    <AutoForm
      formSchema={formShema}
      fieldConfig={{
        password: {
          inputProps: {
            type: "password",
            placeholder: "••••••••",
          },
        },
      }}
    >
      <AutoFormSubmit>Update</AutoFormSubmit>
    </AutoForm>
  );
};

export default HandlingPassword;
