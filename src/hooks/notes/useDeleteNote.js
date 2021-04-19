import { useMutation } from '@apollo/client';

import { DELETE_NOTE } from '../../graphql/notes/mutations';

const useDeleteNote = () => {
  const [mutate, result] = useMutation(DELETE_NOTE);

  const deleteNote = async ({ id }) => {
    mutate({ variables: { id } });
  };

  return [deleteNote, result];
};

export default useDeleteNote;