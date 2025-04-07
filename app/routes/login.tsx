import { useRemixForm, getValidatedFormData } from "remix-hook-form";
import { Form } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ActionFunctionArgs } from "@remix-run/node";

const schema = zod.object({
  name: zod.string().min(1),
  email: zod.string().email().min(1),
});

type FormData = zod.infer<typeof schema>;

const resolver = zodResolver(schema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const { errors, data, receivedValues: defaultValues } =
    await getValidatedFormData<FormData>(request, resolver);
     throw new Error("welcome to server");
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return JSON.stringify({ errors, defaultValues });
  }

  // Do something with the data
  return  JSON.stringify(data);
};

export default function MyForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver,
  });

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <label>
        Name:
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
}