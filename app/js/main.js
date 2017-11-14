$(function(){
	console.log('Ready');

	//GetBungieAccount
	$.ajax({
		url: "http://www.bungie.net/Platform/User/GetBungieAccount/5962930/254/",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e) {
		response = e.Response;

		displayName = e.Response.bungieNetUser.displayName;
		console.log("Display Name :", displayName);

		profilePicture = response.bungieNetUser.profilePicturePath;
		console.log("Profile Picture :", profilePicture);

		platform = response.destinyMemberships[0].membershipType;
		console.log("Platform :", platform);
	});

	//////////////////////////////
	//      GetCharacter I     //
	/////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009262706284?components=200,205",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("I", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);

		light = e.Response.character.data.light;
		console.log("Light :", light);

		minutesPlayedTotal = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotal / 60) + " Hours");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
	});

	//////////////////////////////
	//     GetCharacter II     //
	////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009270122834?components=200,205",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("II", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);

		light = e.Response.character.data.light;
		console.log("Light :", light);

		minutesPlayedTotal = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotal / 60) + " Hours");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
	});

	//////////////////////////////
	//    GetCharacter III     //
	////////////////////////////

	$.ajax({
		url: "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433071573/Character/2305843009283578937?components=200,205",
		async: true,
  		crossDomain: true,
		methode: "GET",
		dataType: "json",
		headers: {
			"x-api-key": "f37abf77de544293b9c2e5837a863462"
		}
	}).done(function(e){
		console.log("III", e.Response);

		baseLevel = e.Response.character.data.baseCharacterLevel;
		console.log("Base Level I :", baseLevel);

		classType = e.Response.character.data.classType;
		console.log("Class Type :", classType);

		dateLastPlayed = e.Response.character.data.dateLastPlayed;
		console.log("Last Connection :", dateLastPlayed);

		emblemBackgroundPath = e.Response.character.data.emblemBackgroundPath;
		console.log("Emblem Bckg Path :", emblemBackgroundPath);

		emblemPath = e.Response.character.data.emblemPath;
		console.log("Emblem Path :", emblemPath);

		emblemColor = {
			"red": e.Response.character.data.emblemColor.red,
			"green": e.Response.character.data.emblemColor.green,
			"blue": e.Response.character.data.emblemColor.blue,
			"alpha": e.Response.character.data.emblemColor.alpha
		}
		console.log("Emblem Color :", emblemColor.red, emblemColor.green, emblemColor.blue, emblemColor.alpha);

		genderType = e.Response.character.data.genderType;
		console.log("Gender type :", genderType);

		light = e.Response.character.data.light;
		console.log("Light :", light);

		minutesPlayedTotal = e.Response.character.data.minutesPlayedTotal;
		console.log("Total Play Time :", Math.round(minutesPlayedTotal / 60) + " Hours");

		raceType = e.Response.character.data.raceType;
		console.log("Race Type :", raceType);
	});
});
