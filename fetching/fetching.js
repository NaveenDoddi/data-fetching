function go1(){
    
    // const fetchPromise = fetch('https://reqres.in/api/users?page=2')
    // console.log(fetchPromise)
    // fetchPromise.then(response => {
    //     console.log(response);
    //   });

    // fetch("https://reqres.in/api/users?page=2")
    // .then(Response =>{
    //     console.log(Response)
    // })
    

    var xhr = new XMLHttpRequest()
    
    xhr.open('GET','https://reqres.in/api/users?page=2')
    xhr.send()
    xhr.onload = function(){
        for(var x=0; x<JSON.parse(this.response).data.length; x++){
            var id = JSON.parse(this.response).data[x].id
            var email= JSON.parse(this.response).data[x].email
            var first = JSON.parse(this.response).data[x].first_name
            var last = JSON.parse(this.response).data[x].last_name
            var avatar = JSON.parse(this.response).data[x].avatar
            
        for(var i=0; i<2; i++){
            var row = document.createElement("tr")
            for(var j=0; j<20; j++){
                var col1 = document.createElement("td")
                col1.append(id)
                var col2 = document.createElement("td")
                col2.append(email)
                var col3 = document.createElement("td")
                col3.append(first)
                var col4 = document.createElement("td")
                col4.append(last)
                var col5 = document.createElement("td")
                var image = document.createElement("img")
                image.src=avatar
                col5.append(image)
                
            }
            row.append(col1)
            row.append(col2)
            row.append(col3)
            row.append(col4)
            row.append(col5)
        }
        console.log(JSON.parse(this.response).data[0].avatar)
        table.append(row)
        document.getElementById("table").append(row)
        }
    
    }
    
    
    
    }
    
    