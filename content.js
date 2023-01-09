// コメントを非表示にする
var diffProgressiveContainer = document.getElementsByClassName('js-diff-progressive-container').item(0);
var allChangedFileContainer = diffProgressiveContainer.querySelectorAll('[data-targets="diff-file-filter.diffEntries"]');
for (ChangedFileContainer of allChangedFileContainer) {
    ChangedFileContainer.classList.remove('show-inline-notes');
}
