




fetch('./data.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    for(var i=0; i<data.length;i++){
        document.getElementById("data").innerHTML +=
        data[i].name +"<br/>"+ "<br/>";
    }
})
.catch(function(err){
    console.log(err);
})
;

$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
});


// document.getElementById("para").innerHTML = " Feel the chilled temperature inside your room when you buy LG 1.5 Ton 3 Star Inverter Split AC.The AC comes with an anti-virus filter which helps in filtering the dust and virus, offering fresh air intake which makes it more efficient.Having a 441 Airflow feature enables you amazing";

document.getElementById("head").innerHTML="Why buy LG 1.5 Ton 3 Star Inverter Split AC";
document.getElementById("h1").innerHTML="AIR CIONDITIONER CATEGORY";
document.getElementById("h2").innerHTML="MANUFACTURER DETAILS";
document.getElementById("split").innerHTML="Split";
document.getElementById("ton").innerHTML="1.5 Ton";
document.getElementById("ft").innerHTML=" 180 Sq.Ft";
document.getElementById("sq").innerHTML="16.7 Sq.m";
document.getElementById("split").innerHTML="Split";
document.getElementById("wM").innerHTML="Wall Mount";
document.getElementById("LG").innerHTML="LG";
document.getElementById("model").innerHTML="PS-Q19PNXE";
document.getElementById("no").innerHTML="PS-Q19PNXE";