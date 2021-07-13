export const addRemoveClassName = (elemnt, addClass, removeClass ) => {
    for(let i=0;i<elemnt.length;i++){
        elemnt[i].classList.add(addClass);
        elemnt[i].classList.remove(removeClass);
    }
}