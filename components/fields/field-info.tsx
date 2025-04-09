import { AnyFieldApi } from "@tanstack/react-form"

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-xs text-red-400">{field.state.meta.errors.map((err) => err.message).join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export default FieldInfo