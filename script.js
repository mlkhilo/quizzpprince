function gravarNome(){
    let nome = document.getElementById('nome').value
    localStorage.setItem('nomeSalvo', nome)
    window.open('pagina2.html')

}