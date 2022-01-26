

var database =[
    {
        username: "admin",
        password: "password"
    }
]

var newsFeed =[

    {username:"Bobby",
     timeline:"Yo!"
    },
    {
        username:"Sally",
        timeline:"JS is dope"
    }
    
    
    ];

function validate(username, password)
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username === database[0].username && password === database[0].password)
    {
        alert("login succesfully"),
  
        
        
    }
    else
    {
        alert("Incorrect Credentials");
    }
}

validate(username, password);






