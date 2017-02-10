// FetchJson, a Fetch wrapper to aid in our sanity
// Meant for use with JSON APIs and async/await
const createErrorContext = (url, params) => ({
  name: 'FetchJsonError',
  url,
  params,
});

const fetchJson = (url, params = { method: 'GET' }) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };

  return fetch(url, Object.assign(params, headers)).then((res) => {
    if (res.ok) return res.json();
    throw createErrorContext(url, params);
  });
};

const requestJson = (url, body, method) => (
  fetchJson(url, { method, body })
);

const getJson = fetchJson;
const postJson = (url, body) => requestJson(url, body, 'POST');
const putJson = (url, body) => requestJson(url, body, 'PUT');
const deleteJson = url => requestJson(url, null, 'DELETE');

// API of our library
export { getJson, postJson, putJson, deleteJson };
