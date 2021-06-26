export default class Data {
  static async SignUpFetch(username, password) {
    let response = await fetch("http://192.168.1.218:8080/users/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    response = await response.json();
    return response;
  }
  static async LoginFetch(username, password) {
    let response = await fetch("http://192.168.1.218:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    response = await response.json();
    return response;
  }
}
