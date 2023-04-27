const getUsers = "SELECT * FROM users;";
const getUserById = "SELECT * FROM users WHERE user_id = $1;";
const deleteUser = "DELETE FROM users WHERE user_id = $1);";
const updateUser = "UPDATE users SET name = $2, surname = $3,  user_password = $4, is_female = $5, email = $6, phone_number = $7, address = $8, is_vet = $9 WHERE user_id = $1;";
const addUser = "INSERT INTO users (name, surname, user_password, is_female, email, phone_number, address, is_vet, st_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, (SELECT ST_ID FROM ST WHERE ST_NAME = 'IS_USER'));";

module.exports = {getUsers, getUserById, deleteUser, updateUser, addUser};