import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "./Schema";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
    // Gọi API login ở đây nếu cần
  };

  return (
    <Card className="max-w-md mx-auto p-6 mt-22">
      <CardHeader>
        <CardTitle>Đăng nhập</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <EmailField />
            <PasswordField />
            <p>
              Quên mật khẩu?{" "}
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Nhấn vào đây
              </Link>
            </p>
            <Button type="submit" className="w-full  bg-black text-white">
              Đăng nhập
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
