import axios from "axios";

// POST = https://luksai-backend-staging.azurewebsites.net/api/user/sign-in


//TRANSFORMAR NUMA ARROW FUNCION? PRECISA DE TIPO?
const apiService = axios.create({
    //baseURL: 'https://luksai-backend-staging.azurewebsites.net',
    baseURL: 'https://d91d7e3d-7924-4748-9c75-f304b998bd16.mock.pstmn.io',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }

});

export default apiService;

// environment.ts
// export const environment = {
//     production: false,
//     hmr: false,
//     api: 'http://localhost:5000/api',
//     postCodeUrl: 'https://viacep.com.br/ws',
//     assetsUrl: 'https://luksaistoragestaging.blob.core.windows.net',
//     checkoutUrl: 'http://localhost:4201',
//     localStorageKey: 'luksai.dev.storage',
//     currentEnv: 'luksai.dev.env',
//     toggleMenu: 'luksai.dev.toggleMenu',
//     playerConfig: 'luksai.dev.playerConfig',
//     logRocketAppID: '3t9lsx/luksai-dev',
//     googleAnalyticsKey: 'G-7YV338F1XM'
// };


// environment.staging.ts
// export const environment = {
//     production: false,
//     hmr: false,
//     api: 'https://luksai-backend-staging.azurewebsites.net/api',
//     postCodeUrl: 'https://viacep.com.br/ws',
//     assetsUrl: 'https://luksaistoragestaging.blob.core.windows.net',
//     checkoutUrl: 'https://luksai-checkout-staging.azurewebsites.net',
//     localStorageKey: 'luksai.staging.storage',
//     currentEnv: 'luksai.staging.env',
//     toggleMenu: 'luksai.staging.toggleMenu',
//     playerConfig: 'luksai.staging.playerConfig',
//     logRocketAppID: '3t9lsx/luksai-dev',
//     googleAnalyticsKey: 'G-7YV338F1XM'
// };


// environment.prod.ts
// export const environment = {
//     production: true,
//     hmr: false,
//     api: 'https://luksai-backend-prod.azurewebsites.net/api',
//     postCodeUrl: 'https://viacep.com.br/ws',
//     assetsUrl: 'https://luksaistorageproduction.blob.core.windows.net',
//     checkoutUrl: 'https://checkout.luksai.com',
//     localStorageKey: 'luksai.storage',
//     currentEnv: 'luksai.env',
//     toggleMenu: 'luksai.toggleMenu',
//     playerConfig: 'luksai.playerConfig',
//     logRocketAppID: '3t9lsx/luksai-production',
//     googleAnalyticsKey: 'G-7YV338F1XM'
// };


