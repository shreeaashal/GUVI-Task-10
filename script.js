
const countdown = (i, callback)=> {
    if (i > 0) {
        let output = i;
        document.body.innerHTML = output;
        setTimeout(() => {
            countdown(i - 1, callback);
        }, 1000);
    } else {
        
         callback();
        
    }
}

countdown(10, () => {
    document.body.innerHTML = "Happy Independence Day";
}); 