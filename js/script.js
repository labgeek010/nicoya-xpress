/* ----------------- toggle icon navbar ----------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

/* ----------------- scroll sections active link  ----------------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            if(id) {
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            }

            });
        };

    });

    /* ----------------- sticky navbar  ----------------- */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /* ----------------- remove toggle icon navbar when click navbar link (scroll) ----------------- */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

/* ---------------- scroll reveal ----------------  */

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.services-box h3, .calculator', { origin: 'bottom' });
ScrollReveal().reveal('.wrapper li, .tabs_content', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio, .tabs_content', { origin: 'right' });




/* ---------------- typed js ----------------  */

const typed = new Typed('.mutiple-text', {
    strings: ['desde Miami','hasta Nicoya'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})

/* Calculator code*/

document.getElementById('calculateTotal').addEventListener('click', function() {
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const orderWeight = parseFloat(document.getElementById('orderWeight').value);
    const orderAmount = parseFloat(document.getElementById('orderAmount').value);

    if (isNaN(exchangeRate) || isNaN(orderWeight) || isNaN(orderAmount)) {
        alert('Por favor, ingrese números válidos en todos los campos.');
        return;
    }

    const totalCost = (orderAmount + (10 * orderWeight)) * exchangeRate;
    document.getElementById('result').textContent = totalCost.toFixed(2);
});


/* ----- API integration sections--------*/

// document.getElementById("tracking-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const trackingNumber = document.getElementById("tracking-number").value;
//     const carrier = document.getElementById("carrier").value;
  
//     // Realiza una solicitud a la API correspondiente según el servicio seleccionado
//     if (carrier === "fedex") {
//       // Realiza una solicitud a la API de FedEx
//     } else if (carrier === "ups") {
//       // Realiza una solicitud a la API de UPS
//     } else if (carrier === "usps") {
//       // Realiza una solicitud a la API de USPS
//     }
//     // Procesa la respuesta y muestra la información de seguimiento en la página
//   });


var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
    var tab_data = list.getAttribute("data-tc");
    
    tab_lists.forEach(function(list){
      list.classList.remove("active");
    });
    list.classList.add("active");
    
    tab_items.forEach(function(item){
      var tab_class = item.getAttribute("class").split(" ");
      if(tab_class.includes(tab_data)){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
      
    })
    
  })
})

/* ----- form functionality js code--------*/

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#magia')


$form.addEventListener('submit', handleSubmit )

function handleSubmit (event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:info@nicoyaxpress.com?subject=${form.get('subject')}  de parte de: ${form.get('nombre')}&body=${form.get('message')}  <br> Puedes contactarme al número: ${form.get('numero')}`)
  $buttonMailto.click()
} 