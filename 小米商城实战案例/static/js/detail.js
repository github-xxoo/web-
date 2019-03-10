//使用替换class名的方法
$(function(){
  // 初始化第一个版本和第一个颜色
  $('.detail-much-left').eq(0).attr('class', 'detail-much-left checked');
  $('.detail-color-left').eq(0).attr('class', 'detail-color-left checked');

  // 点击选中其他版本
  $('.detail-much-left').click(function(){
    $('.detail-much-left').attr('class', 'detail-much-left');
    $(this).attr('class', 'detail-much-left checked');
    updateTolPrice();
  })

  // 点击选中其它颜色
  $('.detail-color-left').click(function(){
    $('.detail-color-left').attr('class', 'detail-color-left');
    $(this).attr('class', 'detail-color-left checked');
    updateTolPrice();
  })


  $('.shop-detail-bz1').click(function(){
    var nowCirclass = $(this).find('.fa-check-circle').attr('class');
    var nowSquclass = $(this).find('.fa-check-square').attr('class');

    if(nowCirclass.indexOf('checked')>0){
      // 选中就移除选中
      nowCirclass = nowCirclass.replace('checked', ' ');
      nowSquclass = nowSquclass.replace('checked', ' ');

      $(this).find('.fa-check-circle').attr('class', nowCirclass);
      $(this).find('.fa-check-square').attr('class', nowSquclass);

    } else{
      // 没选中就选中
      $(this).find('.fa-check-circle').attr('class',nowCirclass+' checked');
      $(this).find('.fa-check-square').attr('class',nowSquclass+' checked');
    }

    updateTolPrice();
  })



})


function updateTolPrice(){
  var bbPrice = $(".detail-much-left[class$='checked']").find('span').attr('data-val')*1;

  var svPrice = 0;
  var svSpan  = $(".fa-check-circle[class$='checked']").parent('.shop-detail-bz1').find('span[data-val]');

  console.log(svSpan);

  for(var i=0; i<svSpan.length; i++){
    svPrice += svSpan[i].getAttribute('data-val') * 1;
  }

  var tolPrice = bbPrice + svPrice;
  $('#totalPrice').html('总计&nbsp;：&nbsp;' + tolPrice +'元');
  $('#phonePrice').html(bbPrice +'元');
}