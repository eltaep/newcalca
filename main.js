let copy = document.querySelector('.copy')
let addreader = document.querySelector('.def')
let input = document.querySelector('input')
let containersofreaders = document.querySelector('.readers')

addreader.addEventListener('click', () => {
    if (input.value != '') {
        // let name = document.createElement('div')
        // name.innerHTML = input.value
        // input.value = ''
        // input.focus()
        // let person = document.createElement('div')
        // let remove=document.createElement('div')
        // person.classList.add('person')
        // remove.innerHTML='remove reader'
        // person.appendChild(name)
        // person.appendChild(remove)
        // remove.addEventListener('click',()=>{
        //     remove.parentElement.remove()
        // })
        // containersofreaders.appendChild(person)
        let name = document.createElement('div')
        name.innerHTML = input.value
        input.value = ''
        input.focus()
        let person = document.createElement('div')
        let remove=document.createElement('div')
        person.classList.add('person')
        // remove.innerHTML='remove reader'
        remove.innerHTML='  إزالة القارئ '

        remove.classList.add('rem')
        person.appendChild(name)
        person.appendChild(remove)
        remove.addEventListener('click',()=>{
            remove.parentElement.remove()
        localStorage.myreaders=containersofreaders.innerHTML

        })
        containersofreaders.appendChild(person)
        name.classList.add('myname')

        localStorage.myreaders=containersofreaders.innerHTML



    }

})
input.addEventListener('keyup', (ks) => {
    if (ks.key == 'Enter' && input.value!='') {
        let name = document.createElement('div')
        name.innerHTML = input.value
        input.value = ''
        input.focus()
        let person = document.createElement('div')
        let remove=document.createElement('div')
        person.classList.add('person')
        remove.innerHTML='  إزالة القارئ '
        remove.classList.add('rem')
        person.appendChild(name)
        person.appendChild(remove)
        remove.addEventListener('click',()=>{
            remove.parentElement.remove()
        localStorage.myreaders=containersofreaders.innerHTML

        })
        containersofreaders.appendChild(person)
        name.classList.add('myname')

        localStorage.myreaders=containersofreaders.innerHTML

    }

})

if(localStorage.myreaders){
    containersofreaders.innerHTML=localStorage.myreaders


    document.querySelectorAll('.rem').forEach((btnremove)=>{
        btnremove.addEventListener('click',()=>{
            btnremove.parentElement.remove();
            localStorage.myreaders=containersofreaders.innerHTML
        })

    })

}
let s=3;
let start=document.querySelector('.start')
let end=document.querySelector('.end')
copy.addEventListener('click',()=>{

    if(start.value!='' && document.querySelector('.readers').innerHTML!=''){
        document.querySelector('.vis').style.visibility='visible'
        document.querySelector('.anything').innerHTML=''
        s=Number(start.value);
        let allnames=document.querySelectorAll('.person .myname')
        allnames.forEach((name)=>{
            let line=`صفحة رقم ${s}- ${name.innerHTML}`
          
            let thisp=document.createElement('p')
            thisp.innerHTML=line

            document.querySelector('.anything').appendChild(thisp)
            if(s==604){
                s=604
            }
            else{
                s++;

            }


        })
    
    }
})

document.querySelector('.vis').addEventListener('click', function() {
    if(document.querySelector('.readers').innerHTML!=''){
    var textToCopy = '';
    var paragraphs = document.querySelectorAll('.anything p');
    
    // Concatenate the text from all the <p> elements
    paragraphs.forEach(function(paragraph) {
      textToCopy += paragraph.textContent + '\n';
    });
    
    // Create a temporary textarea element to hold the text
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    
    // Append the textarea to the document
    document.body.appendChild(textarea);
    
    // Copy the text from the textarea
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    
    // Provide visual feedback or notification
    alert('لقد تم نسخه');
}
  });
