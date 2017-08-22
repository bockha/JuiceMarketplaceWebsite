
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
        }

        function getUrlParameter(name) {
            var value = null;
            var query = window.location.search.substring(1);
            var parametersAndValues = query.split("&");
            for (var i = 0; i < parametersAndValues.length; i += 1) {
                var split = parametersAndValues[i].split("=");
                if (split[0] == name){
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
            window.href="console.html?configurator";
            // $('body > div[role="dialog"]').remove();
            // $("#page_content").load("configurator.html");
        }

        function getDisplayName(firstName, lastName) {
            var displayName = firstName + " " + lastName;
            return displayName;
        }

		$( function() {
            openNav();
            $.getJSON('/users/me', function(data) {
                var firstName = data['firstname'];
                var lastName = data['lastname'];
                var displayName = getDisplayName(firstName, lastName);
            	$("#user-id").text(displayName);
            })

            var urlPage = getUrlParameter("page");
            if (urlPage == null) {
                urlPage = 'dashboard';
            }
            var consolePage = consolePages[urlPage];
            $(".navbar-brand").text(consolePage['title']);
            $("#page_content").load(consolePage['url']);
        })