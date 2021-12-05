import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { registerUser } from '../../firebaseConfig';

import './Register.css';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  async function register() {
    const res = await registerUser(email, password);
    if (res) {
      history.push("/login")
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          placeholder="email"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          placeholder="password"
          type="password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={register}>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
