  var selectedRow = null
function sign_in_validation()                                    
{ 
   
    var rno = document.forms["RegForm"]["rno"]; 
    var name = document.forms["RegForm"]["name1"];
    var stan = document.forms["RegForm"]["stan"]; 	
	var gen  = document.forms["RegForm"]["gen1"]; 
	var dob = document.forms["RegForm"]["dob"]
	if (rno.value == "")  
	 
    { 
        alert("Please enter your rno."); 
        //name.focus();
        return false; 
    } 
	
    if (name.value == "")                                  
    { 
        alert("Please enter your name."); 
        //name.focus();
        return false; 
    } 
	
	var regex = /^[a-zA-Z]*$/;
	
	
	if (regex.test(document.RegForm.name1.value)) 
	{

      //document.getElementById("notification").innerHTML = "Watching.. Everything is Alphabet now";
	 
      
	} 
  
	if(!regex.test(document.RegForm.name1.value)) 
	{
      alert("Please enter only alphabets");
	  return false;
      
	}
	if (stan.value == "")                                  
    { 
        alert("Please enter your standard in roman numerals"); 
		return false;
        //name.focus();
       
    }  
	if (stan.value == "I" || stan.value == "V" || stan.value == "X" || stan.value == "L"  || stan.value == "C" || stan.value == "D" || stan.value == "M")
	 {
	 
	 }
	 else
	 {
	   alert("Only roman numerals are allowed");
	  return false;
	 }
	 
	 if (dob.value == "")                                  
    { 
        alert("Please enter your date of birth"); 
		return false;
        //name.focus();
       
    }  
	 var regex1= /^((31(?!\ (Feb(ruary)?|Apr(il)?|June?|(Sep(?=\b|t)t?|Nov)(ember)?)))|((30|29)(?!\ Feb(ruary)?))|(29(?=\ Feb(ruary)?\ (((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))|(0?[1-9])|1\d|2[0-8])\ (Jan(uary)?|Feb(ruary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sep(?=\b|t)t?|Nov|Dec)(ember)?)\ ((1[6-9]|[2-9]\d)\d{2})$/;
	 if(regex1.test(document.RegForm.dob.value))
	 {
	  
	 }
	 else
	 {
	   alert("please input in specified format , eg: 12 Mar 2009");
	 }
	
	
	
	if (gen.value == "")                                  
    { 
        alert("Please enter your Gender"); 
		return false;
        //name.focus();
       
    }  
	
	
	
	if(gen.value == "O" || gen.value == "M" || gen.value == "F")
	{
	 
	 
	}
	else
	{
	  alert("Only F , M and O are allowed for female, male and others repectively");
	  return false;
	}
	
	//**********************************
	
	{
		
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
     }
	}
 
	


function readFormData() {
    var formData = {};
    formData["rno"] = document.getElementById("rno").value;
    formData["name"] = document.getElementById("name1").value;
    formData["stan"] = document.getElementById("stan").value;
    formData["dob"] = document.getElementById("dob").value;
	formData["gen"] = document.getElementById("gen1").value;
	
    return formData;
}

function resetForm() {
    document.getElementById("rno").value = "";
    document.getElementById("name1").value = "";
    document.getElementById("stan").value = "";
    document.getElementById("dob").value = "";
	document.getElementById("gen1").value = "";
    selectedRow = null;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.rno;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stan;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.gen;
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    
    
}

function resetForm() {
   document.getElementById("rno").value = "";
    document.getElementById("name1").value = "";
    document.getElementById("stan").value = "";
    document.getElementById("dob").value = "";
	document.getElementById("gen1").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
  
	document.getElementById("rno").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name1").value =selectedRow.cells[1].innerHTML;
    document.getElementById("stan").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
	document.getElementById("gen1").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
	
    selectedRow.cells[0].innerHTML = formData.rno;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.stan;
    selectedRow.cells[3].innerHTML = formData.dob;
	selectedRow.cells[4].innerHTML = formData.gen;
	
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("rno").value == "") {
        isValid = false;
        //document.getElementById("").classList.remove("hide");
    } else {
        isValid = true;
       // if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
