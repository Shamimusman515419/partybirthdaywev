var navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function () {
    if (this.window.scrollY < 100) {
        navbar.classList.remove('acctivenavber')
    }
    if (this.window.scrollY > 100) {
        navbar.classList.add('acctivenavber')

    }
}
)


