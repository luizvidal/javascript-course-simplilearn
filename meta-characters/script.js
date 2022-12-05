let regex = /Welc?ome?/;
let str1 = "Welom asdf asdf asdfasdf asdf asdf asdfasdfasdf";
let output = regex.test(str1);
console.log(output)
// * leter between is not important ex.: W*e returns true for Wsadklfjsalde Welcome, We made, etc.
// ^ the string has to start with what comes after this. ex.: ^Ex returns true for Ex asdfsad
// $ is the same as ^ but for the last character, not the first
// ? makes the last character opotional