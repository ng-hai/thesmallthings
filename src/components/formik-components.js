import { useField } from "formik"

import TextField from "./text-field"

export function FormikTextField({ validate, ...props }) {
  const [field, meta] = useField({ validate, ...props })
  return (
    <TextField
      {...field}
      {...props}
      errorText={meta.touched && meta.error ? meta.error : ""}
    />
  )
}
