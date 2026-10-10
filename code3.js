gdjs.Seleccion_32de_32nivelesCode = {};
gdjs.Seleccion_32de_32nivelesCode.localVariables = [];
gdjs.Seleccion_32de_32nivelesCode.idToCallbackMap = new Map();
gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects2= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects2= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects1= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects2= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1= [];
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects2= [];


gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1});
gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1});
gdjs.Seleccion_32de_32nivelesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewTextObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1[i].setCharacterSize(60);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Calles de Barcelona", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1[i].setCharacterSize(60);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Alcantarilla", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1[i].setCharacterSize(70);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Seleccion_32de_32nivelesCode.mapOfGDgdjs_9546Seleccion_959532de_959532nivelesCode_9546GDNewText3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1 */
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1[i].setCharacterSize(60);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1[i].addForce(1000, 1000, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1[i].hide(false);
}
}
}

}


};

gdjs.Seleccion_32de_32nivelesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects2.length = 0;

gdjs.Seleccion_32de_32nivelesCode.eventsList0(runtimeScene);
gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewTextObjects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText2Objects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewSpriteObjects2.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects1.length = 0;
gdjs.Seleccion_32de_32nivelesCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['Seleccion_32de_32nivelesCode'] = gdjs.Seleccion_32de_32nivelesCode;
