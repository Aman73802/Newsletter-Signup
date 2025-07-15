const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post("/", function (req, res) {
  const { fname, lname, email } = req.body;
  console.log(`First Name: ${fname}, Last Name: ${lname}, Email: ${email}`);
  
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us13.api.mailchimp.com/3.0/lists/3787642147";
  
  const options = {
    method: 'POST',
    auth: "aman8146:7c740ebb308151d1dca410b433c30073-us13"
  };

  const request = https.request(url, options, function(response) {
    response.on('data', function(data) {
      console.log(JSON.parse(data));
    });

    response.on('end', function() {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + '/success.html');
      } else {
        res.sendFile(__dirname + '/failure.html');
      }
    });
  });

  request.on('error', function(e) {
    console.error(e);
    res.sendFile(__dirname + '/failure.html');
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, function(){
  console.log('Server is running on port ');
});


//SHA256:aly78P+3KYlbbMcSdIfe2coF8aHtr/zBKW6B7dP9VrY amanupadhyay8146@gmail.com
//Agent pid 1052

//ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILyVFDVwx0zFjga2L74dZq8scL/bJYNlrWG19dAvZOi7 amanupadhyay8146@gmail.com
