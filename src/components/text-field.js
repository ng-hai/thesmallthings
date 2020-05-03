import classcat from "classcat"

export default function TextField({
  multiline,
  label,
  helpText,
  errorText,
  className,
  ...props
}) {
  const hasError = Boolean(errorText)
  return (
    <label className={classcat(["block", className])}>
      {label && <div className="font-semibold">{label}</div>}
      {helpText && (
        <div className="text-xs tracking-wide text-dark-gray">{helpText}</div>
      )}
      {!multiline && (
        <input
          type="text"
          {...props}
          className={classcat([
            "w-full h-10 px-3 mt-1 text-base border focus:border-black",
            {
              "border-mid-gray": !hasError,
              "border-error": hasError,
            },
          ])}
        />
      )}
      {multiline && (
        <textarea
          rows="8"
          {...props}
          className={classcat([
            "w-full px-3 py-2 mt-1 text-base border focus:border-black",
            {
              "border-mid-gray": !hasError,
              "border-error": hasError,
            },
          ])}
        />
      )}
      {hasError && (
        <div className="mt-px text-xs tracking-wide text-error">
          {errorText}
        </div>
      )}
    </label>
  )
}
