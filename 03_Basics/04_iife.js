//  Immediately Invoked Function Expression IIFE


(function chai(){
    //Named IIFE
    console.log("DB Connected");
})();

// chai();

( (name) => {
    console.log(`DB Connected 2 ${name}`);
} )("Sai ");