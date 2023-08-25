

const form1 = document.getElementById('form1');
        form1.addEventListener('click',function(event)
        {
            event.preventDefault();

            const email=document.querySelector('#email').value;
            const error1=document.querySelector('#error1');
            const password=document.querySelector('#password').value;
          const error2=document.querySelector('#error2');

            if(email=='')
            {
                error1.innerHTML='please enter your Username'
                error1.style.color='red';
                error1.style.textDecoration='underline';
            }

         

        if(password.length<8)
        {
            error2.innerHTML="'characters less than 8'"
            error2.style.color='red'
        }
        })

        form1.addEventListener('input',
        ()=>{
            error1.innerHTML='';
            error2.innerHTML=''
        })
   
