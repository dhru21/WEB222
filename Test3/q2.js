function Duration(value) {
    options = options || {};
    var value = options.value || 0;
    var raw = false;
    if (value) raw == true;
    else raw == false;
    this.seconds = function () {
        if (raw) {
            return (options.value % 60);
        }
        else return 0;
    };
    this.minutes = function () {
        if (raw) {
            return (options.value / 60);
        }
        else return 0;
    };
    this.hours = function () {
        if (raw) {
            return (options.value / 3600);
        }
        else return 0;
    };
}

var options = {
    value: 2,
};

var d = new Duration(0);
console.log(d.seconds());