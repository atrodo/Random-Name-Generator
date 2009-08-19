var items = "Double Consonant Word List Holders Double Consonant Word Lists cut on gray lines use with prev page bran brim brag bred brig clam clan clip clog clap drum drip drag dram drab flag flip flux flop flat grin grub grab grip grit sled slim slip slug slot Double Consonant Word List Holders Double Consonant Word Lists cut on gray lines use with prev page jack back rack pack tack kick pick lick wick sick duck luck muck puck yuck ball mall tall hall fall bell fell dell well tell hill fill bill pill mill gull band plot drib slug wall hack bell plum wick hammer plus Random Word Lists pass back plop dress sloth dill drug smelly hiss drummer smog will gutter bass plug drill tuck well huff blab pram dull smug worth hull prep earth yell bled fifth flannel snub grim jump prop flap Random Word Lists snag dollar jelly blob filth snag snug pillar boss puck flax sock block prod flan snip jolly blot kiss broth puff flex spot slit less buzz floss swag twin letter clop rock frog swap fret loss Random Word Lists call rash flutter swam clod lick clot sass from girth mock club chilly rest forth swig crag lock scab froth swum mall collar scan full tack melt mask tunnel scat miss crib silly glass trap toss Random Word Lists funnel tenth mass crab fuss tick moss crop sixth trim dock slab mess cram sell glad tram swim glen trip slam peck north tuck Secret Words button skunk camel cliff bulb shark Secret Words stomp chart shell thin chill whip the fish swims a small clip a chic charm wash the moth Which rich chest the third drum kiss the shell The path with a tunnel it is chilly A small stack of rocks A camel on a button The skunk is in the bush Phrase Strips Working Page use this page to place cut phrase strips on to match with pictures blue book 1 Word Strips to make a book shed shin ship shop shot shut shack shaft shall shard shark sharp shelf shell shift shirk shirt shock short shred shrew shrub shrug blue book 2 Word Strips to make a book bash bush cash dash dish fish gash gosh gush hash hush josh lash mash mesh mush push rash rush sash wash wish shush blue book 3 Word Strips to make a book chap chat chef chic chin chip chop chow chug chum champ chant charm chart chess chest chick chill chimp chomp chuck chump chunk blue book 4 Word Strips to make a book arch inch much rich such churn who why wham what when whip whack wharf which whiff whirl whisk blue book 5 Word Strips to make a book the than that them then thin this thus thank theft thick think third thorn throb thump bath moth path with birth cloth month Sentence Strips The man had a hot dog and pop Nan drinks milk from a glass The rabbit sniffs the lemon A bat is next to the racket Drop the bell in the trunk Africa is a big continent Can the egg fit in the basket Send the dollar to the bank".toLowerCase();

var reg = /[bcdfghjklmnprstvwxz]{2,}/ig;
var holder = {};
var myArray;
while ((myArray = reg.exec(items)) != null)
{
  var msg = "Found " + myArray[0] + ".  ";
  holder[myArray[0]] = myArray[0];
  msg += "Next match starts at " + reg.lastIndex;
  print(msg);
}
print('gathered all');
var output = [];
for (var i in holder)
{
	//prevent double letters
	if(i.charAt(0) != i.charAt(1)) output.push('"' + i +'"');
}
print(output.sort());
