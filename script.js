
const news = [{
  title: 'Fire in the bacon house!',
  content: 'Ribeye pastrami ham, corned beef biltong flank rump shankle picanha filet mignon turkey strip steak pig jerky. Strip steak andouille ground round landjaeger, tongue hamburger shoulder shankle short ribs kevin turkey fatback tail. Swine beef spare ribs tri-tip andouille kevin fatback rump picanha salami pancetta burgdoggen alcatra pork chop.',
  date: '11.10.2018'
}];


function saveNews(event) {
  // Make sure form is not submitted
  event.preventDefault();
  
  // @TODO: Fetch the data from the form
 

  // @TODO: Add news to array
 

  // @TODO: Refresh news


  // Return false to not submit
  return false;
}

function refreshNews() {
  // @TODO: Find news container

  // @TODO: loop over the news and create HTML for each
  const html = news.map((news) => {
    return `@TODO: create HTML`;
  })

  // @TODO: Inject the news HTML

}
