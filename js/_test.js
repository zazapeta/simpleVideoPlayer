module.exports = {
  'Simple Vanilla Browser Test' : function (client) {
    client
      .url('http://127.0.0.1:8080')
      .pause(1000);

    // expect element  to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    // SVP
    client.expect.element('#SVP').to.have.attribute('ontimeupdate').which.contains('update_progress_bar');
    client.expect.element('#SVP').to.have.attribute('onloadeddata').which.contains('update_buffer_bar');
    client.expect.element('#SVP').to.be.an('video');
    client.expect.element('#SVP').to.be.visible;
    // progress Bar
    client.expect.element('#SVP_progressBar').to.be.an('progress');
    client.expect.element('#SVP_progressBar').to.be.visible;
    //buffer Bar
    client.expect.element('#SVP_bufferBar').to.be.an('progress');
    client.expect.element('#SVP_bufferBar').to.be.visible;

    //Bouton Play Pause
    client.expect.element('#SVP_iconPlayPause').to.have.attribute('class').which.contains('fa-play');
    client.click("#SVP_iconPlayPause");
    client.expect.element('#SVP_iconPlayPause').to.have.attribute('class').which.contains('fa-pause');
    client.click("#SVP_iconPlayPause");
    client.expect.element('#SVP_iconPlayPause').to.have.attribute('class').which.contains('fa-play');

    client.end();
  }
};