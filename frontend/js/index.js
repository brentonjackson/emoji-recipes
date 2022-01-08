// Emoji Recipes (using native js)
const getUsers = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            const users = response.data.data;
            console.log(`GET users`, users);
        })
        .catch(error => console.error(error));
};

const sendRecipes = () => {
}

getUsers();
    

