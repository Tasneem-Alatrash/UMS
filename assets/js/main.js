$(document).ready(function () {
  $("#myTable").DataTable({
    responsive: true,
    pageLength: 10,
    lengthChange: true,
  });
});

const getUsers = async () => {
  const response = await axios.get(`https://ums12.runasp.net/api/users`);
  return response.data;
};

const displayUsers = async () => {
  const result = await getUsers();
  const Users = result.users
    .map((user) => {
      return `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td><img src="${user.imageUrl}" width="50px"></td>
                <td><a href="#" class="btn btn-sm btn-primary">Edit</a> <button href="#"
                    class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">Delete</button></td>
            </tr>`;
    })
    .join(" ");
  document.querySelector(".user .user-data").innerHTML = Users;
};

displayUsers();
const deleteUser = async (id) => {
  const response = await axios.delete(
    `https://ums12.runasp.net/api/users/${id}`
  );
  console.log(response);
  displayUsers();
};
