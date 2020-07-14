//Element Variables
const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextBox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

let entryCounter = 1

function addEntryToDom(event) {
    event.preventDefault()
    const entryDiv = document.createElement('div');
    entryDiv.classList.toggle('single-entry')
    entryDiv.innerText = entryTextBox.value
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)
    entryTextBox.value = ''

    const displayEntryButton = document.createElement('button')
    displayEntryButton.classList.add('display-entry-button')
    displayEntryButton.textContent = entryCounter
    entriesNav.appendChild(displayEntryButton)

    displayEntryButton.addEventListener('click', function () {
        const allEntries = document.querySelectorAll('.single-entry')

        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none'
        }
        entryDiv.style.display = 'block'

    })

    entryCounter++
}

entryForm.addEventListener('submit', addEntryToDom)