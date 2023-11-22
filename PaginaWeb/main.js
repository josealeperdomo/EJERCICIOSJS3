let ventana = document.getElementById('ventana')
let pantalla2 =  document.getElementById('pantalla2')

function cerrar(){
    ventana.className = ventana.className.replace('flex','hidden')
    pantalla2.className = pantalla2.className.replace('flex','hidden')
}

let nav = document.getElementById('nav')
let modoclaro = document.getElementById('modoclaro')
let modooscuro = document.getElementById('modooscuro')
let main = document.getElementById('main')
let aside = document.getElementById('aside')
let seccion1 = document.getElementById('quienes')
let carrusel = document.getElementById('carrusel')
let seccion3 = document.getElementById('sedes')
let seccion4 = document.getElementById('experiencias')
let experiencias = document.getElementById('cajas')
let formulario = document.getElementById('formulario')
let piso = document.getElementById('piso')
console.log(formulario);


function modo(){
    if(nav.classList[0] === 'bg-slate-900'){
        nav.className = nav.className.replace('bg-slate-900','bg-blue-400')
        modoclaro.className = modoclaro.className.replace('hidden', 'flex')
        modooscuro.className = modooscuro.className.replace('flex', 'hidden')
        nav.className = nav.className.replace('text-[#FF3131]','text-white')
        main.className = main.className.replace('bg-slate-950','bg-blue-300')
        aside.className = aside.className.replace('bg-slate-900','bg-blue-400')
        aside.className = aside.className.replace('text-[#FF3131]','text-white')
        seccion1.className = seccion1.className.replace('text-white', 'text-blue-700')
        seccion3.className = seccion3.className.replace('text-white', 'text-blue-700')
        seccion4.className = seccion4.className.replace('text-white','text-blue-700')
        formulario.className = formulario.className.replace('bg-slate-800','bg-blue-500')
        piso.className = piso.className.replace('bg-slate-900','bg-blue-400')
        piso.className = piso.className.replace('text-[#FF3131]','text-white')
        for(let i = 1;i < 6; i = i + 2){
            experiencias.childNodes[i].className = experiencias.childNodes[i].className.replace('bg-slate-800','bg-blue-500')
        }
    }else{
        nav.className = nav.className.replace('bg-blue-400', 'bg-slate-900')
        modoclaro.className = modoclaro.className.replace('flex', 'hidden')
        modooscuro.className = modooscuro.className.replace('hidden', 'flex')
        nav.className = nav.className.replace('text-white','text-[#FF3131]')
        main.className = main.className.replace('bg-blue-300', 'bg-slate-950')
        aside.className = aside.className.replace('bg-blue-400', 'bg-slate-900')
        aside.className = aside.className.replace('text-white','text-[#FF3131]')
        seccion1.className = seccion1.className.replace('text-blue-700', 'text-white')
        seccion3.className = seccion3.className.replace('text-blue-700', 'text-white')
        seccion4.className = seccion4.className.replace('text-blue-700','text-white')
        formulario.className = formulario.className.replace('bg-blue-500','bg-slate-800')
        piso.className = piso.className.replace('bg-blue-400', 'bg-slate-900')
        piso.className = piso.className.replace('text-white','text-[#FF3131]')
        for(let i = 1;i < 6; i = i + 2){
            experiencias.childNodes[i].className = experiencias.childNodes[i].className.replace('bg-blue-500','bg-slate-800')
        }
    }

}

let pantalla = document.getElementById('pantalla')

function menu(){
    if(aside.classList[0] === 'hidden'){
        aside.className = aside.className.replace('hidden','flex')
        pantalla.className = pantalla.className.replace('hidden','flex')
    }else{
        aside.className = aside.className.replace('flex', 'hidden')
        pantalla.className = pantalla.className.replace('flex','hidden')
    }
}

let imagenes = {
    url1: 'https://earlyedgecalifornia.org/wp-content/uploads/2018/09/Banner-Kids-reading-on-floor.png',
    url2: 'https://dot.siu.edu/education/_common/images/elementary-education/banner-student-teaching.jpg',
    url3: 'https://elimindset.com/wp-content/uploads/2017/05/highschool-banner.jpg',
    url4: 'https://png.pngtree.com/background/20230608/original/pngtree-people-talking-in-small-groups-with-speech-balloons-stock-photo-picture-image_2904092.jpg',
    url5: 'https://www.shutterstock.com/image-photo/group-multi-racial-people-meeting-600nw-2076807883.jpg'
}

let textos = {
    text1: document.getElementById('text1'),
    text2: document.getElementById('text2'),
    text3: document.getElementById('text3'),
    text4: document.getElementById('text4'),
    text5: document.getElementById('text5')
}

let imagen = document.getElementById('imagen')
let atras = document.getElementById('atras')
let delante = document.getElementById('delante')

delante.addEventListener('click', function(){
    if(imagen.src === imagenes.url1){
        imagen.src = imagenes.url2
        textos.text2.className = textos.text2.className.replace('hidden','flex')
        textos.text1.className = textos.text1.className.replace('flex','hidden')
    }else if(imagen.src === imagenes.url2){
        imagen.src = imagenes.url3
        textos.text3.className = textos.text3.className.replace('hidden','flex')
        textos.text2.className = textos.text2.className.replace('flex','hidden')
    }else if(imagen.src === imagenes.url3){
        imagen.src = imagenes.url4
        textos.text4.className = textos.text4.className.replace('hidden','flex')
        textos.text3.className = textos.text3.className.replace('flex','hidden')
    }else if(imagen.src === imagenes.url4){
        imagen.src = imagenes.url5
        textos.text5.className = textos.text5.className.replace('hidden','flex')
        textos.text4.className = textos.text4.className.replace('flex','hidden')
    }else{
        imagen.src = imagenes.url1
        textos.text1.className = textos.text1.className.replace('hidden','flex')
        textos.text5.className = textos.text5.className.replace('flex','hidden')
    }
})

atras.addEventListener('click', function(){
    if(imagen.src === imagenes.url2){
        imagen.src = imagenes.url1
        textos.text1.className = textos.text1.className.replace('hidden','flex')
        textos.text2.className = textos.text2.className.replace('flex','hidden')
    }else if(imagen.src === imagenes.url3){
        imagen.src = imagenes.url2
        textos.text2.className = textos.text2.className.replace('hidden','flex')
        textos.text3.className = textos.text3.className.replace('flex','hidden')
    }else if(imagen.src == imagenes.url4){
        imagen.src = imagenes.url3
        textos.text3.className = textos.text3.className.replace('hidden','flex')
        textos.text4.className = textos.text4.className.replace('flex','hidden')
    }else if(imagen.src === imagenes.url5){
        imagen.src = imagenes.url4
        textos.text4.className = textos.text4.className.replace('hidden','flex')
        textos.text5.className = textos.text5.className.replace('flex','hidden')
    }else{
        imagen.src = imagenes.url5
        textos.text5.className = textos.text5.className.replace('hidden','flex')
        textos.text1.className = textos.text1.className.replace('flex','hidden')
    }
})

let regexes = [/^[A-Za-z]+\s[A-Za-z]+$/,/^\w+\@[a-zA-Z]+\.com+$/,/^(041[246]|042[46])\-\d{3}\-\d{2}\-\d{2}/]
let datos = [document.getElementById('nombre'),document.getElementById('email'),document.getElementById('numero')]
let enviar = document.getElementById('enviar')
let form = document.getElementById('form')


enviar.addEventListener('click', function(){
    for(let i = 0; i < regexes.length;i++){
        if(regexes[i].test(datos[i].value)){
            datos[i].classList.add('correcto')
            datos[i].classList.remove('incorrecto')
        }else{
            datos[i].classList.remove('correcto')
            datos[i].classList.add('incorrecto')
        }
    }
    let datosvalidos = 0
    for(let i = 0; i < datos.length;i++){
        if(datos[i].className == 'correcto'){
            datosvalidos++
        }else{
            datosvalidos = 0
        }
    }
    if(datosvalidos == datos.length){
        alert('Un asesor de ventas se comunicará con usted')
        form.submit()
    }else{
        alert('Debe llenar todos los campos correctamente')
    }
})
