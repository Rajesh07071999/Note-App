function downloadTextFile() {
    var text = document.getElementById('userinputtext').value;

    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'NewTextFile.txt';
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }

 


  

