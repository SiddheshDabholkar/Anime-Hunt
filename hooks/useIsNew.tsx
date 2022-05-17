import {useEffect, useState} from 'react';
import {storage} from '../App';

export default function useIsNew() {
  const [isNewUser, setIsNewUser] = useState(
    storage.contains('isNew') ? false : true,
  );
  console.log('all', storage.getAllKeys());
  useEffect(() => {
    if (isNewUser) {
      setIsNewUser(false);
      storage.set('isNew', false);
    }
  }, [isNewUser]);
  return {isNewUser};
}
