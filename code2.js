gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDNewText3Objects1= [];
gdjs.MenuCode.GDNewText3Objects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.MenuCode.GDNewText2Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.MenuCode.GDNewText2Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.MenuCode.GDNewText2Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.MenuCode.GDNewText3Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.MenuCode.GDNewText3Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.MenuCode.GDNewText3Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Calles de Barcelona", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].setCharacterSize(150);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].setOutlineThickness(10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.MenuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText2Objects1[i].setCharacterSize(130);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.MenuCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Seleccion de niveles", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.MenuCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText3Objects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.MenuCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewText3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewText3Objects1[i].setCharacterSize(60);
}
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewText3Objects1.length = 0;
gdjs.MenuCode.GDNewText3Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDNewText3Objects1.length = 0;
gdjs.MenuCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
