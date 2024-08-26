const NotFound = () => {
    const view = document.createElement('div');
    view.innerHTML = `
  <h1>Ops.. This is uncomfortable but I couldn't find the requested page.</h1>
`;
    return view;
};

export default NotFound;