import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { registerUser } from '../../firebaseConfig';

import './Register.css';
import { useHistory } from 'react-router';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

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
      <IonContent fullscreen>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="text-white mt-6 text-center text-3xl font-extrabold">Register account</h2>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e) => { setEmail(e.target.value) }}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => { setPassword(e.target.value) }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <Link to="/login" >
                    <label className="font-medium text-indigo-600 hover:text-indigo-500">
                      Login
                    </label>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={register}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
