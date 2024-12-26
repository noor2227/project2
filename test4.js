const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi',
    },
    {
        'samaCode': '80',
        'bankName': 'Alrajhi Bank',  
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank',
    },
    {
        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    },
    {
        'samaCode': '40',
        'bankName': 'Saudi American Bank',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
    },
    {
        'samaCode': '05',
        'bankName': 'Alinma Bank',
        'nameEn': 'AL Inma Bank',
        'nameAr': 'بنك الانماء',
    },
    {
        'samaCode': '50',
        'bankName': 'Alawwal bank',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
    },
    {
        'samaCode': '60',
        'bankName': 'Bank AlJazira',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
    },
    {
        'samaCode': '65',
        'bankName': 'Saudi Investment Bank',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
    },
    {
        'samaCode': '15',
        'bankName': 'Bank AlBilad',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
    },
    {
        'samaCode': '30',
        'bankName': 'Arab National Bank',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
    },
    {
        'samaCode': '90',
        'bankName': 'GULF Bank',
        'sarieCode': 'GULFSARI',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
    },
    {
        'samaCode': '95',
        'bankName': 'Emirates Bank',
        'nameEn': 'EMARITE BANK',
        'nameAr': 'بنك الامارات',
    },
    {
        'samaCode': '76',
        'bankName': 'Bank Muscat',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
    },
    {
        'samaCode': '71',
        'bankName': 'National Bank of Bahrain',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
    },
    {
        'samaCode': '75',
        'bankName': 'National Bank of Kuwait',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
    },
    {
        'samaCode': '85',
        'bankName': 'BNP Paribas Bank',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
    },
];

function checkIban(iban) {
    if (!iban) {
        return false;
    }
    iban = iban.replaceAll(' ', '');
    if (iban.length !== 24) {
        return false;
    }
    if (!iban.startsWith("SA")) {
        return false;
    }
    return true;
}

function GetIban() {
    var iban = document.getElementById("iban").value;
    var result = document.getElementById("result");
    var bankElement = document.getElementById("bank");
    var samacodeElement = document.getElementById("samaCode");

    if (!checkIban(iban)) {
        result.innerHTML = "الايبان غير صحيح";
        bankElement.innerHTML = "";
        samacodeElement.innerHTML = "";
        return;
    } else {
        result.innerHTML = "الايبان صحيح";
    }

    iban = iban.replaceAll(' ', '');
    const samacode = iban.substring(4, 6);
    const bank = banks.find(e => e.samaCode === samacode);
    bankElement.innerHTML = "اسم البنك: " + (bank ? bank.bankName : "غير معروف");
    samacodeElement.innerHTML = "samaCode: " + (bank ? bank.samaCode : "غير معروف");
}
