<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<title></title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<style type="text/css"> 
* { margin:0; padding:0;} 
body { font-size:12px;} 
p{ margin: 5px;} 
.box{ padding: 10px;} 
</style> 

</head> 
<body> 
    <h1 class="findme">ADS.getElementsByClassName() Example</h1>
    <p class="findme"> this is just an <em>example</em> </p>
    <div class="thelist">
        <h2 class="findme">a list</h2>
        <ol>
            <li class="findme">bitch</li>
            <li class="findme">shit</li>
            <li class="findme">fuck</li>
        </ol>
        <input id="btnTest" type="button" value="click me" />
    </div>
</body> 
<script src="js/ADS.js"></script>
    <script language="javascript" type="text/javascript">

        (function() {

            function Annimal() {
                this.name = 'dog';
            }

            Annimal.prototype.say = function() {
                alert('annimal:' + this.name);
            };


            var anni = new Annimal();
            var elements = ADS.getElementsByClassName('findme', 'li', ADS.$('ol'));
            for (var i = 0, length = elements.length; i < length; i++) {
                ADS.addEvent(elements[i], 'click', ADS.bindFunction(anni, anni.say));
            }
            
            if(document.implementation) {
                if(document.implementation.hasFeature('Core','2.0')) {
                    console.log('DOM2 support');
                }
            }

        })();

    </script>
</html> 