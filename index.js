const express = require('express')
const shell = require('shelljs')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const fileName = await shell.exec('youtube-dl -x --audio-format mp3 --get-filename https://www.youtube.com/watch?v=WEx7ZlF2FGc', {silent:true}).stdout; 
    await shell.exec('youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=WEx7ZlF2FGc', {silent:true}).stdout;
    const fileNameMp3 = fileName.slice(0, -5).concat("mp3")
    
    const file = `./${fileNameMp3}`;
    res.download(file); 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))