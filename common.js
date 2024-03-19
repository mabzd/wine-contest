const Data = [];

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
    // Simple links with href doesn't work on htmlpreview.github.io
    const q = location.href.indexOf('?') >= 0 ? '&' : '?';
    return `<li>
        <a 
            style="cursor: pointer; color: blue"
            onclick="location.href = location.href + '${q}dataset=${data.datasetName}'">
            ${data.eventName}
        </a> 
        ${data.eventDate.toISOString().split('T')[0]}
    </li>`
};

function render(htmlCallback) {
    const data = getSelectedDataSet();
    var content = document.getElementById("content");
    content.innerHTML = data
        ? htmlCallback(data)
        : getDataSetSelectionHtml();
}