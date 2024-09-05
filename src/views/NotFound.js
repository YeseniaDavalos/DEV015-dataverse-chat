function NotFound() {
  const view = document.createElement('div');

  const head = document.head;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/views/notfound/style.css';
  head.appendChild(link);

  view.innerHTML = `
    <h1>Oops... This is uncomfortable but I couldn't find the requested page.</h1>
  `;
  
  return view;
}
export default NotFound;
