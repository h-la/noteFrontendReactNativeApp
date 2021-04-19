import { useQuery } from '@apollo/client';
import { GET_NOTE } from '../../graphql/notes/queries';

const useSingleNote = (variables) => {
  //  const result = useQuery(GET_NOTES)
  //  return result

  const { data, error, loading } = useQuery(GET_NOTE, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  return {
    findNote: data ? data : undefined,
    loading,
    error,
    data,
  }
};

export default useSingleNote;