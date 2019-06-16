var fetch = require('node-fetch')

let provjeri = (username, token, id = 0) => {
    return new Promise((resolve, reject) => 
    fetch('https://si2019romeo.herokuapp.com/users/validate?username='+username, {
        method: 'get',
        headers: {
            'Authorization': token
        }
    }).then(res => {
        if(res.status == 403)
            reject(res.status)
        else
            resolve(res.status)
    }).catch(error => {
        reject(403) 
    }))
}

module.exports = (username, token, req, res, funkcija) => {
    console.log(username, token)
    provjeri(username, token).then(status => {
        funkcija(req, res)
    }).catch(st => {
        res.json({loginError: "Nisi logovan"})
    })
}