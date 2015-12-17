// Map from key codes to button id suffixes.
shortcutMap = {
  78: 'btnNextGame',       // n
  67: 'btnShowChat',       // c
  79: 'btnShowNotes',      // o
  71: 'btnGiveUp',         // g
  70: 'btnBaseFinishTurn', // f
  82: 'btnBaseCancelMove', // r
  68: 'btnRemis',          // d
  69: 'btnFinishGame',     // e
  84: 'btnTie',            // t
};

function createShortcutHandler(shortcut, btn) {
  return function(e) {
    if (e.which != shortcut)
      return false;

    // Disable shortcuts when some UI dialog is open to allow typing.
    if ($('.ui-dialog:visible').size() > 0)
      return false;

    btn.click();
    return true;
  };
}

$('#divFooterButtons input').each(function(i, btn) {
  for (var shortcut in shortcutMap) {
    var btnIdSuffix = shortcutMap[shortcut];
    if (btn.id.endsWith(btnIdSuffix)) {
      $(document).keyup(createShortcutHandler(shortcut, btn));
      btn.value += ' (' + String.fromCharCode(shortcut).toLowerCase() + ')';
    }
  }
});