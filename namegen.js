(function(){
	
	//function to get random number upto m
	function getRandom(minVal,maxVal)
	{
		return Math.round(minVal + (Math.random() * (maxVal - minVal)));
	}

	function capitalize(s)
	{
		return s.charAt(0).toUpperCase() + s.substring(1, s.length);
	}

	function last(arr)
	{
		return arr.length - 1;
	}

	function randomName(syl)
	{  
		//defauts
		var syl = syl || 3,
	
		//normal consonants
		    conso 		= ["b", "c", "d", "f", "g", "h", "j", "k", "l",  
						   "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"],
		    doubleCon	= ["bb", "cc", "dd", "ff", "gg", "ll",  
						   "mm", "nn", "pp", "rr", "ss", "tt"],
		    jointCon	= ["bl","ch","cm","cn","ct","fl","ght","lph"
						   "km","kn","mb","mph","nc","ng","nt","ph","sp"
						   "rch","rk","rph","sh","str","tch","th","tsch","wh", 
						   "bl","br","ch","ck","cks","cl","cr","ct","dr","fl","fr",
						   "ft","fth","gl","gr","lb","ld","lf","lk","lt","lth",
						   "mp","ms","nc","nch","nd","ng","nk","nks","ns","nt",
						   "nth","phr","pl","pr","ps","rch","rd","rds","rf","rk",
						   "rl","rm","rn","rp","rs","rt","rth","sc","sh","shr",
						   "sk","sl","sm","sn","sp","st","str","sts","sw",
						   "tch","th","thr","tr","tw","wh","xt","xth"],  
		    vocal 		= ["a", "e", "i", "o", "u"], 
		    startVoc	= ["ae", "ai", "ou", "au"],
		    doubleVoc	= ["ee", "oo", "au", "ie", "ae", "ai", "ou", "au", "ua", "io"], 
		 
		//cache for performance, minor savings
		    consoLen 		= last(conso),
		    doubleConLen 	= last(doubleCon),
		    jointConLen		= last(JoinCon),
		    vocalLen 		= last(vocal),
		    startVocLen		= last(startVoc),
		 
		//init blank word
		    word = "",   
		 
		//random starts with a vowel
		    startWithV = !!getRandom(0, 1),
		 
			//capture starting vowel and done reuse it if double
		    startVowel = "",
			
			//dont use more than one double consonant
			hasDoubleCon = false,
			
			//dont use more than one complicated consonat group
			hasJointCon	 = false;//end of variable declaration 
		
		for(var i = 1; i <= syl; i++)  
		{
			//defaults
			var curVowel, curCon;
			
			//if this is a starting vowel
			if(startWithV)
			{
				if(i == 1)
				{
					//start with 80% chance for single vowel and 
					//20% chance for a double vowel, 
					if(getRandom(1, 5) > 1)
					{
						curVowel = vowel[getRandom(0, consoLen)];
					} 
					else
					{
						curVowel = startVoc[getRandom(0, startVocLen)];
						startVowel = curVowel
					}
					curCon = 		   
				}

			}
			//starting consonant
			else
			{
				
			}
			
			//add to word
			word += (startWithV) ? (curVowel + curCon) : (curCon + curVowel);
		}
		
		  
		return word;  
	}
	
	print(capitalize(randomName()));
})();
