 var c=confirm("Do you want to be my friend,I am Rajat Gupta")
 if(c===true){
     var a=prompt("Enter your age my friend")
 }else if(c===false){
     document.write("<h1 class=hello>Hope,you find another good friend</h1>")
 }
 if(a>=12&&a<=18){
     var c2=confirm("Are you using abusive words in your lifestyle")
 }else if(a<12||a>18){
    document.write("<h1 class=hello>Hope,you find another good friend</h1>")
}
 if(c2 ===true){
    document.write("<h1 class=hello>Hope,you find another good friend</h1>")
 }else if(c2===false){
     c3=confirm("Are you intersted in sports")
}
if(c3===true){
    document.write("<h1 class=helloe>Ok, We are friends from now</h1>")
}else if(c3===false){
    document.write("<h1 class=hello>Hope,you find another good friend</h1>")
}
