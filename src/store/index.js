import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { persistStore, persistReducer, createMigrate } from 'redux-persist'


// import s3Sync from './s3Sync.js'
import common from './reducers/common.js'
import temp from './reducers/temp.js'
// import AsyncStorage from '@react-native-community/async-storage'
// const aws = require("aws-sdk")
// const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
// export const userPool = new AmazonCognitoIdentity.CognitoUserPool({
//     UserPoolId: 'us-east-1_GlM4nLSVf',
//     ClientId: '4m75tlndqf5mpvtth5d0c7t813',
// })

const migrations = {
    // 0: () => ({}),
    // 1: () => ({}),
    // 2: () => {
    //     return {}
    // },
    // 3: () => {
    //     return {}
    // }
}

// const persistedReducer = persistReducer(
//     {
//         storage: AsyncStorage,
//         key: 'root',
//         blacklist: ['temp'],
//         version: 0,
//         // migrate: createMigrate(migrations, { debug: false })
//     },
//     common
// )
export const store = createStore(combineReducers({ common/*: persistedReducer*/, temp }))

// export const persistor = persistStore(store, {}, async () => {
//     const state = store.getState();
//     if (state.common.idToken) {
//         try {
//             await refreshTokens(state.common.idToken)
//             store.dispatch({ type: 'SET_CREDENTIALS_LOADED', payload: { credentialsLoaded: true } });
//         } catch (err) {
//             if (state.common.email && state.common.password) {
//                 const idToken = await getIdToken(state.common.email, state.common.password);
//                 const sub = await refreshTokens(idToken);
//                 store.dispatch({ type: 'SET_VALUE', payload: { idToken } });
//                 store.dispatch({ type: 'SET_VALUE', payload: { sub } });
//             }
//         }
//         // download cards...
//         store.dispatch({
//             type: 'SET_VALUE', payload: {
//                 cards
//             }
//         })
//     }
// })
// persistor.purge();

// export const refreshTokens = async idToken => {

//     // const idToken = await AsyncStorage.getItem('idToken');
//     aws.config.region = 'us-east-1';
//     aws.config.apiVersions = { s3: '2006-03-01', lambda: '2015-03-31' }
//     aws.config.credentials = new aws.CognitoIdentityCredentials({
//         IdentityPoolId: 'us-east-1:63c9110f-0213-4017-bc96-3458d0c181c1', // your identity pool id here
//         Logins: {
//             // Change the key below according to the specific region your user pool is in.
//             'cognito-idp.us-east-1.amazonaws.com/us-east-1_GlM4nLSVf': idToken,
//         },
//     });
//     return await new Promise((resolve, reject) => aws.config.credentials.refresh(error => {
//         const sub = aws.config.credentials.identityId;
//         error ? reject() : resolve(sub)
//     }));
// }

// export const getIdToken = async (email, password) => {
//     return await new Promise((resolve, reject) => {
//         const user = new AmazonCognitoIdentity.CognitoUser({ Username: email, Pool: userPool })
//         user.authenticateUser(new AmazonCognitoIdentity.AuthenticationDetails({
//             Username: email, Password: password,
//         }), {
//             onSuccess: async result => {
//                 aws.config.region = 'us-east-1';
//                 aws.config.apiVersions = { s3: '2006-03-01', lambda: '2015-03-31' }
//                 const idToken = result.getIdToken().getJwtToken()
//                 resolve(idToken);
//             },
//             onFailure: function (err) {
//                 reject()
//             },
//         });

//     })

// }

// export const setForgotPassword = email => new Promise((resolve, reject) =>
//     new AmazonCognitoIdentity.CognitoUser({ Username: email, Pool: userPool }).forgotPassword({
//         onSuccess: data => resolve(data),
//         onFailure: err => reject(err),
//         //Optional automatic callback
//         inputVerificationCode: data => resolve(data),
//     })
// )

// export const setNewPasswordCognito = (email, verificationCode, newPassword) => new Promise((resolve, reject) =>
//     new AmazonCognitoIdentity.CognitoUser({ Username: email, Pool: userPool }).confirmPassword(verificationCode, newPassword, {
//         onSuccess: resolve,
//         onFailure: err => reject(err),
//     })
// )