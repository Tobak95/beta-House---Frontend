import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://betahouse-backend-eazq.onrender.com/api", //backend localhost URL
});

// const data = await response.json();
// console.log("Backend response:", data);

// if (data.success) {
//   console.log("Login successful");
// } else {
//   console.log("Login failed:", data.message);
// }