import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function NameField() {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tên</FormLabel>
          <FormControl>
            <Input placeholder="Nguyễn Văn A" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
