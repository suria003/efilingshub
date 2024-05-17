function enquiryData(){
    document.getElementById('sessionContactData').style.display='none'
    document.getElementById('sessionServiceData').style.display='none'
    document.getElementById('sessionEnquiryData').style.display='block'
}

function contactData(){
    document.getElementById('sessionEnquiryData').style.display="none"
    document.getElementById('sessionContactData').style.display="block"
}

function serviceData(){
    document.getElementById('sessionEnquiryData').style.display="none"
    document.getElementById('sessionContactData').style.display="none"
    document.getElementById('sessionServiceData').style.display="block"
}