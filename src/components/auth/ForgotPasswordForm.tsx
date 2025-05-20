import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordSchema } from "./Schema";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import EmailField from "./fields/EmailField";

export default function ForgotPasswordForm() {
  const methods = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log("Gửi link khôi phục đến:", data.email);
    // Gọi API: POST /forgot-password
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-8 mt-20 border border-black rounded-lg shadow-sm"
      >
        <EmailField />
        <Button type="submit" className="w-full bg-black text-white mt-4">
          Gửi liên kết khôi phục
        </Button>
      </form>
    </FormProvider>
  );
}
