// dataProvider.js
import axios from "axios";

const apiUrl = "nodejs.ayoubmabmaf.repl.co/api/admin";
const httpClient = axios.create();

const dataProvider = (type, resource, params) => {
  console.log("at data provider", type, resource, params);
  let url = "";
  const options = {
    headers: {
      /* Your Auth headers here */
    }
  };

  switch (type) {
    case "GET_LIST":
      url = `${apiUrl}/users`;
      return httpClient.get(url, options).then((response) => ({
        data: response.data.map((resource) => ({
          ...resource,
          id: resource.user_id
        })),
        total: response.data.length
      }));

    case "GET_ONE":
      url = `${apiUrl}/users/${params.id}`;
      return httpClient.get(url, options).then((response) => ({
        data: { ...response.data, id: response.data.user_id }
      }));

    // Implement other cases ('CREATE', 'UPDATE', 'DELETE')
    default:
      return { exception: true, message: "Unknown type" };
  }
};

export default dataProvider;
