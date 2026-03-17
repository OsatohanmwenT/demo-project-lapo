import { Field, TInput } from "@/components/dashboard/form-controls";

export function ParentDetailsTab() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Field label="Father's Name">
        <TInput placeholder="Enter father's name" />
      </Field>
      <Field label="Mother's Name">
        <TInput placeholder="Enter mother's name" />
      </Field>
      <Field label="Father's Phone">
        <TInput placeholder="+880..." />
      </Field>
      <Field label="Mother's Phone">
        <TInput placeholder="+880..." />
      </Field>
      <Field label="Father's Occupation">
        <TInput placeholder="Occupation" />
      </Field>
      <Field label="Mother's Occupation">
        <TInput placeholder="Occupation" />
      </Field>
      <Field label="Guardian Email" className="md:col-span-2">
        <TInput placeholder="guardian@example.com" type="email" />
      </Field>
    </div>
  );
}
