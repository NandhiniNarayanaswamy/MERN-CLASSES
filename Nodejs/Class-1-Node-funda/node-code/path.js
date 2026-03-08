// when we are working with file and directory paths, path module.....
const path = require("path");

// get the file name from the path
const fileName = path.basename("/users/venkat/pictures/file.txt");
console.log(fileName)
const ext = path.extname("/users/venkat/pictures/file.txt");
console.log(ext);

// path.parse()...
// parse a path
const parsedPath = path.parse("/users/venkat/pictures/file.txt");
console.log(parsedPath)

//path.join..join path segments

console.log(path.join("folder", "subfolder", "file.txt"));

//wanted to get the directory name

console.log(path.dirname("/users/venkat/pictures/file.txt"));

// path.format()..format a path object into string...
const pathObject = {
    root: '/',
    dir: '/users/venkat/pictures',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}
console.log(path.format(pathObject))



