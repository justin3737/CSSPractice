//從API 取得經紀人資料並存在localstorage
$(function() {
	initAgentData();
});

var initAgentData = function() {
	getAgent();
	setTolocalStorage();
}

var msgLocaldata = [
	["AgentId"     , "Z001Z000AG00000002" ],
	["AgentName"   , "高布程" ],
	["AgentMobile"  , "0912333789" ],
	["selSubject"  , "" ],
	["currentPage" , "" ],
	["shortUrl"    , "http://goo.gl/psSj9" ],
	["selCustomer" , "" ],
	["msgContent"  , "" ],
	["currentFesi" , "fest_moon" ]
];

var setTolocalStorage = function() {
	for( var i = 0; i < msgLocaldata.length; i++ ){
		$.localStorage(msgLocaldata[i][0], msgLocaldata[i][1]);
	}
};

var getAgent = function() {
	return;
};