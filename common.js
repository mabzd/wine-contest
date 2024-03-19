function loadDataScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
}

const Data = [];
loadDataScript('data/001-winawrocka.js');
loadDataScript('data/002-ger-white.js');

function getSelectedDataSet() {
    const urlParams = new URLSearchParams(window.location.search);
    return Data.find(d => d.datasetName == urlParams.get('dataset'));
}

function getDataSetSelectionHtml() {
    const sortedData = Data.toSorted((a, b) => a.eventDate - b.eventDate);
    return `
        <h1>Wydarzenie</h1>
        <ol>
        ${sortedData.map(d => getDataSetHtml(d)).join('\n')}
        </ol>`;
}

function getDataSetHtml(data) {
    return `<li><a href="?dataset=${data.datasetName}">${data.eventName}</a> ${data.eventDate.toISOString().split('T')[0]}</li>`
}