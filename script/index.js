// добовление text-aligh где надо (.el)
let elList = document.querySelectorAll(`.el`);

for (let i = 0; i < elList.length; i++) {
    let el = elList[i];
    el.classList.add(`t-alig-c`);
}