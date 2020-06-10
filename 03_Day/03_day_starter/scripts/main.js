// this is your main.js script
let firstName = "Enrique",
  lastName = "Gimenez",
  country = "Paraguay",
  city = "San Lorenzo",
  birthDate = 1997,
  ahora = new Date(),
  age = () => {
    if (ahora.getMonth() <= 10) {
      return ahora.getFullYear() - (birthDate + 1);
    } else {
      return ahora.getFullYear();
    }
  },
  isMarried = false,
  year = ahora.getFullYear(),
  estadoCivil = () => {
    if (isMarried === false) {
      return "soltero";
    } else {
      return "casado";
    }
  },
  independenciaPY = 1811,
  agePY = ahora.getFullYear() - independenciaPY;

let ficha = `Mi nombre es ${firstName} ${lastName}, tengo ${age()} años, vivo en ${city}-${country}. Soy ${estadoCivil()}, y estamos en el año ${year}.`;

let enPantallaFicha = document.getElementById("ficha");
enPantallaFicha.innerHTML = ficha;

//age  phrase

let ageDiff = agePY - age();

let yearsOlderPhrase = `Mi país es ${ageDiff} años más viejo que yo.`;

let enPantallaPais = document.getElementById("pais");
enPantallaPais.innerHTML = yearsOlderPhrase;
