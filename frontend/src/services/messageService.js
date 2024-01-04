import axios from 'axios';
import {getUserProfile} from "./authService";
const { REACT_APP_API_PORT } = process.env;


export const getBasicInfo = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/users/getinfo`, data);
        return response.data;

    } catch (error) {
        return error
    }
 
};

export const linkedUsers = async () => {
//     const result = [];
//   const userData = await getUserProfile();
//   console.log(userData)

//   if (userData.messagingUsers && Array.isArray(userData.messagingUsers)) {
//     await Promise.all(
//       userData.messagingUsers.map(async (user) => {
//         console.log(user);
//         const basicData = await getBasicInfo({ userName: user });
//         console.log(basicData, "basicData");
//         console.log("first");
//         result.push(basicData);
//       })
//     );
//   }
  
//   return result;
try {
    const result = [];
    const userData = await getUserProfile();
    console.log(userData[0].messagingUsers[0]);
  
    if (userData && Array.isArray(userData)) {
      await Promise.all(
        userData.map(async (user) => {
          if (user.messagingUsers && Array.isArray(user.messagingUsers)) {
            await Promise.all(
              user.messagingUsers.map(async (userName) => {
                const basicData = await getBasicInfo({ userName });
                result.push(basicData);
              })
            );
          }
        })
      );
    }
  
    console.log(result, "result");
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
  
};

export const getMessages = async (userName) => {
    const data = {otherUserName:userName}
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/message/getmessages`, data);
        return response.data;

    } catch (error) {
        return error
    }

};

export const sendMessage = async (userName,text) => {
    const data = {otherUserName:userName,text:text}
    try {
        const response = await axios.post(`${REACT_APP_API_PORT}/message/sendmessage`, data);
        return response.data;

    } catch (error) {
        return error
    }

};
