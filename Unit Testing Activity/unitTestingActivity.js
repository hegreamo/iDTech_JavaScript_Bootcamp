function Greet(name) {
    if (name === null) {
        return "Hello there!";
    }
    if (Array.isArray(name)) {
        var greeting = "Hello, ";
        for (let i = 0; i < name.length; i += 1) {
            greeting += name[i];
            if (i != name.length - 1) {
                greeting += ", ";
            }
        }
        return greeting;
    }
    if (name.toUpperCase() === name) {
        return "HELLO " + name + "!";
    }
    return "Hello, " + name;
}