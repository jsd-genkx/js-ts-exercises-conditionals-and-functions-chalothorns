// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass1234";
const length =password.length;

if (length < 6) {
    console.log("Too short");
} else if (length <= 10)
    console.log("Moderate");
else {
    console.log("Strong");
}


