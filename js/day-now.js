
// day now
// -------
        var date = new Date();
        var day = date.getDate();
        var year = date.getFullYear();
        var a = 0;

        var month = date.getMonth();
        var monthLabels= ["1", "2",  "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

        var weekDay = date.getDay();
        var weekDayLabels = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        //create function to grab day, month, date, year
        function Day(){
        month = monthLabels[month];
        weekDay = weekDayLabels[weekDay];

            for(var i=0; i<=10 ; i++) {

            }
        if(day<10)
        {
            document.getElementById("day").innerHTML = "<span>" + a + day + "</span>";
            document.getElementById("date").innerHTML = "<span>" + month.toUpperCase()  + "</span>" + "<span>" + weekDay.toUpperCase() + "</span>";  
        }
        else
        {
            document.getElementById("day").innerHTML = "<span>" + day + "</span>";
            document.getElementById("date").innerHTML = "<span>" + month.toUpperCase()  + "</span>" + "<span>" + weekDay.toUpperCase() + "</span>";  
        }
        }

        Day();
// -----------
// End day now
