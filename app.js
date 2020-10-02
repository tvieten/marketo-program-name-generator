// Get elements
const concatPrgName = document.getElementById("concatPrgName");
const copyBtn = document.getElementById("copyBtn");

const selCountry = document.getElementById("selCountry");
const selLanguage = document.getElementById("selLanguage");
const selYear = document.getElementById("selYear");
const selMonth = document.getElementById("selMonth");
const selBU = document.getElementById("selBU");
const selProgType = document.getElementById("selProgType");
const vendor = document.getElementById("vendor");
const idnumber = document.getElementById("idnumber");
const progName = document.getElementById("progName");
const suffix = document.getElementById("suffix");

// Initialize & Set Defaults
const delimiter = "-";

concatPrgName.value = "Your-Program-Name";

function fixDigit(val) {
  return val.toString().length === 1 ? "0" + val : val;
}

selCountry.value = localStorage.getItem("selCountry");
selLanguage.value = localStorage.getItem("selLanguage");
selYear.value = localStorage.getItem("selYear");
selMonth.value = localStorage.getItem("selMonth");
selBU.value = localStorage.getItem("selBU");
selProgType.value = localStorage.getItem("selProgType");
vendor.value = localStorage.getItem("vendor");
idnumber.value = localStorage.getItem("idnumber");
progName.value = localStorage.getItem("progName");
suffix.value = localStorage.getItem("suffix");

if (selYear.value === "" || selMonth.value === "") {
  let now = new Date();
  selYear.value = now.getFullYear().toString().substr(-2);
  selMonth.value = fixDigit(now.getMonth() + 1);
}

somethingChanged();

// Copy to Clipboard functionality

function copyToClipboard() {
  /* Select the text field */
  concatPrgName.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  M.toast({ html: "Copied!", classes: "rounded light-green" });
}

// Handle changes

function somethingChanged(e) {
  concatPrgName.value = selCountry.value;

  if (selLanguage.value !== "NONE") {
    concatPrgName.value = concatPrgName.value + delimiter + selLanguage.value;
  }

  concatPrgName.value = concatPrgName.value + delimiter + selYear.value + selMonth.value + delimiter + selBU.value + delimiter + selProgType.value;

  if (vendor.value !== "") {
    concatPrgName.value = concatPrgName.value + delimiter + vendor.value;
  }

  if (idnumber.value !== "") {
    concatPrgName.value = concatPrgName.value + delimiter + idnumber.value;
  }

  concatPrgName.value = concatPrgName.value + delimiter + progName.value;

  if (suffix.value !== "") {
    concatPrgName.value = concatPrgName.value + delimiter + suffix.value;
  }

  localStorage.setItem("selCountry", selCountry.value);
  localStorage.setItem("selLanguage", selLanguage.value);
  localStorage.setItem("selYear", selYear.value);
  localStorage.setItem("selMonth", selMonth.value);
  localStorage.setItem("selBU", selBU.value);
  localStorage.setItem("selProgType", selProgType.value);
  localStorage.setItem("vendor", vendor.value);
  localStorage.setItem("idnumber", idnumber.value);
  localStorage.setItem("progName", progName.value);
  localStorage.setItem("suffix", suffix.value);
}

// Throw in all event listeners
copyBtn.addEventListener("click", copyToClipboard);

selCountry.addEventListener("change", somethingChanged);
selLanguage.addEventListener("change", somethingChanged);
selYear.addEventListener("change", somethingChanged);
selMonth.addEventListener("change", somethingChanged);
selBU.addEventListener("change", somethingChanged);
selProgType.addEventListener("change", somethingChanged);
vendor.addEventListener("keyup", somethingChanged);
idnumber.addEventListener("keyup", somethingChanged);
progName.addEventListener("keyup", somethingChanged);
suffix.addEventListener("keyup", somethingChanged);
