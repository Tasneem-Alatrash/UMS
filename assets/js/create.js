const addUserForm = document.forms["addUserForm"];
addUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(addUserForm);
  const response = await axios.post(
    `https://ums12.runasp.net/api/users`,
    formData
  );
  console.log(response);
});
