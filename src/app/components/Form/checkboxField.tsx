import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

export interface CheckboxFieldProps {
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  label: string;
  control: Control<FieldValues>;
}

export const CheckboxField = ({
  label,
  fieldName,
  errors,
  control,
}: CheckboxFieldProps) => {
  return (
    <div className="flex gap-2 relative">
      <Controller
        control={control}
        name={fieldName}
        key={fieldName}
        defaultValue={false}
        rules={{ required: "To pole jest wymagane" }}
        render={({ field: { onChange, value, ref } }) => (
          <Checkbox onCheckedChange={onChange} ref={ref} checked={value}>
            {fieldName}
          </Checkbox>
        )}
      />
      <label htmlFor={fieldName} className="text-xs lg:text-sm font-light">
        {label}
      </label>
      {errors[fieldName] && (
        <p className="text-xs text-red-600 absolute -bottom-5 font-light">
          {`${errors[fieldName]?.message}` || ""}
        </p>
      )}
    </div>
  );
};
