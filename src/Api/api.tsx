import axios from "axios";
import { FormValuesType, ResponseDataType } from "../Types/Types";

const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5NzcwMDI1LCJqdGkiOiIzZGFlOGFjYmEwOWI0ODI3OTQ2MjY4NTI3YzI5Yzc2YyIsInVzZXJfaWQiOjR9.g6TH3FnZZRRxvc7CIS6NryxoMmnEsVQQw52NzfxZS4c";

// const cookie = document.cookie
//   .split(";")
//   .find((item) => item.includes("bearer"))
//   ?.split("=")[1];

export const loginApi = {
  login(values: FormValuesType) {
    return axios
      .post<ResponseDataType>(
        `http://test-alpha.reestrdoma.ru/api/login/`,
        values
      )
      .then((res) => {
        return res.data;
      });
  },
};

export const getCompanies = {
  companies(token: string) {
    console.log(token);
    return axios
      .get(`http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err.message);
  },
};

export const getHouses = {
  houses(companyId: number) {
    return axios
      .get(
        `http://test-alpha.reestrdoma.ru/api/reestrdoma/company/houses/${companyId}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )

      .then((res) => res.data)
      .catch((err) => console.log(err.message));
  },
};
