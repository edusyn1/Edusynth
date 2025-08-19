 /* Tab switching */
  function showTab(name){
    document.getElementById('css-tool').style.display = name === 'css' ? 'block' : 'none';
    document.getElementById('js-tool').style.display = name === 'js' ? 'block' : 'none';
    document.getElementById('tab-css-btn').classList.toggle('active', name==='css');
    document.getElementById('tab-js-btn').classList.toggle('active', name==='js');
  }

  let originalCSS = '';
  function minifyCSS() {
    const inputEl = document.getElementById('css-input');
    const input = (inputEl.value || '').trim();
    if (!input) return showNotification('Please enter some CSS first', 'error');

    originalCSS = input;
    let output = input
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/;\s*}/g, '}')
      .replace(/\s*,\s*/g, ',')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/}/g, '}\n');

    document.getElementById('css-original-copy').value = originalCSS;
    document.getElementById('css-output').value = output;

    document.getElementById('css-input-section').style.display = 'none';
    document.getElementById('css-output-section').style.display = 'block';
    // show minified view by default
    showMinifiedCSS();
    // show copy/download buttons (they are always visible in output section)
    showNotification('CSS minified', 'success');
  }

  function pasteCodeCSS() {
    navigator.clipboard.readText().then(text => {
      document.getElementById('css-input').value = text;
      showNotification('Pasted from clipboard', 'success');
    }).catch(() => {
      document.getElementById('css-input').placeholder = "Press Ctrl+V to paste";
      showNotification('Clipboard blocked — use Ctrl+V', 'error');
    });
  }

  function showOriginalCSS() {
    document.getElementById('css-original-view').style.display = 'block';
    document.getElementById('css-minified-view').style.display = 'none';
    document.getElementById('css-original-btn').classList.add('active');
    document.getElementById('css-minified-btn').classList.remove('active');
  }

  function showMinifiedCSS() {
    document.getElementById('css-original-view').style.display = 'none';
    document.getElementById('css-minified-view').style.display = 'block';
    document.getElementById('css-original-btn').classList.remove('active');
    document.getElementById('css-minified-btn').classList.add('active');
  }

  function copyCSS() {
    const view = document.getElementById('css-minified-btn').classList.contains('active')
      ? document.getElementById('css-output')
      : document.getElementById('css-original-copy');
    view.select();
    try { document.execCommand('copy'); showNotification('CSS copied to clipboard!','success'); }
    catch(e){ showNotification('Copy failed','error'); }
  }

  function downloadCSS() {
    const text = document.getElementById('css-output').value || document.getElementById('css-original-copy').value || '';
    const filename = 'minified.css';
    if(!text) { showNotification('Nothing to download','error'); return; }
    const blob = new Blob([text], { type: 'text/css' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
    showNotification('Download started','success');
  }

  function resetCSSTool() {
    document.getElementById('css-input').value = '';
    document.getElementById('css-original-copy').value = '';
    document.getElementById('css-output').value = '';
    document.getElementById('css-input-section').style.display = 'block';
    document.getElementById('css-output-section').style.display = 'none';
    document.getElementById('css-input').focus();
  }

  function pasteCodeJS() {
    navigator.clipboard.readText().then(text => {
      document.getElementById('js-input').value = text;
      showNotification('Pasted from clipboard', 'success');
    }).catch(() => {
      document.getElementById('js-input').placeholder = "Press Ctrl+V to paste";
      showNotification('Clipboard blocked — use Ctrl+V', 'error');
    });
  }

  function safeMinifyJS(jsCode) {
    try {
      let minified = jsCode
        .replace(/\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\n|\r|\t/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}();,:+=<>-])\s*/g, '$1')
        .trim();
      return minified;
    } catch (e) {
      console.error('Minify error:', e);
      return null;
    }
  }

  function minifyJS() {
    const input = document.getElementById('js-input').value.trim();
    if (!input) return showNotification('Please enter some JavaScript first', 'error');

    const minified = safeMinifyJS(input);
    if (minified === null) {
      showNotification('Minify failed due to invalid JavaScript code', 'error');
      document.getElementById('js-original-copy').value = input;
      document.getElementById('js-output').value = input;
    } else {
      document.getElementById('js-original-copy').value = input;
      document.getElementById('js-output').value = minified;
    }

    document.getElementById('js-input-section').style.display = 'none';
    document.getElementById('js-output-section').style.display = 'block';
    showMinifiedJS();
    showNotification('JS minified', 'success');
  }

  function showOriginalJS() {
    document.getElementById('js-original-view').style.display = 'block';
    document.getElementById('js-minified-view').style.display = 'none';
    document.getElementById('js-original-btn').classList.add('active');
    document.getElementById('js-minified-btn').classList.remove('active');
  }

  function showMinifiedJS() {
    document.getElementById('js-original-view').style.display = 'none';
    document.getElementById('js-minified-view').style.display = 'block';
    document.getElementById('js-original-btn').classList.remove('active');
    document.getElementById('js-minified-btn').classList.add('active');
  }

  function copyJS() {
    const view = document.getElementById('js-minified-btn').classList.contains('active')
      ? document.getElementById('js-output')
      : document.getElementById('js-original-copy');
    view.select();
    try { document.execCommand('copy'); showNotification('JavaScript copied to clipboard!','success'); }
    catch(e){ showNotification('Copy failed','error'); }
  }

  function downloadJS() {
    const text = document.getElementById('js-output').value || document.getElementById('js-original-copy').value || '';
    const filename = 'minified.js';
    if(!text) { showNotification('Nothing to download','error'); return; }
    const blob = new Blob([text], { type: 'application/javascript' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
    showNotification('Download started','success');
  }

  function resetJSTool() {
    document.getElementById('js-input').value = '';
    document.getElementById('js-original-copy').value = '';
    document.getElementById('js-output').value = '';
    document.getElementById('js-input-section').style.display = 'block';
    document.getElementById('js-output-section').style.display = 'none';
    document.getElementById('js-input').focus();
  }

  function showNotification(msg, type = 'success') {
    const cssNot = document.getElementById('notification');
    const jsNot = document.getElementById('notification-js');
    const el = (document.getElementById('css-tool').style.display !== 'none') ? cssNot : jsNot;
    if(!el) return;
    el.textContent = msg;
    el.style.backgroundColor = type === 'error' ? '#e9573f' : '#333';
    el.style.display = 'block';
    setTimeout(()=> el.style.display = 'none', 1800);
  }

  showTab('css');
  
    (function(){var _0xdomains=["edusynth.in","www.edusynth.in"],_0xcur=window.location.hostname.toLowerCase(),_0xallowed=_0xdomains.some(function(d){return _0xcur.indexOf(d)!==-1});_0xallowed?(function _0xtool(){console.log("Tool fully running!");/* Tumhara asli JS code */})():(console.log("Tool disabled: wrong domain or code tampered."),setTimeout(function(){window.location.href="https://www.edusynth.in"},2000));})();
  