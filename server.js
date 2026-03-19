const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
let filename = "";

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    }
    filename = "index.html";
    res.sendFile(filename, options, (err) => {
        if (!err) {
            console.error('Sent: ' + filename);
        } else {
            console.error('Error sending file:', err);
        }
    })
})

app.listen(PORT, () => {
    console.log("Server started on port 3000!");
})

