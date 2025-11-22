// Extracted JavaScript from HTML files

// WebFont loader
WebFont.load({
    google: {
        families: [
            "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
            "Inter:100,300,regular,500,600,700,100italic,300italic,italic,500italic,600italic,700italic"
        ]
    }
});

// Webflow module detection
!function(o, c) {
    var n = c.documentElement, t = " w-mod-";
    n.className += t + "js";
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
}(window, document);

// Remove fill paths from FAQ icons to show only one plus sign
document.addEventListener('DOMContentLoaded', function() {
    const faqIcons = document.querySelectorAll('.faq-icon svg');
    faqIcons.forEach(function(icon) {
        const fillPaths = icon.querySelectorAll('path[fill-opacity="1"], path[fill="rgb(255,0,0)"]');
        fillPaths.forEach(function(path) {
            path.remove();
        });
    });
});

