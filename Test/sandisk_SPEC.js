var searchpage = require ('../Page/sandisk_PO.js');

var act_inputSearch =new searchpage();
var act_clickSearch =new searchpage();

var exp_searchResult=new searchpage();

beforeEach(function(){
    var url=new searchpage();
    url.get ();
});

describe('search function',function(){
    it('search something',function(){
        act_inputSearch.input_searchBox();
        act_clickSearch.click_searchBtn();
        exp_searchResult.resultDisplay();
    });
});

