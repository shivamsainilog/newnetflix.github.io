<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <form id="myfrm" action="myAction.asp" style="display:none">
    my element: <input type="text" name= "element" value="Element" /><br/>
<input type="submit" value="Submit" />
  </form>
    <script language="JavaScript">
      var my_var=document.getElementById("myfrm");
      for(var i=0;i<my_var.length;i++){
        document.write(my_var.elements[i].value);
        document.write(",");
      }
    </script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
