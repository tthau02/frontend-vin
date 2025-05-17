import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ConfirmPasswordField() {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Xác nhận mật khẩu</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Nhập lại mật khẩu" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
