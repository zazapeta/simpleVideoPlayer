'use strict';

module.exports = {
    'React Player Test': function ReactPlayerTest(client) {
        client.url('http://127.0.0.1:8080').pause(1000);

        // expect element  to be present in 1000ms
        client.expect.element('body').to.be.present.before(1000);

        // SVP
        client.expect.element('video').to.be.present;
        client.expect.element('video').to.have.attribute('src');
        client.expect.element('video').to.be.visible;
        client.expect.element('video').to.be.visible;
        client.assert.cssProperty("video", "width", "600px");
        // progress Bar
        client.expect.element('progress.progressBar').to.have.attribute('class').which.contains('svpControls svpProgressBar progressBar');
        client.expect.element('.svpControls.svpProgressBar.progressBar').to.be.visible;
        //buffer Bar
        client.expect.element('progress.bufferBar').to.have.attribute('class').which.contains('svpControls svpBufferBar bufferBar');
        client.expect.element('.svpControls.svpBufferBar.bufferBar').to.be.visible;

        //Bouton Play Pause
        client.expect.element('div .buttonPP').to.have.attribute('class').which.contains('svpControls svpButtonPP');
        client.click("div.svpControls.svpButtonPP");
        client.expect.element('.buttonPP>i').to.have.attribute('class').which.contains('fa-pause');
        client.click("div.svpControls.svpButtonPP");
        client.expect.element('.buttonPP>i').to.have.attribute('class').which.contains('fa-play');

        client.end();
    }
};
