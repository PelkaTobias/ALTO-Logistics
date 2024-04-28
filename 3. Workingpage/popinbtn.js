document.addEventListener("DOMContentLoaded", function() {
    // Event-Handler für den Button zum Öffnen des Overlays und Popups
    document.getElementById("openPopupButton").addEventListener("click", function() {
        // Overlay anzeigen und Klasse "active" hinzufügen, um das Popup anzuzeigen
        document.getElementById("overlay").classList.add("active");
    });

    // Event-Handler für den Button zum Schließen des Overlays und Popups
    document.getElementById("closeOverlayButton1").addEventListener("click", function() {
        // Overlay ausblenden und Klasse "active" entfernen, um das Popup zu verstecken
        document.getElementById("overlay").classList.remove("active");
    });

    // Event-Handler für den Button zum Öffnen des zweiten Popups
    document.getElementById("showproducts").addEventListener("click", function() {
        // Overlay anzeigen und Klasse "active" hinzufügen, um das Popup anzuzeigen
        document.getElementById("overlay2").classList.add("active");
    });

    // Event-Handler für den Button zum Schließen des zweiten Popups
    document.getElementById("closeOverlayButton2").addEventListener("click", function() {
        // Overlay ausblenden und Klasse "active" entfernen, um das Popup zu verstecken
        document.getElementById("overlay2").classList.remove("active");
    });
});
