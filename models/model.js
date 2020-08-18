const {exec} = require("child_process");

class Model {
    static test(irl,cb) {
        exec("cd public/video && youtube-dl "+irl, (error, stdout, stderr) => {
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

