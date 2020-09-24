




var drawTable= function(penguins)
{
    var rows= d3.select("table tbody")
    .selectAll("tr")
    .data(penguins)
    .enter()
    .append("tr")
    
    rows.append("td")
    .append("img")
    .attr("src", function(penguin)
    {
      return "imgs/"+penguin.picture  
    });

     rows.append("td")
    .text(function(penguin)
{
   return penguin.quizmean   
  });
     
    rows.append("td")
    .text(function(penguin)
{
   return penguin.homeworkmean   
  });
    
         rows.append("td")
    .text(function(penguin)
{
   return penguin.finalgrade
});
      
       rows.append("td")
    .text(function(penguin)
{
   return penguin.testmean
});
    
    
    
    
    
    
    
}
var penguinPromise = d3.json("classData.json")

var successFCN = function(penguins)
{
    console.log("penguins",penguins)
    setBanner("Welcome Students");
    drawTable(penguins)
}

var failureFCN = function(error)
{
    console.log("error",error)
    setBanner("Not Found")
}


var setBanner= function(message)
{
    d3.select("banner")
    .text(message);
}
    
          

penguinPromise.then(successFCN,failureFCN);