document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CURRENT YEAR
    // =========================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =========================
    // DARK / NIGHT MODE
    // =========================

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        document.getElementById("themeIcon");

    const savedTheme =
        localStorage.getItem("jeel-theme");


    // Load saved theme
    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeIcon) {
            themeIcon.classList.remove("bi-moon-fill");
            themeIcon.classList.add("bi-sun-fill");
        }

    }


    // Theme button
    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");


            if (isDark) {

                localStorage.setItem(
                    "jeel-theme",
                    "dark"
                );

                if (themeIcon) {
                    themeIcon.classList.remove(
                        "bi-moon-fill"
                    );

                    themeIcon.classList.add(
                        "bi-sun-fill"
                    );
                }

            } else {

                localStorage.setItem(
                    "jeel-theme",
                    "light"
                );

                if (themeIcon) {
                    themeIcon.classList.remove(
                        "bi-sun-fill"
                    );

                    themeIcon.classList.add(
                        "bi-moon-fill"
                    );
                }

            }

        });

    }


    // =========================
    // MOBILE NAVBAR
    // =========================

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbar =
                document.querySelector(".navbar-collapse");


            if (
                navbar &&
                navbar.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbar
                    );


                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    // =========================
    // NAVBAR SCROLL EFFECT
    // =========================

    const navbar =
        document.getElementById("navbar");


    function navbarScroll() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        navbarScroll
    );


    navbarScroll();


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function activeNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const target =
                link.getAttribute("href");


            if (
                target ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        activeNavigation
    );


    activeNavigation();

});