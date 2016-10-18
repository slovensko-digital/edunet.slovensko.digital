(function(){

    "use strict";

    $(document).ready(function(){

        if (window.innerWidth>1000) {

            console.info(window.innerWidth>1000)

            $("#main").fullpage({
                navigationPosition: "right",
                scrollBar: true,
                navigation: true,
                autoScrolling: false,
                fitToSection: false,
                scrollingSpeed: 500,
                anchors: [";pomozte", ";ministerstvo", ";odpocitanie", ";onas"],
                menu: '#myMenu'
            });

        }


    });



})();




(function(){

    "use strict";


    moment.locale("sk");

    setInterval(function(){

        var diffTime = moment(+moment()).unix() - moment("2016-02-03 11:11:00").unix();
        var duration = moment.duration(diffTime*1000, "milliseconds");
        duration = moment.duration(duration-1000, "milliseconds");

        var str = "";

        str += duration.days() + duration.years()*365 + duration.months()*30 + " dní, ";

        str += duration.hours() + " ";
        if (duration.hours()===0 || duration.hours()>4){ str += "hodín" }
        if (duration.hours()===1){ str += "hodinu" }
        if (duration.hours()>1 && duration.hours()<5){ str += "hodiny" }
        str += " a ";

        str += duration.minutes() + " ";
        if (duration.minutes()===0 || duration.minutes()>4){ str += "minút" }
        if (duration.minutes()===1){ str += "minútu" }
        if (duration.minutes()>1 && duration.minutes()<5){ str += "minúty" }

        $(".counter").text(str);

    }, 1000);

})();



(function(){

    "use strict";

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-69285708-6', 'auto');
    ga('send', 'pageview');

})();
