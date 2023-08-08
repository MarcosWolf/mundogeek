const database = require("../database/connection");
const path = require("path");
const basePath = path.join(__dirname, '../templates');

class TaskController {
    // Home
    visualizarDestaques(request, response) {
        let query = `SELECT *
        FROM posts
           INNER JOIN categories
           ON posts.postCATEGORY = categories.categoryID
        WHERE postHIGHLIGHT = 1
        ORDER BY postID DESC
        LIMIT 0,2`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }
    
    visualizarUltimosPosts(request, response) {
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories
                        ON posts.postCATEGORY = categories.categoryID
                    WHERE postHIGHLIGHT = 0
                    ORDER BY postID DESC
                    LIMIT 0,10`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarTopViews(request, response) {
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories
                        ON posts.postCATEGORY = categories.categoryID
                    ORDER BY postID DESC
                    LIMIT 0,5`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }

    visualizarUltimosReviews(request, response) {
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories
                        ON posts.postCATEGORY = categories.categoryID
                    WHERE postSECTION = 1
                    ORDER BY postID DESC
                    LIMIT 0,5`;
        database.query(query, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log({result});
                response.send(result);
            }
        });
    }


    // Post
    visualizarPost(request, response) {
        const { id } = request.params;
        console.log(`O ID é ${id}`);
        let query = `SELECT *
                     FROM posts
                        INNER JOIN categories
                        ON posts.postCATEGORY = categories.categoryID
                     WHERE postID = ?`;
        database.query(query, [id], (err, result) => {
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