"use strict";

import { handleNav } from "./workers.js";

$(document).ready(function () {
  console.log("jqyery loaded");

  // handle sibar dropdown menu
  (() => {
    $(".___subhead").each(function (index, element) {
      $(element).on("click", () => {
        let my_elemnet = $(this).parent().children()[1].children[0];
        let icon = $(element).children()[0];

        $(icon).toggleClass("___moveIconDownwards");
        $(my_elemnet).toggleClass("drop__menu");
      });
    });
  })();

  //   Handle drop down
  (() => {
    $(".__link").each((index, element) => {
      $(element).on("click", function (event) {
        event.stopPropagation();

        let nav_ele = $(this).children()[3];
        $(nav_ele).toggleClass("drop__content__dropdown");

        // remove dropdown class from element if body is clicked.
        $(window).on("click", () => {
          $(nav_ele).removeClass("drop__content__dropdown");
        });
      });
    });
  })();

  //   //   remove dropdown menu if link is clicked.
  //   (() => {
  //     $(".anchor-list a").each(function (index, link) {
  //       $(link).on("click", (e) => {
  //         e.preventDefault();
  //       });
  //     });
  //   })();

  // =======handle nav sticky behavier =========
  const handleSticky = function (element) {
    let distance = $(element).offset().top;
    let windowHeight = $(window);

    if ((windowHeight.scrollTop = distance)) {
      $(element).addClass("fixed__content__nav");
    } else {
      $(element).removeClass("fixed__content__nav");
    }
  };

  $(window).on("scroll", () => {
    handleSticky(".content-nav");
  });

  (() => {
    $("#search-icon").on("click", function () {
      $(this).toggleClass("icon-effect");

      $("#docs").toggleClass("expand-searchbar");
    });
  })();
});
