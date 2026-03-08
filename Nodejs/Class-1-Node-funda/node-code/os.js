//👉 Loads Node.js operating system information tools.
const os = require("os");
//Name of your computer
console.log(os.hostname());
//Operating system type
console.log(os.platform());
//CPU architecture
console.log(os.arch())
//Total system memory in bytes
console.log(os.totalmem());
//Free available memory in bytes
console.log(os.freemem())
//OS version details
console.log(os.version())
//Time system is running
//In seconds
console.log(os.uptime())
//Logged-in user details
console.log(os.userInfo());
//Network details (Wi-Fi, Ethernet, IP)
console.log(os.networkInterfaces())
//Information about each CPU core
console.log(os.cpus());
//Home folder path
console.log(os.homedir())
/*CPU load for last:
1 minute
5 minutes
15 minutes */
console.log(os.loadavg());
//Number of CPU cores
console.log(os.cpus().length)
