const tach ={
  orangelink: " dib ph2 pv1 mt1 mb2 mh1-m pa2-l pl0-l pr3-l pt3-l orange-l white b helvetica tracked hover-white no-underline select-orange ba b--white br3 bn-l f7 f4-m f5-l bg-navy-50 bg-transparent-l",
  floatingarrow: " di img self-center",

}




Object.entries(tach).forEach(function(arr){

  let name = arr[0];
  let classes = arr[1];
  let els = document.querySelectorAll("."+name);

  for (let i = 0; i < els.length; i++){
    els[i].className += classes;
  }
})
