var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/shopping',{ useNewUrlParser: true });

var products=[
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'gothic cover',
		description: 'All featured content undergoes a thorough review process to ensure that it meets the highest standards in order to serve as the best example of our end goals.',
		price:10	
	}),
	new Product({
		imagePath: 'http://img.chinatimes.com/newsphoto/2014-02-12/656/20140212004944.jpg',
		title: 'consetetur sadipscing elitr',
		description: 'Ficus macrophylla (nominated by Cas Liber) is a large evergreen banyan tree of the family Moraceae native to eastern Australia, from the Wide Bay–Burnett region in the north to the Illawarra in New South Wales, as well as Lord Howe Island.',
		price:20	
	}),
	new Product({
		imagePath: 'http://old.bz55.com/uploads/allimg/150820/139-150R0095505.jpg',
		title: 'Stet clita kasd gubergren',
		description: 'The Lord Howe swamphen (nominated by FunkMonk) is an extinct species of rail which lived on Lord Howe Island, east of Australia. It was first encountered when the crews of British ships visited the island between 1788 and 1790, and all contemporary accounts and illustrations were produced during this time. Today, two specimens exist: the holotype in the Natural History Museum of Vienna, and another in Liverpools World Museum.',
		price:30	
	}),


];
var done=0;
for (var i=0 ; i < products.length ; i++){
	products[i].save(function(err,result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}