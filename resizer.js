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

var getScreen = function(){
    screenWidth = parseFloat(window.innerWidth);
    console.log(screenWidth);
}

var setDesignWidth = function(designWidth){
    designWith = parseFloat(designWidth);
    console.log(designWith);
}

var calcPercent = function(){
    var percent = parseFloat(((screenWidth * 100) / designWith));
    
    calculatedPercent = parseFloat(percent);
    console.log("CalculatedPercent : "+calculatedPercent);
}

var elementResizer = function(sizeInPixel,designWidth){
    if(isMobile.any())
    {
        return sizeInPixel;
    }else{
        setDesignWidth(designWidth);
        getScreen();
        calcPercent();
        return parseFloat(sizeInPixel) * parseFloat(calculatedPercent / 100);
    }
}

var fontResizer = function(sizeInPixel,designWidth){
    if(isMobile.any())
    {
        return sizeInPixel;
    }else{
        setDesignWidth(designWidth);
        getScreen();
        calcPercent();
        return parseFloat(sizeInPixel) * parseFloat(calculatedPercent / 100);
    }
}

console.log(elementResizer(140,1920));