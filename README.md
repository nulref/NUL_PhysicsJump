# NUL_PhysicsJump
RPGMaker MV map jumping with physics. This is an extension of Galv's Jump ability. You can find his work here: galvs-scripts.com.
Thanks to Galv for getting this started.

I made this because I didn't want the players to jump a set number of frames. I wanted a jumping system that worked a little bit more like a standard platformer. The faster you are moving and the longer you press the jump button, the further you will jump.
There was another issue I ran into quite a bit with Galv's plugin that would allow the character to jump over the edge of the map in some cases, even when using region restrictions or Yanfly's Smart Jump.
I have solved this loading the map edges when players enter a new map and stopping the jump animation when they hit the edge. Because of these two changes to Galv's plugin, there are no parameters for jump distance oe region restrictions.
