let duck = {
    name: "Daffy",
    legs: 2
};

let funModule = (function () {
    return {
        randMixinFunc: function(obj) {
            obj.mixin1 = () => {
                return true;
            }
        },

        randLogMixin: function (obj) {
            obj.randLog = () => {
                console.log("Logging to the console");
            }
        }
    }
}) ();

funModule.randLogMixin(duck);
console.log(duck.randLog());
