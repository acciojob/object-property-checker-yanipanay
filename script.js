const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if (typeof sampleObject[key]=="undefined")
    return false;

    else return true;	i
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
