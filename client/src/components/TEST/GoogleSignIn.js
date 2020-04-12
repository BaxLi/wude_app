import { useGoogleLogin, useGoogleLogout  } from 'react-google-login'

const googleKey=`26313480111-d39ne29sk5r04r4asjntnrfqovptph3n.apps.googleusercontent.com`
const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    autoLoad,
    isSignedIn,
    fetchBasicProfile,
    redirectUri,
    discoveryDocs,
    onFailure,
    uxMode,
    scope,
    accessType,
    responseType,
    jsSrc,
    onRequest,
    prompt
  })
  const { signOut } = useGoogleLogout({
    jsSrc,
    onFailure,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    fetchBasicProfile,
    discoveryDocs,
    uxMode,
    redirectUri,
    scope,
    accessType,
    onLogoutSuccess
  })

  export {signIn, signOut, login}