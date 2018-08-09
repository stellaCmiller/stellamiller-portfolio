import $ from 'jquery';

function runAnimations(){
    var selected = false;
    var coordinates;
    /*When a portfolio div is clicked, the rest fade out and the current selection moves to the left of the screen and a description of the project appears 
    NOTE -- Remove test class and use an if statement to select the other divs, no use having an empty class, but this does make it a good bit easier to understand
    */
    $(".col-md-4").click(function(){
        if (!selected){
            $(this).removeClass("test-class").addClass("current");
            coordinates = $(this).offset();
            var project = $(this).attr("projectID");
            var that = this;
            $(".test-class").fadeOut("fast", function(){
                $(that).offset(coordinates);
            })
            setTimeout( function(){ //Without this, the div starts moving before the others have faded out
                $(that).animate({
                    left: '0px',
                    top: '0px',
                }, function(){ // We want the text box to appear after the above animation has finished
                    $(".row").find(".description").each(function() {
                        if (project === this.id){
                            $(this).fadeIn("fast").addClass("col-md-8");
                            $(this).append(`<div id="buttons">
                            <a href='${$(this).attr("deployed")}' target='_blank' id='site' role="button" class='btn btn-primary'>Deployed Project</a>
                            <a href='${$(this).attr("github")}' target='_blank' id='github' role="button"class='btn btn-primary'>Github Repo</a>
                            <button id='return' class='btn btn-danger'>Back to Projects</button>
                            </div>`); //creates buttons that link to the project and the github repo
                        }
                    });
                });
            }, 360);
        }
        selected = true;
    });

    /*If the user clicks the return button, brings the user back to the project grid */
    $("body").on("click", "#return", function(){
        if (selected){
            $(".description").css("display", "none");
            $("#buttons").remove();
            $(".test-class").fadeToggle("fast");
            $(".current").addClass("test-class").removeClass("current");
        }
        selected = false;
    })
}

export default runAnimations;