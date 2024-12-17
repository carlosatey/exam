import { Formik, Form, Field } from 'formik';
import { Text, Box, Input, Button } from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";
import { useExam } from '../hooks/useExam';
//import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; 

const validationSchema = Yup.object().shape({
    token: Yup.string()
      .required('El token es requerido')
      .min(3, 'El token debe tener al menos 3 caracteres'),
    tenant: Yup.string()
      .required('El tenant es requerido')
      .min(2, 'El tenant debe tener al menos 2 caracteres'),
    file: Yup.mixed()
      .required('El archivo es requerido')
      .test('fileFormat', 'Solo se permiten archivos PDF', (value: any) => {
        if (!value || !(value instanceof File)) return false;
        return value.type === 'application/pdf';
    })
});


const FormQuery = () => {
    const {postDataExam} = useExam();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{
                token: 'NjU2.-bmHoTDLJHeD7bMC9LWgYmIRocjoE1H5Xlo_8n_ZIxN9xX_UQtT-USNdl5Xn',
                tenant: 'imaginabeta',
                file: ''
            }}
            validationSchema={validationSchema}
            validateOnSubmit={true}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => {
                console.log('Valores antes de enviar:', {
                    tenant: values.tenant,
                    token: values.token,
                    file: values.file,
                });
                setIsLoading(true)
          
                postDataExam(values.tenant, values.token, values?.file)
                .finally(() => {
                    setIsLoading(false)
                    navigate("/exam");
                  });
                //alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ handleChange, values, errors }) => (
                <Form>
                    <Box display="flex" flexDirection="column" gap="10px">
                        <Text>Token</Text>
                        <Input
                            id="token"
                            name="token"
                            type="text"
                            onChange={handleChange}
                            value={values.token}
                        />
                        <Text
                            opacity={errors.token ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.token}</Text>

                        <Text>Tenant</Text>
                        <Input
                            id="tenant"
                            name="tenant"
                            type="text"
                            onChange={handleChange}
                            value={values.tenant}
                        />
                        <Text
                            opacity={errors.tenant ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.tenant}</Text>

                        <Field name="file">
                            {({ field, form }: any) => (
                                <Dropzone field={field} form={form} />
                            )}
                        </Field>

                        <Text
                            opacity={errors.file ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.file}</Text>

                        <Button isLoading={isLoading} type="submit">Crear</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}

export { FormQuery }