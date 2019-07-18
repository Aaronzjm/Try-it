;(function ($){
  $.fn.sidebar = function (option) {//侧边栏组件
    var opts;
    var defalut = {
      effect: 'defalut',/*侧边栏的效果：defalut：默认，push：随着侧边栏一起移动*/
      pushClass:  '' /*需要移动的所有的class，除了侧边栏，想一起移动的div，单需先选择push功能*/
    }
    opts = $.extend({}, defalut, option);
    return this.each(function(){
      var _this = this;
      $('body').append('<div class="blocker"></div>')
      var defaultMethod = function(){
        $(_this).click(function(){
          $('.zjm-left-nav').css({'transform':'translateX(0)','animation':'moveIn .5s ease-in-out'});
          setTimeout(function(){
            $('.blocker').css('display','block');
          }, 300)
          $('body').css('overflow','hidden');
        });
        $('.blocker').click(function(){
          $('.zjm-left-nav').css({'transform':'translateX(-100%)','animation':'moveOut .5s ease-in-out'});
          $(this).css('display','none');  
          $('body').css('overflow','unset');
        })
      }
      if(opts['effect']=='defalut'){
        defaultMethod();
      }else if(opts['effect']=='push'){
        $.each(opts['pushClass'], function(i,v){
          $(_this).click(function(){
            $('.'+v.trim()).css({'transform':'translateX(68%)','animation':'bodyIn .5s ease-in-out'});
          });
          $('.blocker').click(function(){
            $('.'+v.trim()).css({'transform':'translateX(0)','animation':'bodyOut .5s ease-in-out'});
          }) 
        })
        defaultMethod();
      }
    })
  }
  $.fn.tabs = function(){//选择
    return this.each(function(){
      $('.zjm-tabs-nav>li').click(function(){
        var _this=this
        var i=$(_this).data('zjmHidden');
        $('.'+i).siblings().each(function(){
          if($(this).has('zjm-isshow')){
            $(this).removeClass('zjm-isshow');
          }
        })
        $(_this).parent().children('li').each(function(){
          $(this).removeClass('zjm-active');
        })
          $(_this).addClass('zjm-active');
        $('.'+i).addClass('zjm-isshow')
      })
    })
  }
  $.fn.flod = function(option){//折叠面板
    var opts;
    var defalut = {
      target: '',
      allHeight: {}
    }
    opts = $.extend({}, defalut, option);
    return this.each(function(){
      var _this = this;
      $(_this).click(function(){
        $(opts.target).slideToggle(500);
        if($(_this).hasClass('zjm-turn')){
          $(_this).removeClass('zjm-turn');
        }else{
          $(_this).addClass('zjm-turn');
        }
      })
    })
  }
})(jQuery);
