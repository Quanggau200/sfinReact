import * as yup from 'yup'
export const registerSchema = yup.object().shape({
    username: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email format").required("Work email is required"),
            company: yup.string().required("Company name is required"),
            password: yup.string().
            min(6, "Password must be at least 6 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[!@#$%^&*(),.?":{}|<>]/ ,"Password must contain at least one special character")
            .required("Password is required"),
            phone: yup.string().matches(/^[0-9]{9}$/, "Phone number must be 10 digits").required("Phone number is required")
})
export const registerSchemaFull=yup.object().shape({
    ...registerSchema.fields,
    roles: yup.string().required("Role is required")
})

export const loginSchema=yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().
    min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[!@#$%^&*(),.?":{}|<>]/ ,"Password must contain at least one special character")
        .required("Password is required"),
})
export type RegisterFormValues = yup.InferType<typeof registerSchema>
export type RegisterFormValueRole = yup.InferType<typeof registerSchemaFull>
export type LoginFormValue=yup.InferType<typeof loginSchema>
export const useRegisterForm = () =>{
    return {registerSchema,registerSchemaFull,loginSchema}
}