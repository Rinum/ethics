TextRPG = function(){

};

TextRPG.prototype.init = function(){
	if(typeof Scenario === "undefined"){
		alert('Put this before <!-- Load Scripts --> in index.html: \n\n <script type="text/javascript" src="./Scenarios/foobar.js"></script> \n\n and replace foobar with the desired scenario.');
		return;
	}

	this.stack = [];

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

TextRPG.prototype.getText = function(text){
	return text.replace(/(?:\r\n|\r|\n)/g, '<br />');
};

TextRPG.prototype.loadScene = function(scene){
	var game = this;

	if(!scene) return;

	game.stack.push(scene);

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

	var table = $('<table></table>').css({
		"width": "100%"
	});
	var tbody = $('<tbody></tbody>');
	var row = $('<tr></tr>');

	var left_column = $('<td></td>').css({
		"vertical-align": "top",
		"padding-right": "10px",
		"width": "40%"
	});

	var right_column = $('<td></td>').css({
		"display": "inline-block",
		"vertical-align": "top",
		"width": "100%"
	});

	if(scene.image){ row.append(left_column);}

	row.append(right_column);
	tbody.append(row);
	table.append(tbody);
	scene_wrapper.append(table);

	//Scene wrapper is done

	/* Left Column */
	if(scene.image){
		var image_wrapper = $('<div></div>').css({
			"width": "100%",
			"background-color": "#fff",
			"border-radius": "5px",
			"border": "#bfbfbf solid 1px",
			"box-shadow": "#fff 0px 0px 1px 1px",
			"padding": "1px",
			"line-height": "0px" //hack to remove whitespace below image
		});

		var image = $('<img src="./Lib/images/' + scene.image + '">').css({
			"width": "100%",
			"border-radius": "5px"
		});

		image_wrapper.append(image);

		left_column.append(image_wrapper);
	}

	/* Right Column */

	var text = $('<div></div>').html(game.getText(scene.text)).css({
		"background-color": "#fff",
		"padding": "10px",
		"border-radius": "5px",
		"border": "#bfbfbf solid 1px",
		"box-shadow": "#fff 0px 0px 1px 1px"
	});

	right_column.append(text);

	if(game.stack.length > 1){
		var back = $('<div></div>').html("&laquo; Undo").css({
			"margin": "10px",
			"color": "#1ea7e1",
			"cursor": "pointer"
		});

		back.on('click', function(){
			var current_scene = game.stack.pop();
			var previous_scene = game.stack.pop();

			game.loadScene(previous_scene);
		});

		right_column.append(back);
	}

	if(scene.options){
		var options = $('<div></div>').css({
			"position": "relative",
			"margin-top": "10px",
			"margin-left": "20px"
		});

		var num = 1;

		for(var i in scene.options){
			var s = scene.options[i];

			var option = $('<div></div>').css({
				"position": "relative"
			});

			if(num > 1){
				option.css({
					"margin-top": "10px"
				});
			}

			var number = $('<div></div>').html((num++) + ".").css({
				"position": "absolute",
				"top": "0px",
				"left": "-10px"
			});

			var option_text = $('<div></div>').html(s.text).css({
				"cursor": "pointer",
				"margin-left": "10px"
			});

			option.append(number, option_text);

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
