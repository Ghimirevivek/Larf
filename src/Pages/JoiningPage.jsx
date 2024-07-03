import React, { useEffect, useState } from 'react';
import ApplicationPage from '../Components/ApplicationPage';
import Profile from './Profile';
import Cart from './Cart';
import Payment from './Payment';
import RewiewOrd from './RewiewOrd';
import { useContextValue } from '../Context';
import OrderConfirmation from '../Components/OrderConfirmation';

const JoiningPage = () => {
  const [page, setPage] = useState(1);
  const [paymentmode, setPaymentMode] = useState(null);

  const { state, dispatch } = useContextValue();

  const [address, setAddres] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   if (!state.isaddressChecked) {
  //     setPage(2);
  //   }
  // }, [state.isaddressChecked]);
  return (
    <div>
      {/* {page === 1 && (
        <ApplicationPage setPage={setPage} setAddres={setAddres} />
      )}
      {page === 2 && <Profile setPage={setPage} />} */}
      {page === 1 && <Cart setPage={setPage} />}
      {page === 2 && (
        <Payment setPage={setPage} setPaymentMode={setPaymentMode} />
      )}
      {page === 3 && (
        <RewiewOrd
          setPage={setPage}
          paymentmode={paymentmode}
          address={address}
        />
      )}
      {page === 4 && <OrderConfirmation />}
    </div>
  );
};

export default JoiningPage;
