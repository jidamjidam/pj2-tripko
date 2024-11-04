window.addEventListener("load", function(){
  var isMobile = false;

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
      isMobile = true;
    }

    
    // header class on 넣고 빼고

    const header = document.querySelector('header');
    const sectionVisual = document.querySelector('section.visual');

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', () => {
        const sectionRect = sectionVisual.getBoundingClientRect();
        
        // 섹션이 뷰포트에 있을 때
        const isInViewport = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;

        if (isInViewport) {
            header.classList.remove('bg'); // 섹션에 있을 때 클래스 추가
        } else {
            header.classList.add('bg'); // 섹션을 벗어났을 때 클래스 제거
        }
    });


    // section.introduce 슬라이드

    const slidesContainer = document.querySelector("section.introduce");
    const slides = Array.from(slidesContainer.querySelectorAll(".slides"));
    const paginationButtons = slidesContainer.querySelectorAll(".pagination button");

    let currentSlideIndex = 0;

    function updateSlide(index) {
        // 슬라이드와 페이지네이션 버튼의 상태를 업데이트
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.zIndex = i === index ? '10' : '5';
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });

        paginationButtons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });

        currentSlideIndex = index;
    }

    paginationButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            updateSlide(index);
        });
    });

    // 초기 슬라이드 설정
    updateSlide(currentSlideIndex);




    // section.best_tour


    var buttons = document.querySelectorAll('div.button_gr button');
    var contents = document.querySelectorAll('div.tour_wrap div.content');

    // 버튼 클릭 이벤트 처리
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // 모든 버튼에서 active 클래스를 제거
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // 모든 콘텐츠에서 active 클래스를 제거
            contents.forEach(function(content) {
                content.classList.remove('active');
                content.style.opacity = '0'; // opacity를 0으로 설정
                content.style.zIndex = '5'; // 기본 z-index 설정
            });
            
            // 클릭한 버튼에 active 클래스를 추가
            button.classList.add('active');
            
            // 해당 콘텐츠에 active 클래스를 추가
            var activeContent = contents[index];
            activeContent.classList.add('active');
            activeContent.style.opacity = '1'; // opacity를 1로 설정
            activeContent.style.zIndex = '10'; // z-index를 2로 설정
        });
    });

    // 버튼 이미지 상태 관리
    buttons.forEach((button, index) => {
        const img = button.querySelector('img');
        const originalSrc = img.getAttribute('src'); // 원래 이미지 경로
        const hoverSrc = originalSrc.replace('.png', '_h.png'); // _h.png 이미지 경로

        // 첫 번째 버튼의 첫 이미지 상태를 _h.png로 변경
        if (index === 0) {
            img.setAttribute('src', hoverSrc); // 첫 번째 버튼 이미지를 _h.png로 설정
            button.classList.add('active', 'clicked'); // 첫 번째 버튼에 active 및 clicked 클래스 추가
        }

        // 마우스가 버튼 위에 있을 때 (hover)
        button.addEventListener('mouseenter', () => {
            img.setAttribute('src', hoverSrc);
            button.classList.add('active');
        });

        // 마우스가 버튼에서 벗어났을 때
        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('clicked')) {
                img.setAttribute('src', originalSrc);
                button.classList.remove('active');
            }
        });

        // 버튼 클릭 시
        button.addEventListener('click', () => {
            // 모든 버튼의 active 및 clicked 클래스 제거, 기본 이미지로 변경
            buttons.forEach((btn) => {
                btn.classList.remove('active', 'clicked');
                const img = btn.querySelector('img');
                img.setAttribute('src', img.getAttribute('src').replace('_h.png', '.png'));
            });

            // 클릭된 버튼에 active 및 clicked 클래스 추가, _h.png 이미지 설정
            button.classList.add('active', 'clicked');
            img.setAttribute('src', hoverSrc);
        });
    });




      

      // secstion.chart


     
      const realtimeTourItems = document.querySelectorAll('section.realtime_tour ul li');
      const newTourItems = document.querySelectorAll('section.new_tour ul li');
      
      let indexRealtime = 1;
      let indexNew = 2;
  
      function activateItem(items, index) {
          items.forEach((item, i) => {
              if (i === index) {
                  item.classList.add('active');
              } else {
                  item.classList.remove('active');
              }
          });
      }
  
      function updateActiveItems() {
          activateItem(realtimeTourItems, indexRealtime);
          activateItem(newTourItems, indexNew);
          
          // 인덱스 증가
          indexRealtime = (indexRealtime + 1) % realtimeTourItems.length;
          indexNew = (indexNew + 1) % newTourItems.length;
      }
  
      // 주기적으로 활성화 항목을 변경합니다.
      setInterval(updateActiveItems, 2000); // 2초마다 변경



      // section.goods

      function Slide_Carousel(_targetWrap, _intervalTime, _view_ea_D, _view_ea_T, _view_ea_M, _type, _useTab, _usePN){

        const $wrap = _targetWrap;
        const $wrap_el = document.querySelector($wrap);
        const $view_mask = document.querySelector(`${$wrap} .view_mask`);
        let $inner_ul = document.querySelector(`${$wrap} .view_mask > ul.main`);
        let $inner_ul_li = $inner_ul.children;
        const $btn_prev = document.querySelector(`${$wrap} button.prev`);
        const $btn_next = document.querySelector(`${$wrap} button.next`);

        let $pn_wrap = _usePN ? document.querySelector(`${$wrap} .pagination`) : null;
        let $pn_btns = _usePN ? $pn_wrap.children : null;

        let $data_ul = _useTab ? document.querySelector(`${$wrap} .view_mask > ul.list_all`) : null;
        let $data_ul_li = _useTab ? $data_ul.children : null;
        let $tab_btns = _useTab ? document.querySelectorAll(`${$wrap} .tabs_wrap > button`) : null;
        let $tab_btns_cnt = _useTab ? 0 : null;

        let move_ea;
        let view_ea;
        let li_width;

        let cnt = 0;
        let _foNum;

        let si_01;
        let click_Event = true;

        (function(){
            init();
            pn_btns_click();
        })();

        function init(){
            if(_type == "fade"){
                $inner_ul.style.position = "relative";
                $inner_ul.style.width = "100%";
                
                for(var i = 0; i < $inner_ul_li.length; i++){
                    $inner_ul_li[i].style.position  = `absolute`;
                    $inner_ul_li[i].style.left = `0`;
                    $inner_ul_li[i].style.width = `100%`;
                    // $inner_ul_li[i].style.height = `${$inner_ul_li[0].scrollHeight}px`;
                    $inner_ul_li[i].style.opacity = `0`;
                    $inner_ul_li[i].style.visibility = `hidden`;
                }

                $inner_ul.style.height = `${$inner_ul_li[0].offsetHeight}px`;

                $inner_ul_li[cnt].style.opacity = `1`;
                $inner_ul_li[cnt].style.visibility = `visible`;
            }
            else if(_type == "slide"){
                move_ea = 1;
                view_ea = (function(){
                    let result;
                    if(!isMobile) result = _view_ea_D;
                    else {
                        if(screen.width >= 768) result = _view_ea_T;
                        else if(screen.width < 768)  result = _view_ea_M;
                    }
                    return result;
                })();
                li_width = $view_mask.clientWidth / view_ea;

                for(var i = 0; i < $inner_ul_li.length; i++){
                    $inner_ul_li[i].style.position = "relative";
                    $inner_ul_li[i].style.width = `${li_width}px`;
                }
                $inner_ul.style.position = "relative";
                $inner_ul.style.width = `${li_width * $inner_ul_li.length}px`;
                for(var i = 0; i < move_ea; i++){
                    $inner_ul.insertBefore($inner_ul_li[$inner_ul_li.length - 1], $inner_ul.firstChild);
                }
                $inner_ul.style.marginLeft = `${-(li_width * move_ea)}px`;
                $inner_ul.style.left = "0px";
                $inner_ul.style.transition = "left 0.3s";
            }
        }

        window.addEventListener("resize", function(){
            if(_type == "fade"){
                init();
            }
            else if(_type == "slide"){
                li_width = $view_mask.clientWidth / view_ea;
                for(var i = 0; i < $inner_ul_li.length; i++){
                    $inner_ul_li[i].style.width = `${li_width}px`;
                }
                $inner_ul.style.width = `${li_width * $inner_ul_li.length}px`;
                $inner_ul.style.marginLeft = `${-(li_width * move_ea)}px`;
                $inner_ul.style.left = "0px";
            }
        });

        if($btn_prev) $btn_prev.onclick = function(){
            if(!click_Event) return false;
            else {
                click_Event = false;
                if(_type == "fade"){ count_change(-1); }
                else if(_type == "slide"){ move_ul('prev'); }
            }
        };
        if($btn_next) $btn_next.onclick = function(){
            if(!click_Event) return false;
            else {
                click_Event = false;
                if(_type == "fade"){ count_change(1); }
                else if(_type == "slide"){ move_ul('next'); }
            }
        };
        function pn_btns_click(){
            if($pn_btns){
                for(var i = 0; i < $pn_btns.length; i++){
                    stop_si();
                    $pn_btns[i].index = i;
                    $pn_btns[i].addEventListener("click", function(){
                        if(cnt == this.index){
                            start_si();
                            return false;
                        } 
                        if(_type == "fade"){
                            count_change(0, this.index);
                        }
                        else if(_type == "slide"){
                            let sel_num = this.index;
                            for(var j = 0; j < $inner_ul_li.length; j++){
                                $inner_ul.appendChild($inner_ul.querySelector(`li[data-index = "${sel_num}"]`));
                                sel_num = sel_num == $inner_ul_li.length - 1 ? 0 : sel_num + 1;
                            }
                            for(var k = 0; k < move_ea; k++){
                                $inner_ul.insertBefore($inner_ul_li[$inner_ul_li.length - 1], $inner_ul.firstChild);
                            }
                            cnt = sel_num;
                        }
                        pn_change(cnt);
                        start_si();
                    });
                }
            }
        }

        function pn_change(_num){
            $pn_btns = $pn_wrap.children;
            for(var i = 0; i < $pn_btns.length; i++){
                $pn_btns[i].classList.remove("active");
            }
            $pn_btns[_num].classList.add("active");
        }

        if(_type == "slide"){

            let pos_X1 = 0;
            let pos_X2 = 0;
            let pos_Y1 = 0;
            let pos_Y2 = 0;
            let pos_Initial;
            let pos_Final;
            let threshold = li_width * 0.5;

            $inner_ul.addEventListener("touchstart", dragStart);

            function dragStart(e){
                e = e || window.event;
                e.preventDefault();

                stop_si();
                
                pos_Initial = parseInt($inner_ul.style.left);

                if(e.type == "touchstart"){
                    pos_X1 = e.touches[0].clientX;
                    pos_Y1 = e.touches[0].clientY;
                }
                else {
                    pos_X1 = e.clientX;
                    pos_Y1 = e.clientY;
                }

                $inner_ul.style.transition = `none`;

                $inner_ul.addEventListener("touchmove", dragAction);
                $inner_ul.addEventListener("touchend", dragEnd);
            }

            function dragAction(e){
                e = e || window.event;
                e.preventDefault();

                if(e.type == "touchmove"){
                    pos_X2 = pos_X1 - e.touches[0].clientX;
                    pos_X1 = e.touches[0].clientX;
                    pos_Y2 = pos_Y1 - e.touches[0].clientY;
                    pos_Y1 = e.touches[0].clientY;
                }
                else {
                    pos_X2 = pos_X1 - e.clientX;
                    pos_X1 = e.clientX;
                    pos_Y2 = pos_Y1 - e.clientY;
                    pos_Y1 = e.clientY;
                }

                if(Math.abs(pos_X2) > Math.abs(pos_Y2)){
                    $inner_ul.style.left = `${parseInt($inner_ul.style.left) - pos_X2}px`;
                }
                else {
                    let st = document.querySelector("html").scrollTop;
                    document.querySelector("html").scrollTop = (st += pos_Y2);
                }
                
            }

            function dragEnd(e){
                e = e || window.event;
                e.preventDefault();

                pos_Final = parseInt($inner_ul.style.left);

                if(pos_Final - pos_Initial < -threshold){
                    move_ul("next");
                }
                else if(pos_Final - pos_Initial > threshold){
                    move_ul("prev");
                }
                else {
                    $inner_ul.style.left = `${pos_Initial}px`;
                    $inner_ul.style.transition = `left 0.2s`;
                    setTimeout(function(){
                        $inner_ul.style.transition = "none";
                        start_si();
                    }, 200);
                }

                $inner_ul.removeEventListener("touchmove", dragAction);
                $inner_ul.removeEventListener("touchend", dragEnd);

            }

        }

        if($tab_btns){
            for(var i = 0; i < $tab_btns.length; i++){
                stop_si();
                $tab_btns[i].index = i;
                $tab_btns[i].addEventListener("click", function(){
                    if($tab_btns_cnt == this.index){
                        start_si();
                        return false;
                    } 
                    for(var j = 0; j < $tab_btns.length; j++){
                        $tab_btns[j].classList.remove("active");
                    }
                    $tab_btns[this.index].classList.add("active");
                    li_change(this.classList[0]);
                    $tab_btns_cnt = this.index;
                });
            }
        }
        function li_change(_cate_name){
            while ($inner_ul.firstChild){
                $inner_ul.removeChild($inner_ul.lastChild);
            }
            let clone_lists = _cate_name == "cate_all" ? $data_ul.children : $data_ul.getElementsByClassName(_cate_name);
            for(var i = 0; i < clone_lists.length; i++){
                $inner_ul.appendChild(clone_lists[i].cloneNode(true));
                $inner_ul.lastElementChild.removeAttribute("class");
                $inner_ul.lastElementChild.dataset.index = i;
            }
            $inner_ul = document.querySelector(`${$wrap} .view_mask > ul.main`);
            if(_usePN) pn_reset($inner_ul.children.length);
            init();
        }
        function pn_reset(_length){
            while ($pn_wrap.firstChild){
                $pn_wrap.removeChild($pn_wrap.lastChild);
            }
            for(var i = 0; i < _length; i++){
                let new_button = document.createElement("button");
                let new_1d_span = document.createElement("span");
                let new_2d_span = document.createElement("span");
                new_2d_span.classList.add("blind");
                new_2d_span.textContent = `slide ${i} button`;
                new_1d_span.appendChild(new_2d_span);
                new_button.appendChild(new_1d_span);
                $pn_wrap.appendChild(new_button);
            }
            $pn_wrap.firstElementChild.classList.add("active");
            $pn_btns = $pn_wrap.children;
            cnt = 0;
            pn_btns_click();
            start_si();
        }

        function count_change(_dir, _idx){
            stop_si();

            _foNum = cnt;

            if(_dir < 0) cnt = cnt == 0 ? $inner_ul_li.length - 1 : cnt - 1; 
            else if(_dir > 0) cnt = cnt == $inner_ul_li.length - 1 ? 0 : cnt + 1; 
            else if(_dir == 0) cnt = _idx;

            if(_type == "fade") fade_inout(cnt, _foNum);
            if($pn_btns) pn_change(cnt);
        }

        function fadeOut(element){
            let opa_val = 1;
            let timer = setInterval(function(){
                if(opa_val <= 0.1){
                    opa_val = 0;
                    element.style.opacity = opa_val;
                    element.style.visibility = "hidden";
                    clearInterval(timer);
                }
                element.style.opacity = opa_val;
                opa_val -= opa_val * 0.1
            }, 20);
        }
        function fadeIn(element){
            let opa_val = 0.1;
            element.style.visibility = "visible";
            let timer = setInterval(function(){
                if(opa_val >= 1){
                    opa_val = 1;
                    element.style.opacity = opa_val;
                    clearInterval(timer);
                    click_Event = true;
                    start_si();
                }
                element.style.opacity = opa_val;
                opa_val += opa_val * 0.1
            }, 20);
        }

        function fade_inout(_num, _foNum){
            fadeOut($inner_ul_li[_foNum]);
            fadeIn($inner_ul_li[_num]);
        }

        function move_ul(_dir){
            stop_si();
            $inner_ul.style.left = _dir == "prev" ? `${li_width * move_ea}px` : `${-li_width * move_ea}px`;
            $inner_ul.style.transition = `left 0.3s`;

            _dir == "prev" ? count_change(-1) : count_change(1);

            setTimeout(function(){
                move_child(_dir);
            }, 300);
        }

        function move_child(_dir){
            _dir == "prev" ? $inner_ul.insertBefore($inner_ul_li[$inner_ul_li.length - 1], $inner_ul.firstChild) : $inner_ul.appendChild($inner_ul.firstElementChild);
            $inner_ul.style.left = `0px`;
            $inner_ul.style.transition = `none`;
            click_Event = true;
            start_si();
        }


        function start_si(){
            if(si_01 != 0) clearInterval(si_01);
            si_01 = setInterval(function(){
                if(_type == "fade") count_change(1);
                else if(_type == "slide") move_ul('next');
            }, _intervalTime);
        }
        function stop_si(){
            if(si_01 != 0) clearInterval(si_01);
            
        }
        start_si();

    }

    
  


   



    if (!isMobile)
    {

        let Slide_Carousel_01 = Slide_Carousel(".goods", 4000, 4, 2, 1, "slide", false, false);

      
        // section.k_contents

        const items = document.querySelectorAll(".content_wrap ul li");

        items.forEach((item) => {
            item.addEventListener("click", function () {
                // 모든 li 요소에서 active 클래스를 제거
                items.forEach((el) => el.classList.remove("active"));
    
                // 클릭한 li 요소에 active 클래스 추가
                this.classList.add("active");
            });
        });
      

    }// isMobile 아닌게 트루. = 데스크탑
    else{

      

      //모바일, 태블릿 공통이면 여기에 써도 됨.(active같은 경우 -> hover 없는 active같은)
    
        if (screen.width >= 768)
        {

            let Slide_Carousel_01 = Slide_Carousel(".goods", 4000, 4, 2, 1, "slide", false, false);

            // m, t 자동재생

            document.addEventListener('DOMContentLoaded', () => {
                const videos = document.querySelectorAll('.video_D, .video_T, .video_M');
                
                videos.forEach(video => {
                    video.muted = true; // 음소거 설정
                    video.play().catch(error => {
                        console.log("자동 재생이 지원되지 않는 환경입니다.", error);
                    });
                });
            });

            
        // k_contents

        // 페이지네이션 버튼과 li 요소를 선택합니다.
        const paginationLinks = document.querySelectorAll('.pagination a');
        const contentItems = document.querySelectorAll('.content_wrap ul li');

        // 초기 활성화 상태 설정 (3번 항목을 활성화)
        const initialActiveIndex = 2; // 0부터 시작하므로 3번은 인덱스 2입니다.
        contentItems.forEach((item, index) => {
        if (index === initialActiveIndex) {
        item.classList.add('active');
        paginationLinks[index].querySelector('span').classList.add('active');
        } else {
        item.classList.remove('active');
        paginationLinks[index].querySelector('span').classList.remove('active');
        }
        });

        // 각 페이지네이션 버튼에 클릭 이벤트 추가
        paginationLinks.forEach((paginationLink, index) => {
        paginationLink.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 링크 클릭 동작 방지

        // 모든 li 요소와 페이지네이션에서 active 클래스를 제거
        contentItems.forEach(item => item.classList.remove('active'));
        paginationLinks.forEach(link => link.querySelector('span').classList.remove('active'));

        // 클릭한 페이지네이션 버튼과 동일한 인덱스의 li 요소에 active 클래스 추가
        contentItems[index].classList.add('active');
        paginationLink.querySelector('span').classList.add('active');
        });
        });

          
        }
        else{
          
          

        }
    }

   

});