// Script to replace the '/' in images  ==(thanks ollie!)=======================================================================================
if (window.location.href.includes("github.io")) {
  document.querySelectorAll('img').forEach(img => {
    img.src = img.src.replace('/', '/netbeanz/');
  
  });
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.href = link.href.replace('/', '/netbeanz/');
  });
}