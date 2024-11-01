"use strict";
!(function (a) {
  function t(t) {
    var i = a(a(t).parents(".imgfix_wrapper_layer")[0]),
      s = a(i.parents(".imgfix_top_container")[0]),
      r = a(t).width(),
      f = a(t).height(),
      l = i.width(),
      d = i.height(),
      n = l / r,
      o = r * n,
      u = f * n;
    s.data("fix-fixin")
      ? u > d && ((n = d / f), (o = r * n), (u = f * n))
      : d > u && ((n = d / f), (o = r * n), (u = f * n));
    var x = i[0].id;
    a("#imgfix_img_style_for_" + x).remove();
    var c = "";
    (null != s.data("fix-defaults-grayscale") ||
      null != s.data("fix-defaults-sepia") ||
      null != s.data("fix-defaults-hue") ||
      null != s.data("fix-defaults-saturate") ||
      null != s.data("fix-defaults-invert") ||
      null != s.data("fix-defaults-brightness") ||
      null != s.data("fix-defaults-contrast") ||
      null != s.data("fix-defaults-blur")) &&
      ((c =
        null != s.data("fix-defaults-grayscale")
          ? "grayscale(" + parseInt(s.data("fix-defaults-grayscale")) + "%) "
          : ""),
      (c +=
        null != s.data("fix-defaults-sepia")
          ? "sepia(" + parseInt(s.data("fix-defaults-sepia")) + "%) "
          : ""),
      (c +=
        null != s.data("fix-defaults-hue")
          ? "hue-rotate(" + parseInt(s.data("fix-defaults-hue")) + "deg) "
          : ""),
      (c +=
        null != s.data("fix-defaults-saturate")
          ? "saturate(" + parseInt(s.data("fix-defaults-saturate")) + "deg) "
          : ""),
      (c +=
        null != s.data("fix-defaults-invert")
          ? "invert(" + parseInt(s.data("fix-defaults-invert")) + "%) "
          : ""),
      (c +=
        null != s.data("fix-defaults-brightness")
          ? "brightness(" + parseInt(s.data("fix-defaults-brightness")) + "%) "
          : ""),
      (c +=
        null != s.data("fix-defaults-contrast")
          ? "contrast(" + parseInt(s.data("fix-defaults-contrast")) + "%) "
          : ""),
      (c +=
        null != s.data("fix-defaults-blur")
          ? "blur(" + parseInt(s.data("fix-defaults-blur")) + "px) "
          : "")),
      c && (c = "filter: " + c + "; -webkit-filter: " + c + ";");
    var p = "";
    (null != s.data("fix-grayscale") ||
      null != s.data("fix-sepia") ||
      null != s.data("fix-hue") ||
      null != s.data("fix-saturate") ||
      null != s.data("fix-invert") ||
      null != s.data("fix-brightness") ||
      null != s.data("fix-contrast") ||
      null != s.data("fix-blur")) &&
      ((p =
        null != s.data("fix-grayscale")
          ? "grayscale(" + parseInt(s.data("fix-grayscale")) + "%) "
          : null != s.data("fix-defaults-grayscale")
          ? "grayscale(" + parseInt(s.data("fix-defaults-grayscale")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-sepia")
          ? "sepia(" + parseInt(s.data("fix-sepia")) + "%) "
          : null != s.data("fix-defaults-sepia")
          ? "sepia(" + parseInt(s.data("fix-defaults-sepia")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-hue")
          ? "hue-rotate(" + parseInt(s.data("fix-hue")) + "deg) "
          : null != s.data("fix-defaults-hue")
          ? "hue-rotate(" + parseInt(s.data("fix-defaults-hue")) + "deg) "
          : ""),
      (p +=
        null != s.data("fix-saturate")
          ? "saturate(" + parseInt(s.data("fix-saturate")) + "%) "
          : null != s.data("fix-defaults-saturate")
          ? "saturate(" + parseInt(s.data("fix-defaults-saturate")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-invert")
          ? "invert(" + parseInt(s.data("fix-invert")) + "%) "
          : null != s.data("fix-defaults-invert")
          ? "invert(" + parseInt(s.data("fix-defaults-invert")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-brightness")
          ? "brightness(" + parseInt(s.data("fix-brightness")) + "%) "
          : null != s.data("fix-defaults-brightness")
          ? "brightness(" + parseInt(s.data("fix-defaults-brightness")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-contrast")
          ? "contrast(" + parseInt(s.data("fix-contrast")) + "%) "
          : null != s.data("fix-defaults-contrast")
          ? "contrast(" + parseInt(s.data("fix-defaults-contrast")) + "%) "
          : ""),
      (p +=
        null != s.data("fix-blur")
          ? "blur(" + parseInt(s.data("fix-blur")) + "px) "
          : null != s.data("fix-defaults-blur")
          ? "blur(" + parseInt(s.data("fix-defaults-blur")) + "px) "
          : "")),
      p &&
        (p =
          "filter: " +
          p +
          " !important; -webkit-filter: " +
          p +
          " !important;"),
      a("head").append(
        '<style id="imgfix_img_style_for_' +
          x +
          '">#' +
          x +
          " .imgfix_src_img{left: -999999px;right: -999999px;top: -999999px;bottom: -999999px;z-index: 0;width: " +
          parseInt(o + 1) +
          "px;height: " +
          parseInt(u + 1) +
          "px;max-width: auto !important; min-width: auto !important;position: absolute;margin: auto;-webkit-transition: all " +
          parseInt(s.data("fix-interval")) / 1e3 +
          "s " +
          s.data("fix-easing") +
          " ;transition: all " +
          parseInt(s.data("fix-interval")) / 1e3 +
          "s " +
          s.data("fix-easing") +
          ";-webkit-transform: scale(" +
          s.data("fix-defaults-scale") +
          ");-ms-transform: scale(" +
          s.data("fix-defaults-scale") +
          ");transform: scale(" +
          s.data("fix-defaults-scale") +
          ");" +
          c +
          "}#" +
          x +
          ":hover .imgfix_src_img{-webkit-transform: scale(" +
          s.data("fix-scale") +
          ");-ms-transform: scale(" +
          s.data("fix-scale") +
          ");transform: scale(" +
          s.data("fix-scale") +
          ");" +
          p +
          "}</style>"
      ),
      e(t);
  }
  function e(t) {
    setTimeout(function () {
      a(t).css({ opacity: a(t).data("fix-img-default-opacity") });
    }, 1);
  }
  function i(t, e) {
    a("#imgfix_cover_slide_for_" + e).remove();
    var i = a(t).parents(".imgfix_top_container")[0];
    a(i).off();
    var r = t.data("slide");
    switch ((s(t), r)) {
      case "in-up":
      case "in-right":
      case "in-down":
      case "in-left":
      case "out-up":
      case "out-right":
      case "out-down":
      case "out-left":
        t.addClass("imgfix-" + r);
        break;
      case "dynamic":
        t.addClass("imgfix-in-up"),
          a(i).on("mouseenter", t, function (t) {
            var e = t.data.parents(".imgfix_wrapper_layer")[0].id.split("_")[3],
              i = a(l.family[e].element);
            a(this)
              .find(".imgfix_cover_wrapper")
              .removeClass("imgfix-in-up-right"),
              a(this)
                .find(".imgfix_cover_wrapper")
                .removeClass("imgfix-in-up-left"),
              a(this)
                .find(".imgfix_cover_wrapper")
                .removeClass("imgfix-in-down-right"),
              a(this)
                .find(".imgfix_cover_wrapper")
                .removeClass("imgfix-in-down-left");
            for (var r = 0; r < i.length; r++) {
              var f = i[r];
              if (f != this) {
                var d = "";
                a(f).offset().top > a(this).offset().top
                  ? (d = "down")
                  : a(f).offset().top < a(this).offset().top
                  ? (d = "up")
                  : a(f).offset().left < a(this).offset().left
                  ? (d = "right")
                  : a(f).offset().left > a(this).offset().left && (d = "left"),
                  a(f).offset().top < a(this).offset().top &&
                  a(f).offset().left < a(this).offset().left
                    ? (d = "down-right")
                    : a(f).offset().top > a(this).offset().top &&
                      a(f).offset().left < a(this).offset().left &&
                      (d = "up-right"),
                  a(f).offset().top < a(this).offset().top &&
                  a(f).offset().left > a(this).offset().left
                    ? (d = "down-left")
                    : a(f).offset().top > a(this).offset().top &&
                      a(f).offset().left > a(this).offset().left &&
                      (d = "up-left"),
                  a(f)
                    .find(".imgfix_cover_wrapper")
                    .addClass("imgfix-in-" + d),
                  s(a(f).find(".imgfix_cover_wrapper"), "imgfix-in-" + d);
              }
            }
          }),
          a(i).on("mouseleave", t, function (t) {
            var e = t.data.parents(".imgfix_wrapper_layer")[0].id.split("_")[3],
              i = a(l.family[e].element);
            if (!i.find(":hover").length) {
              var r =
                  void 0 == t.offsetX
                    ? t.pageX - a(this).offset().left
                    : t.offsetX,
                f =
                  void 0 == t.offsetY
                    ? t.pageY - a(this).offset().top
                    : t.offsetY,
                d = "";
              (d =
                f < 0.1 * t.data.height()
                  ? "down"
                  : f > 0.9 * t.data.height()
                  ? "up"
                  : r < 0.1 * t.data.width()
                  ? "left"
                  : "right"),
                t.data.addClass("imgfix-in-" + d),
                s(t.data, "imgfix-in-" + d);
            }
          });
        break;
      default:
        return;
    }
    a("head").append(
      '<style id="imgfix_cover_slide_for_' +
        e +
        '">#' +
        e +
        " .imgfix_cover_wrapper.imgfix-in-up{left: 0;top: 100%;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-right{left: 100%;top: 0;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-down{left: 0;top: -100%;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-left{left: -100%;top: 0;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-up-left{left: -100%;top: -100%;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-up-right{left: 100%;top: -100%;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-down-left{left: -100%;top: 100%;visibility: hidden;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-in-down-right{left: 100%;top: 100%;visibility: hidden;}#" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-in-up, #" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-in-right, #" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-in-down, #" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-in-left{left: 0;top: 0;visibility: visible;}#" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-out-up{left: 0;top: -100%;}#" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-out-right{left: 100%;top: 0;}#" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-out-down{left: 0;top: 100%;}#" +
        e +
        ":hover .imgfix_cover_wrapper.imgfix-out-left{left: -100%;top: 0;}#" +
        e +
        " .imgfix_cover_wrapper.imgfix-out-up, #" +
        e +
        " .imgfix_cover_wrapper.imgfix-out-right, #" +
        e +
        " .imgfix_cover_wrapper.imgfix-out-down, #" +
        e +
        " .imgfix_cover_wrapper.imgfix-out-left{left: 0;top: 0;}</style>"
    );
  }
  function s(a, t) {
    "imgfix-in-up" != t && a.removeClass("imgfix-in-up"),
      "imgfix-in-right" != t && a.removeClass("imgfix-in-right"),
      "imgfix-in-down" != t && a.removeClass("imgfix-in-down"),
      "imgfix-in-left" != t && a.removeClass("imgfix-in-left"),
      "imgfix-in-up-left" != t && a.removeClass("imgfix-in-up-left"),
      "imgfix-in-up-right" != t && a.removeClass("imgfix-in-up-right"),
      "imgfix-in-down-left" != t && a.removeClass("imgfix-in-down-left"),
      "imgfix-in-down-right" != t && a.removeClass("imgfix-in-down-right"),
      a.removeClass("imgfix-out-up"),
      a.removeClass("imgfix-out-right"),
      a.removeClass("imgfix-out-down"),
      a.removeClass("imgfix-out-left");
  }
  function r(t, e) {
    a("#imgfix_cover_fade_for_" + e).remove();
    var i = t.data("fade"),
      s = new Object();
    switch (i) {
      case "in":
        s = { from: { opacity: 0 }, to: { opacity: 1 } };
        break;
      case "out":
        s = { from: { opacity: 1 }, to: { opacity: 0 } };
        break;
      default:
        return;
    }
    a("head").append(
      '<style id="imgfix_cover_fade_for_' +
        e +
        '">#' +
        e +
        " .imgfix_cover_wrapper{opacity: " +
        s.from.opacity +
        ';-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=' +
        100 * s.from.opacity +
        ')";filter: alpha(opacity=' +
        100 * s.from.opacity +
        ");}#" +
        e +
        ":hover .imgfix_cover_wrapper{opacity: " +
        s.to.opacity +
        ';-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=' +
        100 * s.to.opacity +
        ')";filter: alpha(opacity=' +
        100 * s.to.opacity +
        ");}</style>"
    );
  }
  function f(t, e) {
    a("#imgfix_cover_scale_for_" + e).remove();
    var i = t.data("scale"),
      s = new Object();
    switch (i) {
      case "in":
        s = { from: { scale: 0 }, to: { scale: 1 } };
        break;
      case "out":
        s = { from: { scale: 1 }, to: { scale: 0 } };
        break;
      default:
        return;
    }
    a("head").append(
      '<style id="imgfix_cover_scale_for_' +
        e +
        '">#' +
        e +
        " .imgfix_cover_wrapper{-webkit-transform: scale(" +
        s.from.scale +
        ");-ms-transform: scale(" +
        s.from.scale +
        ");transform: scale(" +
        s.from.scale +
        ");}#" +
        e +
        ":hover .imgfix_cover_wrapper{-webkit-transform: scale(" +
        s.to.scale +
        ");-ms-transform: scale(" +
        s.to.scale +
        ");transform: scale(" +
        s.to.scale +
        ");}</style>"
    );
  }
  var l = {
    family: new Array(),
    init: function (e, s) {
      var l = e.parameters ? e.parameters : new Object(),
        d = e.element;
      l.cover || (l.cover = {}),
        l.defaults || (l.defaults = {}),
        (l = {
          fixin: l.fixin ? 1 : 0,
          scale: l.scale ? l.scale : 1,
          easing: l.easing ? l.easing : "",
          interval: parseInt(l.interval) >= 0 ? l.interval : 400,
          grayscale: parseInt(l.grayscale) >= 0 ? l.grayscale : null,
          sepia: parseInt(l.sepia) >= 0 ? l.sepia : null,
          hue: parseInt(l.hue) >= 0 ? l.hue : null,
          saturate: parseInt(l.saturate) >= 0 ? l.saturate : null,
          invert: parseInt(l.invert) >= 0 ? l.invert : null,
          brightness: parseInt(l.brightness) >= 0 ? l.brightness : null,
          contrast: parseInt(l.contrast) >= 0 ? l.contrast : null,
          blur: parseInt(l.blur) >= 0 ? l.blur : null,
          defaults: {
            scale: l.defaults.scale ? l.defaults.scale : 1,
            grayscale:
              parseInt(l.defaults.grayscale) >= 0 ? l.defaults.grayscale : null,
            sepia: parseInt(l.defaults.sepia) >= 0 ? l.defaults.sepia : null,
            hue: parseInt(l.defaults.hue) >= 0 ? l.defaults.hue : null,
            saturate:
              parseInt(l.defaults.saturate) >= 0 ? l.defaults.saturate : null,
            invert: parseInt(l.defaults.invert) >= 0 ? l.defaults.invert : null,
            brightness:
              parseInt(l.defaults.brightness) >= 0
                ? l.defaults.brightness
                : null,
            contrast:
              parseInt(l.defaults.contrast) >= 0 ? l.defaults.contrast : null,
            blur: parseInt(l.defaults.blur) >= 0 ? l.defaults.blur : null,
          },
          width: l.width ? l.width : null,
          height: l.height ? l.height : null,
          protectaspectratio:
            l.protectaspectratio || l.protectAspectRatio
              ? l.protectaspectratio || l.protectAspectRatio
              : null,
          coverclass:
            l.coverclass || l.coverClass ? l.coverclass || l.coverClass : "",
          cover: {
            fade: l.cover.fade ? l.cover.fade : "none",
            slide: l.cover.slide ? l.cover.slide : "none",
            scale: l.cover.scale ? l.cover.scale : "none",
            easing: l.cover.easing ? l.cover.easing : "",
            delay: l.cover.delay ? l.cover.delay : 0,
            interval: l.cover.interval ? l.cover.interval : 400,
          },
        }),
        (e.parameters = l),
        d.css("overflow", "hidden");
      for (var n = 0; n < d.length; n++) {
        var o = a(d[n]);
        o.addClass("imgfix_top_container");
        var u = o.find("#imgfix_wrapper_layer_" + e.id + "_" + n).length
          ? 0
          : 1;
        if (s)
          null == o.data("fix-img") && o.data("fix-img", ""),
            o.data("fix-fixin", l.fixin ? l.fixin : o.data("fix-fixin")),
            o.data(
              "fix-defaults-scale",
              l.defaults.scale ? l.defaults.scale : o.data("fix-defaults-scale")
            ),
            o.data(
              "fix-defaults-grayscale",
              null != l.defaults.grayscale
                ? l.defaults.grayscale
                : o.data("fix-grayscale")
            ),
            o.data(
              "fix-defaults-sepia",
              null != l.defaults.sepia ? l.defaults.sepia : o.data("fix-sepia")
            ),
            o.data(
              "fix-defaults-hue",
              null != l.defaults.hue ? l.defaults.hue : o.data("fix-hue")
            ),
            o.data(
              "fix-defaults-saturate",
              null != l.defaults.saturate
                ? l.defaults.saturate
                : o.data("fix-saturate")
            ),
            o.data(
              "fix-defaults-invert",
              null != l.defaults.invert
                ? l.defaults.invert
                : o.data("fix-invert")
            ),
            o.data(
              "fix-defaults-brightness",
              null != l.defaults.brightness
                ? l.defaults.brightness
                : o.data("fix-brightness")
            ),
            o.data(
              "fix-defaults-contrast",
              null != l.defaults.contrast
                ? l.defaults.contrast
                : o.data("fix-contrast")
            ),
            o.data(
              "fix-defaults-blur",
              null != l.defaults.blur ? l.defaults.blur : o.data("fix-blur")
            ),
            o.data(
              "fix-scale",
              (l.scale ? l.scale : o.data("fix-scale")) *
                o.data("fix-defaults-scale")
            ),
            o.data(
              "fix-interval",
              l.interval ? l.interval : o.data("fix-interval")
            ),
            o.data(
              "fix-grayscale",
              null != l.grayscale ? l.grayscale : o.data("fix-grayscale")
            ),
            o.data(
              "fix-sepia",
              null != l.sepia ? l.sepia : o.data("fix-sepia")
            ),
            o.data("fix-hue", null != l.hue ? l.hue : o.data("fix-hue")),
            o.data(
              "fix-saturate",
              null != l.saturate ? l.saturate : o.data("fix-saturate")
            ),
            o.data(
              "fix-invert",
              null != l.invert ? l.invert : o.data("fix-invert")
            ),
            o.data(
              "fix-brightness",
              null != l.brightness ? l.brightness : o.data("fix-brightness")
            ),
            o.data(
              "fix-contrast",
              null != l.contrast ? l.contrast : o.data("fix-contrast")
            ),
            o.data("fix-blur", null != l.blur ? l.blur : o.data("fix-blur")),
            o.data("fix-width", l.width ? l.width : o.data("fix-width")),
            o.data("fix-height", l.height ? l.height : o.data("fix-height")),
            o.data(
              "fix-protect-aspect-ratio",
              l.protectaspectratio
                ? l.protectaspectratio
                : o.data("fix-protect-aspect-ratio")
            ),
            o.data("fix-easing", l.easing ? l.easing : o.data("fix-easing")),
            o.data(
              "fix-cover",
              l.coverclass ? l.coverclass : o.data("fix-cover")
            ),
            o.data(
              "fix-cover-fade",
              l.cover.fade ? l.cover.fade : o.data("fix-cover-fade")
            ),
            o.data(
              "fix-cover-slide",
              l.cover.slide ? l.cover.slide : o.data("fix-cover-slide")
            ),
            o.data(
              "fix-cover-scale",
              l.cover.scale ? l.cover.scale : o.data("fix-cover-scale")
            ),
            o.data(
              "fix-cover-easing",
              l.cover.easing ? l.cover.easing : o.data("fix-cover-easing")
            ),
            o.data(
              "fix-cover-delay",
              l.cover.delay ? l.cover.delay : o.data("fix-cover-delay")
            ),
            o.data(
              "fix-cover-interval",
              l.cover.interval ? l.cover.interval : o.data("fix-cover-interval")
            );
        else {
          if (
            (null == o.data("fix-img") && o.data("fix-img", ""),
            o.data(
              "fix-fixin",
              null == o.data("fix-fixin") ? l.fixin : o.data("fix-fixin")
            ),
            o.data(
              "fix-defaults-scale",
              null == o.data("fix-defaults-scale")
                ? l.defaults.scale
                : o.data("fix-defaults-scale")
            ),
            o.data(
              "fix-defaults-grayscale",
              null == o.data("fix-defaults-grayscale")
                ? l.defaults.grayscale
                : o.data("fix-defaults-grayscale")
            ),
            o.data(
              "fix-defaults-sepia",
              null == o.data("fix-defaults-sepia")
                ? l.defaults.sepia
                : o.data("fix-defaults-sepia")
            ),
            o.data(
              "fix-defaults-hue",
              null == o.data("fix-defaults-hue")
                ? l.defaults.hue
                : o.data("fix-defaults-hue")
            ),
            o.data(
              "fix-defaults-saturate",
              null == o.data("fix-defaults-saturate")
                ? l.defaults.saturate
                : o.data("fix-defaults-saturate")
            ),
            o.data(
              "fix-defaults-invert",
              null == o.data("fix-defaults-invert")
                ? l.defaults.invert
                : o.data("fix-defaults-invert")
            ),
            o.data(
              "fix-defaults-brightness",
              null == o.data("fix-defaults-brightness")
                ? l.defaults.brightness
                : o.data("fix-defaults-brightness")
            ),
            o.data(
              "fix-defaults-contrast",
              null == o.data("fix-defaults-contrast")
                ? l.defaults.contrast
                : o.data("fix-defaults-contrast")
            ),
            o.data(
              "fix-defaults-blur",
              null == o.data("fix-defaults-blur")
                ? l.defaults.blur
                : o.data("fix-defaults-blur")
            ),
            o.data(
              "fix-scale",
              (null == o.data("fix-scale") ? l.scale : o.data("fix-scale")) *
                o.data("fix-defaults-scale")
            ),
            o.data(
              "fix-interval",
              null == o.data("fix-interval")
                ? l.interval
                : o.data("fix-interval")
            ),
            o.data(
              "fix-grayscale",
              null == o.data("fix-grayscale")
                ? l.grayscale
                : o.data("fix-grayscale")
            ),
            o.data(
              "fix-sepia",
              null == o.data("fix-sepia") ? l.sepia : o.data("fix-sepia")
            ),
            o.data(
              "fix-hue",
              null == o.data("fix-hue") ? l.hue : o.data("fix-hue")
            ),
            o.data(
              "fix-saturate",
              null == o.data("fix-saturate")
                ? l.saturate
                : o.data("fix-saturate")
            ),
            o.data(
              "fix-invert",
              null == o.data("fix-invert") ? l.invert : o.data("fix-invert")
            ),
            o.data(
              "fix-brightness",
              null == o.data("fix-brightness")
                ? l.brightness
                : o.data("fix-brightness")
            ),
            o.data(
              "fix-contrast",
              null == o.data("fix-contrast")
                ? l.contrast
                : o.data("fix-contrast")
            ),
            o.data(
              "fix-blur",
              null == o.data("fix-blur") ? l.blur : o.data("fix-blur")
            ),
            o.data(
              "fix-width",
              null == o.data("fix-width") ? l.width : o.data("fix-width")
            ),
            o.data(
              "fix-height",
              null == o.data("fix-height") ? l.height : o.data("fix-height")
            ),
            o.data(
              "fix-protect-aspect-ratio",
              null == o.data("fix-protect-aspect-ratio")
                ? l.protectaspectratio
                : o.data("fix-protect-aspect-ratio")
            ),
            o.data(
              "fix-easing",
              null == o.data("fix-easing") ? l.easing : o.data("fix-easing")
            ),
            o.data(
              "fix-cover",
              null == o.data("fix-cover") ? l.coverclass : o.data("fix-cover")
            ),
            o.data(
              "fix-cover-fade",
              null == o.data("fix-cover-fade")
                ? l.cover.fade
                : o.data("fix-cover-fade")
            ),
            o.data(
              "fix-cover-slide",
              null == o.data("fix-cover-slide")
                ? l.cover.slide
                : o.data("fix-cover-slide")
            ),
            o.data(
              "fix-cover-scale",
              null == o.data("fix-cover-scale")
                ? l.cover.scale
                : o.data("fix-cover-scale")
            ),
            o.data(
              "fix-cover-easing",
              null == o.data("fix-cover-easing")
                ? l.cover.easing
                : o.data("fix-cover-easing")
            ),
            o.data(
              "fix-cover-delay",
              null == o.data("fix-cover-delay")
                ? l.cover.delay
                : o.data("fix-cover-delay")
            ),
            o.data(
              "fix-cover-interval",
              null == o.data("fix-cover-interval")
                ? l.cover.interval
                : o.data("fix-cover-interval")
            ),
            o.data("fix-width") && o.width(o.data("fix-width")),
            o.data("fix-height"))
          ) {
            var x = o.data("fix-height");
            x.split("%").length > 1 &&
              ((x = parseFloat(x.split("%")[0])),
              (x = x ? (o.width() * x) / 100 : 0)),
              o.height(x);
          }
          if (o.data("fix-protect-aspect-ratio"))
            if (o.data("fix-aspect-ratio"))
              o.height(o.width() * o.data("fix-aspect-ratio"));
            else {
              var x = o.height(),
                c = o.width(),
                p = c ? x / c : 0;
              o.data("fix-aspect-ratio", p);
            }
        }
        if (
          ("static" == o.css("position") && o.css("position", "relative"), u)
        ) {
          0 == o.find("img").length
            ? o.append(
                '<img class="imgfix_src_img" src="' + o.data("fix-img") + '" />'
              )
            : a(o.find("img")[0]).addClass("imgfix_src_img");
          for (var g = o.find("img"), v = 0; v < g.length; v++)
            a(g[v]).data("fix-img-default-opacity", a(g[v]).css("opacity"));
          o.find("img").css("opacity", 0);
        }
        if (
          (u &&
            o.wrapInner(
              '<div id="imgfix_wrapper_layer_' +
                e.id +
                "_" +
                n +
                '" class="imgfix_wrapper_layer" style="position: relative; padding: 0; margin: 0; width: 100%; height: 100%; overflow: hidden;"></div>'
            ),
          t(
            a("#imgfix_wrapper_layer_" + e.id + "_" + n + " .imgfix_src_img")[0]
          ),
          u &&
            a(
              "#imgfix_wrapper_layer_" + e.id + "_" + n + " .imgfix_src_img"
            ).load(function () {
              t(this);
            }),
          o.data("fix-cover"))
        ) {
          var h;
          (h =
            o.data("fix-cover").split(".").length > 1 ||
            o.data("fix-cover").split("#").length > 1
              ? o.data("fix-cover")
              : "." + o.data("fix-cover")),
            u && o.find(h).wrap('<div class="imgfix_cover_wrapper"></div>');
          var m = o.find(".imgfix_cover_wrapper");
          m.css({
            width: a(o.find(".imgfix_wrapper_layer")[0]).width() + "px",
            height: a(o.find(".imgfix_wrapper_layer")[0]).height() + "px",
          }),
            m.data("slide", o.data("fix-cover-slide")),
            m.data("fade", o.data("fix-cover-fade")),
            m.data("scale", o.data("fix-cover-scale")),
            m.data("easing", o.data("fix-cover-easing")),
            m.data("delay", o.data("fix-cover-delay")),
            m.data("interval", o.data("fix-cover-interval"));
          var _ = m.parents(".imgfix_wrapper_layer")[0].id;
          a("#imgfix_cover_transitions_for_" + _).remove(),
            "none" != m.data("slide") ||
            "none" != m.data("fade") ||
            "none" != m.data("scale")
              ? (a("head").append(
                  '<style id="imgfix_cover_transitions_for_' +
                    _ +
                    '">#' +
                    _ +
                    " .imgfix_cover_wrapper{position: absolute; z-index: 1;-webkit-transition: all " +
                    parseInt(m.data("interval")) / 1e3 +
                    "s " +
                    m.data("easing") +
                    " " +
                    parseInt(m.data("delay")) / 1e3 +
                    "s;transition: all " +
                    parseInt(m.data("interval")) / 1e3 +
                    "s " +
                    m.data("easing") +
                    " " +
                    parseInt(m.data("delay")) / 1e3 +
                    "s;}</style>"
                ),
                i(m, _),
                r(m, _),
                f(m, _))
              : a("head").append(
                  '<style id="imgfix_cover_transitions_for_' +
                    _ +
                    '">#' +
                    _ +
                    " .imgfix_cover_wrapper{position: absolute; z-index: 1;}</style>"
                );
        }
      }
    },
  };
  (a.fn.imgfix = function (t) {
    for (var e = -1, i = !1, s = 0; s < l.family.length; s++) {
      var r = !0;
      for (var f in this) this[f] != l.family[s].element[f] && (r = !1);
      if (r) {
        (e = s), (i = !0);
        break;
      }
    }
    0 > e && (l.family.push(new Object()), (e = l.family.length - 1)),
      (l.family[e] = { id: e, element: this, parameters: t }),
      l.init(l.family[e], i),
      a(window).resize(function () {
        l.init(l.family[e], !0);
      });
  }),
    (a.fn.imgfixRefresh = function () {
      for (
        var t = a(this).find(".imgfix_wrapper_layer"), e = new Array(), i = 0;
        i < t.length;
        i++
      ) {
        var s = t[i].id.split("_")[3];
        e[s] = !0;
      }
      for (var r in e) l.init(l.family[r]);
    });
})(jQuery);
