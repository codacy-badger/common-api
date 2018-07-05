export const db = 'mongodb+srv://common:f9mWPxwVEGGkYnca@cluster0-iuolm.mongodb.net';
export const app = {
  name: 'Common',
  port: 8089,
  api_endpoint: 'http://localhost:8089/api',
};
export const logPathConfig = {
  isLocal: true,
  appLog: '/AppLog/',
  accessLog: '/Access_Log/',
  infoLog: '/Info_Log/',
  serviceLog: '/Service_Log/',
  otherLog: '/Other_Log/',
};

export const activateTime = 12;//12 hours
export const email = 'support@common.com';

export const timeout = 86400000; //2 min

export const userLockTime = 900; //second
export const userLoginAttempt = 3;
