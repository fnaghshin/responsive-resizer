'use strict';

import { NativeModules } from 'react-native';
var screenWidth,designWith,calculatedPercent ;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

const FResizer = {
    getScreen (){
        screenWidth = parseFloat(window.innerWidth);
    },
    setDesignWidth (designWidth){
        designWith = parseFloat(designWidth);
    },
    calcPercent (){
        var percent = parseFloat(((screenWidth * 100) / designWith));
        
        calculatedPercent = parseFloat(percent);
    },
    elementResizer (sizeInPixel,designWidth){
        if(isMobile.any())
        {
            return sizeInPixel;
        }else{
            FResizer.setDesignWidth(designWidth);
            FResizer.getScreen();
            FResizer.calcPercent();
            return parseFloat(sizeInPixel) * parseFloat(calculatedPercent / 100);
        }
    }
}

module.exports = { FResizer }