<script type="text/javascript">
window.$zopim||(function(d,s) {
  var z = $zopim = function(c) {
    z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0]; z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="//v2.zopim.com/?31hwtwabcV8aIaGpPCG4YPfC8ycOymAn";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

$zopim( function() {
  $zopim.livechat.departments.filter('BarkShop');
  $zopim.livechat.departments.setVisitorDepartment('BarkShop');
  $zopim.livechat.setDisableSound(true);

  function check(status) {
    var dep = $zopim.livechat.departments.getDepartment('BarkShop');

    if ((typeof dep === 'undefined') || (dep.status === status)) {
      return
    } else if (dep.status === 'offline') {
      $zopim.livechat.setStatus('offline');
      if (!$zopim.livechat.isChatting()) {
        $zopim.livechat.hideAll();
      }
    } else if (dep.status === 'online') {
      $zopim.livechat.setStatus('online');
      if ($zopim.livechat.isChatting() && $.cookie('zopimOpen') == 'true' ) {
        $zopim.livechat.window.show();
      } else {
        $zopim.livechat.window.hide();
      }
    }

    $zopim.livechat.window.setPosition('br');
  }

  $zopim.livechat.window.onShow( function() {
    $.cookie('zopimOpen', 'true', { path: '/' });
  });

  $zopim.livechat.window.onHide(function() {
    $.cookie('zopimOpen', 'false', { path: '/' });
  });

  $zopim.livechat.setOnChatStart(function() {
    if (window.current_user) {
      $zopim.livechat.setEmail(window.current_user.email);
    }
  });

  $zopim.livechat.setOnStatus(check);
  $zopim.livechat.setOnConnected(check);
});
</script>