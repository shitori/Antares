const {exec} = require("child_process");

class Model {
    static test(cb) {
        exec("cd public/video && youtube-dl -f mp4 -cit https://www.youtube.com/playlist?list=PLNF8K9Ddz0kKfujG6blfAxngYh_C66C_q", (error, stdout, stderr) => {
        if (error) {
                console.log("error: "+error.message);
                cb("ko");
            }
            if (stderr) {
                console.log("stderr:"+ stderr);
                cb("ko");
            }
            cb("stdout: " + stdout);
        });
    }
}

module.exports = Model

