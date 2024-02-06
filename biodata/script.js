document.addEventListener('DOMContentLoaded', function () {
    var checkBox = document.getElementById("languageCheck");
    // Get the output text
    // var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    // if (checkBox.checked == true) {
    //     //   text.style.display = "block";
    //     translateLang('mr');
    // } else {
    //     translateLang('en');
    //     //   text.style.display = "none";
    // }


    //To Set Marathi as defualt Language   ------Uncommet 4 lines
    // checkBox.checked = true;
    // translateLang('mr');
    // checkboxText.innerHTML = "म";
    // checkboxText.className = "lngEn slider round";


    //To Set Marathi as defualt Language   ------Uncommet 4 lines
    checkBox.checked = false;
    translateLang('en');
    checkboxText.innerHTML = "En";
    checkboxText.className = "lngMr slider round";



});
var translations = {
    lableName: {
        en: "Name",
        mr: "नाव"
    },
    name: {
        en: "Ankit Sitaram Kadam",
        mr: "अंकित सीताराम कदम"
    },
    labledob: {
        en: "Date of Birth",
        mr: "जन्म तारीख"
    },
    dob: {
        en: "26 March 1997",
        mr: "26 मार्च 1997"
    },
    translationKey: {
        en: "Hello, world!",
        // fr: "Bonjour, monde!",
        // es: "¡Hola, mundo!",
        mr: "HELLO, WORLD! (Marathi)"
    },
    translationKey2: {
        en: "This is a sample paragraph.",
        // fr: "Ceci est un paragraphe d'exemple.",
        // es: "Este es un párrafo de muestra.",
        mr: "THIS IS SAMPLE PARAGRAPH (Marathi)"
    }
    // Add more translation keys as needed
};

function translateLang(language) {
    var elements = document.querySelectorAll('[data-translation-key]');

    elements.forEach(function (element) {
        var key = element.getAttribute('data-translation-key');
        if (translations[key] && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
}

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("languageCheck");
    // Get the output text
    // var text = document.getElementById("text");
    var checkboxText = document.getElementById("checkboxText");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        //   text.style.display = "block";
        translateLang('mr');
        checkboxText.innerHTML = "म";
        checkboxText.className = "lngEn slider round";
    } else {
        translateLang('en');
        checkboxText.innerHTML = "En";
        checkboxText.className = "lngMr slider round";
        //   text.style.display = "none";
    }
}