(function() {
    var _0x1a2b = function() {
        if (window.outerHeight - window.innerHeight > 160 || window.outerWidth - window.innerWidth > 160) {
            console.log("DevTools detectado.");
        }
    };
    window.addEventListener('resize', _0x1a2b);
    _0x1a2b();
})();

var typewriter = new Typewriter(document.getElementById('typewriter'), { loop: true, delay: 60 });
typewriter.typeString('JONAS AFONSO DA ROSA').pauseFor(2500).deleteAll()
    .typeString('LIDERANÇA LOGÍSTICA').pauseFor(2000).deleteAll()
    .typeString('RESILIÊNCIA COMPROVADA').start();


gsap.from(".trunk", {
    height: 0,
    scrollTrigger: {
        trigger: ".tree-container",
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1.5
    }
});


gsap.utils.toArray(".node-wrapper").forEach((node) => {
    gsap.to(node, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: node,
            start: "top 85%", 
            toggleActions: "play none none reverse",
        }
    });
});


gsap.to(".wm-1, .wm-3, .wm-5", {
    y: -100,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

gsap.to(".wm-2, .wm-4, .wm-6", {
    y: 100,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

  // Bloqueia F12, Ctrl+Shift+I, Ctrl+U e Ctrl+S
      document.onkeydown = function (e) {
        if (e.keyCode == 123) {
          return false;
        } // F12
        if (
          e.ctrlKey &&
          e.shiftKey &&
          (e.keyCode == "I".charCodeAt(0) ||
            e.keyCode == "J".charCodeAt(0) ||
            e.keyCode == "C".charCodeAt(0))
        ) {
          return false;
        }
        if (
          e.ctrlKey &&
          (e.keyCode == "U".charCodeAt(0) ||
            e.keyCode == "S".charCodeAt(0) ||
            e.keyCode == "H".charCodeAt(0) ||
            e.keyCode == "A".charCodeAt(0) ||
            e.keyCode == "P".charCodeAt(0))
        ) {
          return false;
        }
      };

      // Detecta se o console (DevTools) está aberto
      setInterval(function () {
        var before = new Date().getTime();
        debugger;
        var after = new Date().getTime();
        if (after - before > 100) {
          document.querySelector("body").innerHTML =
            "<h1>Acesso negado para inspeção.</h1>";
        }
      }, 1000);
