// var entry=document.getElementById("entry");
// entry.addEventListener("click",myFunction);
var row = 1;

function myFunction()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var website=document.getElementById("website").value;
    var image=document.getElementById("image").value;
    var gender=document.getElementsByName("gender");
    var skills=document.getElementsByClassName("skills");

    if(name=="")
    {
       document.getElementById("nam").innerHTML="Please mention your name!";
        return;
    
    }
    else
    {
        document.getElementById("nam").innerHTML="";
    }
    
    var atposition=email.indexOf('@');
    var dotposition=email.indexOf('.');
    if(email=="" || atposition<1 || dotposition<atposition+2)
    {
        document.getElementById("mail").innerHTML="Plase Enter correct email";
        return;
    }
    else
    {
       document.getElementById("mail").innerHTML="";
    }

    if(website=="")
    {
        document.getElementById("site").innerHTML="website can't be blank";
        return;
    }
    else
    {
       document.getElementById("site").innerHTML="";
    }
   
    if(image=="")
    {
        document.getElementById("img").innerHTML="Image link can't be  blank";
        return;
    }
    else
    {
       document.getElementById("img").innerHTML="";
    }

   
    var genderResult="";
    if(gender[0].checked)
    {
        genderResult="Male";
    }
    if(gender[1].checked)
    {
        genderResult="Female";
    }
   

    var skill="";
    if(skills[0].checked)
    {
        if(skill.length==0)
        {
           skill+="Java";
        }
        else
        {
            skill+=",Java";
        }
    }
    
    if(skills[1].checked)
    {
        if(skill.length==0)
        {
           skill+="HTML";
        }
        else
        {
            skill+=",HTML";
        }
    }
    if(skills[2].checked)
    {
        if(skill.length==0)
        {
           skill+="CSS";
        }
        else
        {
            skill+=",CSS";
        }
    }

    if(skill.length==0)
    {
        document.getElementById("skil").innerHTML="Please select at least one skill";
        return;
    }
    else
    {
       document.getElementById("skil").innerHTML="";
    }
  
  var profile=document.createElement("img");
  profile.setAttribute("src",image);
  profile.setAttribute("width","150");
  profile.setAttribute("height","100");
  profile.setAttribute("alt","not found");

  

//   var web=document.createElement("a");
//   web.setAttribute("href",website);
//   web.setAttribute("target","_blank");
//   web.innerHTML=website;

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

   var result="<span class=fade-in><b>"+name+"</b>"+"<br>"+genderResult+"<br>"+email+"<br>"+"<a href='"+website+"' target=_blank >"+website +"</a>"+"<br>"+skill+"</span>";
    
    
    cell1.innerHTML=result;
    cell2.appendChild(profile);
    

    row++;
    

}