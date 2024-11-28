
const API_URL = 'http://localhost:5000/';

interface ApiResponse<T> {
    data: T;
  }
  
export const getData = async <T>(
    url: string,
  ): Promise<T> => {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
  
      const response = await fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers,
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao obter dados: ${response.statusText}`);
      }
  
      const data: ApiResponse<T> = await response.json();
      console.log('Dados obtidos com sucesso:', data.data);
      return data.data;
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      throw error;
    }
  };
  
