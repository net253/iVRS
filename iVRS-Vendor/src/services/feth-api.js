import axios from "axios";

const API = "http://localhost/iVRS-Vendor-Backend/ivrs-vendor/api";
const API_AUTH = "http://localhost/iVRS-Vendor-Backend/ivrs-vendor/api/auth";
//const API_JSON = "http://localhost/iVRS-Vendor-Backend/ivrs-vendor/api/json";

function getAxiosConfig() {
  const token = window.localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return config;
}

export async function fetchactionpolicylist() {
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/action-policy"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetcurrencylist() {
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/currency-codes"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchbenefitlist() {
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/benefits"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchpaymentmethods() {
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/payment-methods"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchcertificate() {
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/certifications"
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchregister(reqData) {
  console.log(reqData);
  try {
    const { data } = await axios.post(API + "/register", reqData);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchlogin(reqData) {
  try {
    const { data } = await axios.post(API_AUTH + "/check-login", reqData);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchcompanylist() {
  if (!window.localStorage.isLoggedIn) return;
  try {
    const { data } = await axios.get(API + "/vendor/company", getAxiosConfig());
    return data;
  } catch (error) {
    console.error(error);
    return { state: true, msg: "Something went wrong" };
  }
}

export async function fetchmonetary() {
  if (!window.localStorage.isLoggedIn) return;
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/admin/api/index.php/json/monetary-policy"
    );
    return data;
  } catch (error) {
    console.error(error);
    return { state: true, msg: "Something went wrong" };
  }
}

export async function fetchuploadform(reqData) {
  //console.log(JSON.stringify(reqData));
  try {
    const { data } = await axios.post(
      API + "/vendor/save-form-register",
      reqData,
      getAxiosConfig()
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
