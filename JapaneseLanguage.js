var hiraganaChr;
var katakanaChr;
var score = 0;
var frame = 0;
var choice = 0;
var op1 = false;
var op2 = false;
var op3 = false;
var correctChoice;
var txt;
var txtindex;
var sound;
var wrong1;
var wrong2;

function preload() {
	hiraganaChr = loadJSON("Hiragana.json");
	katakanaChr = loadJSON("Katakana.json");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255, 192, 203);
	switch (frame) {
		case 0:	displayMenu();
				break;
		case 1:	HiraganaFlashGame();
				textSize(40);
				text("Score : " + score, 100 , 300, 300, 350);
				break;
		case 2:	KatakanaFlashGame();
				textSize(40);
				text("Score : " + score, 100 , 300, 300, 350);
				break;
	}
}

function displayMenu() {
	fill(0);
	textSize(40);
	text("Hello Stranger, Select the Game that You'd Like to Play", 200, 100, 1200, 200);
	fill(200, 250, 220);
	strokeWeight(2);
	rect(450, 200, 500, 50);
	rect(450, 300, 500, 50);
	fill(0);
	textSize(30);
	text("Hiragana Flash Card Quiz", 520, 210, 1200, 200);
	text("Katakana Flash Card Quiz", 520, 310, 1200, 200);
}

function mouseClicked() {
	switch (frame) {
		case 0:	if (mouseX >= 450 && mouseX <= 950) {
					if (mouseY >= 200 && mouseY <= 250) {
						frame = 1;
					}
					else
					if (mouseY >= 300 && mouseY <= 350){
						frame = 2;
					}
				}
				break;
		case 1:	if (mouseX >= 20 && mouseX <= 120) {
					if (mouseY >= 20 && mouseY <= 70) {
						frame = 0;
						score = 0;
						choice = 0;
					}
				}
				else
				if (mouseX >= 100 && mouseX <= 400) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op1) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				else
				if (mouseX >= 500 && mouseX <= 800) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op2) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				else
				if (mouseX >= 900 && mouseX <= 1200) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op3) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				op1 = false;
				op2 = false;
				op3 = false;
				break;
		case 2:	if (mouseX >= 20 && mouseX <= 120) {
					if (mouseY >= 20 && mouseY <= 70) {
						frame = 0;
						score = 0;
						choice = 0;
					}
				}
				else
				if (mouseX >= 100 && mouseX <= 400) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op1) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				else
				if (mouseX >= 500 && mouseX <= 800) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op2) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				else
				if (mouseX >= 900 && mouseX <= 1200) {
					if (mouseY >= 500 && mouseY <= 550) {
						if (op3) {
							score += 100;
						}
						else
						if (score >= 50) {
							score -= 50;
						}
						choice = 0;
					}
				}
				op1 = false;
				op2 = false;
				op3 = false;
				break;
	}
}

function HiraganaFlashGame() {
	var card = {
		x : 550,
		y : 100,
		w : 400,
		h : 300
	}
	strokeWeight(2);
	fill(200, 250, 220);
	rect(20, 20, 100, 50);
	rect(100, 500, 300, 50);
	rect(500, 500, 300, 50);
	rect(900, 500, 300, 50);
	fill(200, 215, 150);
	rect(card.x, card.y, card.w, card.h);
	fill(0);
	textSize(30);
	text("Back", 35, 25, 50, 50);
	textSize(40);
	text("Guess the Romaji Reading of the Hiragana Character", 335, 25, 1135, 50);
	if (choice == 0) {
		var wrongIndex1, wrongIndex2, wrongObject1, wrongObject2;
		txt = Object.values(hiraganaChr);
		wrongObject1 = Object.values(hiraganaChr);
		wrongObject2 = Object.values(hiraganaChr);
		txtindex = floor(random(0, txt.length));
		if (txtindex > 0 && txtindex < txt.length - 1) {
			wrongIndex1 = txtindex + 1;
			wrongIndex2 = txtindex - 1;
		}
		else
		if (txtindex == 0) {
			wrongIndex1 = txtindex + 1;
			wrongIndex2 = txtindex + 2;
		}
		else
		if (txtindex == txt.length - 1) {
			wrongIndex1 = txtindex - 1;
			wrongIndex2 = txtindex - 2;
		}
		txt = txt[txtindex];
		wrongObject1 = wrongObject1[wrongIndex1];
		wrongObject2 = wrongObject2[wrongIndex2];
		for (let i = 0; i < 5; i++) {
			if (i == 4) {
				sound = Object.getOwnPropertyNames(txt);
				wrong1 = Object.getOwnPropertyNames(wrongObject1);
				wrong2 = Object.getOwnPropertyNames(wrongObject2);
			}
			txt = Object.values(txt);
			txtindex = floor(random(0, txt.length));
			txt = txt[txtindex];
			wrongObject1 = Object.values(wrongObject1);
			wrongIndex1 = floor(random(0, wrongObject1.length));
			wrongObject1 = wrongObject1[wrongIndex1];
			wrongObject2 = Object.values(wrongObject2);
			wrongIndex2 = floor(random(0, wrongObject2.length));
			wrongObject2 = wrongObject2[wrongIndex2];
		}
		sound = sound[txtindex];
		wrong1 = wrong1[wrongIndex1];
		wrong2 = wrong2[wrongIndex2];
		correctChoice = floor(random(1, 4));
		switch (correctChoice) {
			case 1:	op1 = true;
					break;
			case 2:	op2 = true;
					break;
			case 3:	op3 = true;
					break;
		}
		choice++;
	}
	switch (correctChoice) {
		case 1:	text(sound, 200, 500, 400, 550);
				text(wrong1, 600, 500, 800, 550);
				text(wrong2, 1000, 500, 1300, 550);
				break;
		case 2:	text(sound, 600, 500, 800, 550);
				text(wrong2, 200, 500, 400, 550);
				text(wrong1, 1000, 500, 1300, 550);
				break;
		case 3:	text(sound, 1000, 500, 1300, 550);
				text(wrong1, 200, 500, 400, 550);
				text(wrong2, 600, 500, 800, 550);
				break;
	}
	textSize(200);
	text(txt, 550, 150, card.x + 100, card.y +100);
}

function KatakanaFlashGame() {
	var card = {
		x : 550,
		y : 100,
		w : 400,
		h : 300
	}
	strokeWeight(2);
	fill(200, 250, 220);
	rect(20, 20, 100, 50);
	rect(100, 500, 300, 50);
	rect(500, 500, 300, 50);
	rect(900, 500, 300, 50);
	fill(200, 215, 150);
	rect(card.x, card.y, card.w, card.h);
	fill(0);
	textSize(30);
	text("Back", 35, 25, 50, 50);
	textSize(40);
	text("Guess the Romaji Reading of the Katakana Character", 335, 25, 1135, 50);
	if (choice == 0) {
		var wrongIndex1, wrongIndex2, wrongObject1, wrongObject2;
		txt = Object.values(katakanaChr);
		wrongObject1 = Object.values(katakanaChr);
		wrongObject2 = Object.values(katakanaChr);
		txtindex = floor(random(0, txt.length));
		if (txtindex > 0 && txtindex < txt.length - 1) {
			wrongIndex1 = txtindex + 1;
			wrongIndex2 = txtindex - 1;
		}
		else
		if (txtindex == 0) {
			wrongIndex1 = txtindex + 1;
			wrongIndex2 = txtindex + 2;
		}
		else
		if (txtindex == txt.length - 1) {
			wrongIndex1 = txtindex - 1;
			wrongIndex2 = txtindex - 2;
		}
		txt = txt[txtindex];
		wrongObject1 = wrongObject1[wrongIndex1];
		wrongObject2 = wrongObject2[wrongIndex2];
		for (let i = 0; i < 5; i++) {
			if (i == 4) {
				sound = Object.getOwnPropertyNames(txt);
				wrong1 = Object.getOwnPropertyNames(wrongObject1);
				wrong2 = Object.getOwnPropertyNames(wrongObject2);
			}
			txt = Object.values(txt);
			txtindex = floor(random(0, txt.length));
			txt = txt[txtindex];
			wrongObject1 = Object.values(wrongObject1);
			wrongIndex1 = floor(random(0, wrongObject1.length));
			wrongObject1 = wrongObject1[wrongIndex1];
			wrongObject2 = Object.values(wrongObject2);
			wrongIndex2 = floor(random(0, wrongObject2.length));
			wrongObject2 = wrongObject2[wrongIndex2];
		}
		sound = sound[txtindex];
		wrong1 = wrong1[wrongIndex1];
		wrong2 = wrong2[wrongIndex2];
		correctChoice = floor(random(1, 4));
		switch (correctChoice) {
			case 1:	op1 = true;
					break;
			case 2:	op2 = true;
					break;
			case 3:	op3 = true;
					break;
		}
		choice++;
	}
	switch (correctChoice) {
		case 1:	text(sound, 200, 500, 400, 550);
				text(wrong1, 600, 500, 800, 550);
				text(wrong2, 1000, 500, 1300, 550);
				break;
		case 2:	text(sound, 600, 500, 800, 550);
				text(wrong2, 200, 500, 400, 550);
				text(wrong1, 1000, 500, 1300, 550);
				break;
		case 3:	text(sound, 1000, 500, 1300, 550);
				text(wrong1, 200, 500, 400, 550);
				text(wrong2, 600, 500, 800, 550);
				break;
	}
	textSize(200);
	text(txt, 550, 150, card.x + 100, card.y +100);
}
