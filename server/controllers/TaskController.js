const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    visualizarPosts(request, response) {
        let query = "SELECT * FROM posts";
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //response.send(result);
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarPost(request, response) {
        const id = request.params;
        let query = `SELECT * FROM posts WHERE id =` + id;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        })
    }
}

module.exports = new TaskController();