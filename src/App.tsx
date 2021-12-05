import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainTabs from './pages/MainTabs/MainTabs';
import Register from './pages/Register/Register';
import { getAuth } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from '@firebase/app';
import { useHistory } from 'react-router';

initializeApp(firebaseConfig);

const App: React.FC = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged((userData: any) => {
      setIsLoggedIn(!!userData)
      if (userData) {
        setIsLoggedIn(!!userData)
      }
    });

  }, [ setIsLoggedIn ])

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [ isLoggedIn, history ])

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          {
            isLoggedIn ?
            <>
             <Route path="/" component={MainTabs} />
             <Redirect to="/" />
            </>
            :
            <>
              <Route path="/login" component={Login} exact={true} />
              <Route path="/register" component={Register} exact={true} />
              <Redirect to="/login" />
            </>
          }
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
