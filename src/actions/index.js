import constants from './../constants';
const { firebaseConfig } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue){
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: newDate().getTime()
  });
}
