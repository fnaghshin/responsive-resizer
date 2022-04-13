import { Dimensions, PixelRatio } from "react-native";

let { width } = Dimensions.get("window");
var screenWidth,designWith,calculatedPercent ;

var getScreen = function(){
    screenWidth = parseFloat(width);
}

var setDesignWidth = function(designWidth){
    designWith = parseFloat(designWidth);
}

var calcPercent = function(){
    var percent = parseFloat(((screenWidth * 100) / designWith));
    
    calculatedPercent = parseFloat(percent);
}

var elementResizer = function(sizeInPixel,designWidth){
        setDesignWidth(designWidth);
        getScreen();
        calcPercent();
        return parseFloat(sizeInPixel) * parseFloat(calculatedPercent / 100);
}

export default { elementResizer }
