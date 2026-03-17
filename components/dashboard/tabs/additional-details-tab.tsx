import { Field, TInput, TSelect } from "@/components/dashboard/form-controls";

export function AdditionalDetailsTab() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Field label="Blood Group">
        <TSelect
          placeholder="Select blood group"
          options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((v) => ({
            value: v,
            label: v,
          }))}
        />
      </Field>
      <Field label="Religion">
        <TSelect
          placeholder="Select religion"
          options={["Islam", "Hinduism", "Christianity", "Buddhism", "Other"].map((v) => ({
            value: v.toLowerCase(),
            label: v,
          }))}
        />
      </Field>
      <Field label="Nationality">
        <TInput placeholder="Bangladeshi" />
      </Field>
      <Field label="National ID / Birth Cert No.">
        <TInput placeholder="Enter ID number" />
      </Field>
      <Field label="Previous School" className="md:col-span-2">
        <TInput placeholder="Previous school name" />
      </Field>
    </div>
  );
}
