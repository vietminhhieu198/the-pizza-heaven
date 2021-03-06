import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';

import { routerPath } from 'common/config/router/router.path';
import { GoBack } from 'components/GoBack/GoBack';
import { CheckoutInfo } from '../CheckoutInfo/CheckoutInfo';
import './CheckoutSuccess.style.scss';

export const CheckoutSuccess = () => {
  const { orderId } = useParams();

  return (
    <Container maxWidth="lg">
      <GoBack pageLink={routerPath.common.HOME} />
      <CheckoutInfo orderId={orderId as string} />
    </Container>
  );
};
