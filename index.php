<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/core.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>


</head>
<body>

    <input type="text" id="tekstbalk" autocomplete="off" value="cuck">
    <button style="width: 100px; height: 100px;">Send</button>

    <script>
            var socket = io();
            $('button').on("click", function(){
                console.log("cuck");
                var text = document.getElementById('tekstbalk').value; // lees de value af van tekstbalk

                var split = Array.from(text); //maak een array van de var text
                socket.emit('chat message', text); //stuur het in de socket
                console.log(split);
                for(i=0; i < text.length; i++) { //voer het zovaak uit als dat de array groot is
                   var lees =  split[i];
                   if(lees == "c" || lees == "C") {
                       console.log("nice");
                   } else if (lees == "u") {
                       console.log("U2");
                   } else {
                       console.log("haha");
                   }
                   }



                return false;
            });

    </script>

</body>
</html>