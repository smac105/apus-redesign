function myFunction() {
    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}
var APUSGLOBAL = {},
    vid, pauseButton, a, win, allMods, navbar, sticky;
APUSGLOBAL.init = function() {
    $(window).scroll(function() {
        APUSGLOBAL.checkPos($(this))
    })
};
APUSGLOBAL.checkPos = function(n) {
    var t = n.scrollTop();
    t >= 75 ? ($(".sm-logo-main").addClass("vis"), $(".main-logo").addClass("vis"), $(".main-logo-hidden").addClass("vis"), $(".search-icon").addClass("vis"), $(".navbar-collapse").addClass("vis"), $(".donate").addClass("vis"), $(".mini-nav-wrap").addClass("vis"), $(".logo-mini-nav").addClass("vis"), $(".site-header").addClass("vis"), $(".nav-link a").addClass("vis"), $(".navbar-toggler").addClass("vis"), $(".bar").addClass("vis")) : ($(".sm-logo-main").removeClass("vis"), $(".main-logo").removeClass("vis"), $(".main-logo-hidden").removeClass("vis"), $(".search-icon").removeClass("vis"), $(".navbar-collapse").removeClass("vis"), $(".donate").removeClass("vis"), $(".mini-nav-wrap").removeClass("vis"), $(".logo-mini-nav").removeClass("vis"), $(".site-header").removeClass("vis"), $(".nav-link a").removeClass("vis"), $(".navbar-toggler").removeClass("vis"), $(".bar").removeClass("vis"))
};
$(document).ready(function() {
    APUSGLOBAL.init()
});
vid = document.getElementById("bgvid");
pauseButton = document.getElementById("vidpause");
window.matchMedia("(prefers-reduced-motion)").matches && (vid.removeAttribute("autoplay"), vid.pause(), pauseButton.innerHTML = "Paused");
$(document).ready(function() {
    $(".search-icon").click(function() {
        $(".dynamic-search").toggleClass("active")
    })
});
a = 0;
$(window).scroll(function() {
        var n = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > n) {
            $(".counter-value").each(function() {
                var t = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                $(this).prop("Counter", 0).animate({
                    Counter: $(this).attr("data-count")
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function(i) {
                        $(this).text(n(parseFloat(i).toFixed(t)))
                    }
                })
            });

            function n(n) {
                while (/(\d+)(\d{3})/.test(n.toString())) n = n.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                return n
            }
            a = 1
        }
    }),
    function(n) {
        n.fn.visible = function(t) {
            var r = n(this),
                u = n(window),
                f = u.scrollTop(),
                o = f + u.height(),
                i = r.offset().top,
                e = i + r.height(),
                s = t === !0 ? e : i,
                h = t === !0 ? i : e;
            return h <= o && s >= f
        }
    }(jQuery);
$(window).scroll(function() {
    $(".vertical").each(function(n, t) {
        var t = $(t);
        t.visible(!0) && t.addClass("slide-in")
    })
});
win = $(window);
allMods = $(".vertical");
allMods.each(function(n, t) {
    var t = $(t);
    t.visible(!0) && t.addClass("already-visible")
});
win.scroll(function() {
    allMods.each(function(n, t) {
        var t = $(t);
        t.visible(!0) && t.addClass("slide-in")
    })
});
$(window).scroll(function() {
    $(".horizontal").each(function(n, t) {
        var t = $(t);
        t.visible(!0) && t.addClass("slide-in-sideways")
    })
});
win = $(window);
allMods = $(".horizontal");
allMods.each(function(n, t) {
    var t = $(t);
    t.visible(!0) && t.addClass("already-visible-horizontal")
});
win.scroll(function() {
    allMods.each(function(n, t) {
        var t = $(t);
        t.visible(!0) && t.addClass("slide-in-sideways")
    })
});
window.onscroll = function() {
    myFunction()
};
navbar = document.getElementById("stickynavbar");
sticky = navbar.offsetTop;
$(document).on("click", function(n) {
    var t = $("#apusglobal-navbar-collapse"),
        i = $("#apusglobal-navbar-collapse-button");
    t.is(n.target) || t.has(n.target).length !== 0 || i.is(n.target) || i.has(n.target).length !== 0 || !t.hasClass("show") || t.collapse("hide")
});
const header = document.querySelector(".site-header"),
    dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownToggle.addEventListener("mouseover", () => {
    header.classList.add("vis")
});
dropdownToggle.addEventListener("mouseout", () => {
    header.classList.remove("vis")
});