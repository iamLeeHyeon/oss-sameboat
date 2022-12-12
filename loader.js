import{loading_img} from "./css";
import{formatCell} from "./formatter";




export function render(container, data, config){
    config = config || {};

    if(typeof container === "string"){
        container = document.querySelector(container);
    }
    let url = config.worker;
    if (!url){
        url = window.URL.createObjectURL(new Blob([
            "importScripts('https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js');"
         ], { type: "text/javascript" }));
    }
    return getWorker(url).send({ type: "convert", data })
    .then(result => renderJSON(container, result.data, result.styles, config));
}

export function renderJSON(container, data, styles, config){
    const{
        date,
        name,
        classfy
    } = data[0];
}

createloading_img(styles);
