
// 1. проверяем checkbox и устанавливаем флажок
let checkBox = document.getElementsByClassName('gallery__exemple__checkbox');
function checkBoxChecked (checkBox) {
    for(let check of checkBox) {
        check.addEventListener("change", function (){
            let labelElem = check.parentElement
            if(check.checked) {
                labelElem.classList.add('gallery__exemple__label__check')
            }
            else {
                labelElem.classList.remove('gallery__exemple__label__check')
            }
        })
    }
}
checkBoxChecked(checkBox);