import React ,{Fragment} from 'react';
import ContactDetails from '../components/ContactInfo';
import PassengerDetail from '../components/pasengerDetails';
import Proceed from '../components/proceed';

const UserDetails=({children})=>{
  return (
    <Fragment>
      <ContactDetails/>
      <PassengerDetail/>
      <PassengerDetail/>
      <Proceed/>

    </Fragment>
  )
}
export default UserDetails
