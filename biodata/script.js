document.addEventListener('DOMContentLoaded', function () {
    var checkBox = document.getElementById("languageCheck");
    var location = document.getElementById("locationKadoli");
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

    location.innerHTML += '<i class="fa-solid fa-location-dot"></i>';



});
var translations = {
    lableName: {
        en: "Name",
        mr: "नाव"
    },
    name: {
        en: "Ankit Sitaram Kadam",
        mr: "अंकित सिताराम कदम"
    },
    designation: {
        en: "Software Engineer",
        mr: "सॉफ्टवेअर अभियंता",

    },
    lableCastReligion: {
        en: "Cast, Religion",
        mr: "जात, धर्म",

    },
    castReligion: {
        en: "Hindu - Maratha",
        mr: "हिंदू - मराठा",

    },
    labledob: {
        en: "Date of Birth",
        mr: "जन्म तारीख"
    },
    dob: {
        en: "26 March 1997",
        mr: "२६ मार्च १९९७"
    },
    labelTimeofBirth: {
        en: "Time of Birth",
        mr: "जन्म वेळ",

    },
    timeOfBirth: {
        en: "NA",
        mr: "NA",

    },
    labelConstellation: {
        en: "constellation",
        mr: "नक्षत्र व रास",
    },
    constellation: {
        en:"NA",
        mr:"NA"
    },
    labelNName: {
        en: "Name",
        mr: "नावरस नाव",
    },
    nName: {
        en:"Ankit",
        mr:"अंकित",
    },
    labelVillage: {
        en:"Village",
        mr:"मूळगाव",
    },
    village: {
        en:"At. Kadoli, Post. Govare, Tal. Patan, Dist. Satara, Maharashtra - 415207",
        mr:"मु. काडोली, पो. गोवारे, ता. पाटण, जी. सातारा, महाराष्ट्र - ४१५२०७",
    },
    labelAddress: {
        en:"Current Address",
        mr:"सध्याचा पत्ता",
    },
    address: {
        en:"Flat no. 26, B Wing, Second Floor, Om Shruti C.H.S.L., Sainath Nagar, Near Shanti nagar, Tulinj Road, Nallasopara(E)-401209",
        mr:"फ्लॅट क्र. २६, बी विंग, दुसरा मजला, ओम श्रुती कॉ.हो.सो.ली., साईनाथ नगर, शांती नगर जवळ, तुलिंज रोड, नालासोपारा(ई)-४०१२०९",
    },
    labelEdu: {
        en:"Education",
        mr:"शिक्षण",
    },
    edu: {
        en:"Master of Computer Applications (MCA)",
        mr:"मास्टर ऑफ कॉम्प्युटर ऍप्लिकेशन्स (एम सी ए)"
    },
    labelHeightColor: {
        en:"Height and Skin Colour",
        mr:"उंची आणि रंग",
    },
    heightColor: {
        en:"5 ft. 2 inc, Fair",
        mr:"5 फूट 2 इंच, गोरा",
    },
    labelFatherName: {
        en:"Father Name",
        mr:"वडीलांचे नावं"
    },
    fatherName: {
        en:"Mr. Sitaram Kisan Kadam",
        mr:"श्री. सिताराम किसन कदम",
    },
    labelMotherName: {
        en:"Mother Name",
        mr:"आईचे नाव",
    },
    motherName: {
        en:"Late. Mrs. Bharati Sitaram Kadam",
        mr:"कै. सौ. भारती सिताराम कदम",
    },
    stepMotherNme: {
        en:"Mrs. Rupa Sitaram Kadam",
        mr:"सौ. रुपा सिताराम कदम",
    },
    labelBrother: {
        en:"Brother",
        mr:"भाऊ",
    },
    brother: {
        en:"Master. Atish Sitaram Kadam",
        mr:"कु. आतिश सिताराम कदम",
    },
    labelSisters: {
        en:"Sisters",
        mr:"बहिणी"
    },
    sistersOne: {
        en:"Mrs. Swapnali Nilesh Pawar (Married)",
        mr:"सौ. स्वप्नाली निलेश पवार (विवाहित)"
    },
    sisterTwo: {
        en:"Miss. Suvarna Sitaram Kadam (unmarried)",
        mr:"कु. सुवर्णा सिताराम कदम (अविवाहित)"
    },
    sisterThree: {
        en:"Miss. Swarupa Sitaram Kadam (unmarried)",
        mr:"कु. स्वरूपा सिताराम कदम (अविवाहित)"
    },
    labelRelativesName: {
        en:"Uncle",
        mr:"मामा",
    },
    relativeNameOne: {
        en:"Mr. Mahesh Ramchandra Deshmukh",
        mr:"श्री. महेश रामचंद्र देशमुख "
    },
    relativeNameTwo: {
        en:"Late. Mr. Santosh Ramchandra Deshmukh",
        mr:"कै. श्री. संतोष  रामचंद्र देशमुख "
    },
    relativeNameThree: {
        en:"Late. Mr. Sharad Ramchandra Deshmukh",
        mr:"कै. श्री. शरद रामचंद्र देशमुख "
    },
    labelRelations: {
        en:"Relatives",
        mr:"नातेसंबंध",
    },
    relations: {
        en:"Deshmukh, Desai, Chalke, Suryavanshi, Sawant, Kurade, Kate, Gayakvad, Bhalekar, Pawar and Family.",
        mr:"देशमुख, देसाई, चाळके, सूर्यवंशी, सावंत, कुराडे, काटे, गायकवाड, भालेकर, पवार आणि परिवार.",
    },
    labelMobileNo: {
        en:"Mobile No.",
        mr: "मोबाईल क्र."
    },
    mobileNo:{
        en:"+91 9284906112",
        mr:"+९१ ९२८४९०६११२"
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


function showLargerPhoto() {
    document.getElementById("largerProfilePhotoContainer").style.display = "flex";
}

function hideLargerPhoto() {
    document.getElementById("largerProfilePhotoContainer").style.display = "none";
}

// to open dial pad
function redirectToDialPad(phoneNumber) {
    // You can replace 'tel:' with the appropriate protocol for dialing on different devices.
    window.location.href = 'tel:' + phoneNumber;
}

function redirectToGoogleMAp(link) {
    // window.location.href = ''
    window.open(link, '_blank')
}