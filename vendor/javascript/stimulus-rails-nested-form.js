// stimulus-rails-nested-form@4.1.0 downloaded from https://ga.jspm.io/npm:stimulus-rails-nested-form@4.1.0/dist/stimulus-rails-nested-form.mjs

import{Controller as e}from"@hotwired/stimulus";class r extends e{add(e){e.preventDefault();const t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,(new Date).getTime().toString());this.targetTarget.insertAdjacentHTML("beforebegin",t)}remove(e){e.preventDefault();const t=e.target.closest(this.wrapperSelectorValue);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";const e=t.querySelector("input[name*='_destroy']");e.value="1"}}}r.targets=["target","template"];r.values={wrapperSelector:{type:String,default:".nested-form-wrapper"}};export{r as default};

