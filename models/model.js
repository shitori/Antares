const {exec} = require("child_process");

class Model {
    static dl(url, format, cb) {
        if (format == "mp3") {
            exec("cd public/video && youtube-dl --extract-audio --audio-format mp3 -cit " + url, (error, stdout, stderr) => {
                cb(stderr, stdout);
            });
        } else {
            exec("cd public/video && youtube-dl -f mp4 -cit " + url, (error, stdout, stderr) => {
                cb(stderr, stdout);
            });
        }
    }

    static gestion(cb){
        exec("cd public/video && start .", (error, stdout, stderr) => {
            cb(stderr, stdout);
        });
    }
}

module.exports = Model

