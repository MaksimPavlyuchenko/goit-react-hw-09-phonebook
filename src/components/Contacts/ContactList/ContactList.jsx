import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import { List, ListItem, Button, HeaderList } from './ContactList.styled';

Report.init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#6495ed',
  info: {
    svgColor: '#4b0082',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#9370DB',
    buttonColor: '#4b0082',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredName = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        <HeaderList>Contact List</HeaderList>
        {contacts &&
          filteredName.map(({ name, id, number }) => {
            return (
              <ListItem key={id}>
                {name}: {number}{' '}
                <Button
                  type="button"
                  id={id}
                  onClick={() => {
                    handlerDelete(id);
                    Report.info('Done, BRO...', `You delete a contact ${name}`);
                  }}
                >
                  DELETE
                </Button>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};
export default ContactList;
