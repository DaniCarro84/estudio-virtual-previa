document.addEventListener('submit', function (event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const status = form.querySelector('.wpcf7-response-output');
  if (!status) return;
  form.classList.remove('init', 'invalid', 'sent', 'submitting');
  form.classList.add('failed');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-hidden', 'false');
  status.textContent = 'Vista previa. El formulario no envía mensajes.';
}, true);
