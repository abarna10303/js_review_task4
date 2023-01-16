let age=parseInt(prompt("Enter the Age"));
let licence=confirm("Do you have licence");
if(age<18 && age>0 && licence==false)
{
    console.log("Not Eligible For Driving");
}
else
{
    console.log("Eligible For Driving");
}