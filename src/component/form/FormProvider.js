import { FormProvider as RHFormProvider } from "react-hook-form";

function FormProvider({ onSubmit, children, methods }) {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </RHFormProvider>
  );
}

export default FormProvider;
