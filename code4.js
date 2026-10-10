gdjs.felicidadesCode = {};
gdjs.felicidadesCode.localVariables = [];
gdjs.felicidadesCode.idToCallbackMap = new Map();
gdjs.felicidadesCode.GDNewTextObjects1= [];
gdjs.felicidadesCode.GDNewTextObjects2= [];
gdjs.felicidadesCode.GDNewText2Objects1= [];
gdjs.felicidadesCode.GDNewText2Objects2= [];
gdjs.felicidadesCode.GDNewText3Objects1= [];
gdjs.felicidadesCode.GDNewText3Objects2= [];
gdjs.felicidadesCode.GDNewSpriteObjects1= [];
gdjs.felicidadesCode.GDNewSpriteObjects2= [];


gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.felicidadesCode.GDNewText2Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.felicidadesCode.GDNewText2Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.felicidadesCode.GDNewText2Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.felicidadesCode.GDNewText2Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.felicidadesCode.GDNewText3Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.felicidadesCode.GDNewText3Objects1});
gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.felicidadesCode.GDNewText3Objects1});
gdjs.felicidadesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.felicidadesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.felicidadesCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText2Objects1[i].setCharacterSize(65);
}
}
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText2Objects1[i].activateBehavior("ShakeObject_PositionAngle", true);
}
}
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText2Objects1[i].setOutlineColor("red");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.felicidadesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.felicidadesCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText2Objects1[i].activateBehavior("ShakeObject_PositionAngle", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.felicidadesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.felicidadesCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText2Objects1[i].setCharacterSize(55);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.felicidadesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Alcantarilla", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.felicidadesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.felicidadesCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText3Objects1[i].setCharacterSize(50);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.felicidadesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.felicidadesCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.felicidadesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.felicidadesCode.GDNewText3Objects1[i].setCharacterSize(40);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.felicidadesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.felicidadesCode.mapOfGDgdjs_9546felicidadesCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleccion de niveles", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 70, 1);
}
}

}


};

gdjs.felicidadesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.felicidadesCode.GDNewTextObjects1.length = 0;
gdjs.felicidadesCode.GDNewTextObjects2.length = 0;
gdjs.felicidadesCode.GDNewText2Objects1.length = 0;
gdjs.felicidadesCode.GDNewText2Objects2.length = 0;
gdjs.felicidadesCode.GDNewText3Objects1.length = 0;
gdjs.felicidadesCode.GDNewText3Objects2.length = 0;
gdjs.felicidadesCode.GDNewSpriteObjects1.length = 0;
gdjs.felicidadesCode.GDNewSpriteObjects2.length = 0;

gdjs.felicidadesCode.eventsList0(runtimeScene);
gdjs.felicidadesCode.GDNewTextObjects1.length = 0;
gdjs.felicidadesCode.GDNewTextObjects2.length = 0;
gdjs.felicidadesCode.GDNewText2Objects1.length = 0;
gdjs.felicidadesCode.GDNewText2Objects2.length = 0;
gdjs.felicidadesCode.GDNewText3Objects1.length = 0;
gdjs.felicidadesCode.GDNewText3Objects2.length = 0;
gdjs.felicidadesCode.GDNewSpriteObjects1.length = 0;
gdjs.felicidadesCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['felicidadesCode'] = gdjs.felicidadesCode;
