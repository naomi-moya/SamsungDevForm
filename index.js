const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});



function checkInputs(){
    //pilla valores de los inputs
    const nombreValue = nombre.value
    const emailValue = email.value
    const passwordValue = password.value
    const password2Value = password2.value

   //Nombre

    if(nombreValue === '') {
        //pintar error
        //mostrar msj error
        setErrorFor(nombre, 'Rellene este campo')

    }else if(!validNombre(nombreValue)) {
        setErrorFor(nombre, 'No se admiten números')
    } else{
        //pintar correcto
        setSuccessFor(nombre)
    }

    //Email
    if(emailValue === '') {
        setErrorFor(email, 'Rellene este campo')

    }else if(!validEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else{
        setSuccessFor(email)
    }

    //Password
    if(passwordValue === '') {
        setErrorFor(password, 'Rellene este campo')

    }else if(!validPassword(passwordValue)) {
        setErrorFor(password, 'Debe tener más de 8 carácteres')
    } else{
        setSuccessFor(password)
    }

    //Password2
    if(password2Value === '') {
        setErrorFor(password2, 'Rellene este campo')
      }else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden')
    } else{
        setSuccessFor(password2)
    }
 

    //Alerta de confirmación y reseteo
    if (nombreValue !== '' && validNombre(nombreValue) && 
      emailValue !== '' && validEmail(emailValue) &&
      passwordValue !== '' && validPassword(passwordValue) &&
      passwordValue === password2Value) {
    alert("Formulario enviado");
    form.reset();
    resetVisual();
  }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const p = formControl.querySelector('p');

    //mensaje error
    p.innerText = message;
    //color error
    formControl.className = 'form-control error';
}
    
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//VALIDACIONES DE INPUTS 

function validNombre (nombre) {
    return /^[^0-9]+$/.test(nombre);
}

function validEmail (email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}

function validPassword (password) {
    return /^.{8,}$/.test(password);
}


/*
expresiones
	nombre: /^[^0-9]+$/ // Todo menos números
	password: /^.{8,}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
*/


// Añadir evento keyup en los inputs

nombre.addEventListener('keyup', function () {
  const nombreValue = nombre.value;

  if (nombreValue === '') {
    setErrorFor(nombre, 'Rellene este campo');
  } else if (!validNombre(nombreValue)) {
    setErrorFor(nombre, 'No se admiten números');
  } else {
    setSuccessFor(nombre);
  }
});

email.addEventListener('keyup', function () {
  const emailValue = email.value;

  if (emailValue === '') {
    setErrorFor(email, 'Rellene este campo');
  } else if (!validEmail(emailValue)) {
    setErrorFor(email, 'Email inválido');
  } else {
    setSuccessFor(email);
  }
});

password.addEventListener('keyup', function () {
  const passwordValue = password.value;

  if (passwordValue === '') {
    setErrorFor(password, 'Rellene este campo');
  } else if (!validPassword(passwordValue)) {
    setErrorFor(password, 'Debe tener más de 8 carácteres');
  } else {
    setSuccessFor(password);
  }
});

password2.addEventListener('keyup', function () {
  const passwordValue = password.value;
  const password2Value = password2.value;

  if (password2Value === '') {
      setErrorFor(password2, 'Rellene este campo');
  } else if (passwordValue !== password2Value) {
      setErrorFor(password2, 'Las contraseñas no coinciden');
  } else {
      setSuccessFor(password2);
  }
});


// Resetear estilo formulario

function resetVisual(){
  const formControls = document.querySelectorAll ('.form-control');
  formControls.forEach(function (formControl){
    formControl.className='form-control'
  });
}
