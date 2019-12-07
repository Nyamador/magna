/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static_src/theme.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static_src/theme.js":
/*!*****************************!*\
  !*** ./static_src/theme.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector, e.closest = e.closest || function (e) {
    return this ? this.matches(e) ? this : this.parentElement ? this.parentElement.closest(e) : null : null;
  };
}(Element.prototype);

var demoMode = function () {
  var e,
      t,
      a,
      o,
      l,
      n,
      r,
      s,
      c = document.querySelector("#demoForm"),
      i = document.querySelector("#topnav"),
      d = document.querySelector("#topbar"),
      u = document.querySelector("#sidebar"),
      f = document.querySelector("#sidebarSmall"),
      p = document.querySelector("#sidebarUser"),
      b = document.querySelector("#sidebarSmallUser"),
      h = document.querySelector("#sidebarSizeContainer"),
      v = document.querySelectorAll('input[name="navPosition"]'),
      m = document.querySelectorAll('[class^="container"]'),
      g = (document.querySelectorAll("#stylesheetLight, #stylesheetDark"), document.querySelector("#stylesheetLight")),
      y = document.querySelector("#stylesheetDark"),
      S = {
    colorScheme: localStorage.getItem("dashkitColorScheme") ? localStorage.getItem("dashkitColorScheme") : "light",
    navPosition: localStorage.getItem("dashkitNavPosition") ? localStorage.getItem("dashkitNavPosition") : "sidenav",
    navColor: localStorage.getItem("dashkitNavColor") ? localStorage.getItem("dashkitNavColor") : "default",
    sidebarSize: localStorage.getItem("dashkitSidebarSize") ? localStorage.getItem("dashkitSidebarSize") : "base"
  };

  function C(e) {
    "topnav" == e ? $(h).collapse("hide") : $(h).collapse("show");
  }

  function k(e) {
    e.setAttribute("style", "display: none !important");
  }

  return function () {
    for (var e = window.location.search.substring(1).split("&"), t = 0; t < e.length; t++) {
      var a = e[t].split("="),
          o = a[0],
          l = a[1];
      "colorScheme" != o && "navPosition" != o && "navColor" != o && "sidebarSize" != o || (localStorage.setItem("dashkit" + o.charAt(0).toUpperCase() + o.slice(1), l), S[o] = l);
    }
  }(), "light" == (e = S.colorScheme) ? (g.disabled = !1, y.disabled = !0, e = "light") : "dark" == e && (g.disabled = !0, y.disabled = !1, e = "dark"), function (e) {
    if (i && d && u && f && p && b) if ("topnav" == e) {
      k(d), k(u), k(f);

      for (var t = 0; t < m.length; t++) {
        m[t].classList.remove("container-fluid"), m[t].classList.add("container");
      }
    } else if ("combo" == e) {
      k(i), k(p), k(b);

      for (t = 0; t < m.length; t++) {
        m[t].classList.remove("container"), m[t].classList.add("container-fluid");
      }
    } else if ("sidenav" == e) {
      k(i), k(d);

      for (t = 0; t < m.length; t++) {
        m[t].classList.remove("container"), m[t].classList.add("container-fluid");
      }
    }
  }(S.navPosition), t = S.navColor, u && f && i && ("default" == t ? (u.classList.add("navbar-light"), f.classList.add("navbar-light"), i.classList.add("navbar-light")) : "inverted" == t ? (u.classList.add("navbar-dark"), f.classList.add("navbar-dark"), i.classList.add("navbar-dark")) : "vibrant" == t && (u.classList.add("navbar-dark", "navbar-vibrant"), f.classList.add("navbar-dark", "navbar-vibrant"), i.classList.add("navbar-dark", "navbar-vibrant"))), "base" == (a = S.sidebarSize) ? k(f) : "small" == a && k(u), o = c, l = S.colorScheme, n = S.navPosition, r = S.navColor, s = S.sidebarSize, $(o).find('[name="colorScheme"][value="' + l + '"]').closest(".btn").button("toggle"), $(o).find('[name="navPosition"][value="' + n + '"]').closest(".btn").button("toggle"), $(o).find('[name="navColor"][value="' + r + '"]').closest(".btn").button("toggle"), $(o).find('[name="sidebarSize"][value="' + s + '"]').closest(".btn").button("toggle"), C(S.navPosition), document.body.style.display = "block", c && (c.addEventListener("submit", function (e) {
    e.preventDefault(), function (e) {
      var t = e.querySelector('[name="colorScheme"]:checked').value,
          a = e.querySelector('[name="navPosition"]:checked').value,
          o = e.querySelector('[name="navColor"]:checked').value,
          l = e.querySelector('[name="sidebarSize"]:checked').value;
      localStorage.setItem("dashkitColorScheme", t), localStorage.setItem("dashkitNavPosition", a), localStorage.setItem("dashkitNavColor", o), localStorage.setItem("dashkitSidebarSize", l), window.location = window.location.pathname;
    }(c);
  }), [].forEach.call(v, function (e) {
    e.parentElement.addEventListener("click", function () {
      C(e.value);
    });
  })), !0;
}();

!function () {
  var e = {
    300: "#E3EBF6",
    600: "#95AAC9",
    700: "#6E84A3",
    800: "#152E4D",
    900: "#283E59"
  },
      t = {
    100: "#D2DDEC",
    300: "#A6C5F7",
    700: "#2C7BE5"
  },
      a = "#FFFFFF",
      o = "transparent",
      l = "Cerebri Sans",
      n = document.querySelectorAll('[data-toggle="chart"]'),
      r = document.querySelectorAll('[data-toggle="legend"]');

  function s(e) {
    var t = e.dataset.target,
        a = i(document.querySelector(t)),
        o = JSON.parse(e.dataset.add);
    e.checked ? function e(t, a) {
      for (var o in a) {
        Array.isArray(a[o]) ? a[o].forEach(function (e) {
          t[o].push(e);
        }) : e(t[o], a[o]);
      }
    }(a, o) : function e(t, a) {
      for (var o in a) {
        Array.isArray(a[o]) ? a[o].forEach(function (e) {
          t[o].pop();
        }) : e(t[o], a[o]);
      }
    }(a, o), a.update();
  }

  function c(e) {
    var t = e.dataset.target,
        a = i(document.querySelector(t)),
        o = JSON.parse(e.dataset.update),
        l = e.dataset.prefix,
        n = e.dataset.suffix;
    !function e(t, a) {
      for (var o in a) {
        "object" != _typeof(a[o]) ? t[o] = a[o] : e(t[o], a[o]);
      }
    }(a, o), (l || n) && function (e, n, r) {
      n = n || "", r = r || "", e.options.scales.yAxes[0].ticks.callback = function (e) {
        if (!(e % 10)) return n + e + r;
      }, e.options.tooltips.callbacks.label = function (e, t) {
        var a = t.datasets[e.datasetIndex].label || "",
            o = e.yLabel,
            l = "";
        return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">' + n + o + r + "</span>";
      };
    }(a, l, n), a.update();
  }

  function i(t) {
    var a = void 0;
    return Chart.helpers.each(Chart.instances, function (e) {
      t == e.chart.canvas && (a = e);
    }), a;
  }

  "undefined" != typeof Chart && (Chart.defaults.global.responsive = !0, Chart.defaults.global.maintainAspectRatio = !1, Chart.defaults.global.defaultColor = e[600], Chart.defaults.global.defaultFontColor = e[600], Chart.defaults.global.defaultFontFamily = l, Chart.defaults.global.defaultFontSize = 13, Chart.defaults.global.layout.padding = 0, Chart.defaults.global.legend.display = !1, Chart.defaults.global.legend.position = "bottom", Chart.defaults.global.legend.labels.usePointStyle = !0, Chart.defaults.global.legend.labels.padding = 16, Chart.defaults.global.elements.point.radius = 0, Chart.defaults.global.elements.point.backgroundColor = t[700], Chart.defaults.global.elements.line.tension = .4, Chart.defaults.global.elements.line.borderWidth = 3, Chart.defaults.global.elements.line.borderColor = t[700], Chart.defaults.global.elements.line.backgroundColor = o, Chart.defaults.global.elements.line.borderCapStyle = "rounded", Chart.defaults.global.elements.rectangle.backgroundColor = t[700], Chart.defaults.global.elements.arc.backgroundColor = t[700], Chart.defaults.global.elements.arc.borderColor = a, Chart.defaults.global.elements.arc.borderWidth = 4, Chart.defaults.global.elements.arc.hoverBorderColor = a, Chart.defaults.global.tooltips.enabled = !1, Chart.defaults.global.tooltips.mode = "index", Chart.defaults.global.tooltips.intersect = !1, Chart.defaults.global.tooltips.custom = function (l) {
    var e = document.getElementById("chart-tooltip");

    if (e || ((e = document.createElement("div")).setAttribute("id", "chart-tooltip"), e.setAttribute("role", "tooltip"), e.classList.add("popover"), e.classList.add("bs-popover-top"), document.body.appendChild(e)), 0 !== l.opacity) {
      if (l.body) {
        var t = l.title || [],
            n = l.body.map(function (e) {
          return e.lines;
        }),
            r = "";
        r += '<div class="arrow"></div>', t.forEach(function (e) {
          r += '<h3 class="popover-header text-center">' + e + "</h3>";
        }), n.forEach(function (e, t) {
          var a = '<span class="popover-body-indicator" style="background-color: ' + l.labelColors[t].backgroundColor + '"></span>',
              o = 1 < n.length ? "justify-content-left" : "justify-content-center";
          r += '<div class="popover-body d-flex align-items-center ' + o + '">' + a + e + "</div>";
        }), e.innerHTML = r;
      }

      var a = this._chart.canvas,
          o = a.getBoundingClientRect(),
          s = (a.offsetWidth, a.offsetHeight, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          c = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
          i = o.top + s,
          d = o.left + c,
          u = e.offsetWidth,
          f = e.offsetHeight,
          p = i + l.caretY - f - 16,
          b = d + l.caretX - u / 2;
      e.style.top = p + "px", e.style.left = b + "px", e.style.visibility = "visible";
    } else e.style.visibility = "hidden";
  }, Chart.defaults.global.tooltips.callbacks.label = function (e, t) {
    var a = t.datasets[e.datasetIndex].label || "",
        o = e.yLabel,
        l = "";
    return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">' + o + "</span>";
  }, Chart.defaults.doughnut.cutoutPercentage = 83, Chart.defaults.doughnut.tooltips.callbacks.title = function (e, t) {
    return t.labels[e[0].index];
  }, Chart.defaults.doughnut.tooltips.callbacks.label = function (e, t) {
    var a = "";
    return a += '<span class="popover-body-value">' + t.datasets[0].data[e.index] + "</span>";
  }, Chart.defaults.doughnut.legendCallback = function (e) {
    var o = e.data,
        l = "";
    return o.labels.forEach(function (e, t) {
      var a = o.datasets[0].backgroundColor[t];
      l += '<span class="chart-legend-item">', l += '<i class="chart-legend-indicator" style="background-color: ' + a + '"></i>', l += e, l += "</span>";
    }), l;
  }, Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: e[300],
      drawBorder: !1,
      drawTicks: !1,
      zeroLineColor: e[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(e) {
        if (!(e % 10)) return e;
      }
    }
  }), Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  }), n && [].forEach.call(n, function (e) {
    e.addEventListener("change", function () {
      e.dataset.add && s(e);
    }), e.addEventListener("click", function () {
      e.dataset.update && c(e);
    });
  }), r && document.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(r, function (e) {
      !function (e) {
        var t = i(e).generateLegend(),
            a = e.dataset.target;
        document.querySelector(a).innerHTML = t;
      }(e);
    });
  }));
}(), function () {
  var e = {
    300: "#E3EBF6",
    600: "#95AAC9",
    700: "#6E84A3",
    800: "#152E4D",
    900: "#283E59"
  },
      t = localStorage.getItem("dashkitColorScheme") ? localStorage.getItem("dashkitColorScheme") : "light";

  function a() {
    Chart.defaults.global.defaultColor = e[700], Chart.defaults.global.defaultFontColor = e[700], Chart.defaults.global.elements.arc.borderColor = e[800], Chart.defaults.global.elements.arc.hoverBorderColor = e[800], Chart.scaleService.updateScaleDefaults("linear", {
      gridLines: {
        borderDash: [2],
        borderDashOffset: [2],
        color: e[900],
        drawBorder: !1,
        drawTicks: !1,
        zeroLineColor: e[900],
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2]
      },
      ticks: {
        beginAtZero: !0,
        padding: 10,
        callback: function callback(e) {
          if (!(e % 10)) return e;
        }
      }
    });
  }

  "undefined" != typeof Chart && (void 0 === demoMode ? a() : demoMode && "dark" == t && a());
}(), function () {
  var e = document.querySelectorAll('[data-toggle="autosize"]');
  "undefined" != typeof autosize && e && [].forEach.call(e, function (e) {
    !function (e) {
      autosize(e);
    }(e);
  });
}(), function () {
  var e = document.getElementById("headerChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "line",
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            color: "#283E59",
            zeroLineColor: "#283E59"
          },
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return "$" + e + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("performanceChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "line",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return "$" + e + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("performanceChartAlias");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "line",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return "$" + e + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("ordersChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "bar",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return "$" + e + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("ordersChartAlias");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "bar",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return "$" + e + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("devicesChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "doughnut",
    options: {
      tooltips: {
        callbacks: {
          title: function title(e, t) {
            return t.labels[e[0].index];
          },
          label: function label(e, t) {
            var a = "";
            return a += '<span class="popover-body-value">' + t.datasets[0].data[e.index] + "%</span>";
          }
        }
      }
    },
    data: {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("weeklyHoursChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "bar",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(e) {
              if (!(e % 10)) return e + "hrs";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            var a = t.datasets[e.datasetIndex].label || "",
                o = e.yLabel,
                l = "";
            return 1 < t.datasets.length && (l += '<span class="popover-body-label mr-auto">' + a + "</span>"), l += '<span class="popover-body-value">' + o + "hrs</span>";
          }
        }
      }
    },
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        data: [21, 12, 28, 15, 5, 12, 17, 2]
      }]
    }
  });
}(), function () {
  var e = document.getElementById("sparklineChart");
  "undefined" != typeof Chart && e && new Chart(e, {
    type: "line",
    options: {
      scales: {
        yAxes: [{
          display: !1
        }],
        xAxes: [{
          display: !1
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          hoverRadius: 0
        }
      },
      tooltips: {
        custom: function custom() {
          return !1;
        }
      }
    },
    data: {
      labels: new Array(12),
      datasets: [{
        data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]
      }]
    }
  });
}(), function () {
  var e = document.querySelectorAll("#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour");
  "undefined" != typeof Chart && e && [].forEach.call(e, function (e) {
    !function (e) {
      new Chart(e, {
        type: "line",
        options: {
          scales: {
            yAxes: [{
              display: !1
            }],
            xAxes: [{
              display: !1
            }]
          },
          elements: {
            line: {
              borderWidth: 2,
              borderColor: "#D2DDEC"
            },
            point: {
              hoverRadius: 0
            }
          },
          tooltips: {
            custom: function custom() {
              return !1;
            }
          }
        },
        data: {
          labels: new Array(12),
          datasets: [{
            data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]
          }]
        }
      });
    }(e);
  });
}(), function () {
  var e = document.querySelectorAll('[name="ordersSelect"]'),
      t = document.getElementById("ordersSelectAll");
  e && t && t.addEventListener("change", function () {
    !function (t) {
      [].forEach.call(e, function (e) {
        e.checked = t.checked;
      });
    }(this);
  });
}(), function () {
  var e = document.querySelectorAll(".dropup, .dropright, .dropdown, .dropleft"),
      t = document.querySelectorAll(".dropdown-menu .dropdown-toggle");
  t && [].forEach.call(t, function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault(), function (e) {
        var t = e.parentElement.querySelector(".dropdown-menu"),
            a = e.closest(".dropdown-menu").querySelectorAll(".dropdown-menu");
        [].forEach.call(a, function (e) {
          e !== t && e.classList.remove("show");
        }), t.classList.toggle("show");
      }(t), e.stopPropagation();
    });
  }), $(e).on("hide.bs.dropdown", function () {
    !function (e) {
      var t = e.querySelectorAll(".dropdown-menu");
      t && [].forEach.call(t, function (e) {
        e.classList.remove("show");
      });
    }(this);
  });
}(), function () {
  var e = document.querySelectorAll('[data-toggle="dropzone"]');
  "undefined" != typeof Dropzone && e && (Dropzone.autoDiscover = !1, Dropzone.thumbnailWidth = null, Dropzone.thumbnailHeight = null, [].forEach.call(e, function (e) {
    !function (e) {
      var t = void 0,
          a = e.dataset.options;
      a = a ? JSON.parse(a) : {};
      var o = {
        previewsContainer: e.querySelector(".dz-preview"),
        previewTemplate: e.querySelector(".dz-preview").innerHTML,
        init: function init() {
          this.on("addedfile", function (e) {
            1 == a.maxFiles && t && this.removeFile(t), t = e;
          });
        }
      },
          l = Object.assign(a, o);
      e.querySelector(".dz-preview").innerHTML = "", new Dropzone(e, l);
    }(e);
  }));
}(), function () {
  var e = document.querySelectorAll('[data-toggle="flatpickr"]');
  "undefined" != typeof flatpickr && e && [].forEach.call(e, function (e) {
    !function (e) {
      var t = e.dataset.options;
      t = t ? JSON.parse(t) : {}, flatpickr(e, t);
    }(e);
  });
}(), function () {
  var e = document.querySelectorAll(".highlight");
  "undefined" != typeof hljs && e && [].forEach.call(e, function (e) {
    !function (e) {
      hljs.highlightBlock(e);
    }(e);
  });
}(), function () {
  var e,
      t = document.querySelectorAll(".kanban-category"),
      a = document.querySelectorAll(".kanban-add-link"),
      o = document.querySelectorAll(".kanban-add-form");

  function l(e) {
    var t = e.closest(".kanban-add"),
        a = t.querySelector(".card"),
        o = t.querySelector(".kanban-add-link"),
        l = t.querySelector(".kanban-add-form");
    o.classList.toggle("d-none"), l.classList.toggle("d-none"), a && a.classList.contains("card-sm") && (a.classList.contains("card-flush") ? a.classList.remove("card-flush") : a.classList.add("card-flush"));
  }

  "undefined" != typeof Draggable && t && (e = t, new Draggable.Sortable(e, {
    draggable: ".kanban-item",
    mirror: {
      constrainDimensions: !0
    }
  })), a && [].forEach.call(a, function (e) {
    e.addEventListener("click", function () {
      l(e);
    });
  }), o && [].forEach.call(o, function (e) {
    e.addEventListener("reset", function () {
      l(e);
    }), e.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
}(), function () {
  var e = document.querySelectorAll('[data-toggle="lists"]'),
      t = document.querySelectorAll('[data-toggle="lists"] [data-sort]');
  "undefined" != typeof List && (e && [].forEach.call(e, function (e) {
    !function (e) {
      var t = e.dataset.options;
      t = t ? JSON.parse(t) : {}, new List(e, t);
    }(e);
  }), t && [].forEach.call(t, function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }));
}(), function () {
  var e = document.querySelectorAll('[data-toggle="map"]');
  "undefined" != typeof mapboxgl && e && [].forEach.call(e, function (e) {
    !function (e) {
      var t = e.dataset.options;
      t = t ? JSON.parse(t) : {};
      var a = {
        container: e,
        style: "mapbox://styles/mapbox/light-v9",
        scrollZoom: !1,
        interactive: !1
      },
          o = Object.assign(t, a);
      mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map(o);
    }(e);
  });
}(), function () {
  var e = document.querySelectorAll(".navbar-nav .collapse");
  $(e).on("show.bs.collapse", function () {
    !function (t) {
      var e = t.closest(".navbar-nav, .navbar-nav .nav").querySelectorAll(".collapse");
      [].forEach.call(e, function (e) {
        e !== t && $(e).collapse("hide");
      });
    }(this);
  });
}(), function () {
  var e = document.querySelectorAll('[data-toggle="popover"]');
  e && $(e).popover();
}(), function () {
  var e = document.querySelectorAll('[data-toggle="quill"]');
  "undefined" != typeof Quill && e && [].forEach.call(e, function (e) {
    !function (e) {
      var t = e.dataset.options;
      t = t ? JSON.parse(t) : {};
      var a = Object.assign(t, {
        modules: {
          toolbar: [["bold", "italic"], ["link", "blockquote", "code", "image"], [{
            list: "ordered"
          }, {
            list: "bullet"
          }]]
        },
        theme: "snow"
      });
      new Quill(e, a);
    }(e);
  });
}(), function () {
  var e = document.querySelectorAll('[data-toggle="select"]');

  function l(e) {
    if (!e.id) return e.text;
    var t = e.element.dataset.avatarSrc;
    if (t) (a = document.createElement("div")).innerHTML = '<span class="avatar avatar-xs mr-3"><img class="avatar-img rounded-circle" src="' + t + '" alt="' + e.text + '"></span><span>' + e.text + "</span>";else var a = e.text;
    return a;
  }

  jQuery().select2 && e && [].forEach.call(e, function (e) {
    !function (e) {
      var t = e.dataset.options;
      t = t ? JSON.parse(t) : {};
      var a = {
        dropdownParent: $(e).closest(".modal").length ? $(e).closest(".modal") : $(document.body),
        templateResult: l
      },
          o = Object.assign(t, a);
      $(e).select2(o);
    }(e);
  });
}(), function () {
  var e = document.querySelectorAll('[data-toggle="tooltip"]');
  e && $(e).tooltip();
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljX3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJlIiwibWF0Y2hlcyIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInByb3RvdHlwZSIsImRlbW9Nb2RlIiwidCIsImEiLCJvIiwibCIsIm4iLCJyIiwicyIsImMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpIiwiZCIsInUiLCJmIiwicCIsImIiLCJoIiwidiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtIiwiZyIsInkiLCJTIiwiY29sb3JTY2hlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmF2UG9zaXRpb24iLCJuYXZDb2xvciIsInNpZGViYXJTaXplIiwiQyIsIiQiLCJjb2xsYXBzZSIsImsiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInNwbGl0IiwibGVuZ3RoIiwic2V0SXRlbSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZpbmQiLCJidXR0b24iLCJib2R5Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJwYXRobmFtZSIsImZvckVhY2giLCJjYWxsIiwiZGF0YXNldCIsInRhcmdldCIsIkpTT04iLCJwYXJzZSIsImNoZWNrZWQiLCJBcnJheSIsImlzQXJyYXkiLCJwdXNoIiwicG9wIiwidXBkYXRlIiwicHJlZml4Iiwic3VmZml4Iiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJjYWxsYmFjayIsInRvb2x0aXBzIiwiY2FsbGJhY2tzIiwibGFiZWwiLCJkYXRhc2V0cyIsImRhdGFzZXRJbmRleCIsInlMYWJlbCIsIkNoYXJ0IiwiaGVscGVycyIsImVhY2giLCJpbnN0YW5jZXMiLCJjaGFydCIsImNhbnZhcyIsImRlZmF1bHRzIiwiZ2xvYmFsIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJkZWZhdWx0Q29sb3IiLCJkZWZhdWx0Rm9udENvbG9yIiwiZGVmYXVsdEZvbnRGYW1pbHkiLCJkZWZhdWx0Rm9udFNpemUiLCJsYXlvdXQiLCJwYWRkaW5nIiwibGVnZW5kIiwicG9zaXRpb24iLCJsYWJlbHMiLCJ1c2VQb2ludFN0eWxlIiwiZWxlbWVudHMiLCJwb2ludCIsInJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxpbmUiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwicmVjdGFuZ2xlIiwiYXJjIiwiaG92ZXJCb3JkZXJDb2xvciIsImVuYWJsZWQiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJvcGFjaXR5IiwidGl0bGUiLCJtYXAiLCJsaW5lcyIsImxhYmVsQ29sb3JzIiwiaW5uZXJIVE1MIiwiX2NoYXJ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjYXJldFkiLCJjYXJldFgiLCJ2aXNpYmlsaXR5IiwiZG91Z2hudXQiLCJjdXRvdXRQZXJjZW50YWdlIiwiaW5kZXgiLCJkYXRhIiwibGVnZW5kQ2FsbGJhY2siLCJzY2FsZVNlcnZpY2UiLCJ1cGRhdGVTY2FsZURlZmF1bHRzIiwiZ3JpZExpbmVzIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJjb2xvciIsImRyYXdCb3JkZXIiLCJkcmF3VGlja3MiLCJ6ZXJvTGluZUNvbG9yIiwiemVyb0xpbmVCb3JkZXJEYXNoIiwiemVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0IiwiYmVnaW5BdFplcm8iLCJkcmF3T25DaGFydEFyZWEiLCJtYXhCYXJUaGlja25lc3MiLCJnZW5lcmF0ZUxlZ2VuZCIsImF1dG9zaXplIiwidHlwZSIsInhBeGVzIiwiaG92ZXJSYWRpdXMiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbiIsIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwidGh1bWJuYWlsV2lkdGgiLCJ0aHVtYm5haWxIZWlnaHQiLCJwcmV2aWV3c0NvbnRhaW5lciIsInByZXZpZXdUZW1wbGF0ZSIsImluaXQiLCJtYXhGaWxlcyIsInJlbW92ZUZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmbGF0cGlja3IiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJjb250YWlucyIsIkRyYWdnYWJsZSIsIlNvcnRhYmxlIiwiZHJhZ2dhYmxlIiwibWlycm9yIiwiY29uc3RyYWluRGltZW5zaW9ucyIsIkxpc3QiLCJtYXBib3hnbCIsImNvbnRhaW5lciIsInNjcm9sbFpvb20iLCJpbnRlcmFjdGl2ZSIsImFjY2Vzc1Rva2VuIiwiTWFwIiwicG9wb3ZlciIsIlF1aWxsIiwibW9kdWxlcyIsInRvb2xiYXIiLCJsaXN0IiwidGhlbWUiLCJpZCIsInRleHQiLCJlbGVtZW50IiwiYXZhdGFyU3JjIiwialF1ZXJ5Iiwic2VsZWN0MiIsImRyb3Bkb3duUGFyZW50IiwidGVtcGxhdGVSZXN1bHQiLCJ0b29sdGlwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zdGF0aWNfc3JjL3RoZW1lLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7IWZ1bmN0aW9uKGUpe2UubWF0Y2hlcz1lLm1hdGNoZXN8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLm1zTWF0Y2hlc1NlbGVjdG9yfHxlLm9NYXRjaGVzU2VsZWN0b3J8fGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yLGUuY2xvc2VzdD1lLmNsb3Nlc3R8fGZ1bmN0aW9uKGUpe3JldHVybiB0aGlzP3RoaXMubWF0Y2hlcyhlKT90aGlzOnRoaXMucGFyZW50RWxlbWVudD90aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChlKTpudWxsOm51bGx9fShFbGVtZW50LnByb3RvdHlwZSk7dmFyIGRlbW9Nb2RlPWZ1bmN0aW9uKCl7dmFyIGUsdCxhLG8sbCxuLHIscyxjPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVtb0Zvcm1cIiksaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcG5hdlwiKSxkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wYmFyXCIpLHU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpLGY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyU21hbGxcIikscD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJVc2VyXCIpLGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyU21hbGxVc2VyXCIpLGg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyU2l6ZUNvbnRhaW5lclwiKSx2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJuYXZQb3NpdGlvblwiXScpLG09ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1cImNvbnRhaW5lclwiXScpLGc9KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc3R5bGVzaGVldExpZ2h0LCAjc3R5bGVzaGVldERhcmtcIiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHlsZXNoZWV0TGlnaHRcIikpLHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHlsZXNoZWV0RGFya1wiKSxTPXtjb2xvclNjaGVtZTpsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhc2hraXRDb2xvclNjaGVtZVwiKT9sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhc2hraXRDb2xvclNjaGVtZVwiKTpcImxpZ2h0XCIsbmF2UG9zaXRpb246bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0TmF2UG9zaXRpb25cIik/bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0TmF2UG9zaXRpb25cIik6XCJzaWRlbmF2XCIsbmF2Q29sb3I6bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0TmF2Q29sb3JcIik/bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0TmF2Q29sb3JcIik6XCJkZWZhdWx0XCIsc2lkZWJhclNpemU6bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0U2lkZWJhclNpemVcIik/bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXNoa2l0U2lkZWJhclNpemVcIik6XCJiYXNlXCJ9O2Z1bmN0aW9uIEMoZSl7XCJ0b3BuYXZcIj09ZT8kKGgpLmNvbGxhcHNlKFwiaGlkZVwiKTokKGgpLmNvbGxhcHNlKFwic2hvd1wiKX1mdW5jdGlvbiBrKGUpe2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFwiKX1yZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIGU9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoXCImXCIpLHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIGE9ZVt0XS5zcGxpdChcIj1cIiksbz1hWzBdLGw9YVsxXTtcImNvbG9yU2NoZW1lXCIhPW8mJlwibmF2UG9zaXRpb25cIiE9byYmXCJuYXZDb2xvclwiIT1vJiZcInNpZGViYXJTaXplXCIhPW98fChsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhc2hraXRcIitvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK28uc2xpY2UoMSksbCksU1tvXT1sKX19KCksXCJsaWdodFwiPT0oZT1TLmNvbG9yU2NoZW1lKT8oZy5kaXNhYmxlZD0hMSx5LmRpc2FibGVkPSEwLGU9XCJsaWdodFwiKTpcImRhcmtcIj09ZSYmKGcuZGlzYWJsZWQ9ITAseS5kaXNhYmxlZD0hMSxlPVwiZGFya1wiKSxmdW5jdGlvbihlKXtpZihpJiZkJiZ1JiZmJiZwJiZiKWlmKFwidG9wbmF2XCI9PWUpe2soZCksayh1KSxrKGYpO2Zvcih2YXIgdD0wO3Q8bS5sZW5ndGg7dCsrKW1bdF0uY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhaW5lci1mbHVpZFwiKSxtW3RdLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIil9ZWxzZSBpZihcImNvbWJvXCI9PWUpe2soaSksayhwKSxrKGIpO2Zvcih0PTA7dDxtLmxlbmd0aDt0KyspbVt0XS5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGFpbmVyXCIpLG1bdF0uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1mbHVpZFwiKX1lbHNlIGlmKFwic2lkZW5hdlwiPT1lKXtrKGkpLGsoZCk7Zm9yKHQ9MDt0PG0ubGVuZ3RoO3QrKyltW3RdLmNsYXNzTGlzdC5yZW1vdmUoXCJjb250YWluZXJcIiksbVt0XS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWZsdWlkXCIpfX0oUy5uYXZQb3NpdGlvbiksdD1TLm5hdkNvbG9yLHUmJmYmJmkmJihcImRlZmF1bHRcIj09dD8odS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWxpZ2h0XCIpLGYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1saWdodFwiKSxpLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbGlnaHRcIikpOlwiaW52ZXJ0ZWRcIj09dD8odS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIiksZi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIiksaS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIikpOlwidmlicmFudFwiPT10JiYodS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWRhcmtcIixcIm5hdmJhci12aWJyYW50XCIpLGYuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1kYXJrXCIsXCJuYXZiYXItdmlicmFudFwiKSxpLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItZGFya1wiLFwibmF2YmFyLXZpYnJhbnRcIikpKSxcImJhc2VcIj09KGE9Uy5zaWRlYmFyU2l6ZSk/ayhmKTpcInNtYWxsXCI9PWEmJmsodSksbz1jLGw9Uy5jb2xvclNjaGVtZSxuPVMubmF2UG9zaXRpb24scj1TLm5hdkNvbG9yLHM9Uy5zaWRlYmFyU2l6ZSwkKG8pLmZpbmQoJ1tuYW1lPVwiY29sb3JTY2hlbWVcIl1bdmFsdWU9XCInK2wrJ1wiXScpLmNsb3Nlc3QoXCIuYnRuXCIpLmJ1dHRvbihcInRvZ2dsZVwiKSwkKG8pLmZpbmQoJ1tuYW1lPVwibmF2UG9zaXRpb25cIl1bdmFsdWU9XCInK24rJ1wiXScpLmNsb3Nlc3QoXCIuYnRuXCIpLmJ1dHRvbihcInRvZ2dsZVwiKSwkKG8pLmZpbmQoJ1tuYW1lPVwibmF2Q29sb3JcIl1bdmFsdWU9XCInK3IrJ1wiXScpLmNsb3Nlc3QoXCIuYnRuXCIpLmJ1dHRvbihcInRvZ2dsZVwiKSwkKG8pLmZpbmQoJ1tuYW1lPVwic2lkZWJhclNpemVcIl1bdmFsdWU9XCInK3MrJ1wiXScpLmNsb3Nlc3QoXCIuYnRuXCIpLmJ1dHRvbihcInRvZ2dsZVwiKSxDKFMubmF2UG9zaXRpb24pLGRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYyYmKGMuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxmdW5jdGlvbihlKXt2YXIgdD1lLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3JTY2hlbWVcIl06Y2hlY2tlZCcpLnZhbHVlLGE9ZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5hdlBvc2l0aW9uXCJdOmNoZWNrZWQnKS52YWx1ZSxvPWUucXVlcnlTZWxlY3RvcignW25hbWU9XCJuYXZDb2xvclwiXTpjaGVja2VkJykudmFsdWUsbD1lLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2lkZWJhclNpemVcIl06Y2hlY2tlZCcpLnZhbHVlO2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFzaGtpdENvbG9yU2NoZW1lXCIsdCksbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXNoa2l0TmF2UG9zaXRpb25cIixhKSxsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhc2hraXROYXZDb2xvclwiLG8pLGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFzaGtpdFNpZGViYXJTaXplXCIsbCksd2luZG93LmxvY2F0aW9uPXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0oYyl9KSxbXS5mb3JFYWNoLmNhbGwodixmdW5jdGlvbihlKXtlLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtDKGUudmFsdWUpfSl9KSksITB9KCk7IWZ1bmN0aW9uKCl7dmFyIGU9ezMwMDpcIiNFM0VCRjZcIiw2MDA6XCIjOTVBQUM5XCIsNzAwOlwiIzZFODRBM1wiLDgwMDpcIiMxNTJFNERcIiw5MDA6XCIjMjgzRTU5XCJ9LHQ9ezEwMDpcIiNEMkRERUNcIiwzMDA6XCIjQTZDNUY3XCIsNzAwOlwiIzJDN0JFNVwifSxhPVwiI0ZGRkZGRlwiLG89XCJ0cmFuc3BhcmVudFwiLGw9XCJDZXJlYnJpIFNhbnNcIixuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImNoYXJ0XCJdJykscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJsZWdlbmRcIl0nKTtmdW5jdGlvbiBzKGUpe3ZhciB0PWUuZGF0YXNldC50YXJnZXQsYT1pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCkpLG89SlNPTi5wYXJzZShlLmRhdGFzZXQuYWRkKTtlLmNoZWNrZWQ/ZnVuY3Rpb24gZSh0LGEpe2Zvcih2YXIgbyBpbiBhKUFycmF5LmlzQXJyYXkoYVtvXSk/YVtvXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Rbb10ucHVzaChlKX0pOmUodFtvXSxhW29dKX0oYSxvKTpmdW5jdGlvbiBlKHQsYSl7Zm9yKHZhciBvIGluIGEpQXJyYXkuaXNBcnJheShhW29dKT9hW29dLmZvckVhY2goZnVuY3Rpb24oZSl7dFtvXS5wb3AoKX0pOmUodFtvXSxhW29dKX0oYSxvKSxhLnVwZGF0ZSgpfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9ZS5kYXRhc2V0LnRhcmdldCxhPWkoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KSksbz1KU09OLnBhcnNlKGUuZGF0YXNldC51cGRhdGUpLGw9ZS5kYXRhc2V0LnByZWZpeCxuPWUuZGF0YXNldC5zdWZmaXg7IWZ1bmN0aW9uIGUodCxhKXtmb3IodmFyIG8gaW4gYSlcIm9iamVjdFwiIT10eXBlb2YgYVtvXT90W29dPWFbb106ZSh0W29dLGFbb10pfShhLG8pLChsfHxuKSYmZnVuY3Rpb24oZSxuLHIpe249bnx8XCJcIixyPXJ8fFwiXCIsZS5vcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5jYWxsYmFjaz1mdW5jdGlvbihlKXtpZighKGUlMTApKXJldHVybiBuK2Urcn0sZS5vcHRpb25zLnRvb2x0aXBzLmNhbGxiYWNrcy5sYWJlbD1mdW5jdGlvbihlLHQpe3ZhciBhPXQuZGF0YXNldHNbZS5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiLG89ZS55TGFiZWwsbD1cIlwiO3JldHVybiAxPHQuZGF0YXNldHMubGVuZ3RoJiYobCs9JzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nK2ErXCI8L3NwYW4+XCIpLGwrPSc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicrbitvK3IrXCI8L3NwYW4+XCJ9fShhLGwsbiksYS51cGRhdGUoKX1mdW5jdGlvbiBpKHQpe3ZhciBhPXZvaWQgMDtyZXR1cm4gQ2hhcnQuaGVscGVycy5lYWNoKENoYXJ0Lmluc3RhbmNlcyxmdW5jdGlvbihlKXt0PT1lLmNoYXJ0LmNhbnZhcyYmKGE9ZSl9KSxhfVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDaGFydCYmKENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5yZXNwb25zaXZlPSEwLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5tYWludGFpbkFzcGVjdFJhdGlvPSExLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Q29sb3I9ZVs2MDBdLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udENvbG9yPWVbNjAwXSxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHk9bCxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplPTEzLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5sYXlvdXQucGFkZGluZz0wLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5sZWdlbmQuZGlzcGxheT0hMSxDaGFydC5kZWZhdWx0cy5nbG9iYWwubGVnZW5kLnBvc2l0aW9uPVwiYm90dG9tXCIsQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmxlZ2VuZC5sYWJlbHMudXNlUG9pbnRTdHlsZT0hMCxDaGFydC5kZWZhdWx0cy5nbG9iYWwubGVnZW5kLmxhYmVscy5wYWRkaW5nPTE2LENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5wb2ludC5yYWRpdXM9MCxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMucG9pbnQuYmFja2dyb3VuZENvbG9yPXRbNzAwXSxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMubGluZS50ZW5zaW9uPS40LENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5saW5lLmJvcmRlcldpZHRoPTMsQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmVsZW1lbnRzLmxpbmUuYm9yZGVyQ29sb3I9dFs3MDBdLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5saW5lLmJhY2tncm91bmRDb2xvcj1vLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5saW5lLmJvcmRlckNhcFN0eWxlPVwicm91bmRlZFwiLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5yZWN0YW5nbGUuYmFja2dyb3VuZENvbG9yPXRbNzAwXSxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMuYXJjLmJhY2tncm91bmRDb2xvcj10WzcwMF0sQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmVsZW1lbnRzLmFyYy5ib3JkZXJDb2xvcj1hLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5hcmMuYm9yZGVyV2lkdGg9NCxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMuYXJjLmhvdmVyQm9yZGVyQ29sb3I9YSxDaGFydC5kZWZhdWx0cy5nbG9iYWwudG9vbHRpcHMuZW5hYmxlZD0hMSxDaGFydC5kZWZhdWx0cy5nbG9iYWwudG9vbHRpcHMubW9kZT1cImluZGV4XCIsQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLnRvb2x0aXBzLmludGVyc2VjdD0hMSxDaGFydC5kZWZhdWx0cy5nbG9iYWwudG9vbHRpcHMuY3VzdG9tPWZ1bmN0aW9uKGwpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtdG9vbHRpcFwiKTtpZihlfHwoKGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuc2V0QXR0cmlidXRlKFwiaWRcIixcImNoYXJ0LXRvb2x0aXBcIiksZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0b29sdGlwXCIpLGUuY2xhc3NMaXN0LmFkZChcInBvcG92ZXJcIiksZS5jbGFzc0xpc3QuYWRkKFwiYnMtcG9wb3Zlci10b3BcIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSksMCE9PWwub3BhY2l0eSl7aWYobC5ib2R5KXt2YXIgdD1sLnRpdGxlfHxbXSxuPWwuYm9keS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUubGluZXN9KSxyPVwiXCI7cis9JzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicsdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3IrPSc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlciB0ZXh0LWNlbnRlclwiPicrZStcIjwvaDM+XCJ9KSxuLmZvckVhY2goZnVuY3Rpb24oZSx0KXt2YXIgYT0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2wubGFiZWxDb2xvcnNbdF0uYmFja2dyb3VuZENvbG9yKydcIj48L3NwYW4+JyxvPTE8bi5sZW5ndGg/XCJqdXN0aWZ5LWNvbnRlbnQtbGVmdFwiOlwianVzdGlmeS1jb250ZW50LWNlbnRlclwiO3IrPSc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgJytvKydcIj4nK2ErZStcIjwvZGl2PlwifSksZS5pbm5lckhUTUw9cn12YXIgYT10aGlzLl9jaGFydC5jYW52YXMsbz1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHM9KGEub2Zmc2V0V2lkdGgsYS5vZmZzZXRIZWlnaHQsd2luZG93LnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcHx8MCksYz13aW5kb3cucGFnZVhPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR8fDAsaT1vLnRvcCtzLGQ9by5sZWZ0K2MsdT1lLm9mZnNldFdpZHRoLGY9ZS5vZmZzZXRIZWlnaHQscD1pK2wuY2FyZXRZLWYtMTYsYj1kK2wuY2FyZXRYLXUvMjtlLnN0eWxlLnRvcD1wK1wicHhcIixlLnN0eWxlLmxlZnQ9YitcInB4XCIsZS5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwifWVsc2UgZS5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCJ9LENoYXJ0LmRlZmF1bHRzLmdsb2JhbC50b29sdGlwcy5jYWxsYmFja3MubGFiZWw9ZnVuY3Rpb24oZSx0KXt2YXIgYT10LmRhdGFzZXRzW2UuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixvPWUueUxhYmVsLGw9XCJcIjtyZXR1cm4gMTx0LmRhdGFzZXRzLmxlbmd0aCYmKGwrPSc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JythK1wiPC9zcGFuPlwiKSxsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nK28rXCI8L3NwYW4+XCJ9LENoYXJ0LmRlZmF1bHRzLmRvdWdobnV0LmN1dG91dFBlcmNlbnRhZ2U9ODMsQ2hhcnQuZGVmYXVsdHMuZG91Z2hudXQudG9vbHRpcHMuY2FsbGJhY2tzLnRpdGxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubGFiZWxzW2VbMF0uaW5kZXhdfSxDaGFydC5kZWZhdWx0cy5kb3VnaG51dC50b29sdGlwcy5jYWxsYmFja3MubGFiZWw9ZnVuY3Rpb24oZSx0KXt2YXIgYT1cIlwiO3JldHVybiBhKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nK3QuZGF0YXNldHNbMF0uZGF0YVtlLmluZGV4XStcIjwvc3Bhbj5cIn0sQ2hhcnQuZGVmYXVsdHMuZG91Z2hudXQubGVnZW5kQ2FsbGJhY2s9ZnVuY3Rpb24oZSl7dmFyIG89ZS5kYXRhLGw9XCJcIjtyZXR1cm4gby5sYWJlbHMuZm9yRWFjaChmdW5jdGlvbihlLHQpe3ZhciBhPW8uZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yW3RdO2wrPSc8c3BhbiBjbGFzcz1cImNoYXJ0LWxlZ2VuZC1pdGVtXCI+JyxsKz0nPGkgY2xhc3M9XCJjaGFydC1sZWdlbmQtaW5kaWNhdG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2ErJ1wiPjwvaT4nLGwrPWUsbCs9XCI8L3NwYW4+XCJ9KSxsfSxDaGFydC5zY2FsZVNlcnZpY2UudXBkYXRlU2NhbGVEZWZhdWx0cyhcImxpbmVhclwiLHtncmlkTGluZXM6e2JvcmRlckRhc2g6WzJdLGJvcmRlckRhc2hPZmZzZXQ6WzJdLGNvbG9yOmVbMzAwXSxkcmF3Qm9yZGVyOiExLGRyYXdUaWNrczohMSx6ZXJvTGluZUNvbG9yOmVbMzAwXSx6ZXJvTGluZUJvcmRlckRhc2g6WzJdLHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDpbMl19LHRpY2tzOntiZWdpbkF0WmVybzohMCxwYWRkaW5nOjEwLGNhbGxiYWNrOmZ1bmN0aW9uKGUpe2lmKCEoZSUxMCkpcmV0dXJuIGV9fX0pLENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwiY2F0ZWdvcnlcIix7Z3JpZExpbmVzOntkcmF3Qm9yZGVyOiExLGRyYXdPbkNoYXJ0QXJlYTohMSxkcmF3VGlja3M6ITF9LHRpY2tzOntwYWRkaW5nOjIwfSxtYXhCYXJUaGlja25lc3M6MTB9KSxuJiZbXS5mb3JFYWNoLmNhbGwobixmdW5jdGlvbihlKXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe2UuZGF0YXNldC5hZGQmJnMoZSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7ZS5kYXRhc2V0LnVwZGF0ZSYmYyhlKX0pfSksciYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe1tdLmZvckVhY2guY2FsbChyLGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihlKXt2YXIgdD1pKGUpLmdlbmVyYXRlTGVnZW5kKCksYT1lLmRhdGFzZXQudGFyZ2V0O2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSkuaW5uZXJIVE1MPXR9KGUpfSl9KSl9KCksZnVuY3Rpb24oKXt2YXIgZT17MzAwOlwiI0UzRUJGNlwiLDYwMDpcIiM5NUFBQzlcIiw3MDA6XCIjNkU4NEEzXCIsODAwOlwiIzE1MkU0RFwiLDkwMDpcIiMyODNFNTlcIn0sdD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhc2hraXRDb2xvclNjaGVtZVwiKT9sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhc2hraXRDb2xvclNjaGVtZVwiKTpcImxpZ2h0XCI7ZnVuY3Rpb24gYSgpe0NoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Q29sb3I9ZVs3MDBdLENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udENvbG9yPWVbNzAwXSxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMuYXJjLmJvcmRlckNvbG9yPWVbODAwXSxDaGFydC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMuYXJjLmhvdmVyQm9yZGVyQ29sb3I9ZVs4MDBdLENoYXJ0LnNjYWxlU2VydmljZS51cGRhdGVTY2FsZURlZmF1bHRzKFwibGluZWFyXCIse2dyaWRMaW5lczp7Ym9yZGVyRGFzaDpbMl0sYm9yZGVyRGFzaE9mZnNldDpbMl0sY29sb3I6ZVs5MDBdLGRyYXdCb3JkZXI6ITEsZHJhd1RpY2tzOiExLHplcm9MaW5lQ29sb3I6ZVs5MDBdLHplcm9MaW5lQm9yZGVyRGFzaDpbMl0semVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0OlsyXX0sdGlja3M6e2JlZ2luQXRaZXJvOiEwLHBhZGRpbmc6MTAsY2FsbGJhY2s6ZnVuY3Rpb24oZSl7aWYoIShlJTEwKSlyZXR1cm4gZX19fSl9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENoYXJ0JiYodm9pZCAwPT09ZGVtb01vZGU/YSgpOmRlbW9Nb2RlJiZcImRhcmtcIj09dCYmYSgpKX0oKSxmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cImF1dG9zaXplXCJdJyk7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGF1dG9zaXplJiZlJiZbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXshZnVuY3Rpb24oZSl7YXV0b3NpemUoZSl9KGUpfSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckNoYXJ0XCIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBDaGFydCYmZSYmbmV3IENoYXJ0KGUse3R5cGU6XCJsaW5lXCIsb3B0aW9uczp7c2NhbGVzOnt5QXhlczpbe2dyaWRMaW5lczp7Y29sb3I6XCIjMjgzRTU5XCIsemVyb0xpbmVDb2xvcjpcIiMyODNFNTlcIn0sdGlja3M6e2NhbGxiYWNrOmZ1bmN0aW9uKGUpe2lmKCEoZSUxMCkpcmV0dXJuXCIkXCIrZStcImtcIn19fV19LHRvb2x0aXBzOntjYWxsYmFja3M6e2xhYmVsOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dC5kYXRhc2V0c1tlLmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCIsbz1lLnlMYWJlbCxsPVwiXCI7cmV0dXJuIDE8dC5kYXRhc2V0cy5sZW5ndGgmJihsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicrYStcIjwvc3Bhbj5cIiksbCs9JzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JCcrbytcIms8L3NwYW4+XCJ9fX19LGRhdGE6e2xhYmVsczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGRhdGFzZXRzOlt7bGFiZWw6XCJQZXJmb3JtYW5jZVwiLGRhdGE6WzAsMTAsNSwxNSwxMCwyMCwxNSwyNSwyMCwzMCwyNSw0MF19XX19KX0oKSxmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyZm9ybWFuY2VDaGFydFwiKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgQ2hhcnQmJmUmJm5ldyBDaGFydChlLHt0eXBlOlwibGluZVwiLG9wdGlvbnM6e3NjYWxlczp7eUF4ZXM6W3t0aWNrczp7Y2FsbGJhY2s6ZnVuY3Rpb24oZSl7aWYoIShlJTEwKSlyZXR1cm5cIiRcIitlK1wia1wifX19XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7bGFiZWw6ZnVuY3Rpb24oZSx0KXt2YXIgYT10LmRhdGFzZXRzW2UuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixvPWUueUxhYmVsLGw9XCJcIjtyZXR1cm4gMTx0LmRhdGFzZXRzLmxlbmd0aCYmKGwrPSc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JythK1wiPC9zcGFuPlwiKSxsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJytvK1wiazwvc3Bhbj5cIn19fX0sZGF0YTp7bGFiZWxzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sZGF0YXNldHM6W3tsYWJlbDpcIlBlcmZvcm1hbmNlXCIsZGF0YTpbMCwxMCw1LDE1LDEwLDIwLDE1LDI1LDIwLDMwLDI1LDQwXX1dfX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJmb3JtYW5jZUNoYXJ0QWxpYXNcIik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENoYXJ0JiZlJiZuZXcgQ2hhcnQoZSx7dHlwZTpcImxpbmVcIixvcHRpb25zOntzY2FsZXM6e3lBeGVzOlt7dGlja3M6e2NhbGxiYWNrOmZ1bmN0aW9uKGUpe2lmKCEoZSUxMCkpcmV0dXJuXCIkXCIrZStcImtcIn19fV19LHRvb2x0aXBzOntjYWxsYmFja3M6e2xhYmVsOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dC5kYXRhc2V0c1tlLmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCIsbz1lLnlMYWJlbCxsPVwiXCI7cmV0dXJuIDE8dC5kYXRhc2V0cy5sZW5ndGgmJihsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicrYStcIjwvc3Bhbj5cIiksbCs9JzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JCcrbytcIms8L3NwYW4+XCJ9fX19LGRhdGE6e2xhYmVsczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGRhdGFzZXRzOlt7bGFiZWw6XCJQZXJmb3JtYW5jZVwiLGRhdGE6WzAsMTAsNSwxNSwxMCwyMCwxNSwyNSwyMCwzMCwyNSw0MF19XX19KX0oKSxmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXJzQ2hhcnRcIik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENoYXJ0JiZlJiZuZXcgQ2hhcnQoZSx7dHlwZTpcImJhclwiLG9wdGlvbnM6e3NjYWxlczp7eUF4ZXM6W3t0aWNrczp7Y2FsbGJhY2s6ZnVuY3Rpb24oZSl7aWYoIShlJTEwKSlyZXR1cm5cIiRcIitlK1wia1wifX19XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7bGFiZWw6ZnVuY3Rpb24oZSx0KXt2YXIgYT10LmRhdGFzZXRzW2UuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixvPWUueUxhYmVsLGw9XCJcIjtyZXR1cm4gMTx0LmRhdGFzZXRzLmxlbmd0aCYmKGwrPSc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JythK1wiPC9zcGFuPlwiKSxsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJytvK1wiazwvc3Bhbj5cIn19fX0sZGF0YTp7bGFiZWxzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sZGF0YXNldHM6W3tsYWJlbDpcIlNhbGVzXCIsZGF0YTpbMjUsMjAsMzAsMjIsMTcsMTAsMTgsMjYsMjgsMjYsMjAsMzJdfV19fSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyc0NoYXJ0QWxpYXNcIik7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENoYXJ0JiZlJiZuZXcgQ2hhcnQoZSx7dHlwZTpcImJhclwiLG9wdGlvbnM6e3NjYWxlczp7eUF4ZXM6W3t0aWNrczp7Y2FsbGJhY2s6ZnVuY3Rpb24oZSl7aWYoIShlJTEwKSlyZXR1cm5cIiRcIitlK1wia1wifX19XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7bGFiZWw6ZnVuY3Rpb24oZSx0KXt2YXIgYT10LmRhdGFzZXRzW2UuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixvPWUueUxhYmVsLGw9XCJcIjtyZXR1cm4gMTx0LmRhdGFzZXRzLmxlbmd0aCYmKGwrPSc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JythK1wiPC9zcGFuPlwiKSxsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJytvK1wiazwvc3Bhbj5cIn19fX0sZGF0YTp7bGFiZWxzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl0sZGF0YXNldHM6W3tsYWJlbDpcIlNhbGVzXCIsZGF0YTpbMjUsMjAsMzAsMjIsMTcsMTAsMTgsMjYsMjgsMjYsMjAsMzJdfV19fSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZXNDaGFydFwiKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgQ2hhcnQmJmUmJm5ldyBDaGFydChlLHt0eXBlOlwiZG91Z2hudXRcIixvcHRpb25zOnt0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbihlLHQpe3JldHVybiB0LmxhYmVsc1tlWzBdLmluZGV4XX0sbGFiZWw6ZnVuY3Rpb24oZSx0KXt2YXIgYT1cIlwiO3JldHVybiBhKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nK3QuZGF0YXNldHNbMF0uZGF0YVtlLmluZGV4XStcIiU8L3NwYW4+XCJ9fX19LGRhdGE6e2xhYmVsczpbXCJEZXNrdG9wXCIsXCJUYWJsZXRcIixcIk1vYmlsZVwiXSxkYXRhc2V0czpbe2RhdGE6WzYwLDI1LDE1XSxiYWNrZ3JvdW5kQ29sb3I6W1wiIzJDN0JFNVwiLFwiI0E2QzVGN1wiLFwiI0QyRERFQ1wiXX1dfX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHlIb3Vyc0NoYXJ0XCIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBDaGFydCYmZSYmbmV3IENoYXJ0KGUse3R5cGU6XCJiYXJcIixvcHRpb25zOntzY2FsZXM6e3lBeGVzOlt7dGlja3M6e2NhbGxiYWNrOmZ1bmN0aW9uKGUpe2lmKCEoZSUxMCkpcmV0dXJuIGUrXCJocnNcIn19fV19LHRvb2x0aXBzOntjYWxsYmFja3M6e2xhYmVsOmZ1bmN0aW9uKGUsdCl7dmFyIGE9dC5kYXRhc2V0c1tlLmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCIsbz1lLnlMYWJlbCxsPVwiXCI7cmV0dXJuIDE8dC5kYXRhc2V0cy5sZW5ndGgmJihsKz0nPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicrYStcIjwvc3Bhbj5cIiksbCs9JzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JytvK1wiaHJzPC9zcGFuPlwifX19fSxkYXRhOntsYWJlbHM6W1wiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuXCJdLGRhdGFzZXRzOlt7ZGF0YTpbMjEsMTIsMjgsMTUsNSwxMiwxNywyXX1dfX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGFya2xpbmVDaGFydFwiKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgQ2hhcnQmJmUmJm5ldyBDaGFydChlLHt0eXBlOlwibGluZVwiLG9wdGlvbnM6e3NjYWxlczp7eUF4ZXM6W3tkaXNwbGF5OiExfV0seEF4ZXM6W3tkaXNwbGF5OiExfV19LGVsZW1lbnRzOntsaW5lOntib3JkZXJXaWR0aDoyfSxwb2ludDp7aG92ZXJSYWRpdXM6MH19LHRvb2x0aXBzOntjdXN0b206ZnVuY3Rpb24oKXtyZXR1cm4hMX19fSxkYXRhOntsYWJlbHM6bmV3IEFycmF5KDEyKSxkYXRhc2V0czpbe2RhdGE6WzAsMTUsMTAsMjUsMzAsMTUsNDAsNTAsODAsNjAsNTUsNjVdfV19fSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NwYXJrbGluZUNoYXJ0U29jaWFsT25lLCAjc3BhcmtsaW5lQ2hhcnRTb2NpYWxUd28sICNzcGFya2xpbmVDaGFydFNvY2lhbFRocmVlLCAjc3BhcmtsaW5lQ2hhcnRTb2NpYWxGb3VyXCIpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBDaGFydCYmZSYmW10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKGUpe25ldyBDaGFydChlLHt0eXBlOlwibGluZVwiLG9wdGlvbnM6e3NjYWxlczp7eUF4ZXM6W3tkaXNwbGF5OiExfV0seEF4ZXM6W3tkaXNwbGF5OiExfV19LGVsZW1lbnRzOntsaW5lOntib3JkZXJXaWR0aDoyLGJvcmRlckNvbG9yOlwiI0QyRERFQ1wifSxwb2ludDp7aG92ZXJSYWRpdXM6MH19LHRvb2x0aXBzOntjdXN0b206ZnVuY3Rpb24oKXtyZXR1cm4hMX19fSxkYXRhOntsYWJlbHM6bmV3IEFycmF5KDEyKSxkYXRhc2V0czpbe2RhdGE6WzAsMTUsMTAsMjUsMzAsMTUsNDAsNTAsODAsNjAsNTUsNjVdfV19fSl9KGUpfSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIm9yZGVyc1NlbGVjdFwiXScpLHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlcnNTZWxlY3RBbGxcIik7ZSYmdCYmdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXshZnVuY3Rpb24odCl7W10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7ZS5jaGVja2VkPXQuY2hlY2tlZH0pfSh0aGlzKX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wdXAsIC5kcm9wcmlnaHQsIC5kcm9wZG93biwgLmRyb3BsZWZ0XCIpLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi10b2dnbGVcIik7dCYmW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKSxhPWUuY2xvc2VzdChcIi5kcm9wZG93bi1tZW51XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tbWVudVwiKTtbXS5mb3JFYWNoLmNhbGwoYSxmdW5jdGlvbihlKXtlIT09dCYmZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKX0pLHQuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIil9KHQpLGUuc3RvcFByb3BhZ2F0aW9uKCl9KX0pLCQoZSkub24oXCJoaWRlLmJzLmRyb3Bkb3duXCIsZnVuY3Rpb24oKXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3Bkb3duLW1lbnVcIik7dCYmW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKX0pfSh0aGlzKX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPVwiZHJvcHpvbmVcIl0nKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgRHJvcHpvbmUmJmUmJihEcm9wem9uZS5hdXRvRGlzY292ZXI9ITEsRHJvcHpvbmUudGh1bWJuYWlsV2lkdGg9bnVsbCxEcm9wem9uZS50aHVtYm5haWxIZWlnaHQ9bnVsbCxbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXshZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwLGE9ZS5kYXRhc2V0Lm9wdGlvbnM7YT1hP0pTT04ucGFyc2UoYSk6e307dmFyIG89e3ByZXZpZXdzQ29udGFpbmVyOmUucXVlcnlTZWxlY3RvcihcIi5kei1wcmV2aWV3XCIpLHByZXZpZXdUZW1wbGF0ZTplLnF1ZXJ5U2VsZWN0b3IoXCIuZHotcHJldmlld1wiKS5pbm5lckhUTUwsaW5pdDpmdW5jdGlvbigpe3RoaXMub24oXCJhZGRlZGZpbGVcIixmdW5jdGlvbihlKXsxPT1hLm1heEZpbGVzJiZ0JiZ0aGlzLnJlbW92ZUZpbGUodCksdD1lfSl9fSxsPU9iamVjdC5hc3NpZ24oYSxvKTtlLnF1ZXJ5U2VsZWN0b3IoXCIuZHotcHJldmlld1wiKS5pbm5lckhUTUw9XCJcIixuZXcgRHJvcHpvbmUoZSxsKX0oZSl9KSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJmbGF0cGlja3JcIl0nKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgZmxhdHBpY2tyJiZlJiZbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhc2V0Lm9wdGlvbnM7dD10P0pTT04ucGFyc2UodCk6e30sZmxhdHBpY2tyKGUsdCl9KGUpfSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZ2hsaWdodFwiKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgaGxqcyYmZSYmW10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKGUpe2hsanMuaGlnaGxpZ2h0QmxvY2soZSl9KGUpfSl9KCksZnVuY3Rpb24oKXt2YXIgZSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIua2FuYmFuLWNhdGVnb3J5XCIpLGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rYW5iYW4tYWRkLWxpbmtcIiksbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmthbmJhbi1hZGQtZm9ybVwiKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWUuY2xvc2VzdChcIi5rYW5iYW4tYWRkXCIpLGE9dC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIiksbz10LnF1ZXJ5U2VsZWN0b3IoXCIua2FuYmFuLWFkZC1saW5rXCIpLGw9dC5xdWVyeVNlbGVjdG9yKFwiLmthbmJhbi1hZGQtZm9ybVwiKTtvLmNsYXNzTGlzdC50b2dnbGUoXCJkLW5vbmVcIiksbC5jbGFzc0xpc3QudG9nZ2xlKFwiZC1ub25lXCIpLGEmJmEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZC1zbVwiKSYmKGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FyZC1mbHVzaFwiKT9hLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkLWZsdXNoXCIpOmEuY2xhc3NMaXN0LmFkZChcImNhcmQtZmx1c2hcIikpfVwidW5kZWZpbmVkXCIhPXR5cGVvZiBEcmFnZ2FibGUmJnQmJihlPXQsbmV3IERyYWdnYWJsZS5Tb3J0YWJsZShlLHtkcmFnZ2FibGU6XCIua2FuYmFuLWl0ZW1cIixtaXJyb3I6e2NvbnN0cmFpbkRpbWVuc2lvbnM6ITB9fSkpLGEmJltdLmZvckVhY2guY2FsbChhLGZ1bmN0aW9uKGUpe2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtsKGUpfSl9KSxvJiZbXS5mb3JFYWNoLmNhbGwobyxmdW5jdGlvbihlKXtlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLGZ1bmN0aW9uKCl7bChlKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKX0pfSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJsaXN0c1wiXScpLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlPVwibGlzdHNcIl0gW2RhdGEtc29ydF0nKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgTGlzdCYmKGUmJltdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGFzZXQub3B0aW9uczt0PXQ/SlNPTi5wYXJzZSh0KTp7fSxuZXcgTGlzdChlLHQpfShlKX0pLHQmJltdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfSl9KSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJtYXBcIl0nKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbWFwYm94Z2wmJmUmJltdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGFzZXQub3B0aW9uczt0PXQ/SlNPTi5wYXJzZSh0KTp7fTt2YXIgYT17Y29udGFpbmVyOmUsc3R5bGU6XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2xpZ2h0LXY5XCIsc2Nyb2xsWm9vbTohMSxpbnRlcmFjdGl2ZTohMX0sbz1PYmplY3QuYXNzaWduKHQsYSk7bWFwYm94Z2wuYWNjZXNzVG9rZW49XCJway5leUoxSWpvaVoyOXZaSFJvWlcxbGN5SXNJbUVpT2lKamFuVTVlSFI0TjJjeWJEVTVOR1Z3T0had05HcHJiM0UwSW4wLm1zZHc5cTE2ZGg4djRhekpYVWRpWGdcIixuZXcgbWFwYm94Z2wuTWFwKG8pfShlKX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXItbmF2IC5jb2xsYXBzZVwiKTskKGUpLm9uKFwic2hvdy5icy5jb2xsYXBzZVwiLGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQpe3ZhciBlPXQuY2xvc2VzdChcIi5uYXZiYXItbmF2LCAubmF2YmFyLW5hdiAubmF2XCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sbGFwc2VcIik7W10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7ZSE9PXQmJiQoZSkuY29sbGFwc2UoXCJoaWRlXCIpfSl9KHRoaXMpfSl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJyk7ZSYmJChlKS5wb3BvdmVyKCl9KCksZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJxdWlsbFwiXScpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBRdWlsbCYmZSYmW10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YXNldC5vcHRpb25zO3Q9dD9KU09OLnBhcnNlKHQpOnt9O3ZhciBhPU9iamVjdC5hc3NpZ24odCx7bW9kdWxlczp7dG9vbGJhcjpbW1wiYm9sZFwiLFwiaXRhbGljXCJdLFtcImxpbmtcIixcImJsb2NrcXVvdGVcIixcImNvZGVcIixcImltYWdlXCJdLFt7bGlzdDpcIm9yZGVyZWRcIn0se2xpc3Q6XCJidWxsZXRcIn1dXX0sdGhlbWU6XCJzbm93XCJ9KTtuZXcgUXVpbGwoZSxhKX0oZSl9KX0oKSxmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInNlbGVjdFwiXScpO2Z1bmN0aW9uIGwoZSl7aWYoIWUuaWQpcmV0dXJuIGUudGV4dDt2YXIgdD1lLmVsZW1lbnQuZGF0YXNldC5hdmF0YXJTcmM7aWYodCkoYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5pbm5lckhUTUw9JzxzcGFuIGNsYXNzPVwiYXZhdGFyIGF2YXRhci14cyBtci0zXCI+PGltZyBjbGFzcz1cImF2YXRhci1pbWcgcm91bmRlZC1jaXJjbGVcIiBzcmM9XCInK3QrJ1wiIGFsdD1cIicrZS50ZXh0KydcIj48L3NwYW4+PHNwYW4+JytlLnRleHQrXCI8L3NwYW4+XCI7ZWxzZSB2YXIgYT1lLnRleHQ7cmV0dXJuIGF9alF1ZXJ5KCkuc2VsZWN0MiYmZSYmW10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YXNldC5vcHRpb25zO3Q9dD9KU09OLnBhcnNlKHQpOnt9O3ZhciBhPXtkcm9wZG93blBhcmVudDokKGUpLmNsb3Nlc3QoXCIubW9kYWxcIikubGVuZ3RoPyQoZSkuY2xvc2VzdChcIi5tb2RhbFwiKTokKGRvY3VtZW50LmJvZHkpLHRlbXBsYXRlUmVzdWx0Omx9LG89T2JqZWN0LmFzc2lnbih0LGEpOyQoZSkuc2VsZWN0MihvKX0oZSl9KX0oKSxmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKTtlJiYkKGUpLnRvb2x0aXAoKX0oKTsiXSwic291cmNlUm9vdCI6IiJ9