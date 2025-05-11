import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

interface ExampleData {
  id: number;
  title: string;
  description: string;
}

export const useExampleQuery = () => {
  return useQuery<ExampleData[]>({
    queryKey: ['examples'],
    queryFn: async () => {
      const response = await api.get('/examples');
      return response.data;
    },
  });
};
