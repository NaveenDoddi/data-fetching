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
            
            var row = document.createElement("tr")

            var col1 = document.createElement("td")
            col1.innerHTML=id
            var col2 = document.createElement("td")
            col2.innerHTML=email
            var col3 = document.createElement("td")
            col3.innerHTML=first
            var col4 = document.createElement("td")
            col4.innerHTML=last
            var col5 = document.createElement("td")
            var image = document.createElement("img")
            image.src=avatar
            col5.append(image) 
                
            row.append(col1,col2,col3,col4,col5)
            table.append(row)
        }
        
    }
    
}
    
    
    
    
    
    
