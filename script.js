
const news = [{
  title: 'Fire in the bacon house!',
  content: 'Ribeye pastrami ham, corned beef biltong flank rump shankle picanha filet mignon turkey strip steak pig jerky. Strip steak andouille ground round landjaeger, tongue hamburger shoulder shankle short ribs kevin turkey fatback tail. Swine beef spare ribs tri-tip andouille kevin fatback rump picanha salami pancetta burgdoggen alcatra pork chop.',
  date: '11.10.2018'
}];


function saveNews(event) {
  // Make sure form is not submitted
  event.preventDefault();
  
  // Handle news
  const title = document.getElementById('title').value
  const content = document.getElementById('content').value
  const date = new Date

  // Add news to array
  news.push({
    title,
    content,
    date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  })

  // Refresh news
  refreshNews()

  // Return false to not submit
  return false;
}

function refreshNews() {
  // Find news container
  const container = document.getElementById('news-container');

  // loop over the news and create HTML for each
  const html = news.map((news) => {
    
    return `<div class="news">
              <h2>${news.title}</h2>
              <p>${news.content}</p>
              <p class="date">${news.date}</p>
            </div>`;
  })

  // Inject new HTML by creating a string from the array
  // "" is the glue between the array items
  container.innerHTML = html.join("")
}
