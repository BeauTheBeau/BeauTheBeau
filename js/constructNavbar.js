// google fonts for icons

const nav__items = {
    home: {
        name: "Home",
        link: "index.html",
        icon: "Home"
    },

    portfolio: {
        name: "Portfolio",
        link: "portfolio.html",
        icon: "list_alt"
    },

    github: {
        name: "Github",
        link: "https://github.com/beauthebeau",
        icon: "code"
    }

}

function constructNavbar() {
    const tab__bar = document.getElementById("tab__bar");
    const tab__bar__items = document.getElementById("tab__bar__items");

    for (let item in nav__items) {
        let tab__item = document.createElement("li");
        tab__item.classList.add("tab__bar__item");
        tab__item.id = item;
        tab__item.innerHTML = `
            <a href="${nav__items[item].link}" class="tab__bar__link">
                <i class="material-symbols-outlined">${nav__items[item].icon}</i>
                <span class="tab__bar__text">${nav__items[item].name}</span>
            </a>
        `;
        tab__bar__items.appendChild(tab__item);
    }

    tab__bar.appendChild(tab__bar__items);
}

constructNavbar();