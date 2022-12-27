//размери экрана
const screenWidth = window.screen.width
const body__= document.querySelector('.body__');

let historyImgsblock = document.querySelector('.imghistory')
if (historyImgsblock) {
    let historyImgs = historyImgsblock.querySelectorAll('img')
    let historyImgsKey = 0
    for (let i = 0; i < historyImgs.length; i++) {
        historyImgs[i].style.left = historyImgsKey;
        historyImgsKey = historyImgsKey + 60;
    }
}



let question_answer_row = document.querySelectorAll('.question_answer_row')
if (question_answer_row){
    function opeQuestionAnswer(obg){
    let clickEvent = obg.target.closest('.question_answer_row');
    let answers = clickEvent.querySelector('.answer');
    let vertical_line = clickEvent.querySelector('.line_vertical');
    let horizontal_line = clickEvent.querySelector('.line_horizontal');

    clickEvent.classList.toggle('opening');
    vertical_line.classList.toggle('rotate180deg');
    horizontal_line.classList.toggle('rotate180deg');
    answers.classList.toggle('question_answer_display');
    }
    for (let i = 0; i <question_answer_row.length ; i++) {
        question_answer_row[i].addEventListener('click', opeQuestionAnswer)
    }
}

const openCatalog = document.querySelector('.openCatalog');
const catalogMenu = document.querySelector('.catalog-menu_block');
function openClos(){
    catalogMenu.classList.toggle('display_block');
    setTimeout(()=>{
        catalogMenu.classList.toggle('opacity');
    },1)
}
openCatalog.addEventListener('click', openClos)




//открываем ЗАКАЗАТЬ ЗВОНОК
const call_open=document.querySelectorAll('.call_open');
// крестик для закрытия блок ЗАКАЗАТЬ ЗВОНОК
const call_close=document.querySelector('#call_close');
//блок ЗАКАЗАТЬ ЗВОНОК
const request_call_block = document.querySelector('[data-request-call]')
//actions получает значение flex(открыть) или none(закрыть)
function open_clos_call(actions){
    let productName = document.querySelector('.product_name');
    let productDeliveryCity = document.querySelector('#choosingCity');
    let serviceName = document.querySelector('.service_name');
    let gasifierVolume = document.querySelector('#calculator_result');

    request_call_block.style.display=actions;
    if(actions == 'flex'){
        body__.classList.add('stop_scroll');
        if (productName){
            addName.value = productName.innerText;
        }
        if(productDeliveryCity){
            addDeliveryCity.value = productDeliveryCity.innerText;
        }
        if(serviceName){
            addService.value = serviceName.innerText;
        }
        if(gasifierVolume){
            addDasifierVolume.value = gasifierVolume.innerText;
        }
    }else {
        body__.classList.remove('stop_scroll');
    }
}
for (let i = 0; i < call_open.length ; i++) {
    call_open[i].addEventListener('click', function(){open_clos_call('flex')}, false)
}
call_close.addEventListener('click', function(){open_clos_call('none')}, false)



const dataModalResponse = document.querySelector('[data-model-response]');
document.addEventListener('DOMContentLoaded', ()=>{
    const requestOrderForm = document.querySelector('#formElement');
    requestOrderForm.addEventListener('submit', async e => {
        e.preventDefault();
        const formData = new FormData(requestOrderForm);
        const address = requestOrderForm.action;
        const options = {
            method: requestOrderForm.method,
            body: formData
        };
        const responseData = await fetch(address, options).then(response => response.json());
        if(responseData.state !== 'success'){
            requestOrderForm.innerHTML = "Ошибка!";
        }
        request_call_block.style.display='none'
        dataModalResponse.style.display='flex';
        body__.classList.remove('stop_scroll');
    });
});


let request_sended__close = document.querySelector('[data-request-sended-close]')
function close_request_sended(){
    dataModalResponse.style.display='none';
}
request_sended__close.addEventListener('click', close_request_sended);
let mask_phone = document.querySelectorAll('input[name="phone"]');
let maskOptions ={
        mask:'+{7}(000)000-00-00',
        min: 0,
        max: 9,
        thousandsSeparator: ' '
    };
for (let i = 0; i < mask_phone.length; i++){
    let mask = IMask(mask_phone[i], maskOptions);
}





// colculator
// let colculator_gazavikator = document.querySelector('#colculator-gazavikator');
// if(colculator_gazavikator){
//     function f1(){
//         console.log(colculator_gazavikator.value);
//     }
//     colculator_gazavikator.addEventListener('change', f1)
// }



//historyCompany_content_row1
let change_history =document.querySelector('#stories');
if (change_history){
    const company_fistory={
        '0':'2014 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '1':'2015 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '2':'2016 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '3':'2017 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '4':'2018 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '5':'2019 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '6':'2020 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '7':'2021 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
        '8':'2022 Viverra rhoncus dolor ac velit lectus nunc, etiam pellentesque diam. Laoreet orci sit nisl, aliquet nisi, iaculis. Id pretium odio fermentum, hac fringilla imperdiet. Risus dignissim aliquet tempor id maecenas viverra consectetur viverra. At dolor vulputate vestibulum',
    }
    let all_history_years=document.querySelectorAll('.history_years');
    function historyCompany(){
        let year = Math.floor(change_history.value);
        history_content.innerText=company_fistory[year];
        for (let i = 0; i < all_history_years.length; i++) {
            all_history_years[i].classList.remove('historyCompany_activ');
        }
        active_history = all_history_years[year];
        active_history.classList.add('historyCompany_activ');
    }
    change_history.addEventListener('input', historyCompany);
}


let catalogCcategory = document.querySelectorAll('.catalog-category');
if(catalogCcategory){
    function openCotalogCategory(e){
        let eventsCotalogCategory = e.target.closest('.catalog-category');
        let catalogCategory_header = eventsCotalogCategory.querySelector('.catalog-category_header');
        eventsCotalogCategory.classList.toggle('catalog-category-opend');
        catalogCategory_header.classList.toggle('catalog-category_header-opend')
    }

    for (let i = 0; i <catalogCcategory.length ; i++) {
        catalogCcategory[i].addEventListener('click', openCotalogCategory);
    }
}

// catalog_third_level city-container
const city_block = document.querySelector('.choose-city')
if (city_block){
    function openCitiesList(){
        city_block.classList.toggle('display_flex');
    }
    choosingCity.addEventListener('click', openCitiesList)
    let chooseSity= document.querySelector('.choose-city__citiesList');
    let city = chooseSity.querySelectorAll('li');
    function newCity(e){
        choosingCity.innerText = e.target.innerText
        delivery_cos.innerText = e.target.value
        city_block.classList.toggle('display_flex');
    }
    for ( i = 0; i < city.length; i++) {
        city[i].addEventListener('click', newCity)
    }
}

// catalog_third_level add_option
const addoption = document.querySelectorAll('.option_row');
if (addoption){
    let optionArr=[]
    function add_option(e) {
        // получаем строку опции
        let optionRow = e.target.closest('.option_row')
        // получаем класс значка + или v
        let addOrselected = optionRow.querySelector('.addOrselected');
        // получаем стоимость опции
        let optionsCost = optionRow.querySelector('span');
        // меняем стиль строка опции
        optionRow.classList.toggle('add_option-choosed');
        //меняем значок '+' на 'v' и наоборот
        addOrselected.classList.toggle('selectedIcon');
        // если строка опции имеет стиль (синий) и в массиве  optionArr уже есть этот стоимость
        if (!(optionRow.classList.contains("add_option-choosed")) && optionArr.includes(optionsCost.innerText)){
           // получить индекс в массиве
            let delIndex = optionArr.indexOf(optionsCost.innerText);
            // элемент с этим индексом удаляем
            delete optionArr[delIndex];
        }
        // если строка опции имеет стиль (синий)
        else if (optionRow.classList.contains("add_option-choosed")) {
            // в массив 'optionArr' добавляем стоимость опции
            optionArr.push( optionsCost.innerText);
        }
        // со страницы 'catalog third level' получаем скрытый input и очищаем содержимое
        addOption.value=''
        for (let i = 0; i < optionArr.length; i++) {
            // с помощью цикла в скрытом input добавляем элементы массива optionArr(стоимость опции)
            if (optionArr[i]){
                addOption.value += optionArr[i];
            }
        };
    }
    for (let i = 0; i < addoption.length ; i++) {
        addoption[i].addEventListener('click', add_option);
    }
}

//calculator
const line_digital_colculator = document.querySelector('#line_digital_colculator');
const digital_sensor=document.querySelector('#digital_colculator');
if (line_digital_colculator){

    function calculating(){
        digital_colculator.value=line_digital_colculator.value
          if(screenWidth < 480){
              digital_sensor.style.left = line_digital_colculator.value /1.3;
          }else {
              digital_sensor.style.left = line_digital_colculator.value * 1.62;
          }

        if (Math.floor(digital_sensor.value / 18) < 1){
            calculator_result.innerText = 1
        }
        else{
            calculator_result.innerText = Math.round(digital_sensor.value / 18);
        }
    }
    line_digital_colculator.addEventListener('input', calculating);

    function calculating_input(){
        if (Math.floor(digital_sensor.value / 18) < 1){
            calculator_result.innerText = 1
        }
        else{
            calculator_result.innerText = Math.round(digital_sensor.value / 18);
        }
    }
    digital_sensor.addEventListener('change', calculating_input);
}

const certificates = document.querySelector('.certificate');
if(certificates){
    let certificateImg = certificates.querySelectorAll('img')
    function zoomCertificate(e){
        let currentCertificate = e.target.closest('.certificate_col');
        let certificateZoom = currentCertificate.querySelector('img');
        for (let i = 0; i < certificateImg.length; i++) {
            if (certificateZoom === certificateImg[i]){
                certificateZoom.classList.toggle('certificate_zoom');
            }
            else {
                certificateImg[i].classList.remove('certificate_zoom')
            }
        }
    }
    certificates.addEventListener('dblclick', zoomCertificate)
}


// video
const section_video = document.querySelector('.section_video');
if (section_video){
    let play_icon = document.querySelector('.play-icon');
    let close_video = document.querySelector('#close_video');
    function playVideo(){
        section_video.style = "display: block;"
    }
    play_icon.addEventListener('click', playVideo)

    function closeVideo(){
        section_video.style = "display: none;"
    }
    close_video.addEventListener('click', closeVideo)
}
const video_message = document.querySelector('.video_message');
if (video_message){
    let play_video_maessige_icon = document.querySelector('.play_video_maessige-icon');
    let close_video_maessige = document.querySelector('#close_video_message');
    function playVideoMessige(){
        video_message.style = "display: block; z-index:1;"
    }
    play_video_maessige_icon.addEventListener('click', playVideoMessige)

    function closeVideoMessige(){
        video_message.style = "display: none;"
    }
    close_video_maessige.addEventListener('click', closeVideoMessige)
}
const video_about_company = document.querySelector('.video_about_company');
if (video_about_company){
    let play_video_about_company = document.querySelector('.play-video-company');
    let close_video_about_company = document.querySelector('#close_video_about_company');
    function playVideoCompany(){
        video_about_company.style = "display: block; z-index:1;"
    }
    play_video_about_company.addEventListener('click', playVideoCompany)

    function closeVideoCompany(){
        video_about_company.style = "display: none;"
    }
    close_video_about_company.addEventListener('click', closeVideoCompany)
}





//мобайл
if (screenWidth < 480){
//мобайл footer блок
    let footer_contet_row = document.querySelector('.mobile_footer_contet')
    function openFooterContent(e){
        let currentRow= e.target.closest('.mobile_footer_contet_row')
        let mobile_footer_arow = currentRow.querySelector('.mobile_footer_arow')
        currentRow.classList.toggle('height170');
        mobile_footer_arow.classList.toggle('deg90');
    }
    footer_contet_row.addEventListener('click', openFooterContent)


//в мобайл на странице catalog открываем section 1 ссылками
    let catalog_section1_contenct_col1_mobile = document.querySelector('.catalog_section1_contenct_col1_mobile')
    if (catalog_section1_contenct_col1_mobile){
        function opencotalog(e){
            let currentRow= e.target.closest('.catalog_section1_row')
            let catalog_section1_arow = currentRow.querySelector('.catalog_section1_arow');
            currentRow.classList.toggle('height170');
            catalog_section1_arow.classList.toggle('deg90');
        }
        catalog_section1_contenct_col1_mobile.addEventListener('click', opencotalog)
    }
    //открываем каталог меню и мобильный меню
    //кнопка мобилный меню
    const mobile_menu_btn=document.querySelector('.mobaile_header_menuBtn');
    //кнопка мобилный каталог меню
    const mobile_catalog_btn = document.querySelector('.mobile_catalog_btn');
    //мобилный каталог меню
    const catalogMenu = document.querySelector('.catalog-menu_block');
    //мобилный меню
    const mobile_menu=document.querySelector('.mobile-menu');
    //body который закрывается при открытии каталог
    const hide_content=document.querySelector('.hide_content');
    //body который закрывается при открытии меню
    const mobileMenu__hide_content = document.querySelector('.for-mobileMenu__hide_content');
    //type_menu = кнопка на которого нажимаем
    //display_none добавляет два разных селектора со значением display-нан,
    //чтобы при одновременном открытии обоих меню, body не открывался.
    function openClose(type_menu){
        if (type_menu === mobile_menu ){
            mobile_menu.classList.toggle('display-grid');
            mobileMenu__hide_content.classList.toggle('display_none');
            hide_content.classList.remove('display_none');
            catalogMenu.classList.remove('display-grid');
        }
        else if(type_menu === catalogMenu){
            catalogMenu.classList.toggle('display-grid');
            hide_content.classList.toggle('display_none');
            mobile_menu.classList.remove('display-grid');
            mobileMenu__hide_content.classList.remove('display_none');
        }
    }
    mobile_menu_btn.addEventListener('click', function(){openClose(mobile_menu)}, false);
    mobile_catalog_btn.addEventListener('click', function(){openClose(catalogMenu)}, false);

    //внутры коталог открываем строки со ссылками
    function open_links_block(e){
        let currentRow = e.target.closest('.catalog-menu__col');
        let catalog_menu_row =currentRow.querySelector('.catalog-menu__row');
        currentRow.classList.toggle('height170');
        catalog_menu_row.classList.toggle('deg90');
    }
    catalogMenu.addEventListener('click', open_links_block);

    //header menu links
    let mobile_menu__links = document.querySelector('.mobile-menu__links')
    function mobileHeaderLinks(e){
        let currentRow= e.target.closest('.mobile-menu__links_row')
        let mobile_header_arow= currentRow.querySelector('.mobile_header_arow')
        currentRow.classList.toggle('height170');
        mobile_header_arow.classList.toggle('deg90');
    }
    mobile_menu__links.addEventListener('click', mobileHeaderLinks)

    //в мобфйле при прокрутке фиксируем меню вверху экрана
    window.addEventListener('scroll', function(){
        let scroll_value = window.scrollY;
        let content = document.querySelector('.scroll__heit-holder')
        const header__mobile_nav = document.querySelector('.header__mobile-nav');
        if (scroll_value >= 40){
            header__mobile_nav.classList.add('position_fixed');
            //если мобильное меню не открыто, то в content добавляем padding для плавной прокрутки
            if(!mobile_menu.classList.contains('display-grid')) {
                content.style = 'padding-top:60px';
            }
            mobile_menu.style = 'margin-top:105px';
        }
        else {
            content.style = 'padding-top:0';
            mobile_menu.style='margin-top:50px';
            header__mobile_nav.classList.remove('position_fixed');
        }
    })
}




//SLIDERS
new Swiper('.swiper-container_work_examples_slid', {
    //стрелки
    navigation: {
        nextEl: '#work_examples_slide_Right',
        prevEl: '#work_examples_slide_left'
    },
    //курсор перетаскивания
    grabCursor:true,
    //переключение при клике на слайд
    slideToClickedSlide:true,
    spaceBetween:20,
    keyboard:{
        enabled:true,
        onlyInViewport: true,
    },
    //Размер дисплея
    breakpoints:{
        320:{
            slidesPerView: 1.4,
            spaceBetween:10,
        },
        400:{
            slidesPerView: 1.7,
            spaceBetween:10,
        },
        640:{
            slidesPerView: 2,
        },
        840:{
            slidesPerView: 2.2,
        },
        1000:{
            slidesPerView: 2.5,
        },
        1200:{
            slidesPerView: 3,
        },
        1320:{
            slidesPerView: 3.2,
        },
        1500:{
            slidesPerView: 4,
        },
        1600:{
            slidesPerView: 4.2,
        },
        1700:{
            slidesPerView: 4.5,
        },
        1880:{
            slidesPerView: 5,
        },
    }

});

new Swiper('.showroom_sliders', {
    navigation: {
        nextEl: '#showroom__slide-toRight',
        prevEl: '#showroom__slide-toLeft'
    },
    //курсор перетаскивания
    grabCursor:true,
    //переключение при клике на слайд
    slideToClickedSlide:true,
    allowTouchMove: false,
    loop:true,
    keyboard:{
        enabled:true,
        onlyInViewport: true,
    },
    slidesPerView: 1,
    breakpoints: {
        360:{

            slidesPerView: 1.5,
        },
        480:{
        },
    }
})

new Swiper('.showroom_sliders_inSlide', {
    navigation: {
        nextEl: '#showroom__slide-toRight',
        prevEl: '#showroom__slide-toLeft'
    },
    spaceBetween: 20,
    loop:true,
    breakpoints: {
        360:{
            slidesPerView: 1.4,
        },
        480:{
            slidesPerView: 1.6,
            allowTouchMove: true,
        },
        1000: {
            slidesPerView: 1.7,
        },
        1100: {
            slidesPerView: 1.9,
        },
        1200: {
            allowTouchMove: false,
            slidesPerView: 2,
        }
        },
})


new Swiper('.homepage_section8_sliders', {
    navigation: {
        nextEl: '#slide-toRightWhite',
        prevEl: '#slide-toLeftWhite'
    },
    //курсор перетаскивания
    grabCursor:true,
    //переключение при клике на слайд
    slideToClickedSlide:true,
    //переключение цикла
    loop:true,
    keyboard:{
        enabled:true,
        onlyInViewport: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    },
    pagination:{
        el:'.homepage_section8__swiper-pagination',
        type:'fraction',
    },
})

new Swiper('.catalog_third_level_slider', {

    slidesPerView: 1, // показывать по 1 изображению
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    spaceBetween: 12,
    navigation: { // задаем кнопки навигации
        nextEl: '#catalog_slide_toright', // кнопка Next
        prevEl: '#catalog_slide_toleft' // кнопка Prev
    },
    thumbs: {
        swiper: {
            el: '.products_img_slider_col1-mini',
            mousewheel: true, // можно прокручивать изображения колёсиком мыши
            direction: 'vertical', // вертикальная прокрутка
            slidesPerView: 4,
            spaceBetween: 12,
        },
    },
    breakpoints: {
        480: {
            direction: 'vertical', // вертикальная прокрутка
        },
    },

})

new Swiper('.catalog_third_leve-slider', {
    navigation: {
        nextEl: '#catalog_third_level_Right',
        prevEl: '#catalog_third_level_left'
    },
    // loop:true,
    // slidesPerView: 4,
    breakpoints: {
        360:{
            slidesPerView:1,
        },
        480: {
            spaceBetween: 20,
            slidesPerView:4,
        },
    },

})

new Swiper('.imghistory_mobile', {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 13,
})





const player = new Plyr('#player');
