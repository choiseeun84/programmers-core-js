



function getNode(node,context = document){

    if(context.nodeType !== 9) context = getNode(context);

    return document.querySelector(node);
}

function getNodes(node,context = document){

    if(context.nodeType !== 9) context = getNode(context);

    return document.querySelectorAll(node);
}


