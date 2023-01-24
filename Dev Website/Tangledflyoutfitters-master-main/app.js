
// $('.option').on('click',function(){
//     $('.option').removeClass('active');
//     $(this).addClass('active');
//  })
 $(document).ready(function(){
    $('.option').on('click',function(){
        $('.option').removeClass('active');
        $(this).addClass('active');
        HelloWorld();
     })
     const toggleButton = document.getElementsByClassName('toggle-button')[0]
     const navbarLinks = document.getElementsByClassName('nav__links')[0]
    
     toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('on')
      HelloWorld();
    })
 })

// $(document).ready(function(){
//     navbarLinks.classList.toggle('on')
//     HelloWorld();
//  })