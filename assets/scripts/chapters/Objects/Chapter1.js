const Chapter1 = {
    name: "GOODTAILOR",
    musicAuthor: "WATCH S-24",
    imageAuthor: "GOODWORLD_",
    noteCounts: 969,

    //右側生成 往左移動 1s	
	moveLeftOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (x > step) {
            x = x - step;
        } else {
            x = 0;
        }
        return {x, y};
    },
	//左側生成 往右移動 1s
    moveRightOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (x < -step) {
            x = x + step;
        } else {
            x = 0;
        }
        return {x, y};
    },
	//上側生成 往下移動 1s
    moveDownOneSec(note) { 
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y > step) {
            y = y - step;
        } else {
            y = 0;
        }
        return {x, y};
    },
	//下側生成 往上移動 1s
    moveUpOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y < -step) {
            y = y + step;
        } else {
            y = 0;
        }
        return {x, y};
    },
		//右上側生成 往左下移動 1s
	 moveLeftDownOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y > step) {
            y = y - step;
			x = x - step;
        } else {
            y = 0;
			x = 0;
        }
        return {x, y};
    },
		//右下側生成 往左上移動 1s
	 moveLeftUpOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y < -step) {
            y = y + step;
			x = x - step;
        } else {
            y = 0;
			x = 0;
        }
        return {x, y};
    },
		//左下側生成 往右上移動 1s
	 moveRightUpOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y < -step) {
            y = y + step;
			x = x + step;
        } else {
            y = 0;
			x = 0;
        }
        return {x, y};
	 },
		//左上側生成 往右下移動 1s
	 moveRightDownOneSec(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y > step) {
            y = y - step;
			x = x + step;
        } else {
            y = 0;
			x = 0;
        }
        return {x, y};
	 },
			//右方生成 逆時針(CCW)移動 1s
    moveLeftCCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 0+(note.x/5.555);
            note.circleRadius = note.x;
        } else {
            note.degree += 1.5;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
			//左方生成 逆時針(CCW)移動 1s
    moveRightCCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 180+((-note.x)/5.555);
            note.circleRadius = -note.x;
        } else {
            note.degree += 1.5;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
			//上方生成 逆時針(CCW)移動 1s
    moveDownCCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 90+(note.y/5.555);
            note.circleRadius = note.y;
        } else {
            note.degree += 1.5;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
			//下方生成 逆時針(CCW)移動 1s
    moveUpCCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = (-90) +((-note.y)/5.555);
            note.circleRadius = -note.y;
        } else {
            note.degree += 1.5;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};		
    },
	
				//右方生成 順時針(CW)移動 1s
     moveLeftCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 0-(note.x/5.555);
            note.circleRadius = note.x;
        } else {
            note.degree -= 3;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
				//左方生成 順時針(CW)移動 1s
    moveRightCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 180+(note.x/5.555);
            note.circleRadius = -note.x;
        } else {
            note.degree -= 3;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
				//上方生成 順時針(CW)移動 1s
    moveDownCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 90-(note.y/5.555);
            note.circleRadius = note.y;
        } else {
            note.degree -= 3;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
    },
				//下方生成 順時針(CW)移動 1s
    moveUpCWOneSec(note) {
         if (note.circleRadius !== undefined) {
            if (note.circleRadius >  16.66) {
                note.circleRadius -= 16.66;
            } else {
                note.circleRadius =  0;
            }
            }

        if (note.degree === undefined) {
            note.certainX = 0;
            note.certainY = 0;
            note.degree = 270+(note.y/5.555);
            note.circleRadius = -note.y;
        } else {
            note.degree -= 3;
        }
            let x = note.certainX + note.circleRadius * Math.cos(note.degree / 180 * Math.PI);
			let y = note.certainY + note.circleRadius * Math.sin(note.degree / 180 * Math.PI);
            return {x, y};
	},
	0: function (game) {
        game.canvas.createCheckCircle(0, 0);//CheakCircle
		
        //game.canvas.createTapNote(1000, 0, this.moveLeftOneSec);	L 1 s
		
	},
    1: function (game){
		game.canvas.createTapNote(1166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(1500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(1833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(2166, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(-2500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-2833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-3000, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-3166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-3500, 0, this.moveRightOneSec); 
		
		game.canvas.createTapNote(0, 3833, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4166, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4333, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4500, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4833, this.moveDownOneSec); 
		
		game.canvas.createTapNote(0, -5166, this.moveUpOneSec ,true);
		game.canvas.createTapNote(-5500, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(0, -5833, this.moveUpOneSec ,true);		
		game.canvas.createTapNote(-6166, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(0, 5166, this.moveDownOneSec ,true);
		game.canvas.createTapNote(5500, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(0, 5833, this.moveDownOneSec ,true);		
		game.canvas.createTapNote(6166, 0, this.moveLeftOneSec ,true); 
		
		
		
		game.canvas.createTapNote(6500, 0, this.moveLeftOneSec); 
		game.canvas.createTapNote(6833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(7166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(7500, 0, this.moveLeftOneSec); 
		
		game.canvas.createTapNote(-7833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-8166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-8333, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-8500, 0, this.moveRightOneSec); 
		game.canvas.createTapNote(-8833, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(9166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(9500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(9666, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(9833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(10166, 0, this.moveLeftOneSec); //36
	},
	2:function(game){
		setTimeout(function() {game.startPlayMusic();}, 148);
	},
	7:function(game){
		game.canvas.rotate(360, 4);
	},
	10:function(game){
		game.canvas.createDragNote(1500, 0, 1000, 0, this.moveLeftOneSec );
		game.canvas.createDragNote(-1500, 0, -1000, 0, this.moveRightOneSec); 

		game.canvas.createFlickNote(1666, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-1666, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(1833, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-1833, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(2000, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-2000, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(2166, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-2166, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(2333, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-2333, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(2500, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(-2500, 0, this.moveRightOneSec); 	//50
		
		
		
		game.canvas.createTapNote(2833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(-3166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(3500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(-3833, 0, this.moveRightOneSec); 
		
		game.canvas.createTapNote(0, 4166, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4500, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4666, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4833, this.moveDownOneSec);
		game.canvas.createTapNote(0, 5166, this.moveDownOneSec); 
		
		game.canvas.createTapNote(0, -5500, this.moveUpOneSec);
		game.canvas.createTapNote(0, -5833, this.moveUpOneSec);
		game.canvas.createTapNote(0, -6000, this.moveUpOneSec);
		game.canvas.createTapNote(0, -6166, this.moveUpOneSec);
		game.canvas.createTapNote(0, -6500, this.moveUpOneSec); 
		
		game.canvas.createTapNote(0, -6833, this.moveUpOneSec ,true);
		game.canvas.createTapNote(-7166, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(0, -7500, this.moveUpOneSec ,true);
		game.canvas.createTapNote(-7833, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(0, 6833, this.moveDownOneSec ,true);
		game.canvas.createTapNote(7166, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(0, 7500, this.moveDownOneSec ,true);		
		game.canvas.createTapNote(7833, 0, this.moveLeftOneSec ,true);
		
		game.canvas.createFlickNote(0, -6916, this.moveUpOneSec );
		game.canvas.createFlickNote(-7250, 0, this.moveRightOneSec );
		game.canvas.createFlickNote(0, -7583, this.moveUpOneSec );		
		game.canvas.createFlickNote(-7916, 0, this.moveRightOneSec );
		game.canvas.createFlickNote(0, 6916, this.moveDownOneSec );
		game.canvas.createFlickNote(7250, 0, this.moveLeftOneSec );
		game.canvas.createFlickNote(0, 7583, this.moveDownOneSec );		
		game.canvas.createFlickNote(7916, 0, this.moveLeftOneSec );		//80
		
		
		game.canvas.createTapNote(-8166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-8500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-8833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-9166, 0, this.moveRightOneSec);	
		
		game.canvas.createTapNote(-9500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-9833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-10000, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-10166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-10500, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(-10833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-11166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-11333, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-11500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-11833, 0, this.moveRightOneSec);		//94
	},
	16:function(game){
		game.canvas.rotate(-360, 1.9);
	},
	18:function(game){
		game.canvas.rotate(360, 1.9);
	},
	20:function(game){
		game.canvas.rotate(-360, 2);
		
		game.canvas.createDragNote(0, 2166, 0, 1000, this.moveDownOneSec);
		game.canvas.createDragNote(0, -2166, 0, -1000, this.moveUpOneSec);

		game.canvas.createFlickNote(0, 2333, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -2333, this.moveUpOneSec);
		game.canvas.createFlickNote(0, 2500, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -2500, this.moveUpOneSec);
		game.canvas.createFlickNote(0, 2666, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -2666, this.moveUpOneSec);
		game.canvas.createFlickNote(0, 2833, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -2833, this.moveUpOneSec);
		game.canvas.createFlickNote(0, 3000, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -3000, this.moveUpOneSec);
		game.canvas.createFlickNote(0, 3166, this.moveDownOneSec);
		game.canvas.createFlickNote(0, -3166, this.moveUpOneSec);		//108(intro)
		
		
		
		game.canvas.createTapNote(3500, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(3833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(4166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(4500, 0, this.moveLeftOneSec);
		game.canvas.createDragNote(-3500, 0, -900, 0, this.moveRightOneSec );
		
		game.canvas.createTapNote(-4833, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(-5166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-5500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-5833, 0, this.moveRightOneSec);
		game.canvas.createDragNote(4833, 0, 900, 0, this.moveLeftOneSec );
		
		game.canvas.createTapNote(6500, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(-6500, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(6833, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(-6833, 0, this.moveRightOneSec ,true);
		game.canvas.createTapNote(7166, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(-7166, 0, this.moveRightOneSec ,true);
		game.canvas.createDragNote(0, 6166, 0, 800, this.moveDownOneSec);
		game.canvas.createDragNote(0, -6166, 0, -800, this.moveUpOneSec);		//126
		
		game.canvas.createFlickNote(0, -7500, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -7583, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -7666, this.moveUpCCWOneSec );		
		game.canvas.createFlickNote(0, -7750, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -7833, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -7916, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8000, this.moveUpCCWOneSec );		
		game.canvas.createFlickNote(0, -8083, this.moveUpCCWOneSec );	
		game.canvas.createFlickNote(0, -8166, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8250, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8333, this.moveUpCCWOneSec );		
		game.canvas.createFlickNote(0, -8416, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8500, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8583, this.moveUpCCWOneSec );
		game.canvas.createFlickNote(0, -8666, this.moveUpCCWOneSec );
		
		game.canvas.createFlickNote(0, 7500, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 7583, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 7666, this.moveDownCCWOneSec );		
		game.canvas.createFlickNote(0, 7750, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 7833, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 7916, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8000, this.moveDownCCWOneSec );		
		game.canvas.createFlickNote(0, 8083, this.moveDownCCWOneSec );	
		game.canvas.createFlickNote(0, 8166, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8250, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8333, this.moveDownCCWOneSec );		
		game.canvas.createFlickNote(0, 8416, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8500, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8583, this.moveDownCCWOneSec );
		game.canvas.createFlickNote(0, 8666, this.moveDownCCWOneSec );
		
		game.canvas.createFlickNote(7500, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(7583, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(7666, 0, this.moveLeftCCWOneSec);		
		game.canvas.createFlickNote(7750, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(7833, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(7916, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8000, 0, this.moveLeftCCWOneSec);		
		game.canvas.createFlickNote(8083, 0, this.moveLeftCCWOneSec);	
		game.canvas.createFlickNote(8166, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8250, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8333, 0, this.moveLeftCCWOneSec);		
		game.canvas.createFlickNote(8416, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8500, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8583, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8666, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createFlickNote(-7500, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-7583, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-7666, 0, this.moveRightCCWOneSec );		
		game.canvas.createFlickNote(-7750, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-7833, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-7916, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8000, 0, this.moveRightCCWOneSec );		
		game.canvas.createFlickNote(-8083, 0, this.moveRightCCWOneSec );	
		game.canvas.createFlickNote(-8166, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8250, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8333, 0, this.moveRightCCWOneSec );		
		game.canvas.createFlickNote(-8416, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8500, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8583, 0, this.moveRightCCWOneSec );
		game.canvas.createFlickNote(-8666, 0, this.moveRightCCWOneSec );// 186
		
		game.canvas.createTapNote(8833, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9166, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(9500, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-9500, 0, this.moveRightCCWOneSec ,true);
		game.canvas.createTapNote(-9833, 0, this.moveRightCCWOneSec);
		
		game.canvas.createTapNote(0, -10166, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -10500, this.moveUpCCWOneSec);
		game.canvas.createTapNote(0, -10833, this.moveUpCCWOneSec ,true);
		game.canvas.createTapNote(0, 10833, this.moveDownCCWOneSec ,true);
		game.canvas.createTapNote(0, 11166, this.moveDownCCWOneSec); 
		
		game.canvas.createTapNote(0, -11500, this.moveUpCCWOneSec ,true);
		game.canvas.createTapNote(0, 11500, this.moveDownCCWOneSec ,true);
		game.canvas.createFlickNote(-11833, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(0, -12116, this.moveUpCCWOneSec ,true);
		game.canvas.createTapNote(0, 12116, this.moveDownCCWOneSec ,true);
		game.canvas.createTapNote(12500, 0, this.moveLeftCCWOneSec ,true); 
		game.canvas.createTapNote(-12500, 0, this.moveRightCCWOneSec ,true); //203
				
	},
	30: function (game){

		game.canvas.createFlickNote(-3000, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3333, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3500, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3666, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-4000, 0, this.moveRightCWOneSec);
		
		game.canvas.createFlickNote(0, -3000, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3166, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3333, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3500, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3666, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3833, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -4000, this.moveUpCCWOneSec);
		
		game.canvas.createFlickNote(3000, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3333, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3500, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3666, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3833, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(4000, 0, this.moveLeftCWOneSec);		

		game.canvas.createFlickNote(0, 3000, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3166, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3333, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3500, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3666, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3833, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 4000, this.moveDownCCWOneSec); //231
		
		game.canvas.createTapNote(0, 4500, this.moveDownOneSec);
		game.canvas.createTapNote(0, 4833, this.moveDownOneSec);
		game.canvas.createTapNote(0, 5166, this.moveDownOneSec);
		game.canvas.createDragNote(0, -4166, 0, -900, this.moveUpOneSec );
		
		game.canvas.createTapNote(0, -5833, this.moveUpOneSec);
		game.canvas.createTapNote(0, -6166, this.moveUpOneSec);
		game.canvas.createTapNote(0, -6500, this.moveUpOneSec);
		game.canvas.createDragNote(0, 5500,	0, 900, this.moveDownOneSec );
		
		game.canvas.createTapNote(0, -7166, this.moveUpOneSec ,true);
		game.canvas.createTapNote(0, 7166, this.moveDownOneSec ,true);
		game.canvas.createTapNote(0, -7500, this.moveUpOneSec ,true);
		game.canvas.createTapNote(0, 7500, this.moveDownOneSec ,true);
		game.canvas.createTapNote(0, -7833, this.moveUpOneSec ,true);
		game.canvas.createTapNote(0, 7833, this.moveDownOneSec ,true);
		game.canvas.createDragNote(6833, 0, 800, 0, this.moveLeftOneSec);
		game.canvas.createDragNote(-6833, 0, -800, 0, this.moveRightOneSec); //247
		

		game.canvas.createFlickNote(0, -8000, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8166, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8250, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8333, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8416, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8500, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8583, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8666, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8750, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8833, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -8916, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -9000, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -9083, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -9166, this.moveUpCWOneSec );
		game.canvas.createFlickNote(0, -9250, this.moveUpCWOneSec );		

		game.canvas.createFlickNote(0, 8000, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8166, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8250, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8333, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8416, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8500, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8583, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8666, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8750, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8833, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 8916, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 9000, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 9083, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 9166, this.moveDownCWOneSec );
		game.canvas.createFlickNote(0, 9250, this.moveDownCWOneSec );		

		game.canvas.createFlickNote(8000, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8166, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8250, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8333, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8416, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8500, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8583, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8666, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8750, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8833, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(8916, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(9000, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(9083, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(9166, 0, this.moveLeftCWOneSec );
		game.canvas.createFlickNote(9250, 0, this.moveLeftCWOneSec );

		game.canvas.createFlickNote(-8000, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8166, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8250, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8333, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8416, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8500, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8583, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8666, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8750, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8833, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-8916, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-9000, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-9083, 0, this.moveRightCWOneSec );
		game.canvas.createFlickNote(-9166, 0, this.moveRightCWOneSec ); 
		game.canvas.createFlickNote(-9250, 0, this.moveRightCWOneSec ); //307
		
		
		game.canvas.createTapNote(9500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(9833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(10166, 0, this.moveLeftCWOneSec ,true);
		game.canvas.createTapNote(-10166, 0, this.moveRightCWOneSec ,true);
		game.canvas.createTapNote(-10500, 0, this.moveRightCWOneSec);
		
		game.canvas.createTapNote(-10833, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-11166, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-11500, 0, this.moveRightCWOneSec, true);
		game.canvas.createTapNote(11500, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(11833, 0, this.moveLeftCWOneSec);
		
		game.canvas.createTapNote(0, -12166, this.moveUpCWOneSec ,true);
		game.canvas.createTapNote(0, 12166, this.moveDownCWOneSec, true);
		game.canvas.createTapNote(0, -12500, this.moveUpCWOneSec, true);
		game.canvas.createTapNote(0, 12500, this.moveDownCWOneSec, true);
		game.canvas.createTapNote(-12833, 0, this.moveRightCWOneSec, true);
		game.canvas.createTapNote(12833, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(0, 13166, this.moveDownCWOneSec, true);
		game.canvas.createTapNote(0, -13166, this.moveUpCWOneSec, true);  //325	
	},
	40: function (game){
		game.canvas.createDragNote(3500, 0, 1000, 0, this.moveLeftOneSec);
		game.canvas.createDragNote(-3500, 0, -1000, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(-3666, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(-4000, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(-4333, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(3666, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(4000, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(4333, 0, this.moveLeftOneSec);
		
		game.canvas.createDragNote(4833, 0, 4066, 0, this.moveLeftOneSec);
		game.canvas.createDragNote(0, 6000, 0, 2900, this.moveDownOneSec);
		game.canvas.createDragNote(-7333, 0, -1566, 0, this.moveRightOneSec);
		game.canvas.createDragNote(0, -8666, 0, -233, this.moveUpOneSec);  //337
		
		game.canvas.createTapNote(10166, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-10333, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(10500, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-10666, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(10833, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-11000, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(11166, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(0, -11333, this.moveUpCCWOneSec);
		game.canvas.createTapNote(11833, 0, this.moveLeftCCWOneSec);  //346
		
	},	
    43: function (game){
		game.canvas.rotate(360, 1.5);
    },
	45: function (game){
		game.canvas.rotate(720, 4);
    },
	50: function (game){
		game.canvas.createTapNote(0, 2500, this.moveDownCCWOneSec);	
		game.canvas.createTapNote(2666, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(-3000, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(0, -3166, this.moveUpCCWOneSec);
		game.canvas.createTapNote(3333, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(3666, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-4000, 0, this.moveRightCCWOneSec );  //353
		
		game.canvas.createTapNote(4333, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(4500, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(4666, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(4833, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(5000, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(5166, 0, this.moveLeftCWOneSec, true);
		game.canvas.createTapNote(5333, 0, this.moveLeftCWOneSec, true);
		
		game.canvas.createFlickNote(-4333, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-4500, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-4666, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-4833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-5000, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-5166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-5333, 0, this.moveRightCWOneSec);
		
		game.canvas.createTapNote(0, 5500, this.moveDownCWOneSec);
		game.canvas.createTapNote(-5666, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, -5833, this.moveUpCWOneSec);
		game.canvas.createTapNote(6000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, 6166, this.moveDownCWOneSec);
		game.canvas.createTapNote(-6333, 0, this.moveRightCWOneSec); 
		game.canvas.createTapNote(0, -6500, this.moveUpCWOneSec);		//374
		
		game.canvas.createTapNote(6666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, -6833, this.moveUpCWOneSec);
		game.canvas.createTapNote(7083, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-7333, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 7500, this.moveDownCWOneSec);
		game.canvas.createTapNote(-7750, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 8000, this.moveDownCWOneSec);
		game.canvas.createTapNote(8166, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, -8500, this.moveUpCWOneSec);
		game.canvas.createTapNote(-8666, 0, this.moveRightCWOneSec);
		
		game.canvas.createTapNote(9000, 0, this.moveLeftCWOneSec );
		game.canvas.createTapNote(-9166, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 9333, this.moveDownCWOneSec );
		game.canvas.createTapNote(0, -9500, this.moveUpCWOneSec);
		game.canvas.createTapNote(9666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-9833, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 10000, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -10166, this.moveUpCWOneSec);
		game.canvas.createTapNote(10333, 0, this.moveLeftCWOneSec );
		game.canvas.createTapNote(-10500, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 10666, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -10833, this.moveUpCWOneSec); //396
		
		
		game.canvas.createTapNote(0, 11000, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 11166, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 11333, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 11500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 11666, this.moveDownCWOneSec);
		
		game.canvas.createTapNote(0, 11833,this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 11916,this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 12000,this.moveDownCCWOneSec);
		
		game.canvas.createDragNote(0, 12500, 0, 400, this.moveDownCCWOneSec);
		game.canvas.createDragNote(0, -12500, 0, -400, this.moveUpCCWOneSec); //406
    },
	60: function (game){
		game.canvas.createTapNote(3166, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(3333, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(3666, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(3833, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(4000, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-4333, 0, this.moveRightCCWOneSec);
		
		game.canvas.createDragNote(0, 4833, 0, 1150, this.moveDownOneSec);
		game.canvas.createDragNote( 5166, 0, 816, 0, this.moveLeftOneSec);
		game.canvas.createDragNote(0, -5500, 0, -483, this.moveUpOneSec);
		game.canvas.createDragNote( -5833, 0, -150, 0, this.moveRightOneSec);  //416
	
	
		game.canvas.createTapNote(6166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(6500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(6833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(7166, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(0, 7500, this.moveDownOneSec);
		game.canvas.createTapNote(0, 7833, this.moveDownOneSec);
		game.canvas.createTapNote(0, 8166, this.moveDownOneSec);
		game.canvas.createTapNote(0, 8500, this.moveDownOneSec);
		
		game.canvas.createTapNote(-8833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-9166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-9500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-9833, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(0, -10166, this.moveUpOneSec);
		game.canvas.createTapNote(0, -10500, this.moveUpOneSec);
		game.canvas.createTapNote(0, -10833, this.moveUpOneSec);
		game.canvas.createTapNote(0, -11166, this.moveUpOneSec);  //432
		
    },
	70: function (game){
		game.canvas.createTapNote(0, 1500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -1666, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 1833, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -2000, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 2166, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -2333, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 2500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -2666, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 2833, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -3000, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 3166, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -3333, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 3500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -3833, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, 4000, this.moveDownCWOneSec);		//447
		
		game.canvas.createTapNote(0, 4083, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4166, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4250, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4333, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4416, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4583, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4666, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 4750, this.moveDownCWOneSec);
		
		game.canvas.createTapNote(0, -4833, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -4916, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5000, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5083, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5166, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5250, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5333, this.moveUpCWOneSec);
		game.canvas.createTapNote(0, -5416, this.moveUpCWOneSec);
		
		game.canvas.createTapNote(5500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5583, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5750, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5916, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6083, 0, this.moveLeftCWOneSec);
		
		game.canvas.createTapNote(-6166, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6250, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6333, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6416, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6500, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6583, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(-6666, 0, this.moveRightCWOneSec); //479
		
			
		game.canvas.createTapNote(0, 6833, this.moveDownCWOneSec);
		game.canvas.createTapNote(-7000, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, -7166, this.moveUpCWOneSec);
		game.canvas.createTapNote(7333, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, 7500, this.moveDownCWOneSec);
		game.canvas.createTapNote(-7666, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, -7833, this.moveUpCWOneSec);
		
		game.canvas.createTapNote(8000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, -8166, this.moveUpCWOneSec);
		game.canvas.createTapNote(8416, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-8666, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 8833, this.moveDownCWOneSec);
		game.canvas.createTapNote(-9083, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 9333, this.moveDownCWOneSec);
		game.canvas.createTapNote(9500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(0, -9833, this.moveUpCWOneSec);
		game.canvas.createTapNote(-10000, 0, this.moveRightCWOneSec);
		
		game.canvas.createTapNote(10333, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-10500, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 10666, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -10833, this.moveUpCWOneSec);
		game.canvas.createTapNote(11000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-11166, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 11333, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -11500, this.moveUpCWOneSec);
		game.canvas.createTapNote(11666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(-11833, 0, this.moveRightCWOneSec);
		game.canvas.createTapNote(0, 12000, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, -12166, this.moveUpCWOneSec);  //508
    },
	76: function(game){
		game.canvas.rotate(1440, 8);
	},
    80: function (game){
		game.canvas.createTapNote(0, 2333, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 2500, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 2666, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 2833, this.moveDownCWOneSec);
		game.canvas.createTapNote(0, 3000, this.moveDownCWOneSec);
		
		game.canvas.createTapNote(0, 3166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3333, this.moveDownCWOneSec);
		
		game.canvas.createDragNote(0, 3833, 0, 400, this.moveDownCWOneSec);
		game.canvas.createDragNote(0, -3833, 0, -400, this.moveUpCWOneSec); //518
		
		
		game.canvas.createTapNote(4500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(4666, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(-5000, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-5166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-5333, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(5666, 0, this.moveLeftOneSec ,true);
		game.canvas.createTapNote(-5666, 0, this.moveRightOneSec, true);
		game.canvas.createTapNote(6000, 0, this.moveLeftOneSec, true);
		game.canvas.createTapNote(-6000, 0, this.moveRightOneSec, true);
		
		game.canvas.createTapNote(0, 6333, this.moveDownOneSec);
		game.canvas.createTapNote(0, -6500, this.moveUpOneSec);
		game.canvas.createTapNote(0, 6666, this.moveDownOneSec);
		game.canvas.createTapNote(0, -6833, this.moveUpOneSec);
		game.canvas.createTapNote(0, 7000, this.moveDownOneSec);
		game.canvas.createTapNote(0, -7166, this.moveUpOneSec);
		
		game.canvas.createTapNote(7333, 0, this.moveLeftCCWOneSec);	
		game.canvas.createTapNote(-7500, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(7666, 0, this.moveLeftCCWOneSec);	
		game.canvas.createTapNote(-7833, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(8000, 0, this.moveLeftCCWOneSec);	
		game.canvas.createTapNote(-8166, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(8333, 0, this.moveLeftCCWOneSec);	
		game.canvas.createTapNote(-8500, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(8666, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(0, -8833, this.moveUpCCWOneSec);
		game.canvas.createTapNote(0, -9083, this.moveUpCCWOneSec);
		game.canvas.createTapNote(0, -9333, this.moveUpCCWOneSec);
		game.canvas.createTapNote(0, 9500, this.moveDownCCWOneSec);
		game.canvas.createTapNote(0, 9750, this.moveDownCCWOneSec);
		game.canvas.createTapNote(0, 10000, this.moveDownCCWOneSec);
		game.canvas.createTapNote(0, 10166, this.moveDownCCWOneSec);
		
		game.canvas.createTapNote(10500, 0, this.moveLeftCCWOneSec);	
		game.canvas.createTapNote(-10666, 0, this.moveRightCCWOneSec);	//551
    },
	86: function(game){
		game.canvas.rotate(-720, 8);
	},
	90: function (game){
		game.canvas.createTapNote(1000, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(0, 1166, this.moveDownCCWOneSec);
		game.canvas.createTapNote(-1333, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(0, -1500, this.moveUpCCWOneSec);
		game.canvas.createTapNote(1666, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(0, 1833, this.moveDownCCWOneSec);
		game.canvas.createTapNote(-2000, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(0, -2166, this.moveUpCCWOneSec);
		game.canvas.createTapNote(2333, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(0, 2500, this.moveDownCCWOneSec);
		game.canvas.createTapNote(-2666, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(0, -2833, this.moveUpCCWOneSec);
		
		game.canvas.createTapNote(3000, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-3166, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(3333, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(-3500, 0, this.moveRightCCWOneSec);
		game.canvas.createTapNote(3666, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(-3833, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3916, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-4000, 0, this.moveRightCCWOneSec);
		
		game.canvas.createDragNote(0, 4500, 0, 400, this.moveDownCCWOneSec);
		game.canvas.createDragNote(0, -4500, 0, -400, this.moveUpCCWOneSec);  //573
		
		game.canvas.createTapNote(5166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(5333, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(-5666, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-5833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(-6000, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(6333, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(6500, 0, this.moveLeftOneSec);  //580
		
		game.canvas.createFlickNote(-6833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-6916, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7000, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7250, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7333, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7500, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7583, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7666, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-7916, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8000, 0, this.moveRightCWOneSec);
		
		game.canvas.createFlickNote(6833, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(6916, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7000, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7250, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7333, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7500, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7583, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7666, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7833, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(7916, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8000, 0, this.moveLeftCWOneSec);
		
		game.canvas.createFlickNote(0, 6833, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 6916, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7000, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7333, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7500, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7583, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7666, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7833, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 7916, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8000, this.moveDownCWOneSec);
		
		game.canvas.createFlickNote(0, -6833, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -6916, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7000, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7166, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7250, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7333, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7500, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7583, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7666, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7833, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -7916, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8000, this.moveUpCWOneSec);  //628
		
		game.canvas.createTapNote(8166, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(0, 8333, this.moveDownOneSec);
		game.canvas.createTapNote(8500, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(0, 8666, this.moveDownOneSec);
		game.canvas.createTapNote(8833, 0, this.moveLeftOneSec);
		game.canvas.createTapNote(0, 9000, this.moveDownOneSec);
		game.canvas.createTapNote(9166, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(-9333, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, 9500, this.moveDownOneSec);
		game.canvas.createTapNote(-9666, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, 9833, this.moveDownOneSec);
		game.canvas.createTapNote(-10000, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, 10166, this.moveDownOneSec);
		game.canvas.createTapNote(-10333, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, 10500, this.moveDownOneSec);
		
		game.canvas.createTapNote(0, -10666, this.moveUpOneSec);
		game.canvas.createTapNote(-10833, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, -11000, this.moveUpOneSec);
		game.canvas.createTapNote(-11166, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, -11333, this.moveUpOneSec);
		game.canvas.createTapNote(-11500, 0, this.moveRightOneSec);
		game.canvas.createTapNote(0, -11666, this.moveUpOneSec);
		game.canvas.createTapNote(-11833, 0, this.moveRightOneSec);  //651
	},
	98: function (game){
		game.canvas.rotate(360, 3.9);
	},
	100: function (game){
		game.canvas.createFlickNote(2166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2250, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2333, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2416, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2500, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2583, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2666, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2750, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2833, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(2916, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3000, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3083, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3250, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(3333, 0, this.moveLeftCWOneSec);
		
		game.canvas.createFlickNote(0, 2166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2333, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2416, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2500, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2583, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2666, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2750, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2833, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 2916, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3000, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3083, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 3333, this.moveDownCWOneSec);
		
		game.canvas.createFlickNote(-2166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2250, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2333, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2416, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2500, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2583, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2666, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2750, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-2916, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3000, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3083, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3250, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-3333, 0, this.moveRightCWOneSec);
		
		game.canvas.createFlickNote(0, -2166, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2250, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2333, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2416, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2500, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2583, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2666, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2750, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2833, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -2916, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -3000, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -3083, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -3166, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -3250, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -3333, this.moveUpCWOneSec);  //711
		
		game.canvas.createTapNote(3500, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(3833, 0, this.moveLeftCCWOneSec);
		game.canvas.createTapNote(4166, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-4166, 0, this.moveRightCCWOneSec ,true);
		game.canvas.createTapNote(4500, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createTapNote(0, 4833, this.moveDownCCWOneSec);
		game.canvas.createTapNote(0, 5166, this.moveDownCCWOneSec);
		game.canvas.createTapNote(0, 5500, this.moveDownCCWOneSec ,true);
		game.canvas.createTapNote(0, -5500, this.moveUpCCWOneSec ,true);
		game.canvas.createTapNote(0, 5833, this.moveDownCCWOneSec );
		
		game.canvas.createTapNote(6166, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-6166, 0, this.moveRightCCWOneSec ,true);
		game.canvas.createTapNote(6500, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-6500, 0, this.moveRightCCWOneSec ,true);
		game.canvas.createTapNote(6833, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-6833, 0, this.moveRightCCWOneSec ,true);
		game.canvas.createTapNote(7166, 0, this.moveLeftCCWOneSec ,true);
		game.canvas.createTapNote(-7166, 0, this.moveRightCCWOneSec ,true); //729
		
		game.canvas.createTapNote(7500, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(7583, 0, this.moveLeftOneSec);
		game.canvas.createFlickNote(7666, 0, this.moveLeftOneSec);
		
		game.canvas.createTapNote(0, 7833, this.moveDownOneSec);
		game.canvas.createFlickNote(0, 7916, this.moveDownOneSec);
		game.canvas.createFlickNote(0, 8000, this.moveDownOneSec);
		
		game.canvas.createTapNote(-8166, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(-8250, 0, this.moveRightOneSec);
		game.canvas.createFlickNote(-8333, 0, this.moveRightOneSec);
		
		game.canvas.createTapNote(0, -8500, this.moveUpOneSec);
		game.canvas.createFlickNote(0, -8583, this.moveUpOneSec);
		game.canvas.createFlickNote(0, -8666, this.moveUpOneSec);  //741
		
		
		game.canvas.createTapNote(8833, 0, this.moveLeftCCWOneSec,true);
		game.canvas.createTapNote(9166, 0, this.moveLeftCCWOneSec,true);
		game.canvas.createTapNote(9500, 0, this.moveLeftCWOneSec,true);
		game.canvas.createTapNote(9833, 0, this.moveLeftCWOneSec,true);
		game.canvas.createTapNote(-8833, 0, this.moveRightCCWOneSec,true);
		game.canvas.createTapNote(-9166, 0, this.moveRightCCWOneSec,true);
		game.canvas.createTapNote(-9500, 0, this.moveRightCWOneSec,true);
		game.canvas.createTapNote(-9833, 0, this.moveRightCWOneSec,true);
	
		game.canvas.createTapNote(0, 10166, this.moveDownCCWOneSec,true);
		game.canvas.createTapNote(0, 10500, this.moveDownCCWOneSec,true);
		game.canvas.createTapNote(0, 10833, this.moveDownCWOneSec,true);
		game.canvas.createTapNote(0, 11166, this.moveDownCWOneSec,true);
		game.canvas.createTapNote(0, -10166, this.moveUpCCWOneSec,true);
		game.canvas.createTapNote(0, -10500, this.moveUpCCWOneSec,true);
		game.canvas.createTapNote(0, -10833, this.moveUpCWOneSec,true);
		game.canvas.createTapNote(0, -11166, this.moveUpCWOneSec,true);

		
		game.canvas.createTapNote(11500, 0, this.moveLeftCCWOneSec,true);
		game.canvas.createTapNote(-11500, 0, this.moveRightCCWOneSec,true);
		game.canvas.createTapNote(0, 11833, this.moveDownCWOneSec,true);
		game.canvas.createTapNote(0, -11833, this.moveUpCWOneSec,true);
		game.canvas.createTapNote(-12166, 0, this.moveRightCCWOneSec,true);
		game.canvas.createTapNote(12166, 0, this.moveLeftCCWOneSec,true);
		game.canvas.createTapNote(0, -12500, this.moveUpCWOneSec,true); 
		game.canvas.createTapNote(0, 12500, this.moveDownCWOneSec,true); //765
		
	},
	110: function (game){
		game.canvas.createFlickNote(2833, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(2916, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3000, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3083, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3166, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3250, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3333, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3416, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3500, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3583, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3666, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3750, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3833, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(3916, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(4000, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createFlickNote(0, 2833, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 2916, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3000, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3083, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3166, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3250, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3333, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3416, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3500, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3583, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3666, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3750, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3833, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 3916, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 4000, this.moveDownCCWOneSec);
		
		game.canvas.createFlickNote(-2833, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-2916, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3000, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3083, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3166, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3250, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3333, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3416, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3500, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3583, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3666, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3750, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3833, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-3916, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-4000, 0, this.moveRightCCWOneSec);
		
		game.canvas.createFlickNote(0, -2833, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -2916, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3000, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3083, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3166, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3250, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3333, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3416, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3500, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3583, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3666, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3750, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3833, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -3916, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -4000, this.moveUpCCWOneSec);//825
		
		
		game.canvas.createTapNote(4166, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(4333, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(4500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(4666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(4833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5166, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5333, 0, this.moveLeftCWOneSec);
		
		game.canvas.createTapNote(5500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(5833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6166, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6333, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(6666, 0, this.moveLeftCWOneSec);
		
		game.canvas.createTapNote(6833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7000, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7166, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7333, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7500, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7666, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(7833, 0, this.moveLeftCWOneSec);
		game.canvas.createTapNote(8000, 0, this.moveLeftCWOneSec);  //849
		
		game.canvas.createFlickNote(8166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8250, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8333, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8416, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8500, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8583, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8666, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8750, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8833, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(8916, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(9000, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(9083, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(9166, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(9250, 0, this.moveLeftCWOneSec);
		game.canvas.createFlickNote(9333, 0, this.moveLeftCWOneSec);
		
		game.canvas.createFlickNote(-8166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8250, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8333, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8416, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8500, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8583, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8666, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8750, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8833, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-8916, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-9000, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-9083, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-9166, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-9250, 0, this.moveRightCWOneSec);
		game.canvas.createFlickNote(-9333, 0, this.moveRightCWOneSec);
		
		game.canvas.createFlickNote(0, 8166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8333, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8416, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8500, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8583, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8666, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8750, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8833, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 8916, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 9000, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 9083, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 9166, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 9250, this.moveDownCWOneSec);
		game.canvas.createFlickNote(0, 9333, this.moveDownCWOneSec);
		
		game.canvas.createFlickNote(0, -8166, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8250, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8333, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8416, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8500, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8583, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8666, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8750, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8833, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -8916, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -9000, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -9083, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -9166, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -9250, this.moveUpCWOneSec);
		game.canvas.createFlickNote(0, -9333, this.moveUpCWOneSec);
		
		
		game.canvas.createFlickNote(8166, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8250, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8333, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8416, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8500, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8583, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8666, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8750, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8833, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(8916, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9000, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9083, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9166, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9250, 0, this.moveLeftCCWOneSec);
		game.canvas.createFlickNote(9333, 0, this.moveLeftCCWOneSec);
		
		game.canvas.createFlickNote(-8166, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8250, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8333, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8416, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8500, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8583, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8666, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8750, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8833, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-8916, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-9000, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-9083, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-9166, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-9250, 0, this.moveRightCCWOneSec);
		game.canvas.createFlickNote(-9333, 0, this.moveRightCCWOneSec);
		
		game.canvas.createFlickNote(0, 8166, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8250, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8333, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8416, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8500, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8583, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8666, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8750, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8833, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 8916, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 9000, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 9083, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 9166, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 9250, this.moveDownCCWOneSec);
		game.canvas.createFlickNote(0, 9333, this.moveDownCCWOneSec);
		
		game.canvas.createFlickNote(0, -8166, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8250, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8333, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8416, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8500, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8583, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8666, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8750, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8833, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -8916, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -9000, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -9083, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -9166, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -9250, this.moveUpCCWOneSec);
		game.canvas.createFlickNote(0, -9333, this.moveUpCCWOneSec);  //969
	},
	114: function (game){
		game.canvas.rotate(-720, 4);
	},
	122: function (game){
		 game.end();
	},
}