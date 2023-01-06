# Home_Alone_Style_TP_Turret
TP Turret with servo motor control using Modular Things, with physical switch control, web app control, and automated facial recognition control

---

### Modular Things

<a href = "https://github.com/modular-things/modular-things">Modular Things</a> is a softawre tool that makes writing software for multiple hardware devices. The software works with these different <a href = "https://github.com/modular-things/modular-things-circuits">circuits</a>. This project uses 
- Servo Motor
- Potentiometer
- Breadboard

Modular Things uses JavaScript so when adding OpenCV we followed this <a href = "https://docs.opencv.org/4.x/d0/d84/tutorial_js_usage.html">tutorial</a>, then this  <a href = "https://docs.opencv.org/3.4/df/d6c/tutorial_js_face_detection_camera.html">tutorial</a> was used to help with facial and eye tracking. In order to control all of the different devices on one computer, each board needed to be connected to to the same computer. In order to do that I used a <a href = "https://www.temu.com/subject/n9/googleshopping-landingpage-a-psurl.html?goods_id=601099512760112&_bg_fs=1&_p_rfs=1&_x_ads_channel=google&_x_ads_sub_channel=shopping&_x_login_type=Google&_x_vst_scene=adg&sku_id=17592192422859&_x_ads_account=2886927045&_x_ads_set=19420409881&_x_ads_id=143487662374&_x_ads_creative_id=643185272336&_x_ns_source=g&_x_ns_gclid=CjwKCAiAh9qdBhAOEiwAvxIok7hMZnspGwBez00fDeYpiytQ6pagEcDVcqV3JUQ0mrYoiuXEdOH4qhoCV9gQAvD_BwE&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=17592192422859&_x_ns_wbraid=CjkKCQiAh9qdBhCNARIoADWgKPAb7Hqo4v0qyvLMI_MzbFBS40qEQnkW_HtnJScmEeirxtjCixoCibY&_x_ns_gbraid=0AAAAAo4mICH06KdVTcas0m3fkcECXB0Ms&gclid=CjwKCAiAh9qdBhAOEiwAvxIok7hMZnspGwBez00fDeYpiytQ6pagEcDVcqV3JUQ0mrYoiuXEdOH4qhoCV9gQAvD_BwE">USB Hub</a>. 

---

### Coding 

Each of the different devices, had their own learning curve. In Modular Things, once you plug the device in, you are able to see each of the function associated with the device object and name it. In the JavaScript I set an action listener that was listening for the different outputs, potentiometer values and button presses. There outputs were used in the logic of the code. 

We set it so that when the first potentiometer value was 0-.5 the servo motor was being manually controlled by the second potentiometer (below .5 is left, above .5 is right). If the first potentiometer value was .5-1 the servo motor was being controlled by the face tracking software. If the first potentiometer was set to 0 and the second potentiometer was set to 1, another servo motor turns to allow a door to open, dispensing marbles.

The face tracking software was using a camera connected to the dispensor platform. The HTML script is taking video and seeing if the face was on the left or right of the camera, then that changed the direction of the servo motor turning the platform. When the button was pressed, a faster motor was connected to a power source which started shooting the toilet paper. 
