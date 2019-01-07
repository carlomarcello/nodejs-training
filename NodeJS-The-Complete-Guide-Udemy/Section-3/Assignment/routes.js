
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text-html');
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body>');
        res.write('Hello!<br><br>');
        res.write('Create a new user by filling out the field below with the user\'s username:<br>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log('username:', username);

            res.statusCode = 302;
            res.setHeader('Location', '/users');                        
            return res.end();
        });
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>User list</title></head>');
        res.write('<body>');
        res.write('Users:<br>');
        res.write('<ul><li>Anna</li><li>Juca</li><li>Bino</li></ul>');        
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
};

exports.handler = requestHandler;