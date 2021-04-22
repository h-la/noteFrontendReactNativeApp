import { useMutation } from '@apollo/client';

import { UPDATE_NOTE } from '../../graphql/notes/mutations';

const useUpdateNote = () => {
  const [mutate, result] = useMutation(UPDATE_NOTE);

  const updateNote = async ({ id, title, text, url, important, }) => {
    mutate({ variables: { id, title, text, url, important, } });
  };

  return [updateNote, result];
};

export default useUpdateNote;