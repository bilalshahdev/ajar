import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectInputProps extends React.HTMLAttributes<HTMLSelectElement> {
  control: any;
  name: string;
  label?: string;
  options: any[];
  labelKey?: string;
  valueKey?: string;
  disabled?: boolean;
}

const SelectInput = ({
  control,
  name,
  label,
  options,
  labelKey = "label",
  valueKey = "value",
  disabled,
  className,
}: SelectInputProps) => (
  <div className={cn(label ? "space-y-2" : "", className)}>
    {label && <Label>{label}</Label>}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          value={field.value}
          disabled={disabled}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt: any) => (
              <SelectItem key={opt[valueKey]} value={opt[valueKey]}>
                {opt[labelKey]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  </div>
);

export default SelectInput;
