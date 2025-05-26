import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "./Schema";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";

export default function RegisterForm() {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (data: RegisterSchema) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        // Nếu API trả về lỗi, hiển thị message từ server hoặc thông báo chung
        setError(result.message || 'Đăng ký thất bại');
      } else {
        // Đăng ký thành công
        console.log('Đăng ký thành công:', result);
        setSuccess(true);
        // Có thể redirect hoặc reset form
        methods.reset();
      }
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      setError('Không thể kết nối server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto p-6 mt-22">
      <CardHeader>
        <CardTitle>Đăng ký</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <NameField />
            <EmailField />
            <PasswordField />

            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 text-sm">
                Đăng ký thành công!
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-black text-white"
              disabled={loading}
            >
              {loading ? 'Đang xử lý...' : 'Đăng ký'}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
