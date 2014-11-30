TextRPG = function(){

};

TextRPG.prototype.init = function(){
	if(typeof Scenario === "undefined"){
		alert('Put this before <!-- Load Scripts --> in index.html: \n\n <script type="text/javascript" src="./Scenarios/foobar.js"></script> \n\n and replace foobar with the desired scenario.');
		return;
	}

	this.loadScene(Scenario.scenes[Scenario.first_scene]);
};

TextRPG.prototype.getTitle = function(scene){
	var title = $('<div></div>').html(Scenario.name).css({
		"background-color": "#1ea7e1",
		"padding": "10px",
		"border-radius": "5px",
		"border": "#36bdf6 solid 2px",
		"box-shadow": "#0684c7 0px 0px 1px 1px",
		"color": "#fff",
		"border-bottom": "0",
		"border-bottom-right-radius": "0",
		"border-bottom-left-radius": "0"
	});

	return title;
};

TextRPG.prototype.loadScene = function(scene){
	var game = this;

	var wrapper = $('<div></div>');

	var title = this.getTitle(scene);

	wrapper.append(title);

	var scene_wrapper = $('<div></div>').css({
		"background-color": "#eeeeee",
		"border": "#fff solid 1px",
		"box-shadow": "0px 0px 1px 1px #989898",
		"border-radius": "5px",
		"padding": "10px",
		"color": "#8e8e8e",
		"text-align": "left",
		"margin-top": "-3px"
	});

	wrapper.append(scene_wrapper);

	//Wrapper is done

	var left_column = $('<div></div>').css({
		"display": "inline-block",
		"vertical-align": "top",
		"max-width": "38%",
		"padding-right": "2%"
	});

	var right_column = $('<div></div>').css({
		"display": "inline-block",
		"vertical-align": "top",
		"min-width": "60%"
	});

	scene_wrapper.append(left_column);
	scene_wrapper.append(right_column);

	//Scene wrapper is done

	/* Left Column */
	var image_wrapper = $('<div></div>').css({
		"width": "100%",
		"background-color": "#fff",
		"border-radius": "5px",
		"border": "#bfbfbf solid 1px",
		"box-shadow": "#fff 0px 0px 1px 1px",
		"padding": "1px",
		"line-height": "0px" //hack to remove whitespace below image
	});

	var image = $('<img src="./Lib/images/tallgradient3.png">').css({
		"width": "100%",
		"border-radius": "5px"
	});

	image_wrapper.append(image);

	left_column.append(image_wrapper);

	/* Right Column */
	var text = $('<div></div>').html(scene.text).css({
		"background-color": "#fff",
		"padding": "10px",
		"border-radius": "5px",
		"border": "#bfbfbf solid 1px",
		"box-shadow": "#fff 0px 0px 1px 1px"
	});

	right_column.append(text);

	if(scene.options){
		var options = $('<div></div>').css({
			"margin-top": "10px",
			"margin-left": "10px"
		});

		for(var i in scene.options){
			var s = scene.options[i];

			var option = $('<div></div>').html(s.text).css({
				"cursor": "pointer"
			});

			option.on('click', (function(scene_id){
				return function(){
					game.loadScene(Scenario.scenes[scene_id]);
				}
			})(s.scene));

			options.append(option);
		}

		right_column.append(options);
	} else {
		var end = $('<div></div>').css({
			"margin-top": "10px",
			"margin-left": "10px",
			"cursor": "pointer"
		}).html('~ End ~');

		end.on('click', (function(scene_id){
			return function(){
				game.loadScene(Scenario.scenes[scene_id]);
			}
		})(Scenario.first_scene));

		right_column.append(end);
	}

	//Put the wrapper in view
	$('#viewport').html(wrapper);
};

$(document).ready(function(){

	//Initialize
	app = new TextRPG();
	app.init();

});
