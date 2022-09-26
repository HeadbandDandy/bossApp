const fs = require('fs');

const generatePage = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../views/layouts/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Employee Files Created!'
            });
        });
    });
};

module.exports = generatePage;