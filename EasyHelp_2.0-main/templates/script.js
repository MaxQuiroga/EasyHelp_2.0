// JavaScript (en un archivo separado o dentro de la etiqueta <script>)
const showcase = document.querySelector('.showcase');
const items = document.querySelectorAll('.item');
let currentIdx = 0;

showcase.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentIdx < items.length - 1) {
        currentIdx++;
    } else if (event.deltaY < 0 && currentIdx > 0) {
        currentIdx--;
    }

    const itemHeight = items[0].offsetHeight;
    showcase.style.transform = `translateY(-${currentIdx * itemHeight}px)`;
});
