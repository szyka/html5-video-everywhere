"use strict";
class Facebook extends Module {
  constructor() {
    super("facebook");
  }
  onInteractive() {
    let params = document.body.innerHTML.match(/"params",("[^"]*")/)[1];
    params = JSON.parse(decodeURIComponent(JSON.parse(params)));
    //	let container = document.getElementsByClassName("_53j5")[0];
    let container = document.getElementsByClassName("stageContainer")[0];
    let vp = new VP(container);
    this.log("params.video_data[0]:", params.video_data[0]);
    vp.srcs({
      "medium/mp4": params.video_data[0].sd_src,
      "high/mp4": params.video_data[0].hd_src
    });
    vp.props({
      controls: true,
      autoplay: this.options.isAutoPlay(true),
      preload: this.options.getPreload(),
      loop: this.options.isLoop()
    });
    vp.style({
      width: "100%",
      heigth: "100%"
    });
    vp.setup();
  }
}

new Facebook().start();
