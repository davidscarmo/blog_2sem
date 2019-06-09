
    var x = '';
    
    
    function bdCrumb()
    {
        x = document.getElementById("tituloPage").textContent;
        document.getElementById('breadCrumb').innerHTML = "<a href='index.html'> Home</a> &ThinSpace; / &ThinSpace;" + "<span>" + x + "</span>";
    } 
