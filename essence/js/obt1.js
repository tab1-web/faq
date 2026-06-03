document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('li, p');
  
  elements.forEach(element => {
    const html = element.innerHTML;
    
    const fixedStyled = html.replace(
      /\(FIXED\)/g, 
      '<span style="color: #28a745; font-weight: bold;">(FIXED)</span>'
    );
    
    const fakeNewsStyled = fixedStyled.replace(
      /\(FAKE NEWS\)/g, 
      '<span style="color: #fd7e14; font-weight: bold;">(FIXED)</span>'
    );
    
    if (fakeNewsStyled !== html) {
      element.innerHTML = fakeNewsStyled;
    }
  });

  const ellipsisElements = document.querySelectorAll('.md-ellipsis');
  
  ellipsisElements.forEach(element => {
    if (element.textContent.includes('Closed Issues')) {
      element.innerHTML = element.innerHTML.replace(
        /(Closed Issues)/,
        '<span style="color: red;">$1</span>'
      );
    }
  });
});