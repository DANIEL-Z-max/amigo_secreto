// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array global que guarda los nombres
let amigos = [];

/* ========== 1. Agregar amigo ========== */
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validación: vacío
  if (!nombre) {
    alert('⚠️ Por favor introduce un nombre válido.');
    input.focus();
    return;
  }

  // Validación: mínimo 3 caracteres
  if (nombre.length < 3) {
    alert('⚠️ El nombre debe tener al menos 3 letras.');
    input.focus();
    return;
  }

  // ✅ Nueva validación: solo letras (sin números ni símbolos)
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
    alert('⚠️ El nombre solo puede contener letras.');
    input.focus();
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert('⚠️ Este nombre ya fue agregado.');
    input.value = '';
    input.focus();
    return;
  }

  // Alta
  amigos.push(nombre);
  input.value = '';
  actualizarLista();
  input.focus();
}

/* ========== 2. Pintar nombres en pantalla ========== */
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpia
  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

/* ========== 3. Sortear amigo secreto ========== */
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('⚠️ Necesitas al menos 2 personas para sortear.');
    return;
  }

  // Copia para no alterar el original
  const copia = [...amigos];
  const resultado = [];

  // Algoritmo de “circular shift”
  for (let i = 0; i < amigos.length; i++) {
    const siguiente = (i + 1) % amigos.length;
    resultado.push(`${amigos[i]} → regala a → ${copia[siguiente]}`);
  }

  // Mostrar
  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';
  resultado.forEach(par => {
    const li = document.createElement('li');
    li.textContent = par;
    ulResultado.appendChild(li);
  });
}