import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordSchema } from "./Schema";
import PasswordField from "./fields/PasswordField";
import ConfirmPasswordField from "./fields/ConfirmPasswordField";
import { Button } from "@/components/ui/button";

export default function ResetPasswordForm() {
  const methods = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordSchema) => {
    console.log("Đặt lại mật khẩu:", data.password);
    // Gọi API: POST /reset-password?token=...
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-20 p-8 border border-black rounded-lg shadow-sm space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Đặt lại mật khẩu</h2>

        <PasswordField />
        <ConfirmPasswordField />

        <Button type="submit" className="w-full bg-black text-white">
          Đặt lại mật khẩu
        </Button>
      </form>
    </FormProvider>
  );
}
