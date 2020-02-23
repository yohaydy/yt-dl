const express = require("express");
const shell = require("shelljs");
const app = express();
const port = 8080;

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const fileName = await shell.exec(
    `youtube-dl -x --audio-format mp3 --get-filename https://www.youtube.com/watch?v=${id}`
  ).stdout;
  await shell.exec(
    `youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=${id}`
  );
  const fileNameMp3 = fileName.slice(0, -5).concat("mp3");
  const filePath = `./${fileNameMp3}`;
  res.download(filePath);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
