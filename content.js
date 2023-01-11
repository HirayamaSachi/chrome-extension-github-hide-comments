(function () {
    // コメントを非表示にする
    var diffProgressiveContainer = document.getElementsByClassName('js-diff-progressive-container').item(0);
    var allChangedFileContainer = diffProgressiveContainer.querySelectorAll('[data-targets="diff-file-filter.diffEntries"]');
    for (ChangedFileContainer of allChangedFileContainer) {
        ChangedFileContainer.classList.remove('show-inline-notes');
    }

    // Show commentsのチェックを外す
    var dropDownMenu = document.getElementsByClassName('show-more-popover');
    for (let i = 0; i < dropDownMenu.length; i++) {
        var toggleComments = dropDownMenu[i].querySelectorAll('[aria-checked="true"]');
        if (toggleComments.length == 0) {
            continue;
        }
        for (const toggleComment of toggleComments) {
            toggleComment.ariaChecked = false;
        }
    }
})();
