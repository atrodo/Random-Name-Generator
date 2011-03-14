(function(global, className){
	
	//function to get random number upto m
	function getRandom(minVal,maxVal)
	{
		//when a single int is passed
		//default to between 1 and that number
		if(minVal && !maxVal)
		{
			maxVal = minVal;
			minVal = 1;
		}
		
		//send back the magic
		return Math.round(minVal + (Math.random() * (maxVal - minVal)));
	}

	//just what it says, returns string with first letter upperCase
	function capitalize(s)
	{
		return s.charAt(0).toUpperCase() + s.substring(1, s.length);
	}

	//marginally shorter than typing out .length - 1
	//may remove
	function last(arr)
	{
		return arr.length - 1;
	}


	function randomName(syl)
	{
		// The minimum syllables
		syl = (syl || 3) * 2

		var
			i,
			v,
			startLen 	= last(global.name_stats.starts)


		var current_group = global.name_stats.starts[getRandom(0, startLen)]
		var output = [current_group];

		// Sometimes, mix it up and end with something else
		if (getRandom(3) === 3)
		{
			syl++;
		}

		for (i = 1; i < syl; i++)
		{
			v = global.name_stats.data[current_group]

			if (v.f.length == 0)
			  break;

			current_group = v.f[getRandom(0, last(v.f))]
			output.push(current_group)
		}
		return capitalize(output.join(''))

	}
	//the goodies!
	
	global[className] = {};
	
	global[className].randomName = randomName;
	global[className].capitalize = capitalize;
	
	
})(this, 'nameGen');
