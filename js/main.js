var app = angular.module('salt', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/src/home.html",
    controller : "HomeCtrl"
  });
});

app.controller('AppCtrl', function($scope) {

	$scope.glob = {};
	$scope.glob.search = '';
	$scope.isSignin = false;

	$scope.signIn = function(){
		$scope.isSignin = !$scope.isSignin;
	};

	$scope.abbrNum = function(number, decPlaces) {
	  decPlaces = Math.pow(10,decPlaces);
	  var abbrev = [ "K", "M", "B", "T" ];
	  for (var i=abbrev.length-1; i>=0; i--) {
	      var size = Math.pow(10,(i+1)*3);
	      if(size <= number) {
	           number = Math.round(number*decPlaces/size)/decPlaces;
	           if((number == 1000) && (i < abbrev.length - 1)) {
	               number = 1;
	               i++;
	           }
	           number += abbrev[i];
	           break;
	      }
	  }
	  return number;
	};
	
	$scope.timeStampToDay = function(timeStamp){
        var now = (new Date()).getTime();
        var result=(now-(timeStamp*1000))/1000;
        if(result > 31557599){
            result = result/31557600;
            if (Math.round(result) < 2){
              result = Math.round(result)+' year ago';
            }else{
              result = Math.round(result)+' years ago';
            }
        }else if(result > 2591999){
            result = result/2592000;
            if (Math.round(result) < 2){
              result = Math.round(result)+' month ago';
            }else{
              result = Math.round(result)+' months ago';
            }
        }else if(result > 604799){
            result = result/604800;
            if (Math.round(result) < 2){
              result = Math.round(result)+' week ago';
            }else{
              result = Math.round(result)+' weeks ago';
            }
        }else if(result > 86399){
            result = result/86400;
            if (Math.round(result) < 2){
              result = Math.round(result)+' day ago';
            }else{
              result = Math.round(result)+' days ago';
            }
        }else if(result > 3599){
            result = result/3600;
            if (Math.round(result) < 2){
              result = Math.round(result)+' hour ago';
            }else{
              result = Math.round(result)+' hours ago';
            }
        }else if(result > 59){
            result = result/60;
            if (Math.round(result) < 2){
              result = Math.round(result)+' minute ago';
            }else{
              result = Math.round(result)+' minutes ago';
            }
        }else if(result < 59){
            result = 'several seconds ago';
        }
        if(timeStamp === 0){
          result = '-';
        }
        return result;
    };
    $scope.userInfo = {
    	firstname: 'Amaya',
    	lastname: 'Moira',
    	profilPicture: 'https://thenypost.files.wordpress.com/2016/11/melissa-feature.jpg?quality=90&strip=all'
    }
});

app.controller('HomeCtrl', function($scope,APICall) {
	
	$scope.callAPI = function(path){
		APICall.exampleCall(path).then(function(data){
			$scope.returnAPI = data;
		});
	}

	$scope.videoList = [
		{
			name: 'The real reason Boeing\'s new plane crashed twice',
			uploader: 'Future Tech',
			view: 1209,
			thumb: 'https://i.ytimg.com/vi/H2tuKiiznsY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBpiDxSLKQwNYNWjOWZi5_t92d3sw'
		},{
			name: 'The right way to kill a fish',
			uploader: 'Cooking Now',
			view: 45201,
			thumb: 'https://i.ytimg.com/vi/TS4AM9mPX-8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA9UmW42GZWjcQmMGFJ0Te4LNx6EA'
		},{
			name: 'New York is building a wall to hold back the ocean',
			uploader: 'World Today',
			view: 2609,
			thumb: 'https://i.ytimg.com/vi/A9asEJokafM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOsxgsVvR0aT4ZetVRbTLk4yUghg'
		},{
			name: 'Why your allergies get worse every year',
			uploader: 'First Meds',
			view: 900,
			thumb: 'https://i.ytimg.com/vi/WEhKSWYGluk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD5pJl-Y53xcfBySduunjldKwj5Hg'
		},{
			name: 'The traffic solution most cities haven\'t tried',
			uploader: 'City Info',
			view: 1230192,
			thumb: 'https://i.ytimg.com/vi/YX68ym4n7_c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBHSvhd_s6cbcCc9sYR6Y6P1zkjiQ'
		},{
			name: 'How scientists solved this dinosaur puzzle',
			uploader: 'Fun Science',
			view: 120,
			thumb: 'https://i.ytimg.com/vi/oPPJ7GGDyAw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAHBCTW64t3XIPLDkAA5wsFmq2BxQ'
		},{
			name: 'A better way to tax the rich',
			uploader: 'Great Finance',
			view: 12,
			thumb: 'https://i.ytimg.com/vi/pTwPHuE_HrU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLADWmJHS6IsARyO9RxU7CP7j4SNAw'
		},{
			name: 'Why safe playgrounds aren\'t great for kids',
			uploader: 'Parenting 101',
			view: 109,
			thumb: 'https://i.ytimg.com/vi/lztEnBFN5zU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB5XdJ1QdYty1iGH3uagwLteg31uQ'
		}
	];

	$scope.peopleList = [
		{
			name: 'Elon Musk',
			company: 'SpaceX',
			follower: 1209,
			thumb: 'https://marketindustryjournal.com/wp-content/uploads/2018/09/Elon-Musk-to-Resign-As-Tesla-Chairman-in-Settlement-with-SEC.jpg'
		},{
			name: 'Tim Cook',
			company: 'Apple',
			follower: 3293092,
			thumb: 'https://e3.365dm.com/19/04/768x432/skynews-apple-tim-cook_4649160.jpg?20190424152558'
		},{
			name: 'Susan Wojcicki',
			company: 'Youtube',
			follower: 2891002,
			thumb: 'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F668636%252F10916095-3ea8-4c16-a5eb-403901d3e213.jpg%252F950x534__filters%253Aquality%252880%2529.jpg?signature=CAHIIZn7U3i0Ip8drnToZM6PlkI=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com'
		},{
			name: 'Robert Iger',
			company: 'Disney',
			follower: 6789301,
			thumb: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOS2PxJ1Hn1Y/v1/1000x-1.jpg'
		},{
			name: 'Bill Gates',
			company: 'Microsoft',
			follower: 4837912,
			thumb: 'https://wp-assets.futurism.com/2018/02/Bill_Gates_MSC_2017-600x315.jpg'
		},{
			name: 'William Tanuwijaya',
			company: 'Tokopedia',
			follower: 187302,
			thumb: 'https://businesstoday.id/wp-content/uploads/2018/09/CEO-Tokopedia-William-Tanuwijaya.jpeg'
		},{
			name: 'Nadiem Makarim',
			company: 'Gojek',
			follower: 3109203,
			thumb: 'https://cdn.brilio.net/news/2019/07/05/166719/nama-ceo-gojek-disebut-berpotensi-masuk-kabinet-jokowi-maruf-190705t.jpg'
		},{
			name: 'Mark Zuckerberg',
			company: 'Facebook',
			follower: 2893910203,
			thumb: 'https://cdn.evoke.ie/wp-content/uploads/2018/09/05123548/mark-zuckerberg-696x503.jpg'
		}
	];
	$scope.docList = [
		{
			name: 'Mobile UI & UX guide 2019',
			writer: 'William Mahoja',
			view: 828730,
			thumb: 'https://www.techvedic.com/wp-content/uploads/2018/08/mobile-technology.jpg'
		},{
			name: 'HTML5 Usage',
			writer: 'Bonnie Gilbert',
			view: 453552,
			thumb: 'https://static.makeuseof.com/wp-content/uploads/2017/10/html5-whats-new-670x335.jpg'
		},{
			name: 'How to become an expert',
			writer: 'Elena Jackson',
			view: 57362,
			thumb: 'http://www.ricebowlasia.com/wp-content/uploads/2015/08/Become-an-expert-_fit.jpg'
		},{
			name: '2019 Marketing trends',
			writer: 'Barry Avery',
			view: 54634452,
			thumb: 'http://anthillonline.com/wp-content/uploads/2019/02/marketing.jpg'
		},{
			name: '5 Holliday destination',
			writer: 'George Robins',
			view: 15675678,
			thumb: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover11.jpg'
		},{
			name: 'Future tech',
			writer: 'Teddy Stevens',
			view: 354279,
			thumb: 'https://alboenews.com/wp-content/uploads/2018/12/Future-Technology.jpg'
		},{
			name: 'American culture',
			writer: 'Richard Pierce',
			view: 265769,
			thumb: 'http://www.healthcommentary.org/wp-content/uploads/2017/11/maxresdefault.jpg'
		},{
			name: 'Living space',
			writer: 'Nathan Thompson',
			view: 774670,
			thumb: 'https://d2q79iu7y748jz.cloudfront.net/s/_customcontent/ecb3043e639989d2e92cfd98b784ae88'
		}
	];
	$scope.activityList = [
		{
			name: 'John Legend',
			status: 'commented',
			type: 'comment',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'https://d2q79iu7y748jz.cloudfront.net/s/_customcontent/ecb3043e639989d2e92cfd98b784ae88',
			timestamp: 1562537922
		},{
			name: 'John Legend',
			status: 'added a new video',
			type: 'video',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'https://i.ytimg.com/vi/WEhKSWYGluk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD5pJl-Y53xcfBySduunjldKwj5Hg',
			timestamp: 1562537922
		},{
			name: 'John Legend',
			status: 'shared a document',
			type: 'doc',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'http://www.healthcommentary.org/wp-content/uploads/2017/11/maxresdefault.jpg',
			timestamp: 1562537922
		},{
			name: 'Justin Timberlake',
			status: 'like a video',
			type: 'video',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'https://i.ytimg.com/vi/H2tuKiiznsY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBpiDxSLKQwNYNWjOWZi5_t92d3sw',
			timestamp: 1562537922
		},{
			name: 'Rihanna',
			status: 'follow Elon Musk',
			type: 'people',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'https://marketindustryjournal.com/wp-content/uploads/2018/09/Elon-Musk-to-Resign-As-Tesla-Chairman-in-Settlement-with-SEC.jpg',
			timestamp: 1562537922
		},{
			name: 'Katy perry',
			status: 'like a document',
			type: 'doc',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover11.jpg',
			timestamp: 1562537922
		},{
			name: 'Beyonce',
			status: 'like a video',
			thumb: 'https://i.ytimg.com/vi/lztEnBFN5zU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB5XdJ1QdYty1iGH3uagwLteg31uQ',
			type: 'video',
			message: 'i like this video so perfect i like this video so perfect ',
			timestamp: 1562537922
		},{
			name: 'Michael',
			status: 'shared a document',
			type: 'doc',
			message: 'i like this video so perfect i like this video so perfect ',
			thumb: 'http://anthillonline.com/wp-content/uploads/2019/02/marketing.jpg',
			timestamp: 1562537922
		}
	];
	$scope.channelList = [
		{
			name: 'Google',
			thumb: 'https://sites.google.com/a/thawara.ac.th/s26510/_/rsrc/1536632792961/home/google-new-logo-2015-640x344.png'
		},{
			name: 'Youtube',
			thumb: 'https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png'
		},{
			name: 'Facebook',
			thumb: 'https://fbnewsroomus.files.wordpress.com/2018/11/fb-hero-image-001.jpeg'
		},{
			name: 'Tokopedia',
			thumb: 'https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/08/Blog_Cara-Daftar-untuk-Membuat-Akun-Tokopedia-dengan-Mudah.jpg'
		},{
			name: 'Gojek',
			thumb: 'https://lh3.googleusercontent.com/yYkezRVI_hE8j47gwwgz3EAwk5lK5L5uKOr86XcB1HwYiZQ_OQkhppBUeJstT_Lk1Q	'
		},{
			name: 'Disney',
			thumb: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555449052/shape/mentalfloss/waltdisneylogo.jpg'
		},{
			name: 'Apple',
			thumb: 'https://as-images.apple.com/is/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638'
		},{
			name: 'Android',
			thumb: 'https://zdnet3.cbsistatic.com/hub/i/2019/03/16/e118b0c5-cf3c-4bdb-be71-103228677b25/966244d1205becf3dd9a1af76b8d869a/android-logo.png'
		},{
			name: 'Microsoft',
			thumb: 'https://zdnet3.cbsistatic.com/hub/i/2019/02/12/745b7ed1-f19c-4718-ad0b-ae7cb7a14fe9/fac8658d4aa5c4bcbda293ab3e1a3d3b/microsoft.png'
		},{
			name: 'Samsung',
			thumb: 'https://pmcvariety.files.wordpress.com/2014/07/samsung-logo.jpg?w=1000'
		}
	];
});

app.service('APICall', function() {
    this.exampleCall = function(path){
        var deferred = $q.defer();

        $http({
            headers: {
              'Accept' : 'application/json'
            },
            responseType:'json',
            method : 'GET',
            params: {path: path},
            url : ''
        })
        .success(function(data) {
            deferred.resolve(data);
        })
        .error(function(data) {
        	deferred.resolve(data);
        });
        return deferred.promise;
    };
});


