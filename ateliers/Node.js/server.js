const http=require('http');
const url=require('url');
const querystring=require('querystring') ;
/* const server =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '<head>'+ 
   ' <meta charset="UTF-8" />' +
   
'    <title>Document</title>'+
'</head>' +
'<body>'+
   ' <p>Voici un paragrahe html </p>'+
   ' </body>' +
  ' </html>'

) ;
}) */

/* const server =http.createServer((req,res)=>{
    const page =url.parse(req.url).pathname ;
    if (page === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>home page</h1>')
       
      }
  
      else if (page === '/Contrat') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
       
      }
      else if (page === '/Affichage/1/user') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
       
      }
    
      else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
       
      }
      res.end();
    })
 */
   /*  const server =http.createServer((req,res)=>{
        const params =querystring.parse(url.parse(req.url).query) ;
      
            res.writeHead(200, { 'content-type': 'text/plain' })
           
      if('id' in params && 'login' in params){
        res.write('votre id est '+ params['id'] + 'et votre login' + params['login']) ;
      }
      else{
        res.write('Veuillez saisir votre id et login');
      }
      res.end();
    }); */
    const server = http.createServer((req, res) => {
        const page = url.parse(req.url).pathname;
        const params = querystring.parse(url.parse(req.url).query);
    
        if (page === '/') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('<h1>Home Page</h1>');
            if ('id' in params && 'login' in params) {
                res.write('<p>Your id is ' + params['id'] + ' and your login is ' + params['login'] + '</p>');
            } else {
                res.write('<p>Please enter your id and login.</p>');
            }
        } else if (page === '/Contrat') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('<h1>About Page</h1>');
        } else if (page === '/Affichage/1/user') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('<h1>User Page</h1>');
        } else {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write('<h1>Page Not Found</h1>');
        }
        res.end();
    });


server.listen(8080);

