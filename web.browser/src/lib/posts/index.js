import { getJson, postJson, putJson, deleteJSon } from '../fetch-json'

const apiRoot = 'localhost:3000/posts';



const list = () => getJson(apiRoot);
const get = id => getJson(`${apiRoot}/${id}`);
const create = body => postJson(apiRoot, body);
const update = (id, body) => putJson(`${apiRoot}/${id}`, body);
const remove = id => deleteJSon(`${apiRoot}/${id}`);

export default { list, get, create, update, remove };

// API

