
        
const form=document.getElementById('form');
form.addEventListener('click',function(event)
{
    event.preventDefault();

    const email=document.querySelector('#email').value;
    const error1=document.querySelector('#error1');


    const password=document.querySelector('#password').value;
  const error2=document.querySelector('#error2');


  const name=document.querySelector('#name').value;
   const error3=document.querySelector('#error3');


   const Birth=document.querySelector('#Birth').value;
   const error4=document.querySelector('#error4');

   const Age=document.querySelector('#Age').value;
   const Address=document.querySelector('#Address').value;
   const error6=document.querySelector('#error6');

   const error5=document.querySelector('#error5');

    if(email=='')
    {
        error1.innerHTML='please enter your g-mail.com'
        error1.style.color='red';
        error1.style.textDecoration='underline';
    }

 

if(password.length<8)
{
    error2.innerHTML="'characters less than 8'"
    error2.style.color='red'
}

if(name=='')
{
    error3.innerHTML='please enter your ur name'
    error3.style.color='red';
}

else(Birth=='')
{
    error4.innerHTML="'Mentioned ur Birth date'"
    error4.style.color='red'
}


if(Age=='')
{
    error5.innerHTML="'Enter ur Age'"
    error5.style.color='red'
}
if(Address=='')
{
    error6.innerHTML="Enter ur address"
    error6.style.color='red'
}


})

form.addEventListener('input',
()=>{
    error1.innerHTML='';
    error2.innerHTML='';
    error3.innerHTML='';
    error4.innerHTML='';
    error5.innerHTML='';
    error6.innerHTML='';

})
//first form finished;

const form1=document.getElementById('form1');
form1.addEventListener('click',function(event)
{
    event.preventDefault();

    const user=document.querySelector('#user').value;
    const error8=document.querySelector('#error8');
    const password=document.querySelector('#password').value;
  const error9=document.querySelector('#error9');

    if(user=='')
    {
        error8.innerHTML='please enter your Username'
        error8.style.color='red';
        error8.style.textDecoration='underline';
    }

 

if(password.length<8)
{
    error9.innerHTML="'characters less than 8'"
    error9.style.color='red'
}
})

form1.addEventListener('input',
()=>{
    error6.innerHTML='';
    error9.innerHTML=''
    })


const skip = () => {
    let ex = document.querySelector('.ex1');
    ex.style.display='none'  
    }
