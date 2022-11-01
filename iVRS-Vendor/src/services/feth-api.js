import axios from "axios";
import { useActionpolicy, useBenefit } from "../store";

const API = "http://localhost/iVRS-Vendor-Backend/ivrs-vendor/public";

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
  const { updateActionpolicy } = useActionpolicy();
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/json/action-policy.json"
    );
    updateActionpolicy(data);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchbenefitlist() {
  const { updateBenefit } = useBenefit();
  try {
    const { data } = await axios.get(
      "https://snc-services.sncformer.com/ivrs/json/benefits.json"
    );
    updateBenefit(data);
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
    const { data } = await axios.post(API + "/check-login", reqData);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchcompany() {
  if (!window.localStorage.isLoggedIn) return;
  try {
    const { data } = await axios.get(API + "/company", getAxiosConfig());
    return data;
  } catch (error) {
    console.error(error);
    return { state: true, msg: "Something went wrong" };
  }
}
