			var cards = [
			{
				name : "pizza" ,
				path : "./img/pizza-removebg.png"
			},
			{
				name : "orange juice" ,
				path : "./img/ojuice.png"
			},
			{
				name : "egg" ,
				path : "./img/egg.png"
			},
			{
				name : "hamburger" ,
				path : "./img/hamburger-removebg-preview.png"
			},
				{
				name : "pizza" ,
				path : "./img/pizza-removebg.png"
			},
			{
				name : "orange juice" ,
				path : "./img/ojuice.png"
			},
			{
				name : "egg" ,
				path : "./img/egg.png"
			},
			{
				name : "hamburger" ,
				path : "./img/hamburger-removebg-preview.png"
			},
			];
		cards.sort(()=>0.5-Math.random());
	var chooseCard =[];
	var chooseId = [];
	var img=document.getElementsByClassName("miniImg");
	var id;
	var cardsWon = 0;
	var gameFinish = ()=>{if(cardsWon==(cards.length/2)) return true};
	createBoard();


	//click event
	function funClick(){
		id = this.getAttribute("cardId");
		chooseCard.push(cards[id]);
		chooseId.push(id);
		img[id].style.border = "2px solid orange";
			img[id].style.width = "65px";
			img[id].style.height = "85px";
			img[id].style.opacity = 0.9;
		if(chooseCard.length === 2){
			cardMatch();
		}
	}
	//function that check chosen cards are matched
	function cardMatch() {
		//if user choose the same card 2 times
		if(chooseId[0] != chooseId[1]){
			//if matched
			if(chooseCard[0].name === chooseCard[1].name){
				for(var i=0 ; i<chooseId.length ; i++){
					// img[chooseId[i]].style.transition = "3s";
					img[chooseId[i]].style.display = "none";
					img[chooseId[i]].style.display = "none";

				}
				cardsWon++;
				if(gameFinish()){
					// window.open("lev1.html","height=200","width=500");
					alert("Congraculation!Go to Level 2");
				}
			//if not matched
			}else{
					for(var i=0 ; i<chooseId.length ; i++){
						img[chooseId[i]].style.borderStyle = "none";
						img[chooseId[i]].style.width = "60px";
						img[chooseId[i]].style.height = "80px";
						img[chooseId[i]].style.opacity = 1;
					}
			}
		}else{
						img[chooseId[0]].style.borderStyle = "none";
						img[chooseId[0]].style.width = "60px";
						img[chooseId[0]].style.height = "80px";
						img[chooseId[0]].style.opacity = 1;
		}
		// clear the arrays
		chooseCard = [];
		chooseId = [];
	}
	//create game board
	function createBoard(){
		for(var i=0 ; i<img.length ; i++){
			img[i].setAttribute("src", cards[i].path);
			img[i].setAttribute("cardId" , i);
			img[i].addEventListener("click" , funClick , true);
		}
		var tp=20;
		for(var i=0 ; i<=7 ; i+=2){
			img[i].style.left = "30px";
			img[i].style.top = ""+tp+"px";
			tp+=95;
		}
		tp=20;
		for(var i=1  ; i<=7 ; i+=2){
			img[i].style.right = "30px";
			img[i].style.top = ""+tp+"px";
			tp+=95;
		}
	}