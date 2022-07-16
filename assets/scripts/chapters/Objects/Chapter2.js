const Chapter2 = {
    name: "最終鬼畜妹フランドール・Ｓ",
    musicAuthor: "ビートまりお",
    imageAuthor: "Mukunoki Nanatsu",
    noteCounts: 1416,
	
	 //右側生成 往左移動 1s
	L(note) {
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
    R(note) {
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
    D(note) { 
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
    U(note) {
        let x = note.x, y = note.y;
        let step = 1000 / 60;
        if (y < -step) {
            y = y + step;
        } else {
            y = 0;
        }
        return {x, y};
    },
			//右方生成 逆時針(CCW)移動 1s
    LCCW(note) {
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
    RCCW(note) {
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
    DCCW(note) {
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
    UCCW(note) {
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
    LCW(note) {
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
    RCW(note) {
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
    DCW(note) {
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
    UCW(note) {
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
	
	0:function(game){
		game.canvas.createCheckCircle(0, 0);
	},
	1:function(game){
		//game.canvas.rotate(12600, 137);
		
		game.canvas.createDragNote(0, 1300, 0, 2300, this.D);
		game.canvas.createTapNote(1600, 0, this.L);
		game.canvas.createTapNote(-2200, 0, this.R);
		game.canvas.createTapNote(2800, 0, this.L);
		game.canvas.createTapNote(-3400, 0, this.R);
		
		game.canvas.createDragNote(0, -3700, 0, -2300, this.U);
		game.canvas.createTapNote(4000, 0, this.L);
		game.canvas.createTapNote(-4600, 0, this.R);
		game.canvas.createTapNote(5200, 0, this.L);
		game.canvas.createTapNote(-5800, 0, this.R);
		
		game.canvas.createDragNote(0, 6100, 0, 2300, this.D);
		game.canvas.createTapNote(6400, 0, this.L);
		game.canvas.createTapNote(-7000, 0, this.R);
		game.canvas.createTapNote(7600, 0, this.L);
		game.canvas.createTapNote(-8200, 0, this.R);
		
		game.canvas.createDragNote(0, -8500, 0, -1100, this.U);
		game.canvas.createTapNote(8800, 0, this.L);
		game.canvas.createTapNote(-9400, 0, this.R);

		game.canvas.createDragNote(0, 9700, 0, 1100, this.D);
		game.canvas.createTapNote(-10000, 0, this.R);
		game.canvas.createDragNote(0, -10300, 0, -500, this.U); 
		
		game.canvas.createTapNote(10900, 0, this.L);
		game.canvas.createTapNote(11200, 0, this.L);
		game.canvas.createTapNote(0, -11500, this.U);
		game.canvas.createTapNote(0, -11800, this.U);
		game.canvas.createTapNote(-12100, 0, this.R);
		game.canvas.createTapNote(-12400, 0, this.R);
		game.canvas.createTapNote(0, 12700, this.D);
		game.canvas.createTapNote(0, 13000, this.D); //29
	},
	2:function(game){
		setTimeout(function() {game.startPlayMusic();}, 227);
	},
	11:function(game){
		game.canvas.createDragNote(-3300, 0, -200, 0, this.R);
		game.canvas.createDragNote(3600, 0, 200, 0, this.L);
		game.canvas.createDragNote(-3900, 0, -200, 0, this.R);
		game.canvas.createDragNote(4200, 0, 200, 0, this.L);
		game.canvas.createDragNote(0, 4500, 0, 200, this.D);
		game.canvas.createDragNote(-4800, 0, -200, 0, this.R);
		game.canvas.createDragNote(0, -5100, 0, -200, this.U);
		game.canvas.createDragNote(5400, 0, 200, 0, this.L);
		
		game.canvas.createTapNote(5700, 0, this.L ,true);
		game.canvas.createTapNote(-5700, 0, this.R ,true);
		game.canvas.createTapNote(6000, 0, this.L ,true);
		game.canvas.createTapNote(-6000, 0, this.R ,true);
		game.canvas.createTapNote(0, 6300, this.D ,true);
		game.canvas.createTapNote(0, -6300, this.U ,true);
		game.canvas.createTapNote(0, 6600, this.D ,true);
		game.canvas.createTapNote(0, -6600, this.U ,true);
		game.canvas.createTapNote(6900, 0, this.L ,true);
		game.canvas.createTapNote(-6900, 0, this.R ,true);
		game.canvas.createTapNote(7200, 0, this.L ,true);
		game.canvas.createTapNote(-7200, 0, this.R ,true);
		game.canvas.createTapNote(0, 7500, this.D ,true);
		game.canvas.createTapNote(0, -7500, this.U ,true);
		game.canvas.createTapNote(0, 7800, this.D ,true);
		game.canvas.createTapNote(0, -7800, this.U ,true); //53
		
		game.canvas.createTapNote(8100, 0, this.L);	
		game.canvas.createTapNote(-8400, 0, this.R);	
		game.canvas.createTapNote(8700, 0, this.L);	
		game.canvas.createTapNote(0, -9000, this.U);	
		game.canvas.createTapNote(9150, 0, this.L);	
		game.canvas.createTapNote(-9450, 0, this.R);
		game.canvas.createTapNote(0, 9600, this.D);
		
		game.canvas.createDragNote(9900, 0, 600, 0, this.L);
		game.canvas.createDragNote(-9900, 0, -600, 0, this.R);
		game.canvas.createDragNote(0, 9900, 0, 600, this.D);
		game.canvas.createDragNote(0, -9900, 0, -600, this.U); 
		
		game.canvas.createFlickNote(9975, 0, this.L);
		game.canvas.createFlickNote(10050, 0, this.L);
		game.canvas.createFlickNote(10125, 0, this.L);
		game.canvas.createFlickNote(10200, 0, this.L);
		game.canvas.createFlickNote(10275, 0, this.L);
		game.canvas.createFlickNote(10350, 0, this.L);
		game.canvas.createFlickNote(10425, 0, this.L);
		game.canvas.createFlickNote(10500, 0, this.L);
		
		game.canvas.createFlickNote(-9975, 0, this.R);
		game.canvas.createFlickNote(-10050, 0, this.R);
		game.canvas.createFlickNote(-10125, 0, this.R);
		game.canvas.createFlickNote(-10200, 0, this.R);
		game.canvas.createFlickNote(-10275, 0, this.R);
		game.canvas.createFlickNote(-10350, 0, this.R);
		game.canvas.createFlickNote(-10425, 0, this.R);
		game.canvas.createFlickNote(-10500, 0, this.R);
		
		game.canvas.createFlickNote(0, 9975, this.D);
		game.canvas.createFlickNote(0, 10050, this.D);
		game.canvas.createFlickNote(0, 10125, this.D);
		game.canvas.createFlickNote(0, 10200, this.D);
		game.canvas.createFlickNote(0, 10275, this.D);
		game.canvas.createFlickNote(0, 10350, this.D);
		game.canvas.createFlickNote(0, 10425, this.D);
		game.canvas.createFlickNote(0, 10500, this.D);
		
		game.canvas.createFlickNote(0, -9975, this.U);
		game.canvas.createFlickNote(0, -10050, this.U);
		game.canvas.createFlickNote(0, -10125, this.U);
		game.canvas.createFlickNote(0, -10200, this.U);
		game.canvas.createFlickNote(0, -10275, this.U);
		game.canvas.createFlickNote(0, -10350, this.U);
		game.canvas.createFlickNote(0, -10425, this.U);
		game.canvas.createFlickNote(0, -10500, this.U); //96
		
		game.canvas.createTapNote(10800, 0, this.LCW ,true);
		game.canvas.createTapNote(-10800, 0, this.RCW ,true);
		game.canvas.createTapNote(11100, 0, this.LCW ,true);
		game.canvas.createTapNote(-11100, 0, this.RCW ,true);
		game.canvas.createTapNote(11400, 0, this.LCW ,true);
		game.canvas.createTapNote(-11400, 0, this.RCW ,true);
		game.canvas.createTapNote(11550, 0, this.LCW ,true);
		game.canvas.createTapNote(-11550, 0, this.RCW ,true);
		game.canvas.createTapNote(11850, 0, this.LCW ,true);
		game.canvas.createTapNote(-11850, 0, this.RCW ,true);
		game.canvas.createTapNote(12000, 0, this.LCW ,true);
		game.canvas.createTapNote(-12000, 0, this.RCW ,true);
		game.canvas.createTapNote(12300, 0, this.LCW ,true);
		game.canvas.createTapNote(-12300, 0, this.RCW ,true);
		game.canvas.createTapNote(12600, 0, this.LCW ,true);
		game.canvas.createTapNote(-12600, 0, this.RCW ,true); //112
	},
	21: function (game){
		game.canvas.rotate(-360, 0.5);
		
		game.canvas.createTapNote(0, 2900, this.DCCW );
		game.canvas.createTapNote(0, -3050, this.UCCW );
		game.canvas.createTapNote(0, 3200, this.DCCW );
		game.canvas.createTapNote(0, -3350, this.UCCW );
		game.canvas.createTapNote(0, 3500, this.DCCW );
		game.canvas.createTapNote(0, -3650, this.UCCW );
		game.canvas.createTapNote(0, 3800, this.DCCW );
		game.canvas.createTapNote(0, -3950, this.UCCW );
		game.canvas.createTapNote(4100, 0, this.LCCW );
		game.canvas.createTapNote(-4250, 0, this.RCCW );
		game.canvas.createTapNote(4400, 0, this.LCCW );
		game.canvas.createTapNote(-4550, 0, this.RCCW );
		game.canvas.createTapNote(4700, 0, this.LCCW );
		game.canvas.createTapNote(-4850, 0, this.RCCW );
		game.canvas.createTapNote(5000, 0, this.LCCW );
		game.canvas.createTapNote(-5150, 0, this.RCCW );  //128
	
		game.canvas.createTapNote(5300, 0, this.LCW ,true);
		game.canvas.createTapNote(-5300, 0, this.RCW ,true);
		game.canvas.createTapNote(5600, 0, this.LCW ,true);
		game.canvas.createTapNote(-5600, 0, this.RCW ,true);
		game.canvas.createTapNote(5900, 0, this.LCW ,true);
		game.canvas.createTapNote(-5900, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -6200, this.UCCW ,true);
		game.canvas.createTapNote(0, 6200, this.DCCW ,true);
		game.canvas.createTapNote(0, -6350, this.UCCW ,true);
		game.canvas.createTapNote(0, 6350, this.DCCW ,true);
		game.canvas.createTapNote(0, -6650, this.UCCW ,true);
		game.canvas.createTapNote(0, 6650, this.DCCW ,true);
		game.canvas.createTapNote(0, -6800, this.UCCW ,true);
		game.canvas.createTapNote(0, 6800, this.DCCW ,true);
		game.canvas.createTapNote(7100, 0, this.LCW ,true);
		game.canvas.createTapNote(-7100, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -7400, this.UCW ,true);
		game.canvas.createTapNote(0, 7400, this.DCW ,true); //146
		
		game.canvas.createTapNote(7700, 0, this.LCW);
		game.canvas.createTapNote(0, 7850, this.DCW);
		game.canvas.createTapNote(8000, 0, this.LCW);
		game.canvas.createTapNote(0, 8150, this.DCW);
		game.canvas.createTapNote(8300, 0, this.LCW);
		game.canvas.createTapNote(0, 8450, this.DCW);
		game.canvas.createTapNote(8600, 0, this.LCW);
		game.canvas.createTapNote(0, 8750, this.DCW);
		game.canvas.createTapNote(8900, 0, this.LCW);
		game.canvas.createTapNote(0, 9050, this.DCW);
		game.canvas.createTapNote(9200, 0, this.LCW);
		game.canvas.createTapNote(0, 9350, this.DCW);
		game.canvas.createTapNote(9500, 0, this.LCW);
		game.canvas.createTapNote(0, 9650, this.DCW);
		game.canvas.createTapNote(9800, 0, this.LCW);
		game.canvas.createTapNote(0, 9950, this.DCW);
		game.canvas.createTapNote(10100, 0, this.LCW);  //163
		
		game.canvas.createTapNote(10400, 0, this.LCW ,true);
		game.canvas.createTapNote(-10400, 0, this.RCW ,true);
		game.canvas.createTapNote(10700, 0, this.LCCW ,true);
		game.canvas.createTapNote(-10700, 0, this.RCCW ,true);
		game.canvas.createTapNote(11000, 0, this.LCW ,true);
		game.canvas.createTapNote(-11000, 0, this.RCW ,true);
		game.canvas.createTapNote(11150, 0, this.LCCW ,true);
		game.canvas.createTapNote(-11150, 0, this.RCCW ,true);
		game.canvas.createTapNote(11450, 0, this.LCW ,true);
		game.canvas.createTapNote(-11450, 0, this.RCW ,true);
		game.canvas.createTapNote(11600, 0, this.LCCW ,true);
		game.canvas.createTapNote(-11600, 0, this.RCCW ,true);
		game.canvas.createTapNote(11900, 0, this.LCW ,true);
		game.canvas.createTapNote(-11900, 0, this.RCW ,true);
		game.canvas.createTapNote(12200, 0, this.LCCW ,true);
		game.canvas.createTapNote(-12200, 0, this.RCCW ,true); //179
	},
	31: function (game){
		game.canvas.createTapNote(2500, 0, this.LCW);
		game.canvas.createTapNote(2650, 0, this.LCW);
		game.canvas.createTapNote(2800, 0, this.LCW);
		game.canvas.createTapNote(2950, 0, this.LCW);
		game.canvas.createTapNote(3100, 0, this.LCW);
		game.canvas.createTapNote(3250, 0, this.LCW);
		game.canvas.createTapNote(3400, 0, this.LCW);
		game.canvas.createTapNote(3550, 0, this.LCW);
		game.canvas.createTapNote(3700, 0, this.LCW);
		game.canvas.createTapNote(3850, 0, this.LCW);
		game.canvas.createTapNote(4000, 0, this.LCW);
		game.canvas.createTapNote(4150, 0, this.LCW);
		game.canvas.createTapNote(4300, 0, this.LCW);
		game.canvas.createTapNote(4450, 0, this.LCW);
		game.canvas.createTapNote(4600, 0, this.LCW);
		game.canvas.createTapNote(4750, 0, this.LCW);  //195
		
		game.canvas.createTapNote(4900, 0, this.L ,true);
		game.canvas.createTapNote(-4900, 0, this.R ,true);
		game.canvas.createTapNote(0, 5200, this.D ,true);
		game.canvas.createTapNote(0, -5200, this.U ,true);
		game.canvas.createTapNote(-5500, 0, this.R ,true);
		game.canvas.createTapNote(5500, 0, this.L ,true);
		game.canvas.createTapNote(0, 5800, this.D ,true);
		game.canvas.createTapNote(0, -5800, this.U ,true);
		game.canvas.createTapNote(-5950, 0, this.R ,true);
		game.canvas.createTapNote(5950, 0, this.L ,true);
		game.canvas.createTapNote(0, 6250, this.D ,true);
		game.canvas.createTapNote(0, -6250, this.U ,true);
		game.canvas.createTapNote(6400, 0, this.L ,true); 
		game.canvas.createTapNote(-6400, 0, this.R ,true);
		game.canvas.createTapNote(0, -6700, this.U ,true);
		game.canvas.createTapNote(0, 6700, this.D ,true);
		game.canvas.createTapNote(-7000, 0, this.R ,true);
		game.canvas.createTapNote(7000, 0, this.L ,true); //213
		
		game.canvas.createTapNote(7300, 0, this.LCW);
		game.canvas.createTapNote(-7450, 0, this.RCCW);
		game.canvas.createTapNote(0, 7600, this.DCW);
		game.canvas.createTapNote(0, -7750, this.UCCW);
		game.canvas.createTapNote(7900, 0, this.LCCW);
		game.canvas.createTapNote(-8050, 0, this.RCW);
		game.canvas.createTapNote(0, 8200, this.DCCW);
		game.canvas.createTapNote(0, -8350, this.UCW);
		game.canvas.createTapNote(8500, 0, this.LCW);
		game.canvas.createTapNote(-8650, 0, this.RCCW);
		game.canvas.createTapNote(0, 8800, this.DCW);
		game.canvas.createTapNote(0, -8950, this.UCCW);
		game.canvas.createTapNote(9100, 0, this.LCCW); //226
		
		game.canvas.createFlickNote(9175, 0, this.LCW);
		game.canvas.createFlickNote(9250, 0, this.LCW);
		game.canvas.createFlickNote(9325, 0, this.LCW);
		game.canvas.createFlickNote(9400, 0, this.LCW);
		game.canvas.createFlickNote(9475, 0, this.LCW);
		game.canvas.createFlickNote(9550, 0, this.LCW);
		game.canvas.createFlickNote(9625, 0, this.LCW);
		game.canvas.createFlickNote(9700, 0, this.LCW);
		
		game.canvas.createFlickNote(-9175, 0, this.RCW);
		game.canvas.createFlickNote(-9250, 0, this.RCW);
		game.canvas.createFlickNote(-9325, 0, this.RCW);
		game.canvas.createFlickNote(-9400, 0, this.RCW);
		game.canvas.createFlickNote(-9475, 0, this.RCW);
		game.canvas.createFlickNote(-9550, 0, this.RCW);
		game.canvas.createFlickNote(-9625, 0, this.RCW);
		game.canvas.createFlickNote(-9700, 0, this.RCW); //242
		
		game.canvas.createTapNote(10000, 0, this.L);
		game.canvas.createTapNote(-10300, 0, this.R);
		game.canvas.createTapNote(10600, 0, this.L, true);
		game.canvas.createTapNote(-10600, 0, this.R, true);
		game.canvas.createTapNote(10750, 0, this.L, true);
		game.canvas.createTapNote(-10750, 0, this.R, true); //248

	},
	40: function (game){
		game.canvas.rotate(-360, 1);
	},
	41: function (game){
		game.canvas.createTapNote(1050, 0, this.LCW);
		game.canvas.createTapNote(0, 1200, this.DCW);
		game.canvas.createTapNote(-1350, 0, this.RCW);
		game.canvas.createTapNote(0, -1500, this.UCW);
		game.canvas.createFlickNote(0, -1575, this.UCW);
		game.canvas.createFlickNote(0, -1650, this.UCW);
		game.canvas.createFlickNote(0, -1725, this.UCW);
		game.canvas.createFlickNote(0, -1800, this.UCW);
		game.canvas.createTapNote(0, 1800, this.DCW ,true);
		game.canvas.createFlickNote(0, 1875, this.DCW);
		game.canvas.createFlickNote(0, 1950, this.DCW);
		game.canvas.createFlickNote(0, 2025, this.DCW);
		game.canvas.createFlickNote(0, 2100, this.DCW); //254
		
		game.canvas.createTapNote(2100, 0, this.LCCW);
		game.canvas.createTapNote(0, 2250, this.DCCW);
		game.canvas.createTapNote(-2400, 0, this.RCCW);
		game.canvas.createTapNote(0, -2550, this.UCCW);
		game.canvas.createTapNote(2700, 0, this.LCCW);
		game.canvas.createTapNote(0, 2850, this.DCCW); //267
		
		game.canvas.createDragNote(-3000, 0, -1100, 0, this.R);
		game.canvas.createFlickNote(3300, 0, this.L);
		game.canvas.createFlickNote(0, -3300, this.U);
		game.canvas.createFlickNote(0, 3300, this.D);
		game.canvas.createFlickNote(3600, 0, this.L);
		game.canvas.createFlickNote(0, -3600, this.U);
		game.canvas.createFlickNote(0, 3600, this.D);
		game.canvas.createFlickNote(3900, 0, this.L);
		game.canvas.createFlickNote(0, -3900, this.U);
		game.canvas.createFlickNote(0, 3900, this.D);
		game.canvas.createFlickNote(4200, 0, this.L);
		game.canvas.createFlickNote(0, -4200, this.U);
		game.canvas.createFlickNote(0, 4200, this.D); //280
		
		game.canvas.createTapNote(4500, 0, this.LCW);
		game.canvas.createTapNote(0, 4800, this.DCW);
		game.canvas.createTapNote(-5100, 0, this.RCW);
		game.canvas.createTapNote(0, 5400, this.DCW ,true);
		game.canvas.createTapNote(0, -5400, this.UCW ,true);
		game.canvas.createTapNote(0, 5550, this.DCW ,true);
		game.canvas.createTapNote(0, -5550, this.UCW ,true);
		
		game.canvas.createTapNote(5850, 0, this.LCW);
		game.canvas.createTapNote(6000, 0, this.LCW);
		game.canvas.createTapNote(6150, 0, this.LCW);
		game.canvas.createTapNote(6300, 0, this.LCW);
		game.canvas.createFlickNote(6375, 0, this.LCW);
		game.canvas.createFlickNote(6450, 0, this.LCW);
		game.canvas.createFlickNote(6525, 0, this.LCW);
		game.canvas.createFlickNote(6600, 0, this.LCW);
		game.canvas.createTapNote(-6600, 0, this.RCW ,true);
		game.canvas.createFlickNote(-6675, 0, this.RCW);
		game.canvas.createFlickNote(-6750, 0, this.RCW);
		game.canvas.createFlickNote(-6825, 0, this.RCW);
		game.canvas.createFlickNote(-6900, 0, this.RCW); //300
		
		game.canvas.createTapNote(0, 6900, this.DCW);
		game.canvas.createTapNote(0, 7050, this.DCW);
		game.canvas.createTapNote(0, 7200, this.DCW);
		game.canvas.createTapNote(0, 7350, this.DCW);
		game.canvas.createTapNote(0, 7500, this.DCW);
		game.canvas.createTapNote(0, 7650, this.DCW);
		game.canvas.createTapNote(0, -7800, this.UCW ,true);
		game.canvas.createTapNote(0, 7800, this.DCW ,true);
		game.canvas.createFlickNote(0, 7875, this.DCW);
		game.canvas.createFlickNote(0, -7875, this.UCW);
		game.canvas.createFlickNote(0, 7950, this.DCW);
		game.canvas.createFlickNote(0, -7950, this.UCW);
		game.canvas.createFlickNote(0, 8025, this.DCW);
		game.canvas.createFlickNote(0, -8025, this.UCW);
		
		game.canvas.createDragNote(-8100, 0, -800, 0, this.R);
		game.canvas.createDragNote(8100, 0, 800, 0, this.L);
		game.canvas.createFlickNote(8175, 0, this.L);
		game.canvas.createFlickNote(8250, 0, this.L);
		game.canvas.createFlickNote(8325, 0, this.L);
		game.canvas.createFlickNote(8400, 0, this.L);
		game.canvas.createFlickNote(8475, 0, this.L);
		game.canvas.createFlickNote(8550, 0, this.L);
		game.canvas.createFlickNote(8625, 0, this.L);
		game.canvas.createFlickNote(8700, 0, this.L);
		game.canvas.createFlickNote(8775, 0, this.L);
		game.canvas.createFlickNote(8850, 0, this.L);
		game.canvas.createFlickNote(8925, 0, this.L);
		game.canvas.createFlickNote(9000, 0, this.L);
		
		game.canvas.createFlickNote(-8175, 0, this.R);
		game.canvas.createFlickNote(-8250, 0, this.R);
		game.canvas.createFlickNote(-8325, 0, this.R);
		game.canvas.createFlickNote(-8400, 0, this.R);
		game.canvas.createFlickNote(-8475, 0, this.R);
		game.canvas.createFlickNote(-8550, 0, this.R);
		game.canvas.createFlickNote(-8625, 0, this.R);
		game.canvas.createFlickNote(-8700, 0, this.R);
		game.canvas.createFlickNote(-8775, 0, this.R);
		game.canvas.createFlickNote(-8850, 0, this.R);
		game.canvas.createFlickNote(-8925, 0, this.R);
		game.canvas.createFlickNote(-9000, 0, this.R); //340
		
		
		game.canvas.createTapNote(9300, 0, this.LCW ,true);
		game.canvas.createTapNote(-9300, 0, this.RCW ,true);
		game.canvas.createTapNote(9600, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9600, 0, this.RCCW ,true);
		game.canvas.createTapNote(9900, 0, this.LCW ,true);
		game.canvas.createTapNote(-9900, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -10200, this.UCW ,true);
		game.canvas.createTapNote(0, 10200, this.DCW ,true);
		game.canvas.createTapNote(10350, 0, this.LCCW ,true);
		game.canvas.createTapNote(-10350, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -10650, this.UCW ,true);
		game.canvas.createTapNote(0, 10650, this.DCW ,true);
		game.canvas.createTapNote(0, -10800, this.UCW ,true);
		game.canvas.createTapNote(0, 10800, this.DCW ,true);
		game.canvas.createTapNote(0, -10950, this.UCW ,true);
		game.canvas.createTapNote(0, 10950, this.DCW ,true); //356
	},
	49: function (game){
		game.canvas.rotate(720, 1);
	},
	51: function (game){
		game.canvas.createTapNote(1100, 0, this.LCW ,true);
		game.canvas.createTapNote(-1100, 0, this.RCW ,true);
		game.canvas.createFlickNote(1175, 0, this.LCW);
		game.canvas.createFlickNote(-1175, 0, this.RCW);
		game.canvas.createFlickNote(1250, 0, this.LCW);
		game.canvas.createFlickNote(-1250, 0, this.RCW);
		game.canvas.createFlickNote(1325, 0, this.LCW);
		game.canvas.createFlickNote(-1325, 0, this.RCW);
		
		game.canvas.createTapNote(0, -1400, this.UCW ,true);
		game.canvas.createTapNote(0, 1400, this.DCW ,true);
		game.canvas.createFlickNote(0, 1475, this.DCW);
		game.canvas.createFlickNote(0, -1475, this.UCW);
		game.canvas.createFlickNote(0, 1550, this.DCW);
		game.canvas.createFlickNote(0, -1550, this.UCW);
		game.canvas.createFlickNote(0, 1625, this.DCW);
		game.canvas.createFlickNote(0, -1625, this.UCW); //372
		
		game.canvas.createTapNote(1700, 0, this.LCCW);
		game.canvas.createTapNote(0, 1850, this.DCCW);
		game.canvas.createTapNote(-2000, 0, this.RCCW);
		game.canvas.createTapNote(0, -2150, this.UCCW);
		game.canvas.createTapNote(-2300, 0, this.RCCW);
		game.canvas.createTapNote(0, 2450, this.DCCW);
		
		game.canvas.createDragNote(0, 2600, 0, 1100, this.D);
		game.canvas.createDragNote(0, -2600, 0, -1100, this.U);
		game.canvas.createTapNote(2900, 0, this.L ,true);
		game.canvas.createTapNote(-2900, 0, this.R ,true);
		game.canvas.createTapNote(3200, 0, this.L ,true);
		game.canvas.createTapNote(-3200, 0, this.R ,true);
		game.canvas.createTapNote(3500, 0, this.L ,true);
		game.canvas.createTapNote(-3500, 0, this.R ,true);
		game.canvas.createTapNote(3800, 0, this.L ,true);
		game.canvas.createTapNote(-3800, 0, this.R ,true); //388
		
		
		game.canvas.createTapNote(4100, 0, this.LCCW ,true);
		game.canvas.createTapNote(0, -4100, this.UCCW ,true);
		game.canvas.createTapNote(4400, 0, this.LCCW ,true);
		game.canvas.createTapNote(-4400, 0, this.RCCW ,true);
		game.canvas.createTapNote(4700, 0, this.LCCW ,true);
		game.canvas.createTapNote(0, 4700, this.DCCW ,true);
		game.canvas.createTapNote(5000, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5000, 0, this.RCCW ,true);
		game.canvas.createTapNote(5150, 0, this.LCCW ,true);
		game.canvas.createTapNote(0, -5150, this.UCCW ,true);		
		game.canvas.createTapNote(5450, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5450, 0, this.RCCW ,true);
		game.canvas.createTapNote(5600, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5600, 0, this.RCCW ,true);
		game.canvas.createTapNote(5750, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5750, 0, this.RCCW ,true); //404
		
		game.canvas.createTapNote(0, -5900, this.UCCW ,true);
		game.canvas.createTapNote(0, 5900, this.DCCW ,true);
		game.canvas.createFlickNote(0, 5975, this.DCCW);
		game.canvas.createFlickNote(0, -5975, this.UCCW);
		game.canvas.createFlickNote(0, 6050, this.DCCW);
		game.canvas.createFlickNote(0, -6050, this.UCCW);
		game.canvas.createFlickNote(0, 6125, this.DCCW);
		game.canvas.createFlickNote(0, -6125, this.UCCW);
		
		game.canvas.createTapNote(6200, 0, this.LCCW ,true);
		game.canvas.createTapNote(-6200, 0, this.RCCW ,true);
		game.canvas.createFlickNote(6275, 0, this.LCCW);
		game.canvas.createFlickNote(-6275, 0, this.RCCW);
		game.canvas.createFlickNote(6350, 0, this.LCCW);
		game.canvas.createFlickNote(-6350, 0, this.RCCW);
		game.canvas.createFlickNote(6425, 0, this.LCCW);
		game.canvas.createFlickNote(-6425, 0, this.RCCW); //420
		
		game.canvas.createTapNote(0, -6500, this.UCCW ,true);
		game.canvas.createTapNote(0, 6500, this.DCCW ,true);
		game.canvas.createTapNote(0, -6650, this.UCW ,true);
		game.canvas.createTapNote(0, 6650, this.DCW ,true);
		game.canvas.createTapNote(0, -6800, this.UCCW ,true);
		game.canvas.createTapNote(0, 6800, this.DCCW ,true);
		game.canvas.createTapNote(0, -6950, this.UCW ,true);
		game.canvas.createTapNote(0, 6950, this.DCW ,true);
		game.canvas.createTapNote(0, -7100, this.UCCW ,true);
		game.canvas.createTapNote(0, 7100, this.DCCW ,true);
		game.canvas.createTapNote(0, -7250, this.UCW ,true);
		game.canvas.createTapNote(0, 7250, this.DCW ,true);
		game.canvas.createTapNote(0, -7400, this.UCCW ,true);
		game.canvas.createTapNote(0, 7400, this.DCCW ,true);
		game.canvas.createFlickNote(0, 7475, this.DCCW);
		game.canvas.createFlickNote(0, -7475, this.UCCW);
		game.canvas.createFlickNote(0, 7550, this.DCCW);
		game.canvas.createFlickNote(0, -7550, this.UCCW);
		game.canvas.createFlickNote(0, 7625, this.DCCW);
		game.canvas.createFlickNote(0, -7625, this.UCCW); //440
		
		game.canvas.createDragNote(7700, 0, 800, 0, this.L);
		game.canvas.createDragNote(-7700, 0, -800, 0, this.R);
		game.canvas.createTapNote(0, -8000, this.U ,true);
		game.canvas.createTapNote(0, 8000, this.D ,true);
		game.canvas.createTapNote(0, -8300, this.U ,true);
		game.canvas.createTapNote(0, 8300, this.D ,true);
		game.canvas.createTapNote(0, -8600, this.U ,true);
		game.canvas.createTapNote(0, 8600, this.D ,true);
		
		game.canvas.createFlickNote(7775, 0, this.L);
		game.canvas.createFlickNote(-7775, 0, this.R);
		game.canvas.createFlickNote(7850, 0, this.L);
		game.canvas.createFlickNote(-7850, 0, this.R);
		game.canvas.createFlickNote(7925, 0, this.L);
		game.canvas.createFlickNote(-7925, 0, this.R);
		game.canvas.createFlickNote(8000, 0, this.L);
		game.canvas.createFlickNote(-8000, 0, this.R);
		game.canvas.createFlickNote(8075, 0, this.L);
		game.canvas.createFlickNote(-8075, 0, this.R);
		game.canvas.createFlickNote(8150, 0, this.L);
		game.canvas.createFlickNote(-8150, 0, this.R);
		game.canvas.createFlickNote(8225, 0, this.L);
		game.canvas.createFlickNote(-8225, 0, this.R);
		game.canvas.createFlickNote(8300, 0, this.L);
		game.canvas.createFlickNote(-8300, 0, this.R);
		game.canvas.createFlickNote(8375, 0, this.L);
		game.canvas.createFlickNote(-8375, 0, this.R);
		game.canvas.createFlickNote(8450, 0, this.L);
		game.canvas.createFlickNote(-8450, 0, this.R);
		game.canvas.createFlickNote(8525, 0, this.L);
		game.canvas.createFlickNote(-8525, 0, this.R);
		game.canvas.createFlickNote(8600, 0, this.L);
		game.canvas.createFlickNote(-8600, 0, this.R); //472
		
		game.canvas.createTapNote(8900, 0, this.LCCW);
		game.canvas.createTapNote(-9200, 0, this.RCCW);
		game.canvas.createTapNote(0, -9500, this.UCCW);
		game.canvas.createTapNote(0, 9800, this.DCCW);
		game.canvas.createTapNote(10100, 0, this.LCCW);
		game.canvas.createTapNote(-10400, 0, this.RCCW);
		game.canvas.createTapNote(0, -10700, this.UCCW);
		game.canvas.createTapNote(0, 11000, this.DCCW);  //480
	},
	58: function (game){
		game.canvas.rotate(360, 1);
	},
	59: function (game){
		game.canvas.rotate(1800, 10);
	},
	61: function (game){
		game.canvas.createTapNote(1300, 0, this.LCW);
		game.canvas.createTapNote(-1450, 0, this.RCW);
		game.canvas.createTapNote(0, -1600, this.UCW);
		game.canvas.createTapNote(0, 1750, this.DCW);
		game.canvas.createTapNote(1900, 0, this.LCW);
		game.canvas.createTapNote(-2050, 0, this.RCW);
		game.canvas.createTapNote(0, -2200, this.UCW);
		game.canvas.createTapNote(0, 2350, this.DCW);
		game.canvas.createTapNote(2500, 0, this.LCW);
		game.canvas.createTapNote(-2650, 0, this.RCW);
		game.canvas.createTapNote(0, -2800, this.UCW);
		game.canvas.createTapNote(0, 2950, this.DCW);
		game.canvas.createTapNote(3100, 0, this.LCW);
		game.canvas.createTapNote(-3250, 0, this.RCW);
		game.canvas.createTapNote(0, -3400, this.UCW);
		game.canvas.createTapNote(0, 3550, this.DCW);  //496
		
		
		game.canvas.createTapNote(3700, 0, this.LCCW);
		game.canvas.createTapNote(0, -4000, this.UCCW);
		game.canvas.createTapNote(0, 4300, this.DCCW);
		game.canvas.createTapNote(-4600, 0, this.RCCW);
		game.canvas.createTapNote(4900, 0, this.LCCW);
		game.canvas.createTapNote(0, -5200, this.UCCW);
		game.canvas.createTapNote(0, 5500, this.DCCW);
		game.canvas.createTapNote(-5800, 0, this.RCCW);
		
		game.canvas.createTapNote(6100, 0, this.LCW);
		game.canvas.createTapNote(-6250, 0, this.RCW);
		game.canvas.createTapNote(0, -6400, this.UCW);
		game.canvas.createTapNote(0, 6550, this.DCW);
		game.canvas.createTapNote(6700, 0, this.LCW);
		game.canvas.createTapNote(-6850, 0, this.RCW);
		game.canvas.createTapNote(0, -7000, this.UCW);
		game.canvas.createTapNote(0, 7150, this.DCW);
		game.canvas.createTapNote(7300, 0, this.LCW);
		game.canvas.createTapNote(-7450, 0, this.RCW);
		game.canvas.createTapNote(0, -7600, this.UCW);
		game.canvas.createTapNote(0, 7750, this.DCW);
		game.canvas.createTapNote(7900, 0, this.LCW);
		game.canvas.createTapNote(-8050, 0, this.RCW);
		game.canvas.createTapNote(0, -8200, this.UCW);
		game.canvas.createTapNote(0, 8350, this.DCW);  //520
		
		
		game.canvas.createTapNote(8500, 0, this.LCW);
		game.canvas.createTapNote(8800, 0, this.LCW);
		game.canvas.createTapNote(9100, 0, this.LCW);
		game.canvas.createTapNote(9400, 0, this.LCW);
		game.canvas.createTapNote(9550, 0, this.LCW);
		game.canvas.createTapNote(9850, 0, this.LCW);
		game.canvas.createTapNote(10000, 0, this.LCW);
		game.canvas.createTapNote(10150, 0, this.LCW);
		game.canvas.createTapNote(10300, 0, this.LCW);
		game.canvas.createFlickNote(10375, 0, this.LCW);
		game.canvas.createFlickNote(10450, 0, this.LCW);
		game.canvas.createFlickNote(10525, 0, this.LCW);
		game.canvas.createTapNote(-10600, 0, this.RCW);
		game.canvas.createFlickNote(-10675, 0, this.RCW);
		game.canvas.createFlickNote(-10750, 0, this.RCW);
		game.canvas.createFlickNote(-10825, 0, this.RCW);
		game.canvas.createTapNote(-10900, 0, this.RCW);
		game.canvas.createTapNote(-11050, 0, this.RCW);
		game.canvas.createTapNote(-11200, 0, this.RCW);
		game.canvas.createTapNote(-11350, 0, this.RCW);
		game.canvas.createTapNote(-11500, 0, this.RCW);
		game.canvas.createTapNote(-11650, 0, this.RCW);
		game.canvas.createDragNote(-11800, 0, -1100, 0, this.R);
		game.canvas.createTapNote(12100, 0, this.L);
		game.canvas.createTapNote(12400, 0, this.L);
		game.canvas.createTapNote(12700, 0, this.L);
		game.canvas.createTapNote(13000, 0, this.L); //547
	},
	71: function (game){
		game.canvas.createTapNote(3300, 0, this.LCCW);
		game.canvas.createTapNote(3600, 0, this.LCCW);
		game.canvas.createTapNote(3900, 0, this.LCCW);
		game.canvas.createTapNote(4100, 0, this.LCCW);
		game.canvas.createTapNote(4350, 0, this.LCCW);
		game.canvas.createTapNote(4650, 0, this.LCCW);
		game.canvas.createTapNote(4800, 0, this.LCCW);
		game.canvas.createTapNote(4950, 0, this.LCCW);
		game.canvas.createTapNote(5100, 0, this.LCCW);
		game.canvas.createFlickNote(5175, 0, this.LCCW);
		game.canvas.createFlickNote(5250, 0, this.LCCW);
		game.canvas.createFlickNote(5325, 0, this.LCCW);
		game.canvas.createTapNote(-5400, 0, this.RCCW);
		game.canvas.createFlickNote(-5475, 0, this.RCCW);
		game.canvas.createFlickNote(-5550, 0, this.RCCW);
		game.canvas.createFlickNote(-5625, 0, this.RCCW);
		game.canvas.createTapNote(-5700, 0, this.RCCW);
		game.canvas.createTapNote(-5850, 0, this.RCCW);
		game.canvas.createTapNote(-6000, 0, this.RCCW);
		game.canvas.createTapNote(-6150, 0, this.RCCW);
		game.canvas.createTapNote(-6300, 0, this.RCCW);
		game.canvas.createTapNote(-6450, 0, this.RCCW);
		game.canvas.createTapNote(-6600, 0, this.RCCW);
		game.canvas.createFlickNote(-6675, 0, this.RCCW);
		game.canvas.createFlickNote(-6750, 0, this.RCCW);
		game.canvas.createFlickNote(-6825, 0, this.RCCW);
		game.canvas.createDragNote(-6900, 0, -800, 0, this.R);
		game.canvas.createTapNote(7200, 0, this.L ,true);
		game.canvas.createTapNote(7500, 0, this.L ,true);
		game.canvas.createTapNote(7800, 0, this.L ,true);
		game.canvas.createFlickNote(0, 7200, this.D);
		game.canvas.createFlickNote(0, 7500, this.D);
		game.canvas.createFlickNote(0, 7800, this.D);
		game.canvas.createFlickNote(0, -7200, this.U);
		game.canvas.createFlickNote(0, -7500, this.U);
		game.canvas.createFlickNote(0, -7800, this.U);  //583
		
		
		
		game.canvas.createTapNote(8100, 0, this.LCCW ,true);
		game.canvas.createTapNote(-8100, 0, this.RCCW ,true);
		game.canvas.createTapNote(8400, 0, this.LCCW ,true);
		game.canvas.createTapNote(-8400, 0, this.RCCW ,true);
		game.canvas.createTapNote(8700, 0, this.LCCW ,true);
		game.canvas.createTapNote(-8700, 0, this.RCCW ,true);
		
		game.canvas.createTapNote(9000, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9000, 0, this.RCCW ,true);
		game.canvas.createTapNote(9150, 0, this.LCW ,true);
		game.canvas.createTapNote(-9150, 0, this.RCW ,true);
		game.canvas.createTapNote(9450, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9450, 0, this.RCCW ,true);
		game.canvas.createTapNote(9600, 0, this.LCW ,true);
		game.canvas.createTapNote(-9600, 0, this.RCW ,true);
		game.canvas.createTapNote(9750, 0, this.LCW ,true);
		game.canvas.createTapNote(-9750, 0, this.RCW ,true); //599
		
		game.canvas.createTapNote(0, -9900, this.UCW ,true);
		game.canvas.createTapNote(0, 9900, this.DCW ,true);
		game.canvas.createFlickNote(0, 9975, this.DCW);
		game.canvas.createFlickNote(0, -9975, this.UCW);
		game.canvas.createFlickNote(0, 10050, this.DCW);
		game.canvas.createFlickNote(0, -10050, this.UCW);
		game.canvas.createFlickNote(0, 10125, this.DCW);
		game.canvas.createFlickNote(0, -10125, this.UCW);
		
		game.canvas.createTapNote(10200, 0, this.LCW ,true);
		game.canvas.createTapNote(-10200, 0, this.RCW ,true);
		game.canvas.createFlickNote(10275, 0, this.LCW);
		game.canvas.createFlickNote(-10275, 0, this.RCW);
		game.canvas.createFlickNote(10350, 0, this.LCW);
		game.canvas.createFlickNote(-10350, 0, this.RCW);
		game.canvas.createFlickNote(10425, 0, this.LCW);
		game.canvas.createFlickNote(-10425, 0, this.RCW);
		
		game.canvas.createTapNote(0, -10500, this.UCCW ,true);
		game.canvas.createTapNote(0, 10500, this.DCCW ,true);
		game.canvas.createTapNote(0, -10650, this.UCCW ,true);
		game.canvas.createTapNote(0, 10650, this.DCCW ,true);
		game.canvas.createTapNote(0, -10800, this.UCCW ,true);
		game.canvas.createTapNote(0, 10800, this.DCCW ,true);
		game.canvas.createTapNote(0, -10950, this.UCCW ,true);
		game.canvas.createTapNote(0, 10950, this.DCCW ,true);
		game.canvas.createTapNote(0, -11100, this.UCCW ,true);
		game.canvas.createTapNote(0, 11100, this.DCCW ,true);
		game.canvas.createTapNote(0, -11250, this.UCCW ,true);
		game.canvas.createTapNote(0, 11250, this.DCCW ,true);  //627
		
		game.canvas.createDragNote(-11400, 0, -1100, 0, this.R);
		game.canvas.createDragNote(11400, 0, 1100, 0, this.L);
		game.canvas.createTapNote(0, -11700, this.U ,true);
		game.canvas.createTapNote(0, 11700, this.D ,true);
		game.canvas.createTapNote(0, -12000, this.U ,true);
		game.canvas.createTapNote(0, 12000, this.D ,true);
		game.canvas.createTapNote(0, -12300, this.U ,true);
		game.canvas.createTapNote(0, 12300, this.D ,true);
		game.canvas.createTapNote(0, -12600, this.U ,true);
		game.canvas.createTapNote(0, 12600, this.D ,true);  //637
	},
	81: function (game){
		game.canvas.createTapNote(2900, 0, this.LCW ,true);
		game.canvas.createTapNote(-2900, 0, this.RCW ,true);
		game.canvas.createTapNote(3200, 0, this.LCW ,true);
		game.canvas.createTapNote(-3200, 0, this.RCW ,true);
		game.canvas.createTapNote(3500, 0, this.LCW ,true);
		game.canvas.createTapNote(-3500, 0, this.RCW ,true);
		
		game.canvas.createTapNote(3800, 0, this.LCW ,true);
		game.canvas.createTapNote(-3800, 0, this.RCW ,true);
		game.canvas.createTapNote(3950, 0, this.LCCW ,true);
		game.canvas.createTapNote(-3950, 0, this.RCCW ,true);
		game.canvas.createTapNote(4250, 0, this.LCW ,true);
		game.canvas.createTapNote(-4250, 0, this.RCW ,true);
		game.canvas.createTapNote(4400, 0, this.LCCW ,true);
		game.canvas.createTapNote(-4400, 0, this.RCCW ,true);
		game.canvas.createTapNote(4550, 0, this.LCCW ,true);
		game.canvas.createTapNote(-4550, 0, this.RCCW ,true); //599
		
		game.canvas.createTapNote(0, -4700, this.UCCW ,true);
		game.canvas.createTapNote(0, 4700, this.DCCW ,true);
		game.canvas.createFlickNote(0, 4775, this.DCCW);
		game.canvas.createFlickNote(0, -4775, this.UCCW);
		game.canvas.createFlickNote(0, 4850, this.DCCW);
		game.canvas.createFlickNote(0, -4850, this.UCCW);
		game.canvas.createFlickNote(0, 4925, this.DCCW);
		game.canvas.createFlickNote(0, -4925, this.UCCW);
		
		game.canvas.createTapNote(5000, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5000, 0, this.RCCW ,true);
		game.canvas.createFlickNote(5075, 0, this.LCCW);
		game.canvas.createFlickNote(-5075, 0, this.RCCW);
		game.canvas.createFlickNote(5150, 0, this.LCCW);
		game.canvas.createFlickNote(-5150, 0, this.RCCW);
		game.canvas.createFlickNote(5225, 0, this.LCCW);
		game.canvas.createFlickNote(-5225, 0, this.RCCW);
		
		game.canvas.createTapNote(0, -5300, this.UCW ,true);
		game.canvas.createTapNote(0, 5300, this.DCW ,true);
		game.canvas.createTapNote(0, -5450, this.UCW ,true);
		game.canvas.createTapNote(0, 5450, this.DCW ,true);
		game.canvas.createTapNote(0, -5600, this.UCW ,true);
		game.canvas.createTapNote(0, 5600, this.DCW ,true);
		game.canvas.createTapNote(0, -5750, this.UCW ,true);
		game.canvas.createTapNote(0, 5750, this.DCW ,true);
		game.canvas.createTapNote(0, -5900, this.UCW ,true);
		game.canvas.createTapNote(0, 5900, this.DCW ,true);
		game.canvas.createTapNote(0, -6050, this.UCW ,true);
		game.canvas.createTapNote(0, 6050, this.DCW ,true);
		game.canvas.createTapNote(0, -6200, this.UCW ,true);
		game.canvas.createTapNote(0, 6200, this.DCW ,true);
		game.canvas.createTapNote(0, -6350, this.UCW ,true);
		game.canvas.createTapNote(0, 6350, this.DCW ,true);
		
		game.canvas.createDragNote(6500, 0, 800, 0, this.LCW);
		game.canvas.createDragNote(-6500, 0, -800, 0, this.RCW);
		game.canvas.createDragNote(0, 6500, 0, 800, this.DCW);
		game.canvas.createDragNote(0, -6500, 0, -800, this.UCW); //689
		
		
		
		game.canvas.createDragNote(7700, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-7700, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 8000, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -8000, 0, -200, this.UCW);		
		game.canvas.createDragNote(8300, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-8300, 0, -200, 0, this.RCW);				
		game.canvas.createDragNote(0, 8600, 0, 50, this.DCW);
		game.canvas.createDragNote(0, -8600, 0, -50, this.UCW);	
		game.canvas.createDragNote(8750, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-8750, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 9050, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -9050, 0, -50, this.UCW);		
		game.canvas.createDragNote(9200, 0, 50, 0, this.LCW);
		game.canvas.createDragNote(-9200, 0, -50, 0, this.RCW);
		game.canvas.createDragNote(0, 9350, 0, 50, this.DCW);
		game.canvas.createDragNote(0, -9350, 0, -50, this.UCW);
		game.canvas.createDragNote(9500, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-9500, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 9800, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -9800, 0, -200, this.UCW);
		
		game.canvas.createDragNote(10100, 0, 20, 0, this.LCW);
		game.canvas.createDragNote(0, 10250, 0, 20, this.DCW);
		game.canvas.createDragNote(-10400, 0, -20, 0, this.RCW);
		game.canvas.createDragNote(0, -10550, 0, -20, this.UCW);
		game.canvas.createDragNote(10700, 0, 20, 0, this.LCW);
		game.canvas.createDragNote(0, 10850, 0, 20, this.DCW);
		
		game.canvas.createDragNote(0, 11000, 0, 1100, this.D);
		game.canvas.createDragNote(0, -11000, 0, -1100, this.U);
		game.canvas.createDragNote(11000, 0, 200, 0, this.L);
		game.canvas.createDragNote(-11300, 0, -200, 0, this.R);
		game.canvas.createDragNote(11600, 0, 200, 0, this.L);
		game.canvas.createDragNote(-11900, 0, -200, 0, this.R); //721		
	},
	87:function(game){
		setTimeout(function() {game.canvas.rotate(720, 1);}, 500);
	},
	91: function (game){
		game.canvas.createDragNote(2500, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-2500, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 2800, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -2800, 0, -200, this.UCW);		
		game.canvas.createDragNote(3100, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-3100, 0, -200, 0, this.RCW);		
		game.canvas.createDragNote(0, 3400, 0, 50, this.DCW);
		game.canvas.createDragNote(0, -3400, 0, -50, this.UCW);		
		game.canvas.createDragNote(3550, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-3550, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 3850, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -3850, 0, -50, this.UCW);		
		game.canvas.createDragNote(4000, 0, 50, 0, this.LCW);
		game.canvas.createDragNote(-4000, 0, -50, 0, this.RCW);
		game.canvas.createDragNote(0, 4150, 0, 50, this.DCW);
		game.canvas.createDragNote(0, -4150, 0, -50, this.UCW);
		game.canvas.createDragNote(4300, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-4300, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 4600, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -4600, 0, -200, this.UCW); //741
		
		game.canvas.createDragNote(4900, 0, 20, 0, this.LCW);
		game.canvas.createTapNote(-4900, 0, this.RCW ,true);
		game.canvas.createDragNote(0, 5050, 0, 20, this.DCW);
		game.canvas.createTapNote(0, -5050, this.UCW ,true);
		game.canvas.createDragNote(-5200, 0, -20, 0, this.RCW);
		game.canvas.createTapNote(5200, 0, this.LCW ,true);
		game.canvas.createDragNote(0, -5350, 0, -20, this.UCW);
		game.canvas.createTapNote(0, 5350, this.DCW ,true);
		game.canvas.createDragNote(5500, 0, 20, 0, this.LCW);
		game.canvas.createTapNote(-5500, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -5650, this.UCW);  //752
		
		game.canvas.createDragNote(5800, 0, 1100, 0, this.L);
		game.canvas.createDragNote(-5800, 0, -1100, 0, this.R);
		game.canvas.createDragNote(0, 5800, 0, 200, this.D);
		game.canvas.createDragNote(0, -6100, 0, -200, this.U);
		game.canvas.createDragNote(0, 6400, 0, 200, this.D);
		game.canvas.createDragNote(0, -6700, 0, -200, this.U);  //758
		
		
		
		game.canvas.createTapNote(7300, 0, this.LCCW ,true);
		game.canvas.createTapNote(-7300, 0, this.RCCW ,true);
		game.canvas.createFlickNote(7375, 0, this.LCCW);
		game.canvas.createFlickNote(-7375, 0, this.RCCW);
		game.canvas.createFlickNote(7450, 0, this.LCCW);
		game.canvas.createFlickNote(-7450, 0, this.RCCW);
		game.canvas.createFlickNote(7525, 0, this.LCCW);
		game.canvas.createFlickNote(-7525, 0, this.RCCW);
		
		game.canvas.createTapNote(7600, 0, this.LCW ,true);
		game.canvas.createTapNote(-7600, 0, this.RCW ,true);
		game.canvas.createFlickNote(7675, 0, this.LCW);
		game.canvas.createFlickNote(-7675, 0, this.RCW);
		game.canvas.createFlickNote(7750, 0, this.LCW);
		game.canvas.createFlickNote(-7750, 0, this.RCW);
		game.canvas.createFlickNote(7825, 0, this.LCW);
		game.canvas.createFlickNote(-7825, 0, this.RCW);
		
		game.canvas.createTapNote(7900, 0, this.LCCW ,true);
		game.canvas.createTapNote(-7900, 0, this.RCCW ,true);
		game.canvas.createFlickNote(7975, 0, this.LCCW);
		game.canvas.createFlickNote(-7975, 0, this.RCCW);
		game.canvas.createFlickNote(8050, 0, this.LCCW);
		game.canvas.createFlickNote(-8050, 0, this.RCCW);
		game.canvas.createFlickNote(8125, 0, this.LCCW);
		game.canvas.createFlickNote(-8125, 0, this.RCCW);
		
		game.canvas.createTapNote(8200, 0, this.LCW ,true);
		game.canvas.createTapNote(-8200, 0, this.RCW ,true);
		game.canvas.createFlickNote(8275, 0, this.LCW);
		game.canvas.createFlickNote(-8275, 0, this.RCW);
		game.canvas.createFlickNote(8350, 0, this.LCW);
		game.canvas.createFlickNote(-8350, 0, this.RCW);
		game.canvas.createFlickNote(8425, 0, this.LCW);
		game.canvas.createFlickNote(-8425, 0, this.RCW);
		
		game.canvas.createTapNote(8500, 0, this.LCCW ,true);
		game.canvas.createTapNote(-8500, 0, this.RCCW ,true);
		game.canvas.createFlickNote(8575, 0, this.LCCW);
		game.canvas.createFlickNote(-8575, 0, this.RCCW);
		game.canvas.createFlickNote(8650, 0, this.LCCW);
		game.canvas.createFlickNote(-8650, 0, this.RCCW);
		game.canvas.createFlickNote(8725, 0, this.LCCW);
		game.canvas.createFlickNote(-8725, 0, this.RCCW);
		
		game.canvas.createTapNote(8800, 0, this.LCW ,true);
		game.canvas.createTapNote(-8800, 0, this.RCW ,true);
		game.canvas.createFlickNote(8875, 0, this.LCW);
		game.canvas.createFlickNote(-8875, 0, this.RCW);
		game.canvas.createFlickNote(8950, 0, this.LCW);
		game.canvas.createFlickNote(-8950, 0, this.RCW);
		game.canvas.createFlickNote(9025, 0, this.LCW);
		game.canvas.createFlickNote(-9025, 0, this.RCW);
		
		game.canvas.createTapNote(9100, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9100, 0, this.RCCW ,true);
		game.canvas.createFlickNote(9175, 0, this.LCCW);
		game.canvas.createFlickNote(-9175, 0, this.RCCW);
		game.canvas.createFlickNote(9250, 0, this.LCCW);
		game.canvas.createFlickNote(-9250, 0, this.RCCW);
		game.canvas.createFlickNote(9325, 0, this.LCCW);
		game.canvas.createFlickNote(-9325, 0, this.RCCW);
		
		game.canvas.createTapNote(9400, 0, this.LCW ,true);
		game.canvas.createTapNote(-9400, 0, this.RCW ,true);
		game.canvas.createFlickNote(9475, 0, this.LCW);
		game.canvas.createFlickNote(-9475, 0, this.RCW);
		game.canvas.createFlickNote(9550, 0, this.LCW);
		game.canvas.createFlickNote(-9550, 0, this.RCW);
		game.canvas.createFlickNote(9625, 0, this.LCW);
		game.canvas.createFlickNote(-9625, 0, this.RCW);  //822
		
		game.canvas.createTapNote(9700, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9700, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, 9850, this.DCCW);
		game.canvas.createTapNote(10000, 0, this.LCCW ,true);
		game.canvas.createTapNote(-10000, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -10150, this.UCCW);
		game.canvas.createTapNote(10300, 0, this.LCCW ,true);
		game.canvas.createTapNote(-10300, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, 10450, this.DCCW);
		game.canvas.createTapNote(0, -10525, this.UCCW);
		game.canvas.createTapNote(0, 10600, this.DCCW);
		game.canvas.createTapNote(0, -10750, this.UCCW); //834
		
		game.canvas.createDragNote(10900, 0, 200, 0, this.L);
		game.canvas.createFlickNote(0, -10900, this.U);
		game.canvas.createFlickNote(-10900, 0, this.R);
		game.canvas.createFlickNote(0, 10900, this.D);
		game.canvas.createDragNote(0, -11200, 0, -200, this.U);
		game.canvas.createFlickNote(11200, 0, this.L);
		game.canvas.createFlickNote(-11200, 0, this.R);
		game.canvas.createFlickNote(0, 11200, this.D);
		game.canvas.createDragNote(-11500, 0, -200, 0, this.R);
		game.canvas.createFlickNote(0, -11500, this.U);
		game.canvas.createFlickNote(11500, 0, this.L);
		game.canvas.createFlickNote(0, 11500, this.D);
		game.canvas.createDragNote(0, -11800, 0, -200, this.D);
		game.canvas.createFlickNote(11800, 0, this.L );
		game.canvas.createFlickNote(-11800, 0, this.R );
		game.canvas.createFlickNote(0, -11800, this.U ); //850
	},
	101: function (game){
		game.canvas.createDragNote(0, 2100, 0, 200, this.D);
		game.canvas.createDragNote(0, -2100, 0, -200, this.U);
		game.canvas.createFlickNote(0, 2175, this.D);
		game.canvas.createFlickNote(0, -2175, this.U);
		game.canvas.createFlickNote(0, 2250, this.D);
		game.canvas.createFlickNote(0, -2250, this.U);
		game.canvas.createFlickNote(0, 2325, this.D);
		game.canvas.createFlickNote(0, -2325, this.U);
		
		game.canvas.createDragNote(2400, 0, 200, 0, this.L);
		game.canvas.createDragNote(-2400, 0, -200, 0, this.R);
		game.canvas.createFlickNote(2475, 0, this.L);
		game.canvas.createFlickNote(-2475, 0, this.R);
		game.canvas.createFlickNote(2550, 0, this.L);
		game.canvas.createFlickNote(-2550, 0, this.R);
		game.canvas.createFlickNote(2625, 0, this.L);
		game.canvas.createFlickNote(-2625, 0, this.R);
		
		game.canvas.createDragNote(0, 2700, 0, 200, this.D);
		game.canvas.createDragNote(0, -2700, 0, -200, this.U);
		game.canvas.createFlickNote(0, 2775, this.D);
		game.canvas.createFlickNote(0, -2775, this.U);
		game.canvas.createFlickNote(0, 2850, this.D);
		game.canvas.createFlickNote(0, -2850, this.U);
		game.canvas.createFlickNote(0, 2925, this.D);
		game.canvas.createFlickNote(0, -2925, this.U);
		
		game.canvas.createDragNote(3000, 0, 200, 0, this.L);
		game.canvas.createDragNote(-3000, 0, -200, 0, this.R);
		game.canvas.createFlickNote(3075, 0, this.L);
		game.canvas.createFlickNote(-3075, 0, this.R);
		game.canvas.createFlickNote(3150, 0, this.L);
		game.canvas.createFlickNote(-3150, 0, this.R);
		game.canvas.createFlickNote(3225, 0, this.L);
		game.canvas.createFlickNote(-3225, 0, this.R);
		
		game.canvas.createDragNote(0, 3300, 0, 200, this.D);
		game.canvas.createDragNote(0, -3300, 0, -200, this.U);
		game.canvas.createFlickNote(0, 3375, this.D);
		game.canvas.createFlickNote(0, -3375, this.U);
		game.canvas.createFlickNote(0, 3450, this.D);
		game.canvas.createFlickNote(0, -3450, this.U);
		game.canvas.createFlickNote(0, 3525, this.D);
		game.canvas.createFlickNote(0, -3525, this.U);
		
		game.canvas.createDragNote(3600, 0, 200, 0, this.L);
		game.canvas.createDragNote(-3600, 0, -200, 0, this.R);
		game.canvas.createFlickNote(3675, 0, this.L);
		game.canvas.createFlickNote(-3675, 0, this.R);
		game.canvas.createFlickNote(3750, 0, this.L);
		game.canvas.createFlickNote(-3750, 0, this.R);
		game.canvas.createFlickNote(3825, 0, this.L);
		game.canvas.createFlickNote(-3825, 0, this.R);
		
		game.canvas.createDragNote(0, 3900, 0, 200, this.D);
		game.canvas.createDragNote(0, -3900, 0, -200, this.U);
		game.canvas.createFlickNote(0, 3975, this.D);
		game.canvas.createFlickNote(0, -3975, this.U);
		game.canvas.createFlickNote(0, 4050, this.D);
		game.canvas.createFlickNote(0, -4050, this.U);
		game.canvas.createFlickNote(0, 4125, this.D);
		game.canvas.createFlickNote(0, -4125, this.U);
		
		game.canvas.createDragNote(4200, 0, 200, 0, this.L);
		game.canvas.createDragNote(-4200, 0, -200, 0, this.R);
		game.canvas.createFlickNote(4275, 0, this.L);
		game.canvas.createFlickNote(-4275, 0, this.R);
		game.canvas.createFlickNote(4350, 0, this.L);
		game.canvas.createFlickNote(-4350, 0, this.R);
		game.canvas.createFlickNote(4425, 0, this.L);
		game.canvas.createFlickNote(-4425, 0, this.R);  //914
		
		
		game.canvas.createTapNote(4500, 0, this.LCCW ,true);
		game.canvas.createTapNote(-4500, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -4650, this.UCCW ,true);
		game.canvas.createTapNote(0, 4650, this.DCCW ,true);
		game.canvas.createTapNote(4800, 0, this.LCCW ,true);
		game.canvas.createTapNote(-4800, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -4950, this.UCCW ,true);
		game.canvas.createTapNote(0, 4950, this.DCCW ,true);
		game.canvas.createTapNote(5100, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5100, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -5250, this.UCCW ,true);
		game.canvas.createTapNote(0, 5250, this.DCCW ,true);
		game.canvas.createTapNote(5400, 0, this.LCCW ,true);
		game.canvas.createTapNote(-5400, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -5550, this.UCCW ,true);
		game.canvas.createTapNote(0, 5550, this.DCCW ,true);  //930
		
		game.canvas.createDragNote(5700, 0, 800, 0, this.L);
		game.canvas.createDragNote(-5700, 0, -800, 0, this.R);
		game.canvas.createDragNote(0, 5700, 0, 800, this.D);
		game.canvas.createDragNote(0, -5700, 0, -800, this.U);  //934
		
		game.canvas.createFlickNote(5775, 0, this.L);
		game.canvas.createFlickNote(5850, 0, this.L);
		game.canvas.createFlickNote(5925, 0, this.L);
		game.canvas.createFlickNote(6000, 0, this.L);
		game.canvas.createFlickNote(6075, 0, this.L);
		game.canvas.createFlickNote(6150, 0, this.L);
		game.canvas.createFlickNote(6225, 0, this.L);
		game.canvas.createFlickNote(6300, 0, this.L);
		game.canvas.createFlickNote(6375, 0, this.L);
		game.canvas.createFlickNote(6450, 0, this.L);
		game.canvas.createFlickNote(6525, 0, this.L);
		game.canvas.createFlickNote(6600, 0, this.L);
		
		game.canvas.createFlickNote(-5775, 0, this.R);
		game.canvas.createFlickNote(-5850, 0, this.R);
		game.canvas.createFlickNote(-5925, 0, this.R);
		game.canvas.createFlickNote(-6000, 0, this.R);
		game.canvas.createFlickNote(-6075, 0, this.R);
		game.canvas.createFlickNote(-6150, 0, this.R);
		game.canvas.createFlickNote(-6225, 0, this.R);
		game.canvas.createFlickNote(-6300, 0, this.R);
		game.canvas.createFlickNote(-6375, 0, this.R);
		game.canvas.createFlickNote(-6450, 0, this.R);
		game.canvas.createFlickNote(-6525, 0, this.R);
		game.canvas.createFlickNote(-6600, 0, this.R);
		
		game.canvas.createFlickNote(0, 5775, this.D);
		game.canvas.createFlickNote(0, 5850, this.D);
		game.canvas.createFlickNote(0, 5925, this.D);
		game.canvas.createFlickNote(0, 6000, this.D);
		game.canvas.createFlickNote(0, 6075, this.D);
		game.canvas.createFlickNote(0, 6150, this.D);
		game.canvas.createFlickNote(0, 6225, this.D);
		game.canvas.createFlickNote(0, 6300, this.D);
		game.canvas.createFlickNote(0, 6375, this.D);
		game.canvas.createFlickNote(0, 6450, this.D);
		game.canvas.createFlickNote(0, 6525, this.D);
		game.canvas.createFlickNote(0, 6600, this.D);
		
		game.canvas.createFlickNote(0, -5775, this.U);
		game.canvas.createFlickNote(0, -5850, this.U);
		game.canvas.createFlickNote(0, -5925, this.U);
		game.canvas.createFlickNote(0, -6000, this.U);
		game.canvas.createFlickNote(0, -6075, this.U);
		game.canvas.createFlickNote(0, -6150, this.U);
		game.canvas.createFlickNote(0, -6225, this.U);
		game.canvas.createFlickNote(0, -6300, this.U);
		game.canvas.createFlickNote(0, -6375, this.U);
		game.canvas.createFlickNote(0, -6450, this.U);
		game.canvas.createFlickNote(0, -6525, this.U);
		game.canvas.createFlickNote(0, -6600, this.U); //982
		
		
		
		game.canvas.createTapNote(6900, 0, this.LCCW ,true);
		game.canvas.createTapNote(-6900, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -7050, this.UCW);
		game.canvas.createTapNote(0, 7200, this.DCW);
		game.canvas.createTapNote(7350, 0, this.LCCW ,true);
		game.canvas.createTapNote(-73500, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -7500, this.UCW);
		game.canvas.createTapNote(0, 7650, this.DCW);
		game.canvas.createTapNote(7800, 0, this.LCCW ,true);
		game.canvas.createTapNote(-7800, 0, this.RCCW ,true);
		
		game.canvas.createDragNote(8100, 0, 200, 0, this.L);
		game.canvas.createDragNote(-8100, 0, -200, 0, this.R);
		game.canvas.createDragNote(0, 8550, 0, 350, this.D);
		game.canvas.createDragNote(0, -8550, 0, -350, this.U);	//996
				
		game.canvas.createTapNote(9300, 0, this.LCCW ,true);
		game.canvas.createTapNote(-9300, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -9450, this.UCW);
		game.canvas.createTapNote(0, 9600, this.DCCW);
		game.canvas.createTapNote(9750, 0, this.LCW ,true);
		game.canvas.createTapNote(-9750, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -9900, this.UCCW);
		game.canvas.createTapNote(0, 10150, this.DCW);
		game.canvas.createTapNote(10200, 0, this.LCCW ,true);
		game.canvas.createTapNote(-10200, 0, this.RCCW ,true);
		
		game.canvas.createDragNote(10500, 0, 200, 0, this.L);
		game.canvas.createDragNote(-10500, 0, -200, 0, this.R);
		game.canvas.createDragNote(0, 10500, 0, 200, this.D);
		game.canvas.createDragNote(10950, 0, 350, 0, this.L);
		game.canvas.createDragNote(-10950, 0, -350, 0, this.R);
		game.canvas.createDragNote(0, -10950, 0, -350, this.U); //1012
	},
	106:function(game){
		setTimeout(function() {game.canvas.rotate(-720, 1);}, 700);
	},
	111:function (game){
		game.canvas.createTapNote(1700, 0, this.LCCW ,true);
		game.canvas.createTapNote(-1700, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -1850, this.D);
		game.canvas.createTapNote(0, 2000, this.D);
		game.canvas.createTapNote(2150, 0, this.LCW ,true);
		game.canvas.createTapNote(-2150, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -2300, this.U);
		game.canvas.createTapNote(0, 2450, this.U);
		game.canvas.createTapNote(2600, 0, this.LCCW ,true);
		game.canvas.createTapNote(-2600, 0, this.RCCW ,true);
		
		game.canvas.createDragNote(2900, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-2900, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 2900, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -2900, 0, -200, this.UCW);
		game.canvas.createDragNote(3350, 0, 350, 0, this.LCCW);
		game.canvas.createDragNote(-3350, 0, -350, 0, this.RCCW);
		game.canvas.createDragNote(0, 3350, 0, 350, this.DCCW);
		game.canvas.createDragNote(0, -3350, 0, -350, this.UCCW); //1030
		
		game.canvas.createTapNote(4100, 0, this.L ,true);
		game.canvas.createTapNote(-4100, 0, this.R ,true);
		game.canvas.createTapNote(0, -4250, this.DCW);
		game.canvas.createTapNote(0, 4400, this.DCW);
		game.canvas.createTapNote(4550, 0, this.L ,true);
		game.canvas.createTapNote(-4550, 0, this.R ,true);
		game.canvas.createTapNote(0, -4700, this.UCW);
		game.canvas.createTapNote(0, 4850, this.UCW);
		game.canvas.createTapNote(5000, 0, this.L ,true);
		game.canvas.createTapNote(-5000, 0, this.R ,true);
		
		game.canvas.createDragNote(5300, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-5300, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 5300, 0, 200, this.DCCW);
		game.canvas.createDragNote(0, -5300, 0, -200, this.UCCW);
		game.canvas.createDragNote(5750, 0, 350, 0, this.LCW);
		game.canvas.createDragNote(-5750, 0, -350, 0, this.RCW);
		game.canvas.createDragNote(0, 5750, 0, 350, this.DCCW);
		game.canvas.createDragNote(0, -5750, 0, -350, this.UCCW); //1048
		
		game.canvas.createTapNote(6500, 0, this.LCCW ,true);
		game.canvas.createTapNote(-6500, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -6650, this.DCW);
		game.canvas.createTapNote(0, 6800, this.DCW);
		game.canvas.createTapNote(6950, 0, this.LCCW ,true);
		game.canvas.createTapNote(-6950, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, -7100, this.UCW);
		game.canvas.createTapNote(0, 7250, this.UCW);
		game.canvas.createTapNote(7400, 0, this.LCCW ,true);
		game.canvas.createTapNote(-7400, 0, this.RCCW ,true);
		
		game.canvas.createDragNote(7700, 0, 200, 0, this.LCW);
		game.canvas.createDragNote(-7700, 0, -200, 0, this.RCW);
		game.canvas.createDragNote(0, 7700, 0, 200, this.DCW);
		game.canvas.createDragNote(0, -7700, 0, -200, this.UCW);
		game.canvas.createDragNote(8150, 0, 350, 0, this.LCW);
		game.canvas.createDragNote(-8150, 0, -350, 0, this.RCW);
		game.canvas.createDragNote(0, 8150, 0, 350, this.DCW);
		game.canvas.createDragNote(0, -8150, 0, -350, this.UCW);
		
		game.canvas.createTapNote(8900, 0, this.LCW ,true);
		game.canvas.createTapNote(-8900, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -9050, this.DCCW);
		game.canvas.createTapNote(0, 9200, this.DCCW);
		game.canvas.createTapNote(9350, 0, this.LCW ,true);
		game.canvas.createTapNote(-9350, 0, this.RCW ,true);
		game.canvas.createTapNote(0, -9500, this.UCCW);
		game.canvas.createTapNote(0, 9650, this.UCCW);
		game.canvas.createTapNote(9800, 0, this.LCW ,true);
		game.canvas.createTapNote(-9800, 0, this.RCW ,true);
		
		game.canvas.createDragNote(10100, 0, 200, 0, this.LCCW);
		game.canvas.createDragNote(-10100, 0, -200, 0, this.RCCW);
		game.canvas.createDragNote(0, 10100, 0, 200, this.DCCW);
		game.canvas.createDragNote(0, -10100, 0, -200, this.UCCW);
		game.canvas.createDragNote(10550, 0, 350, 0, this.LCCW);
		game.canvas.createDragNote(-10550, 0, -350, 0, this.RCCW);
		game.canvas.createDragNote(0, 10550, 0, 350, this.DCCW);
		game.canvas.createDragNote(0, -10550, 0, -350, this.UCCW); //1084
	},
	117:function(game){
		setTimeout(function() {game.canvas.rotate(900, 5);}, 500);
	},
	121:function(game){
		game.canvas.createTapNote(1300, 0, this.LCW ,true);
		game.canvas.createTapNote(-1300, 0, this.RCW ,true);
		game.canvas.createTapNote(0, 1300, this.DCW ,true);
		game.canvas.createTapNote(0, -1300, this.UCW ,true);
		game.canvas.createTapNote(1450, 0, this.LCCW ,true);
		game.canvas.createTapNote(-1450, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, 1450, this.DCCW ,true);
		game.canvas.createTapNote(0, -1450, this.UCCW ,true);
		game.canvas.createTapNote(1600, 0, this.LCW ,true);
		game.canvas.createTapNote(-1600, 0, this.RCW ,true);
		game.canvas.createTapNote(0, 1600, this.DCW ,true);
		game.canvas.createTapNote(0, -1600, this.UCW ,true);
		game.canvas.createTapNote(1750, 0, this.LCCW ,true);
		game.canvas.createTapNote(-1750, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, 1750, this.DCCW ,true);
		game.canvas.createTapNote(0, -1750, this.UCCW ,true);
		game.canvas.createTapNote(1900, 0, this.LCW ,true);
		game.canvas.createTapNote(-1900, 0, this.RCW ,true);
		game.canvas.createTapNote(0, 1900, this.DCW ,true);
		game.canvas.createTapNote(0, -1900, this.UCW ,true);
		game.canvas.createTapNote(2050, 0, this.LCCW ,true);
		game.canvas.createTapNote(-2050, 0, this.RCCW ,true);
		game.canvas.createTapNote(0, 2050, this.DCCW ,true);
		game.canvas.createTapNote(0, -2050, this.UCCW ,true);
		game.canvas.createTapNote(2200, 0, this.LCW ,true);
		game.canvas.createTapNote(-2200, 0, this.RCW ,true);
		game.canvas.createTapNote(0, 2200, this.DCW ,true);
		game.canvas.createTapNote(0, -2200, this.UCW ,true);  //1112
		
		game.canvas.createDragNote(2500, 0, 200, 0, this.L);
		game.canvas.createDragNote(-2500, 0, -200, 0, this.R);
		game.canvas.createDragNote(0, 2500, 0, 200, this.D);
		game.canvas.createDragNote(0, -2500, 0, -200, this.U);
		game.canvas.createDragNote(2950, 0, 350, 0, this.L);
		game.canvas.createDragNote(-2950, 0, -350, 0, this.R);
		game.canvas.createDragNote(0, 2950, 0, 350, this.D);
		game.canvas.createDragNote(0, -2950, 0, -350, this.U);  //1120
		
		
		game.canvas.createTapNote(3700, 0, this.L ,true);
		game.canvas.createTapNote(-3700, 0, this.R ,true);
		game.canvas.createTapNote(0, 3700, this.D ,true);
		game.canvas.createTapNote(0, -3700, this.U ,true);
		game.canvas.createTapNote(3850, 0, this.L ,true);
		game.canvas.createTapNote(-3850, 0, this.R ,true);
		game.canvas.createTapNote(0, 3850, this.D ,true);
		game.canvas.createTapNote(0, -3850, this.U ,true);
		game.canvas.createTapNote(4000, 0, this.L ,true);
		game.canvas.createTapNote(-4000, 0, this.R ,true);
		game.canvas.createTapNote(0, 4000, this.D ,true);
		game.canvas.createTapNote(0, -4000, this.U ,true);
		game.canvas.createTapNote(4150, 0, this.L ,true);
		game.canvas.createTapNote(-4150, 0, this.R ,true);
		game.canvas.createTapNote(0, 4150, this.D ,true);
		game.canvas.createTapNote(0, -4150, this.U ,true);
		game.canvas.createTapNote(4300, 0, this.L ,true);
		game.canvas.createTapNote(-4300, 0, this.R ,true);
		game.canvas.createTapNote(0, 4300, this.D ,true);
		game.canvas.createTapNote(0, -4300, this.U ,true);
		game.canvas.createTapNote(4450, 0, this.L ,true);
		game.canvas.createTapNote(-4450, 0, this.R ,true);
		game.canvas.createTapNote(0, 4450, this.D ,true);
		game.canvas.createTapNote(0, -4450, this.U ,true);
		game.canvas.createTapNote(4600, 0, this.L ,true);
		game.canvas.createTapNote(-4600, 0, this.R ,true);
		game.canvas.createTapNote(0, 4600, this.D ,true);
		game.canvas.createTapNote(0, -4600, this.U ,true);
		
		game.canvas.createFlickNote(3700, 0, this.LCCW);
		game.canvas.createFlickNote(-3700, 0, this.RCCW);
		game.canvas.createFlickNote(0, 3700, this.DCCW);
		game.canvas.createFlickNote(0, -3700, this.UCCW);
		game.canvas.createFlickNote(3850, 0, this.LCCW);
		game.canvas.createFlickNote(-3850, 0, this.RCCW);
		game.canvas.createFlickNote(0, 3850, this.DCCW);
		game.canvas.createFlickNote(0, -3850, this.UCCW);
		game.canvas.createFlickNote(4000, 0, this.LCCW);
		game.canvas.createFlickNote(-4000, 0, this.RCCW);
		game.canvas.createFlickNote(0, 4000, this.DCCW);
		game.canvas.createFlickNote(0, -4000, this.UCCW);
		game.canvas.createFlickNote(4150, 0, this.LCCW);
		game.canvas.createFlickNote(-4150, 0, this.RCCW);
		game.canvas.createFlickNote(0, 4150, this.DCCW);
		game.canvas.createFlickNote(0, -4150, this.UCCW);
		game.canvas.createFlickNote(4300, 0, this.LCCW);
		game.canvas.createFlickNote(-4300, 0, this.RCCW);
		game.canvas.createFlickNote(0, 4300, this.DCCW);
		game.canvas.createFlickNote(0, -4300, this.UCCW);
		game.canvas.createFlickNote(4450, 0, this.LCCW);
		game.canvas.createFlickNote(-4450, 0, this.RCCW);
		game.canvas.createFlickNote(0, 4450, this.DCCW);
		game.canvas.createFlickNote(0, -4450, this.UCCW);
		game.canvas.createFlickNote(4600, 0, this.LCCW);
		game.canvas.createFlickNote(-4600, 0, this.RCCW);
		game.canvas.createFlickNote(0, 4600, this.DCCW);
		game.canvas.createFlickNote(0, -4600, this.UCCW);
		
		game.canvas.createFlickNote(3700, 0, this.LCW);
		game.canvas.createFlickNote(-3700, 0, this.RCW);
		game.canvas.createFlickNote(0, 3700, this.DCW);
		game.canvas.createFlickNote(0, -3700, this.UCW);
		game.canvas.createFlickNote(3850, 0, this.LCW);
		game.canvas.createFlickNote(-3850, 0, this.RCW);
		game.canvas.createFlickNote(0, 3850, this.DCW);
		game.canvas.createFlickNote(0, -3850, this.UCW);
		game.canvas.createFlickNote(4000, 0, this.LCW);
		game.canvas.createFlickNote(-4000, 0, this.RCW);
		game.canvas.createFlickNote(0, 4000, this.DCW);
		game.canvas.createFlickNote(0, -4000, this.UCW);
		game.canvas.createFlickNote(4150, 0, this.LCW);
		game.canvas.createFlickNote(-4150, 0, this.RCW);
		game.canvas.createFlickNote(0, 4150, this.DCW);
		game.canvas.createFlickNote(0, -4150, this.UCW);
		game.canvas.createFlickNote(4300, 0, this.LCW);
		game.canvas.createFlickNote(-4300, 0, this.RCW);
		game.canvas.createFlickNote(0, 4300, this.DCW);
		game.canvas.createFlickNote(0, -4300, this.UCW);
		game.canvas.createFlickNote(4450, 0, this.LCW);
		game.canvas.createFlickNote(-4450, 0, this.RCW);
		game.canvas.createFlickNote(0, 4450, this.DCW);
		game.canvas.createFlickNote(0, -4450, this.UCW);
		game.canvas.createFlickNote(4600, 0, this.LCW);
		game.canvas.createFlickNote(-4600, 0, this.RCW);
		game.canvas.createFlickNote(0, 4600, this.DCW);
		game.canvas.createFlickNote(0, -4600, this.UCW);  //1204
		
		game.canvas.createTapNote(4900, 0, this.L ,true);
		game.canvas.createTapNote(-4900, 0, this.R ,true);
		game.canvas.createTapNote(0, 4900, this.D ,true);
		game.canvas.createTapNote(0, -4900, this.U ,true);
		
		game.canvas.createTapNote(5200, 0, this.L ,true);
		game.canvas.createTapNote(-5200, 0, this.R ,true);
		game.canvas.createTapNote(5350, 0, this.L ,true);
		game.canvas.createTapNote(-5350, 0, this.R ,true);
		game.canvas.createTapNote(0, 5350, this.D ,true);
		game.canvas.createTapNote(0, -5350, this.U ,true);
		
		game.canvas.createTapNote(5650, 0, this.L ,true);
		game.canvas.createTapNote(-5650, 0, this.R ,true);
		game.canvas.createTapNote(5800, 0, this.L ,true);
		game.canvas.createTapNote(-5800, 0, this.R ,true);
		game.canvas.createTapNote(0, 5800, this.D ,true);
		game.canvas.createTapNote(0, -5800, this.U ,true); //1220
		
		game.canvas.createDragNote(6700, 0, 4700, 0, this.L);
		game.canvas.createDragNote(-6700, 0, -4700, 0, this.R);
		game.canvas.createDragNote(0, 6700, 0, 4700, this.D);
		game.canvas.createDragNote(0, -6700, 0, -4700, this.U); //1224
		
		game.canvas.createFlickNote(6775, 0, this.LCW);
		game.canvas.createFlickNote(-6850, 0, this.RCW);
		game.canvas.createFlickNote(0, 6925, this.DCW);
		game.canvas.createFlickNote(0, -7000, this.UCW);
		game.canvas.createFlickNote(7075, 0, this.LCW);
		game.canvas.createFlickNote(-7150, 0, this.RCW);
		game.canvas.createFlickNote(0, 7225, this.DCW);
		game.canvas.createFlickNote(0, -7300, this.UCW);
		game.canvas.createFlickNote(7375, 0, this.LCW);
		game.canvas.createFlickNote(-7450, 0, this.RCW);
		game.canvas.createFlickNote(0, 7525, this.DCW);
		game.canvas.createFlickNote(0, -7600, this.UCW);
		game.canvas.createFlickNote(7675, 0, this.LCW);
		game.canvas.createFlickNote(-7750, 0, this.RCW);
		game.canvas.createFlickNote(0, 7825, this.DCW);
		game.canvas.createFlickNote(0, -7900, this.UCW);
		game.canvas.createFlickNote(7975, 0, this.LCW);
		game.canvas.createFlickNote(-8050, 0, this.RCW);
		game.canvas.createFlickNote(0, 8125, this.DCW);
		game.canvas.createFlickNote(0, -8200, this.UCW);
		game.canvas.createFlickNote(8275, 0, this.LCW);
		game.canvas.createFlickNote(-8350, 0, this.RCW);
		game.canvas.createFlickNote(0, 8425, this.DCW);
		game.canvas.createFlickNote(0, -8500, this.UCW);
		game.canvas.createFlickNote(8575, 0, this.LCW);
		game.canvas.createFlickNote(-8650, 0, this.RCW);
		game.canvas.createFlickNote(0, 8725, this.DCW);
		game.canvas.createFlickNote(0, -8800, this.UCW);
		game.canvas.createFlickNote(8875, 0, this.LCW);
		game.canvas.createFlickNote(-8950, 0, this.RCW);
		game.canvas.createFlickNote(0, 9025, this.DCW);
		game.canvas.createFlickNote(0, -9100, this.UCW);
		game.canvas.createFlickNote(9175, 0, this.LCW);
		game.canvas.createFlickNote(-9250, 0, this.RCW);
		game.canvas.createFlickNote(0, 9325, this.DCW);
		game.canvas.createFlickNote(0, -9400, this.UCW);
		game.canvas.createFlickNote(9475, 0, this.LCW);
		game.canvas.createFlickNote(-9550, 0, this.RCW);
		game.canvas.createFlickNote(0, 9625, this.DCW);
		game.canvas.createFlickNote(0, -9700, this.UCW);
		game.canvas.createFlickNote(9775, 0, this.LCW);
		game.canvas.createFlickNote(-9850, 0, this.RCW);
		game.canvas.createFlickNote(0, 9925, this.DCW);
		game.canvas.createFlickNote(0, -10000, this.UCW);
		game.canvas.createFlickNote(10075, 0, this.LCW);
		game.canvas.createFlickNote(-10150, 0, this.RCW);
		game.canvas.createFlickNote(0, 10225, this.DCW);
		game.canvas.createFlickNote(0, -10300, this.UCW);
		game.canvas.createFlickNote(10375, 0, this.LCW);
		game.canvas.createFlickNote(-10450, 0, this.RCW);
		game.canvas.createFlickNote(0, 10525, this.DCW);
		game.canvas.createFlickNote(0, -10600, this.UCW);
		game.canvas.createFlickNote(10675, 0, this.LCW);
		game.canvas.createFlickNote(-10750, 0, this.RCW);
		game.canvas.createFlickNote(0, 10825, this.DCW);
		game.canvas.createFlickNote(0, -10900, this.UCW);
		game.canvas.createFlickNote(10975, 0, this.LCW);
		game.canvas.createFlickNote(-11050, 0, this.RCW);
		game.canvas.createFlickNote(0, 11125, this.DCW);
		game.canvas.createFlickNote(0, -11200, this.UCW);
		game.canvas.createFlickNote(11275, 0, this.LCW);
		game.canvas.createFlickNote(-11350, 0, this.RCW);
		game.canvas.createFlickNote(0, 11425, this.DCW);
		game.canvas.createFlickNote(0, -11500, this.UCW); 
		
		game.canvas.createFlickNote(6775, 0, this.LCCW);
		game.canvas.createFlickNote(-6850, 0, this.RCCW);
		game.canvas.createFlickNote(0, 6925, this.DCCW);
		game.canvas.createFlickNote(0, -7000, this.UCCW);
		game.canvas.createFlickNote(7075, 0, this.LCCW);
		game.canvas.createFlickNote(-7150, 0, this.RCCW);
		game.canvas.createFlickNote(0, 7225, this.DCCW);
		game.canvas.createFlickNote(0, -7300, this.UCCW);
		game.canvas.createFlickNote(7375, 0, this.LCCW);
		game.canvas.createFlickNote(-7450, 0, this.RCCW);
		game.canvas.createFlickNote(0, 7525, this.DCCW);
		game.canvas.createFlickNote(0, -7600, this.UCCW);
		game.canvas.createFlickNote(7675, 0, this.LCCW);
		game.canvas.createFlickNote(-7750, 0, this.RCCW);
		game.canvas.createFlickNote(0, 7825, this.DCCW);
		game.canvas.createFlickNote(0, -7900, this.UCCW);
		game.canvas.createFlickNote(7975, 0, this.LCCW);
		game.canvas.createFlickNote(-8050, 0, this.RCCW);
		game.canvas.createFlickNote(0, 8125, this.DCCW);
		game.canvas.createFlickNote(0, -8200, this.UCCW);
		game.canvas.createFlickNote(8275, 0, this.LCCW);
		game.canvas.createFlickNote(-8350, 0, this.RCCW);
		game.canvas.createFlickNote(0, 8425, this.DCCW);
		game.canvas.createFlickNote(0, -8500, this.UCCW);
		game.canvas.createFlickNote(8575, 0, this.LCCW);
		game.canvas.createFlickNote(-8650, 0, this.RCCW);
		game.canvas.createFlickNote(0, 8725, this.DCCW);
		game.canvas.createFlickNote(0, -8800, this.UCCW);
		game.canvas.createFlickNote(8875, 0, this.LCCW);
		game.canvas.createFlickNote(-8950, 0, this.RCCW);
		game.canvas.createFlickNote(0, 9025, this.DCCW);
		game.canvas.createFlickNote(0, -9100, this.UCCW);
		game.canvas.createFlickNote(9175, 0, this.LCCW);
		game.canvas.createFlickNote(-9250, 0, this.RCCW);
		game.canvas.createFlickNote(0, 9325, this.DCCW);
		game.canvas.createFlickNote(0, -9400, this.UCCW);
		game.canvas.createFlickNote(9475, 0, this.LCCW);
		game.canvas.createFlickNote(-9550, 0, this.RCCW);
		game.canvas.createFlickNote(0, 9625, this.DCCW);
		game.canvas.createFlickNote(0, -9700, this.UCCW);
		game.canvas.createFlickNote(9775, 0, this.LCCW);
		game.canvas.createFlickNote(-9850, 0, this.RCCW);
		game.canvas.createFlickNote(0, 9925, this.DCCW);
		game.canvas.createFlickNote(0, -10000, this.UCCW);
		game.canvas.createFlickNote(10075, 0, this.LCCW);
		game.canvas.createFlickNote(-10150, 0, this.RCCW);
		game.canvas.createFlickNote(0, 10225, this.DCCW);
		game.canvas.createFlickNote(0, -10300, this.UCCW);
		game.canvas.createFlickNote(10375, 0, this.LCCW);
		game.canvas.createFlickNote(-10450, 0, this.RCCW);
		game.canvas.createFlickNote(0, 10525, this.DCCW);
		game.canvas.createFlickNote(0, -10600, this.UCCW);
		game.canvas.createFlickNote(10675, 0, this.LCCW);
		game.canvas.createFlickNote(-10750, 0, this.RCCW);
		game.canvas.createFlickNote(0, 10825, this.DCCW);
		game.canvas.createFlickNote(0, -10900, this.UCCW);
		game.canvas.createFlickNote(10975, 0, this.LCCW);
		game.canvas.createFlickNote(-11050, 0, this.RCCW);
		game.canvas.createFlickNote(0, 11125, this.DCCW);
		game.canvas.createFlickNote(0, -11200, this.UCCW);
		game.canvas.createFlickNote(11275, 0, this.LCCW);
		game.canvas.createFlickNote(-11350, 0, this.RCCW);
		game.canvas.createFlickNote(0, 11425, this.DCCW);
		game.canvas.createFlickNote(0, -11500, this.UCCW);
		
		game.canvas.createFlickNote(6775, 0, this.L);
		game.canvas.createFlickNote(-6850, 0, this.R);
		game.canvas.createFlickNote(0, 6925, this.D);
		game.canvas.createFlickNote(0, -7000, this.U);
		game.canvas.createFlickNote(7075, 0, this.L);
		game.canvas.createFlickNote(-7150, 0, this.R);
		game.canvas.createFlickNote(0, 7225, this.D);
		game.canvas.createFlickNote(0, -7300, this.U);
		game.canvas.createFlickNote(7375, 0, this.L);
		game.canvas.createFlickNote(-7450, 0, this.R);
		game.canvas.createFlickNote(0, 7525, this.D);
		game.canvas.createFlickNote(0, -7600, this.U);
		game.canvas.createFlickNote(7675, 0, this.L);
		game.canvas.createFlickNote(-7750, 0, this.R);
		game.canvas.createFlickNote(0, 7825, this.D);
		game.canvas.createFlickNote(0, -7900, this.U);
		game.canvas.createFlickNote(7975, 0, this.L);
		game.canvas.createFlickNote(-8050, 0, this.R);
		game.canvas.createFlickNote(0, 8125, this.D);
		game.canvas.createFlickNote(0, -8200, this.U);
		game.canvas.createFlickNote(8275, 0, this.L);
		game.canvas.createFlickNote(-8350, 0, this.R);
		game.canvas.createFlickNote(0, 8425, this.D);
		game.canvas.createFlickNote(0, -8500, this.U);
		game.canvas.createFlickNote(8575, 0, this.L);
		game.canvas.createFlickNote(-8650, 0, this.R);
		game.canvas.createFlickNote(0, 8725, this.D);
		game.canvas.createFlickNote(0, -8800, this.U);
		game.canvas.createFlickNote(8875, 0, this.L);
		game.canvas.createFlickNote(-8950, 0, this.R);
		game.canvas.createFlickNote(0, 9025, this.D);
		game.canvas.createFlickNote(0, -9100, this.U);
		game.canvas.createFlickNote(9175, 0, this.L);
		game.canvas.createFlickNote(-9250, 0, this.R);
		game.canvas.createFlickNote(0, 9325, this.D);
		game.canvas.createFlickNote(0, -9400, this.U);
		game.canvas.createFlickNote(9475, 0, this.L);
		game.canvas.createFlickNote(-9550, 0, this.R);
		game.canvas.createFlickNote(0, 9625, this.D);
		game.canvas.createFlickNote(0, -9700, this.U);
		game.canvas.createFlickNote(9775, 0, this.L);
		game.canvas.createFlickNote(-9850, 0, this.R);
		game.canvas.createFlickNote(0, 9925, this.D);
		game.canvas.createFlickNote(0, -10000, this.U);
		game.canvas.createFlickNote(10075, 0, this.L);
		game.canvas.createFlickNote(-10150, 0, this.R);
		game.canvas.createFlickNote(0, 10225, this.D);
		game.canvas.createFlickNote(0, -10300, this.U);
		game.canvas.createFlickNote(10375, 0, this.L);
		game.canvas.createFlickNote(-10450, 0, this.R);
		game.canvas.createFlickNote(0, 10525, this.D);
		game.canvas.createFlickNote(0, -10600, this.U);
		game.canvas.createFlickNote(10675, 0, this.L);
		game.canvas.createFlickNote(-10750, 0, this.R);
		game.canvas.createFlickNote(0, 10825, this.D);
		game.canvas.createFlickNote(0, -10900, this.U);
		game.canvas.createFlickNote(10975, 0, this.L);
		game.canvas.createFlickNote(-11050, 0, this.R);
		game.canvas.createFlickNote(0, 11125, this.D);
		game.canvas.createFlickNote(0, -11200, this.U);
		game.canvas.createFlickNote(11275, 0, this.L);
		game.canvas.createFlickNote(-11350, 0, this.R);
		game.canvas.createFlickNote(0, 11425, this.D);
		game.canvas.createFlickNote(0, -11500, this.U); //1416
	},
	127:function(game){
		setTimeout(function() {game.canvas.rotate(360, 5);}, 700);
	},
	135:function (game){
		game.end();
	},

}