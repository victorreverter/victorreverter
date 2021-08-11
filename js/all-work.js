// All Work JSON Work

var graphicUrl = "js/all-work.json";
var itemCount = 0;

$.getJSON(graphicUrl, function(data){
  // console.log(data.graphics);

  var baseData = data.allWork;

  // console.log(baseData.length);
  // console.log(baseData[0].link);
  // console.log(baseData[0].picture);

  var graphicProject = '';

  for(var i = 0; i < 6; i++){

    graphicProject += '<div class="all-work-project-block">';
    graphicProject += '<a href="' + baseData[i].link + '" id="' + baseData[i].id + '" class="project-pic"></a>';
    graphicProject += '<h3 class="project-title">' + baseData[i].title + '</h3>'
    graphicProject += '</div>';

    $('#allWorkProjectContainer').html(graphicProject);
    // $('.project-item').fadeIn(500);
  };
}).done(function(data){
  // console.log(data.graphics);
  var baseData = data.allWork;
  var workTotal = 6;

  $('#loadMore').on('click', function(){

    var graphicProject = '';
    var counter = workTotal + 4;
    // console.log(workTotal);
    // console.log(workTotal + 3);

    // console.log(baseData.length);

    for(var j = workTotal; j <= counter; j++){

      if(baseData[j] !== undefined){
        var graphicProject = '';

        graphicProject += '<div class="all-work-project-block">';
        graphicProject += '<a href="' + baseData[j].link + '" id="' + baseData[j].id + '" class="project-pic"></a>';
        graphicProject += '<h3 class="project-title">' + baseData[j].title + '</h3>'
        graphicProject += '</div>';

        $('#allWorkProjectContainer').append(graphicProject);
        counter--;
        workTotal++;
        // console.log(counter);
        // console.log(workTotal);
        // $('.project-item').fadeIn(500);

      } else if(workTotal == baseData.length){
        $('#loadMore').fadeOut(250);
      }
    };
  });
});