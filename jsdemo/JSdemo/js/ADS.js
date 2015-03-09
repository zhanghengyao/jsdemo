(function () {
    if(!window.ADS) {
        window['ADS'] = { };
    }
    function isCompatible(other) {
        if (other === false || !Array.prototype.push || !Object.hasOwnProperty || !document.createElement || !document.getElementsByTagName) {
            return false;}
        return true;
    }

    function $() {
        var elements = [];
        for(var i=0,length=arguments.length;i<length;i++) {
            var element = arguments[i];
            if(typeof element=="string") {
                element = document.getElementById(element);
            }
            if(length==1) {
                return element;
            }
            elements.push(element);
        }
        return elements;
    }
    
    function addEvent(node,type,listener) {
        if(!isCompatible(node))
            return false;
        if (!(node = $(node)))
            return false;
        if(node.addEventListener) {
            node.addEventListener(type, listener, false);
            return true;
        }
        else if(node.attachEvent){
            node['e' + type + listener] = listener;
            node[type + listener] = function () {
                node['e' + type + listener](window.event);
            };
            node.attachEvent('on' + type, node[type + listener]);
            return true;
        }
        return false;
    }
    
    function removeEvent(node,type,listener) {
        if (!(node = $(node)))
            return false;
        if(node.removeEventListener) {
            node.removeEventListener(type, listener, false);
            return true;
        }
        else if(node.detachEvent) {
            node.detachEvent('on' + type, node[type + listener]);
            node[type + listener] = null;
            return true;
        }
        return false;
    }

    function getElementsByClassName(className,tag,parent) {
        parent = parent || document;
        if(!(parent=$(parent)))
            return false;
        var allTags = (tag == "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
        var matchingElements = [];
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
        var element;
        for (var i = 0,length=allTags.length; i < length; i++) {
            element = allTags[i];
            if(regex.test(element.className))
            {
                matchingElements.push(element);
            }
        }
        return matchingElements;
    }

    function bindFunction(obj,func) {
        return function() {
            func.apply(obj, arguments);
        };
    }

    window['ADS']['isCompatible'] = isCompatible;
    window['ADS']['$'] = $;
    window['ADS']['addEvent'] = addEvent;
    window['ADS']['removeEvent'] = removeEvent;
    window['ADS']['getElementsByClassName'] = getElementsByClassName;
    window['ADS']['bindFunction'] = bindFunction;
})();