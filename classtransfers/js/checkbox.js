function setupTableRowHighlighting() {
  const tableRows = document.querySelectorAll('table tr');
  
  const savedHighlight = localStorage.getItem('highlightedTableRow');
  
  if (savedHighlight) {
    const [tableIndex, rowIndex] = savedHighlight.split('-');
    const tables = document.querySelectorAll('table');
    if (tables[tableIndex]) {
      const rows = tables[tableIndex].querySelectorAll('tr');
      if (rows[rowIndex]) {
        rows[rowIndex].classList.add('highlighted-row');
      }
    }
  }
  
  tableRows.forEach((row, rowIndex) => {
    row.addEventListener('click', (e) => {
      tableRows.forEach(r => r.classList.remove('highlighted-row'));
      
      row.classList.add('highlighted-row');
      
      let tableIndex = 0;
      let currentTable = row.closest('table');
      const allTables = document.querySelectorAll('table');
      for (let i = 0; i < allTables.length; i++) {
        if (allTables[i] === currentTable) {
          tableIndex = i;
          break;
        }
      }
      
      localStorage.setItem('highlightedTableRow', `${tableIndex}-${rowIndex}`);
    });
  });
}

document.addEventListener('DOMContentLoaded', setupTableRowHighlighting);