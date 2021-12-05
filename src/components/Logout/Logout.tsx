
import { IonButton, IonButtons, IonIcon } from '@ionic/react';
import { getAuth, signOut } from 'firebase/auth';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { toast } from '../Toast/Toast';

const Logout: React.FC = () => {
  const history = useHistory();

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      history.push("/login");
    }).catch((error) => {
      toast('Error, try again.');
    });
  }

  return (
    <IonButtons slot="secondary" onClick={logout}>
      <IonButton fill="outline">
        <IonIcon icon={logOutOutline} />
      </IonButton>
    </IonButtons>
  )
}

export default Logout;
