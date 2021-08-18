

//Class decorator
function log(target) {
    //target constructor
    console.log(target);

}


@log
class Foo {

}