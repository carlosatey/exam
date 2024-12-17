import { Box, Text, Input } from '@chakra-ui/react';
import { useRef } from 'react';

const Dropzone = ({
    field,
    form,
}: {
    field: any;
    form: any;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            form.setFieldValue(field.name, files[0]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            //console.log('Archivo desde Drop:', files[0]); 
            form.setFieldValue(field.name, files[0]);
        }
    };

    const file = field.value;

    return (
        <Box
            border="2px dashed gray"
            p="20px"
            textAlign="center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleClick}
            borderRadius="8px"
            cursor="pointer"
        >
            <Input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                display="none"
            />
            {file ? (
                <Text color="green.500">Archivo cargado: {file.name}</Text>
            ) : (
                <Text color="gray.500">
                    Arrastra y suelta tu archivo aquí o haz clic para seleccionar
                </Text>
            )}
        </Box>
    );
};

export { Dropzone };
