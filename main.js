axios.get('http://api.github.com/users/guidotti-dll')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });