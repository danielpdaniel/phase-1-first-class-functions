function sayBagel(bagel) {
    return `oh {$bagel}`;
}

function receivesAFunction(sayBagel) {
    sayBagel()
}

function returnsANamedFunction() {
    return function sayToast(toast) {
        return toast;
    }
}

function returnsAnAnonymousFunction() {
   return function(){
    
   }
}