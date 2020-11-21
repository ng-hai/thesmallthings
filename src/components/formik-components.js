import dynamic from "next/dynamic"

const useField = dynamic(() => import("formik").then((mod) => mod.useField), {
  ssr: false,
})

const TextField = dynamic(() => import("./text-field"), { ssr: false })

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
