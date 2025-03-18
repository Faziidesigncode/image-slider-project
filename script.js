        // Initialize Sliders
        $(document).ready(function() {
            $("#slider1").cycle({ fx: "shuffle" });
            $("#slider2").cycle({ fx: "zoom", delay: -2000 });
            $("#slider3").cycle({ fx: "turnDown", delay: -4000 });
            $("#slider4").cycle({ fx: "curtainX", delay: -2000 });
        });

        // Copy Code Function
        function copyCode(elementId) {
            let code = document.getElementById(elementId).innerText;
            navigator.clipboard.writeText(code).then(() => {
                alert("Code Copied Successfully!");
            });
        }