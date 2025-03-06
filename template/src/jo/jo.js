
function jo(tag, obj = { children: [], style: {}, }, style = {},){

    let rootElement = document.createElement(tag)

    rootElement.innerHTML = obj.t
    obj.t == undefined ? rootElement.innerHTML = '' : ''

    //  Add attributes to the item //
    for (let attribute in obj) {
        rootElement.setAttribute(attribute, obj[attribute])
        rootElement.removeAttribute('text')
        rootElement.removeAttribute('children')
        rootElement.class = rootElement.getAttribute('class')

        // add event on rootElement //
        attribute.includes('on') ? rootElement.addEventListener(attribute.slice(2), obj[attribute]) : ''
    }

    //  Add children to the item //
    for (let Children in obj.children) rootElement.append(obj.children[Children])

    //  Add style to the item //
    for (let styleElem in obj.style) rootElement.style[styleElem] = obj.style[styleElem]
    for (let styleElem in style) rootElement.style[styleElem] = style[styleElem]

    // if (tag) elements.push(rootElement)
    return rootElement
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 

//  Get Elements  : Elements call functions by id, class, and name and querySelector
function getId(getId, style = {}) {
    let rootElement = document.getElementById(getId)
    for (let styleElem in style) rootElement.style[styleElem] = style[styleElem]
    return rootElement
}

function getName(getName, style = {}) {
    let rootElement = document.getElementsByTagName(getName)
    for (let collectionStyle of rootElement) { for (let styleElem in style) collectionStyle.style[styleElem] = style[styleElem] }
    return rootElement
}

function getClass(getClass, style = {}) {
    let rootElement = document.getElementsByClassName(getClass)
    for (let collectionStyle of rootElement) { for (let styleElem in style) collectionStyle.style[styleElem] = style[styleElem] }
    return rootElement
}

function querySelector(querySelector, style = {}) {
    let rootElement = document.querySelector(querySelector)
    for (let styleElem in style) rootElement.style[styleElem] = style[styleElem]
    return rootElement
}

function getItem(querySelectorAll, style = {}) {
    let rootElement = document.querySelectorAll(querySelectorAll)
    for (let collectionStyle of rootElement) { for (let styleElem in style) collectionStyle.style[styleElem] = style[styleElem] }
    // if(rootElement.length !== 0 )
    return rootElement
    // else return console.error('Item not found');
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 

// add Event to items //
function event(elementId, event, fun) {
    let element = document.getElementById(elementId);
    element ? element.addEventListener(event, fun)
        : console.error("Element with ID '" + elementId + "' not found.");
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 

// fetch //
function fetchData(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => data)
        .catch(error => { console.error('There was a problem with the fetch operation:', error) })
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 

// add to local storage //
function addLocal(kay, value) {
    return localStorage.setItem(kay, JSON.stringify(value))
};

// get form local storage //
function getLocal(name) {
    return JSON.parse(localStorage.getItem(name))
};

// local //

function addStorage(name, value) {
    let getItem = JSON.parse(localStorage.getItem(name)) || []
    getItem.push(value)
    localStorage.setItem(name, JSON.stringify(getItem))
    window.location.reload()
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• 

// Read files from input element //
function addMedia(media, idInput, idAppend) {

    // get input file
    let getInput = getId(idInput)
    let newFile = new FileReader()

    newFile.onload = function () {

        let img = media
        img.src = newFile.result

        // get the item to which the media will be added
        let tag = getId(idAppend)

        // add media to the element based on the ID or add them to the body
        if (idAppend !== 'body') tag.append(img)
        else document.body.append(img)

    }
    newFile.readAsDataURL(getInput.files[0])
}

function setItemStorage(name, value, click) {
    let user = {}
    if (!getLocal(name)) addLocal(name, [])

    let valueInp = getId(value)

    event(click, 'click', () => {
        let old = getLocal(name)
        old.push(valueInp.value)
        addLocal(name, old)
        window.location.reload()
    })

    return user
}

export { jo, getId, getName, getClass, querySelector, getItem, event, fetchData, addLocal, getLocal, setItemStorage, addMedia}