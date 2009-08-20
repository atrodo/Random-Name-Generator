var arr = ["bl", "ch","fl","fr","gl","gr","kn","sh","th",
						   "dr", "pl","pr","ps","sc","shr",
						   "sk", "sl","sm","sn","sp","st","str",
						   "thr" ,"tr","tw","wh"];
var fix = [];
var sto = {};
var i;
var out = "";
for (i in arr)
{
	sto[arr[i]] = arr[i];
}
for (i in sto)
{
	fix.push(i);
}
fix.sort();
for(i = 0; i < fix.length; i++)
{
	out += '"' + fix[i] + '", ';	
}
print(out);
