import axios from "axios";


const apiExam = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const useExam = () => {

    const postDataExam = async (tenant: string, token: string, file: any|null) => {
      try {
        const formData = new FormData();
        formData.append('file', file);
      
        const response = await apiExam.post(
          `/${tenant}/admin/creaExamen`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              //'Content-Type': 'multipart/form-data',

            }
          }
        );

        return response.data;
      } catch (error) {
        console.error('Error al subir el examen:', error);
        throw error;
      }
  }
  
  return {
    postDataExam
  }
  
}

export {useExam}



