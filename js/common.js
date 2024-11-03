window.addEventListener("load", function(){
  
  var isMobile = false;

      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
         isMobile = true;
      }


    // D, T, M공통기능은


    // ** a 태그 비활성화 **

        document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', event => event.preventDefault());
    });

    // ** moving motion **
    
    let $FI_grps = document.querySelectorAll(".FI_grp");

    window.addEventListener("scroll", function(e){
        scroll_response_acts(e);
    });

    function scroll_response_acts(evt){
        
        let e = evt ? evt : window.event; 
        let st_pos = window.scrollY || document.querySelector("html").scrollTop;
        let st_winH = st_pos + window.innerHeight;
        
        $FI_grps.forEach((item, idx) => {
            let pos_add = item.classList.contains("fi_1") ? 0 : 50;
            if(st_winH >= (st_pos + item.getBoundingClientRect().top + pos_add)){
                item.style.willChange = 'transform, opacity';
                item.classList.add("active");
                setTimeout(function(){item.style.willChange = 'auto';}, 750);
            }
            else if(st_winH < (st_pos + item.getBoundingClientRect().top)){
                item.style.willChange = 'auto';
                item.classList.remove("active");
            }
        });

    }

    scroll_response_acts();


      const $btn_menu = document.querySelector("header > button"); // 메뉴 열기 버튼
      const $btn_close = document.querySelector("header nav button.close"); // 메뉴 닫기 버튼
      const $header = document.querySelector("header");
      const $nav = document.querySelector("header nav");
      const $menuItems = document.querySelectorAll("header nav > ul > li");

      // 메뉴 버튼 클릭 시 메뉴 열기
      $btn_menu.addEventListener("click", function () {
          $header.classList.add("on");
          $nav.style.transform = "translateX(-100%)"; // 메뉴 열리면서 화면 안으로 이동
          document.body.style.overflow = "hidden"; // 메뉴가 열릴 때 스크롤 방지
      });

      // 메뉴 닫기 버튼 클릭 시 메뉴 닫기
      $btn_close.addEventListener("click", function () {
          $nav.style.transform = "translateX(0)"; // 메뉴가 닫히면서 화면 밖으로 이동
          document.body.style.overflow = "auto"; // 스크롤 복구

          // 메뉴 닫는 애니메이션이 끝나면 header 클래스 제거
          setTimeout(function () {
              $header.classList.remove("on");
          }, 300); // 0.3초 트랜지션 후 클래스 제거
      });

      // 각 메뉴 항목 클릭 시 서브 메뉴 열기/닫기
      $menuItems.forEach(function ($menuItem) {
          const $button = $menuItem.querySelector("button");
          const $subMenu = $menuItem.querySelector("ul.sub");

          if ($button && $subMenu) {
              $button.addEventListener("click", function () {
                  const isOpen = $menuItem.classList.contains("active");

                  if (isOpen) {
                      // 서브 메뉴 닫기
                      $menuItem.classList.remove("active");
                      $subMenu.style.height = "0"; // 서브 메뉴 높이를 0으로 설정하여 닫음
                  } else {
                      // 다른 메뉴를 모두 닫고 현재 클릭한 메뉴만 열기
                      $menuItems.forEach(function ($item) {
                          $item.classList.remove("active");
                          const otherSubMenu = $item.querySelector("ul.sub");
                          if (otherSubMenu) {
                              otherSubMenu.style.height = "0";
                          }
                      });

                      $menuItem.classList.add("active");
                      $subMenu.style.height = $subMenu.scrollHeight + "px"; // 서브 메뉴의 높이를 자동 계산하여 설정
                  }
              });
          }
      });

      


      

      

      if (!isMobile)
        {
        
  
        }
        else{
  
        // tablet, mobile 공통
  
       

              // ** 모바일일 때 subs 열고 닫고 **
  
              if (screen.width >= 768)
              {
  
                
  
              }
              else{
                 
  
                
  
              }
            }


        
     });

    

      


      


      

        

