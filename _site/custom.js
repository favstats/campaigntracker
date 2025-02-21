document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a.nav-link');
  links.forEach(function(link) {
    if (link.href === 'https://favstats.github.io/de25/') {
      link.setAttribute('target', '_blank');
    }
  });
});
