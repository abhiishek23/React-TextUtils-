import React from 'react';

export default function About() {
  return (
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Project 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TextUtils Project .</strong> is created to reform and analyse the text as per the user requirement . 
      </div>
    </div>
  </div>
  
  
</div>
  );
}
