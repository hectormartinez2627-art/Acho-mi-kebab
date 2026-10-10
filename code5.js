gdjs.Pregunta_32calles_32de_32BarcelonaCode = {};
gdjs.Pregunta_32calles_32de_32BarcelonaCode.localVariables = [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.idToCallbackMap = new Map();
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects1= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects2= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects1= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects2= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects2= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1= [];
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects2= [];


gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1});
gdjs.Pregunta_32calles_32de_32BarcelonaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "felicidades", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1[i].setCharacterSize(60);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pregunta_32calles_32de_32BarcelonaCode.mapOfGDgdjs_9546Pregunta_959532calles_959532de_959532BarcelonaCode_9546GDNewText3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1[i].setCharacterSize(60);
}
}
}

}


};

gdjs.Pregunta_32calles_32de_32BarcelonaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects2.length = 0;

gdjs.Pregunta_32calles_32de_32BarcelonaCode.eventsList0(runtimeScene);
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewSpriteObjects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewTextObjects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText2Objects2.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects1.length = 0;
gdjs.Pregunta_32calles_32de_32BarcelonaCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['Pregunta_32calles_32de_32BarcelonaCode'] = gdjs.Pregunta_32calles_32de_32BarcelonaCode;
