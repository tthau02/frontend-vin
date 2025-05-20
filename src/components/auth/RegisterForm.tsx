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

  const onSubmit = (data: RegisterSchema) => {
    console.log("Form submitted:", data);
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
            <Button  type="submit" className="w-full bg-black text-white ">
              Đăng ký
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
