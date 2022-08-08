Feature('Youtube');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://google.com');
    I.fillField('//input[@name="q"]',"youtube");
    I.click('//input[@name="btnK"]');
    I.wait(1);
    I.click('//a[@href="https://www.youtube.com/"]');
    I.wait(1);
    I.fillField('//input[@id="search"]',"şanışer");
    I.wait(1);
    I.click('//button[@id="search-icon-legacy"]');
    I.wait(2);
    I.click('//img[@src="https://i.ytimg.com/vi/mFK11XBgHRg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPCpwAiScgHGVEpoltSD7Bj9dwJA"]');
    I.wait(8);
    I.click('//button[@class="ytp-ad-skip-button ytp-button"]');
    I.wait(2);
    I.click('//ytd-button-renderer[@id="dismiss-button"]');
    I.wait(2);
    I.pressKey('ArrowRight');
    I.wait(1);
    I.pressKey('ArrowRight');
    I.wait(1);
    I.pressKey('ArrowRight');
    I.wait(1);
    I.pressKey('ArrowRight');
    I.wait(1);
    I.pressKey('ArrowRight');
    pause();

});
