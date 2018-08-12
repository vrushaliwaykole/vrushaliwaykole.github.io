if(document.documentElement.clientWidth < 500){
  // if(document.getElementsByClassName('image-title-section')[0].clientHeight < document.documentElement.clientHeight){
  //   document.getElementsByClassName('image-title-section')[0].style.height = document.documentElement.clientHeight + "px"
  // }
}else{
  if(document.getElementById('introduction-section').clientHeight < document.documentElement.clientHeight){
    document.getElementById('introduction-section').style.height = document.documentElement.clientHeight + "px"
  }
}
