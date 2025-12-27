const params = new URLSearchParams(location.search);
const userID = params.get("id");

const getUser = async () => {
  const response = await axios.get(
    `https://ums12.runasp.net/api/users/${userID}`
  );
  if (response.status == 200) {
    return response.data;
  }
};

const displayUser = async () => {
  const response = await getUser();
  console.log(response);

  document.querySelector(".UserID").textContent = userID;
  document.querySelector(".UserName").textContent = response.data.name;
  document.querySelector(".UserAge").textContent = response.data.age;
  document.querySelector(".UserEmail").textContent = response.data.email;
};
displayUser();
