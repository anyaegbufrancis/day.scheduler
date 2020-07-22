var roughDate = new Date();
var thisMonth = roughDate.getMonth();
var thisDay = roughDate.getDate();
var thisYear = roughDate.getFullYear();
var dayIndex = roughDate.getDay();
var thisHour = roughDate.getHours();


var monthArr = [ "January", "February", "March", "April", "May", "June","July", 
                "August", "September", "October", "November", "December" ];

var dayArr =   ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

var timeArr = ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM", "04PM", "05PM", "06PM", 
            "07PM", "08PM", "09PM", "11PM", "12AM", "01AM", "02AM", "03AM", "04AM", "05AM", "06AM", 
            "07AM", "08AM"]

//Function that prints the day's date
function todayDate () {
    var dateFormat = dayArr[dayIndex] + ' , ' + thisDay + ' ' + monthArr[thisMonth] + ' ' + thisYear + '.'
    $('#dater1').text(dateFormat);
};

//Function to add zero behind single digits  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//Function that gets the present time in HH:MM:SS AM/PM format
function startTime() {    
    var roughDate = new Date();
    var thisHour = roughDate.getHours();
    var thisMinute = roughDate.getMinutes();
    var thisSeconds = roughDate.getSeconds();
    var amORpm = thisHour >= 12 ? 'PM' : 'AM';
    thisHour=thisHour%12;
    thisHour=thisHour?thisHour:12;
    thisHour = checkTime(thisHour);
    thisMinute = checkTime(thisMinute);
    thisSeconds = checkTime(thisSeconds);    
    document.getElementById('dater2').innerHTML = thisHour + ":" + thisMinute + ":" + thisSeconds + ' ' + amORpm;
    todayDate();
    var t = setTimeout(startTime, 100);
  }


 //Function to populate working hours in the calender
 function printTimeBlock () {
    for (var i=0; i<=8; i++)
    $('#left-time-'+i).text(timeArr[i]);
}
printTimeBlock();

//Function that checks the actual present hour, find its index in the timeArr array
function getTimeNow() {
    var thisHour = roughDate.getHours();
    var amORpm = thisHour >= 12 ? 'PM' : 'AM';
    thisHour=thisHour%12;
    thisHour=thisHour?thisHour:12;    
    thisHour = checkTime(thisHour); 
    var t = setTimeout(startTime, 100);
    hourToCompare = thisHour+amORpm
    return hourToCompare
  };
 
//Find the Index of the present time in the array and name it presentHourIndex
var presentHourIndex = timeArr.indexOf(getTimeNow());
//Console Log the actual time
//console.log(timeArr[presentHourIndex]);

//Function to format the time blocks
function formatTimeBlock() {
        if (presentHourIndex){
            console.log(presentHourIndex);
            $('#option-area-'+presentHourIndex).css({'background-color': 'green', 'font-size': '35px', 'color': 'white'});  
            $('#left-time-'+presentHourIndex)
            .attr('style', 'background-color: green !important; color: white; font-weight: bolder; font-size: 17px');                        
        }  
        //Formating past hour styling
        for (i=0; i<presentHourIndex; i++) {
            ($('#option-area-'+i)).css('background-color', '#8C8682');
        }  
        //formating future hour styling
        for (i=presentHourIndex+1; i<timeArr.length-presentHourIndex; i++) {
            ($('#option-area-'+i)).css('background-color', '#E14210');
        }     ;   
    } ; 
formatTimeBlock();

//The click fuction that triggers save to local storage for data persistence
$('.input-group-text').click (function() {
    var typedText = ($(this).parent().siblings('.form-control')).val();
    var timeIDofClick = ($(this).parent().siblings().children())[0].innerHTML;
    console.log(timeIDofClick);
    if (typedText != '') {
        localStorage.setItem(timeIDofClick, typedText);
    }    
})

//Function that persists localstorage saved text on the timeblock text box
function postText() {
for (i=0; i<=timeArr.length; i++){
    var postText =   $('#option-area-'+i).val(localStorage.getItem(timeArr[i])) ;
    var t = setTimeout(postText, 100);   
    }}
postText()


//Reset Button 
$('.clear-button').click (function() {
    localStorage.clear();
    location.reload();
})



