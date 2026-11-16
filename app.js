
const path =require ('path')
const http =require ('http');
const {readFileSync} =require ('fs')

const homePage =readFileSync(path.join(__dirname,'templates' , 'page.html'))
const stylePage =readFileSync(path.join(__dirname,'templates' , 'style.css'))
const aboutPage = readFileSync(path.join(__dirname, "templates", "about.html"));
const contactPage = readFileSync(path.join(__dirname, "templates", "contact.html"));




const server = http.createServer(function(req ,res) {
  let fullName = req.url;
  if (fullName == "/") {
    res.write(homePage);
  } else if (fullName == "/style.css") {
    res.write(stylePage);
  }else if (fullName == "/about"){
    res.write(aboutPage);
}else if (fullName == "/contact"){
  res.write(contactPage);
}
  res.end();
})

server.listen(3000);
console.log("Node.js web server at port 3000 is running..");

