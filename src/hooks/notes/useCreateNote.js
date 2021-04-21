import { useMutation } from '@apollo/client';
import { CREATE_NOTE } from '../../graphql/notes/mutations';

const useCreateNote = () => {
  const [mutate, result] = useMutation(CREATE_NOTE);

  const createNote = async ({ title, text, url, important, }) => {
    mutate({ variables: { title, text, url, important } });
  };

  return [createNote, result];
};

export default useCreateNote;
