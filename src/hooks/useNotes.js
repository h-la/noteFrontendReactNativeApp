import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../graphql/notes/queries';

const useNotes = (variables) => {
  //  const result = useQuery(GET_NOTES)
  //  return result

  const { data, error, loading } = useQuery(GET_NOTES);

  return {
    allNotes: data ? data : undefined,
    loading,
    error,
    data,
  }
};

export default useNotes;