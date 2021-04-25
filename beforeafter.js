function showing(x){
  const arr = document.querySelectorAll(".arr_container")[x];
  const left_container = document.querySelectorAll(".left_container")[x];
      arr.classList.add("active_arr");
      if(left_container.classList.contains("off")){
          left_container.classList.remove("off");
          left_container.classList.add("active");
      }
  }
  function closing(x){
    const arr = document.querySelectorAll(".arr_container")[x];
    const left_container = document.querySelectorAll(".left_container")[x];
      arr.classList.remove("active_arr");
      if(left_container.classList.contains("active")){
          left_container.classList.remove("active");
          left_container.classList.add("off");
      }
  }