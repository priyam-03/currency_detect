import axios from "axios";

const apiUrl =
  "http://ec2-54-153-211-95.ap-southeast-2.compute.amazonaws.com:8080/";

export const currency_test = async (data, options) => {
  try {
    const result = await axios.post(
      "http://ec2-54-206-62-17.ap-southeast-2.compute.amazonaws.com:8080/predict",
      data
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};
// export const getSingleFiles = async () => {
//   try {
//     const { data } = await axios.get(apiUrl + "getSingleFiles");
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
