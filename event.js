function homePage() {
  var artist = [
    {name:"joe doe", eventname:"event1",addres:"blv black bird", city:"TR", country:"AL", img:"carousel/img0.jpg",date:"20/12/2012"},
    {name:"johny sin", eventname:"event2",addres:"blv first bird", city:"TR", country:"AL", img:"carousel/img1.jpg",date:"21/12/2012"},
    {name:"like like", eventname:"event3",addres:"blv white bird", city:"TR", country:"AL", img:"carousel/img2.jpg",date:"23/12/2012"}
  ];
  var carousel = 
  '<div class ="col-lg-9">\
    <div id="myCarousel" class="carousel slide" data-ride="carousel">\
      <ol class="carousel-indicators"></ol>\
      <!-- Wrapper for slides -->\
      <div class="carousel-inner" role="listbox"></div>\
      <!-- Left and right controls -->\
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">\
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
        <span class="sr-only">Previous</span>\
      </a>\
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">\
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
        <span class="sr-only">Next</span>\
      </a>\
    </div>\
  </div>';
  var data = 
    '<div class="col-lg-3">\
      <div class="row">\
        <div class="col-lg-12">\
          <p id="date"></p>\
        </div>\
      </div>\
      <div class="row">\
        <div class="col-lg-12">\
          <p id="eventName"></p><br>\
          <p id="artistName"></p>\
        </div>\
      </div>\
      <div class="row">\
       <footer>\
        <p id="addres">,</p><p id="city">,</p><p id="country"></p>\
        </footer>\
      </div>\
    </div>';
    var firstRow= '<div class ="row">'+carousel +data + '</div>';
  
     $(document).ready(function(){
      for(var i=0 ; i< artist.length ; i++) {
        $('<div class="item"><img src="'+artist[i].img+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
        $('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');

        var name = artist[i].name;
        var event = artist[i].eventname;
        var address= artist[i].addres;
        var city = artist[i].city;
        var country = artist[i].country;
        
        document.getElementById("date").innerHTML =artist[i].date;

        document.getElementById("eventName").innerHTML = event;
        document.getElementById("artistName").innerHTML = name;
        document.getElementById("addres").innerHTML = address;
        document.getElementById("city").innerHTML = city;
        document.getElementById("country").innerHTML = country;
      };
      $('.item').first().addClass('active');
      $('.carousel-indicators > li').first().addClass('active');
      $('#myCarousel').carousel();
         });
  
    var createCalendar =
    '<div class ="col-lg-9"></div>\
    <div id="calendar"></div>';
    var dateEvent =
    '<div class = "col-lg-3">\
      <div class = "panel">\
        <div class = "panel-header">Data</div>\
        <div class = "panel-body" id ="dataShow"> </div>\
      </div>\
    </div>';
    
    var secondRow = '<div class = "row">'+dateEvent +createCalendar+'</div>';
    $('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    eventRender: function(event, element, view) {
        for (var i = 0; i< event.products.length ; i++) {
            element.append('<span>'+event.products[i].name+'<span>');
        };
    },
    events: [
                {
                  title: 'Event1',
                  start: '2016-06-014',
                  products:[
                              {

                                name:'Artist1'
                              }
                          ]
                },
                {
                    title: 'Event2',
                    start: '2016-06-13',
                    products:[
                                {
                          
                                  name:'Artist1'
                                },
                                {
                          
                                  name:'Artist2'
                                },
                                {
                              
                                  name:'Artist3'
                                },
                            ]
                },
                {
                    title: 'Event3',
                    start: '2016-06-13',
                    products:[
                                {
                               
                                  name:'Artist1'
                                },
                                {
                        
                                  name:'Artist2'
                                }
                            ]
                }
            ],
            dayClick: function(date, allDay, jsEvent, view) {},
            eventClick: function(calEvent, jsEvent, view) {
          
              function insert(title, product){
                var div = $("#dataShow")
                var textShow = title+'<br>'+product+'<br><br>'
                div.append(textShow);
              };
              for (var i = 0;i < calEvent.products.length;i++){
                insert( calEvent.products[i].name, calEvent.title, calEvent.start);
              }
            }
    });
  
  
    var text = [
      {title: 'title1', content: 'Some content'},
      {title: 'title2', content: 'Some other content'},
      {title: 'title3', content: 'Some other other content'}
    ];
    var footer =
      '<div class ="row">\
        <div class = col-lg-4>\
          <h3 id ="title1"></h3><br>\
          <p id ="content1"></p>\
        </div>\
        <div class = col-lg-4>\
          <h3 id ="title2"></h3><br>\
          <p id ="content2"></p>\
        </div>\
        <div class = col-lg-4>\
          <h3 id ="title3"></h3><br>\
          <p id ="content3"></p>\
        </div>\
      </div>';
    var title1 = text[0].title;
    var title2 = text[1].title;
    var title3 = text[2].title;
    var content1 = text[0].content;
    var content2 = text[1].content;
    var content3 = text[2].content;
  
  document.getElementById("title1").innerHTML=title1;
  document.getElementById("title2").innerHTML=title2;
  document.getElementById("title3").innerHTML=title3;
  document.getElementById("content1").innerHTML=content1;
  document.getElementById("content2").innerHTML=content2;
  document.getElementById("content3").innerHTML=content3;

  var event = firstRow + secondRow + footer;
   document.getElementById("container").innerHTML= event;
}
 