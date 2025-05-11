import { useQuery } from '@tanstack/react-query'

const useGetStudents = () => {
  
  const {data, refetch} = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/users/");
        const data = await res.json();

        if(!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        return data;
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  return {data, refetch};
}

export default useGetStudents