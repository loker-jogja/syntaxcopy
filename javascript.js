function addCodeBlock(content) {
  const codeBlock = document.createElement('div');
  codeBlock.classList.add('code-block');

  const codeBlockHeader = document.createElement('div');
  codeBlockHeader.classList.add('code-block-header');

  const codeBlockType = document.createElement('div');
  codeBlockType.classList.add('code-block-type');
  codeBlockType.textContent = getLanguage(content);

  const codeBlockCopyBtn = document.createElement('button');
  codeBlockCopyBtn.classList.add('code-block-copy-btn');
  codeBlockCopyBtn.textContent = 'Copy';
  codeBlockCopyBtn.onclick = function() {
    copyToClipboard(this);
  };

  codeBlockHeader.appendChild(codeBlockType);
  codeBlockHeader.appendChild(codeBlockCopyBtn);

  const codeBlockContent = document.createElement('code');
  codeBlockContent.classList.add('code-block-content');
  codeBlockContent.innerHTML = content;

  const preBlock = document.createElement('pre');
  preBlock.appendChild(codeBlockContent);

  codeBlock.appendChild(codeBlockHeader);
  codeBlock.appendChild(preBlock);

  document.body.appendChild(codeBlock);
}

function getLanguage(content) {
  const languageRegex = /<code.*?class=\"(.*?)\".*?>/i;
  const languageMatch = content.match(languageRegex);
  return languageMatch ? languageMatch[1] : '';
}

function copyToClipboard(button) {
  const codeBlock = button.parentNode.parentNode;
  const codeBlockContent = codeBlock.querySelector('.code-block-content');
  const textArea = document.createElement('textarea');
  textArea.value = codeBlockContent.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
