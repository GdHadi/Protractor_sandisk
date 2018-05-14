var search_page = function(){
    //elements
    var searchBox = element(by.model('q'));
    var searchBtn = element(by.xpath('//*[@id="consent_blackbar"]/div/div[3]/div[2]/div[1]/div/section/div/form/span/button'));
    //actions
    this.get=function(){
        browser.get('https://www.sandisk.com/');
    };
    this.input_searchBox=function(){
        searchBox.sendKeys('something');
    };
    this.click_searchBtn=function(){
        searchBtn.click();    
    };
    //expects
    this.resultDisplay=function(){
        expect(browser.getCurrentUrl()).toBe('https://www.sandisk.com/tools/search');
    };
};
module.exports = search_page
