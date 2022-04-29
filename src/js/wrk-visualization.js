//URL Params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//Param's for the URL to get!
const work_id = urlParams.get('work-id');


//Some important Variables
const work_ids = ['dPzsFYA'];

/**
 * WORK IDS:
 * 
 * Tipos de Señales - dPzsFYA || work_ids[0]
 * 
 * 
 */

if(work_id === work_ids[0]) {
    document.title = 'Tipos de Señales - WorkVisualizer - School Works';
    document.getElementById('content').innerHTML = '<object type="text/html" data="../../../src/extra/works/tds.tecno.html"></object>';
} else {
    document.title = 'Trabajo Inexistente - WorkVisualizer - Shchool Works';
    document.getElementById('content').innerHTML = '0'
}