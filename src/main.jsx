// import { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { SecureRoute, useAuthContext } from "@asgardeo/auth-react";

// import App from './app';

// // ----------------------------------------------------------------------

// const SecureRedirect = (props) => {
//   // eslint-disable-next-line react/prop-types
//   const { component, path } = props;
//   const { signIn } = useAuthContext();

//   const callback = () => {
//     signIn();
//   };

//   return (<SecureRoute exact path={path} component={component} callback={callback} />);
// };

// const authConfig = {
//     "clientID": window?.configs?.auth.clientID,
//     "signInRedirectURL": window?.configs?.auth.signInRedirectURL,
//     "signOutRedirectURL": window?.configs?.auth.signOutRedirectURL,
//     "serverOrigin": "",
//     "scope": [ "openid","profile", "email"]
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <HelmetProvider>
//     <BrowserRouter>
//       <Suspense>
//         <App />
//       </Suspense>
//     </BrowserRouter>
//   </HelmetProvider>
// );

import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SecureRoute, AuthProvider, useAuthContext } from "@asgardeo/auth-react";

import App from './app';

// Custom component for redirecting to sign-in if not authenticated
const SecureRedirect = (props) => {
  // eslint-disable-next-line react/prop-types
  const { component, path } = props;
  const { signIn } = useAuthContext();

  const callback = () => {
    signIn();
  };

  return (<SecureRoute exact path={path} component={component} callback={callback} />);
};

// Configuration for authentication provider
const authConfig = {
  "clientID": window?.configs?.auth.clientID,
  "signInRedirectURL": window?.configs?.auth.signInRedirectURL,
  "signOutRedirectURL": window?.configs?.auth.signOutRedirectURL,
  "serverOrigin": "",
  "scope": ["openid", "profile", "email"]
}

// Entry point for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider config={authConfig}>
          {/* Define your secure routes */}
          <SecureRedirect exact path="/" component={App} />
          {/* Add other routes here */}
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
