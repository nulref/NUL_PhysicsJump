//-----------------------------------------------------------------------------
//  Nulref's Physics Jump
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  NUL_PhysicsJump.js
//-----------------------------------------------------------------------------
//  2016-09-26 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// https://github.com/nulref/NUL_PhysicsJump
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.NUL_PhysicsJump = true;

var Nulref = Nulref || {};          // Nulref's main object
Nulref.pCmd = Nulref.pCmd || {};    // Plugin Command manager
Nulref.PJ = Nulref.PJ || {};        // Nulref's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc Allows the player to jump by pressing a button. Based on Galv's Jump Ability.'
 * 
 * @author NulRef - https://github.com/nulref/NUL_PhysicsJump
 *
 * @param Key
 * @desc See help file for available keys. This key will also act as "cancel" key
 * @default c
 *
 * @param Jump Sound
 * @desc Sound effect played when player jumps using the jump button
 * FileName,volume,pitch. (leave blank for no sound)
 * @default Jump1, 80, 150
 *
 * @help
 *   Nulref's Physics Jump
 * ----------------------------------------------------------------------------
 *  JUMP KEY
 * ----------------------------------------------------------------------------
 * This plugin mostly uses default RPGMaker MV controls for the jump key
 * setup. It also allows use of other keyboard keys but whatever key you
 * choose, I advise you to test it isn't conflicting with another control.
 * ----------------------------------------------------------------------------
 * Possible keys to use for "Key" setting:
 *  tab
 *  enter                // Not recommended as key already used
 *  shift                // Not recommended as key already used
 *  ctrl
 *  alt
 *  space                // Not recommended as key already used
 *  0-9
 *  a-z                  // Q,W,Z,X are not recommended as they are used
 *  semi-colon
 *  comma
 *  period
 *  single quote
 *  pageup
 *  pagedown
 *
 * Use one of the below key codes instead for compatibility with gamepads
 *  ok       //      A
 *  cancel   //      B
 *  shift    //      X
 *  menu     //      Y
 *  pageup   //      LB
 *  pagedown //      RB
 *  up       //      D-pad up
 *  down     //      D-pad down
 *  left     //      D-pad left
 *  right    //      D-pad right

 *
 * ----------------------------------------------------------------------------
 */



//-----------------------------------------------------------------------------
//  BEGIN CODE
//-----------------------------------------------------------------------------

(function() {

})