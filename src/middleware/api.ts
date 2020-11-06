const ROOT_API = "https://reqres.in";

export async function callApi(payload: any) {
  const { email, password, endpoint } = payload;

  const url = ROOT_API + `${endpoint}`;

  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ email, password }),
  });

  let json = await response.json();

  return json;
}
