'use strict';
{
  function callback(entries,obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      else{
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
      }
    });
  };

  const options = {
    threshold : 0.2,
  };

  const targets = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(callback,options);

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  function scrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      }
      else{
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  };

  const header = document.querySelector('header');
  const toTop = document.getElementById("to_top");
  const topTarget = document.getElementById("top_target");

  toTop.addEventListener('click',e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  });

  const scrollObserver = new IntersectionObserver(scrollCallback);


  scrollObserver.observe(topTarget);
}