import LocalStorageService from "../util/LocalStorageUtil";
import axios from 'axios';

const token = LocalStorageService.getToken();

export const GetBooks = (url) => {
  var request = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })


  return request;
}

export const GetData = (url) => {
  var request = fetch(url, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.token}`
    }
  })


  return request;
}

export const Delete = (url) => {
  const options = {
    headers: { "Authorization": `Bearer ${token.token}` },
  };
  const response = axios.delete(url, options);

  return response;
}

export const Create = (url, data) => {

  var request = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.token}`
    },
    body: JSON.stringify(data),
  })

  return request
}

export const Update = (url, data) => {

  var request = fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.token}`
    },
    body: JSON.stringify(data),
  })

  return request
}

export const AddRole = (url) => {

  var request = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.token}`
    },
  })

  return request
}

