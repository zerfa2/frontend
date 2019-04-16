//@prepros-append main.js
//@prepros-append maps.js
"use strict";
!function () {
  function e() {
    $("#responsive-nav ul").toggleClass("active"), $("#menu-open").toggleClass("glyphicon-menu-hamburger");
  }var a = !1;$("#sticky-navigation").removeClass("hidden"), $("#sticky-navigation").slideUp(0);var o,
      t,
      i = 0;setInterval(function () {
    console.log("eiiii"), i < 4 ? i++ : i = 0, $("#gallery .inner").css({ left: "-" + 100 * i + "%" });
  }, 5e3), $(window).scroll(function () {
    var e,
        o = (e = $("#description").height(), $(window).scrollTop() > $(window).height() - e);o && !a && (console.log("cambiar navegacion"), a = !0, $("#description").addClass("fixed").removeClass("absolute"), $("#navegation").slideUp(), $("#sticky-navigation").slideDown()), !o && a && (a = !1, console.log("no cambiar navegacion"), $("#description").removeClass("fixed").addClass("absolute"), $("#navegation").slideDown("fast"), $("#sticky-navigation").slideUp());
  }), $("#contact-form").on("submit", function (e) {
    !function (e) {
      e.preventDefault();var o = new FormData($("#contact-form")[0]);$.ajax({ url: "https://getform.io/f/1eebcd57-6e5e-4cb6-bc93-45f8e5ac1cfb", crossDomain: !0, method: "POST", data: o, dataType: "json", processData: !1, contentType: !1, success: function success(e) {
          console.log("si"), "success" == e.status ? alert("Recibimos tu envío, ¡gracias!") : alert("Ocurrió un error.");
        }, error: function error(e) {
          "200" == e.status ? ($("#form-active1").val(""), $("#form-active2").val(""), $("#form-active3").val(""), $(".font-form").html("Recibimos tu mensaje, muy pronto nos pondremos en contacto.¡gracias!")) : alert("Ocurrió un error.");
        } });
    }(e);
  }), $("#form-active1").on("click keyup", function (e) {
    console.log(), $(".hove2.active").removeClass("active"), $(".hove3.active").removeClass("active"), $(".hove1").addClass("active");
  }), $("#form-active2").on("keyup click", function (e) {
    e.target;$(".hove1.active").removeClass("active"), $(".hove3.active").removeClass("active"), $(".hove2").addClass("active");
  }), $("#form-active3").on("keyup click", function (e) {
    e.target;$(".hove1.active").removeClass("active"), $(".hove2.active").removeClass("active"), $(".hove3").addClass("active");
  }), $("#menu-open").on("click", e), $(".menu-link").on("click", e), o = new Date(), t = o.getHours(), console.log(o), (17 < t || t < 9) && $("#is-open .text").html("Cerrado ahora <br>Abierto de 9am a 5pm"), console.log(t);
}();
"use strict";function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}var _createClass = function () {
  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }return function (t, e, n) {
    return e && a(t.prototype, e), n && a(t, n), t;
  };
}();$(function () {
  var e = function () {
    function t() {
      _classCallCheck(this, t);
    }return _createClass(t, null, [{ key: "get", value: function value(e) {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (t) {
          e({ lat: t.coords.latitude, lng: t.coords.longitude });
        }) : alert("No pudimos detectar el lugar en el que te encuentras.");
      } }]), t;
  }(),
      a = { lat: -11.5607123, lng: -77.2707498 };google.maps.event.addDomListener(window, "load", function () {
    var t = new google.maps.Map(document.getElementById("map"), { center: a, zoom: 15 });new google.maps.Marker({ map: t, position: a, title: "Restaurante Food", visible: !0 });e.get(function (t) {
      var e = new google.maps.LatLng(t.lat, t.lng),
          n = new google.maps.LatLng(a.lat, a.lng);new google.maps.DistanceMatrixService().getDistanceMatrix({ origins: [e], destinations: [n], travelMode: google.maps.TravelMode.DRIVING }, function (t, e) {
        if (e === google.maps.DistanceMatrixStatus.OK) {
          var n = t.rows[0].elements[0];console.log(n);var a = n.duration.text;n.distance.text;document.querySelector("#message").innerHTML = "\n\t\t\t\t\t\t\tEstas a " + a + ' de una noche inolvidable en \n\t\t\t\t\t\t\t<span class="dancing-script medium">\n\t\t\t\t\t\t\t\tRestaurante Food\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t';
        } else document.querySelector("#message").innerHTML = '\n\t\t\t\t\t\t\tUna noche inolvidable en \n\t\t\t\t\t\t\t<span class="dancing-script medium">\n\t\t\t\t\t\t\t\tRestaurante Food\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t';console.log(e);
      });
    });
  });
});