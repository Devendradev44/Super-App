"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useStore } from "@/store/useStore";

const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .regex(/^[A-Za-z ]+$/, "Only alphabets are allowed"),

  username: z
    .string()
    .min(3, "Username is required")
    .regex(/^[a-zA-Z0-9_]+$/, "Invalid username"),

  email: z
    .string()
    .email("Invalid email address"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),

  terms: z.boolean().refine((value) => value, {
    message: "Please accept the terms",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const setUser = useStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      mobile: "",
      terms: false,
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    setUser({
      name: data.name,
      username: data.username,
      email: data.email,
      mobile: data.mobile,
    });

    router.push("/categories");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-5"
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="Username"
        placeholder="Enter username"
        error={errors.username?.message}
        {...register("username")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Mobile"
        placeholder="Enter mobile number"
        error={errors.mobile?.message}
        {...register("mobile")}
      />

      <label className="flex items-center gap-3 text-sm text-gray-300">
        <input
          type="checkbox"
          className="h-4 w-4 accent-green-500"
          {...register("terms")}
        />

        Share my registration data with SuperApp
      </label>

      {errors.terms && (
        <p className="text-sm text-red-500">
          {errors.terms.message}
        </p>
      )}

      <Button
        type="submit"
        fullWidth
        disabled={isSubmitting}
      >
        SIGN UP
      </Button>
    </form>
  );
}