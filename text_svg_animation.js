const logo = document.querySelectorAll("#logo path");

for(let i =0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);

    /*
        SVGGeometryElement.getTotalLength()
        :: method returns the user agent's computed
        value for the total length of the path in user units
        
        ***this is gonna give us the total length of the dash of the stroke length

        **if you're gonna use one shape all you have to do is just console.log the element dot get total length
        --> you're gonna be able to get the exact length
        -- 각 path의 전체 길이를 알 수 있음.
    */
}