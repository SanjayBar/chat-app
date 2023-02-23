const users = [];

const addUser = ({ id, username, room }) => {
  // trim the code
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "username and room are required",
    };
  }

  // check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((obj) => obj.id === id);
  return user;
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  const roomUsers = users.filter((user) => user.room === room);
  return roomUsers;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
