
function actionButton1(name) {
    if(name[0]!=='.') {
      name = '.' + name;
    }
    let btn = document.querySelector(name);
    btn.addEventListener('click', () => alert("У нас все получилось"));
}


actionButton1('rb1');