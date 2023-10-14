import z from "zod";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";

const formSchema = z.object({});
export const AccountForm = () => {
  return (
    <AutoForm formSchema={formSchema}>
      <AutoFormSubmit> send now</AutoFormSubmit>
    </AutoForm>
  );
};
