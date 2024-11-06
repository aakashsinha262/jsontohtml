// json2html.js
export default function json2html(data) {
    // Start the HTML table string
    let html = '<table data-user="aakashsinha262@gmail.com">';
    html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    html += '<tbody>';
  
    // Loop through the data to generate table rows
    data.forEach(item => {
      html += '<tr>';
      html += `<td>${item.Name || ''}</td>`;
      html += `<td>${item.Age || ''}</td>`;
      html += `<td>${item.Gender || ''}</td>`;
      html += '</tr>';
    });
  
    html += '</tbody></table>';
    return html;
  }
  