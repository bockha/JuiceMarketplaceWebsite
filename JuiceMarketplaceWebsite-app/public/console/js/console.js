var consolePages = {
    configurator: {
        title: "Neues Getränk anlegen",
        url: "configurator.html"
    },
    dashboard: {
        title: "Dashboard",
        url: "myreports.html"
    },
    myrecipes: {
        title: "Getränke verwalten",
        url: "myrecipes.html"
    }
};

function getUrlParameter(name) {
    var value = null;
    var query = window.location.search.substring(1);
    var parametersAndValues = query.split("&");
    for (var i = 0; i < parametersAndValues.length; i += 1) {
        var split = parametersAndValues[i].split("=");
        if (split[0] == name) {
            value = split[1];
            break;
        }
    }
    return value;
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
    if ($("#sidebar").hasClass("open")) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    $("#sidebar").addClass("open");
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $("#sidebar").removeClass("open");
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loadConfigurator() {
    window.location.href = "console.html?configurator";
    // $('body > div[role="dialog"]').remove();
    // $("#page_content").load("configurator.html");
}

function getDisplayName(userName, firstName, lastName) {
    if (firstName && lastName) {
        return firstName + " " + lastName;
    }

    if (userName) {
        return userName;
    }

    if (firstName) {
        return firstName
    }

    if (lastName) {
        return lastName
    }

    return 'Anonymous';
}

$(function () {
    openNav();
});

function checkRecipeLimit() {
    $.getJSON('/users/me/recipes/limit', function(data) {
        if (data && data.limit > 0) {
            window.location.href = "/console/configurator";
        }
        else {
            window.location.href = "/console/myrecipes&limit_reached=true";
        }
    }).fail(function() {
        window.location.href = "/console/myrecipes";
    })
}