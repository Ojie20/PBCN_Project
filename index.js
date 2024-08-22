let index2 ='';
index2 =`
<div class="card-body">
          <div class="text-center m-5">
            <p class="h4">Let's Get You Started</p>
            <p>Please select you country of residence</p>
          </div>
          <label for="country">Country</label>
          <select name="country" class="form-select">
            <option selected>Choose Country</option>
            <option>Algeria</option>
            <option>Botswana</option>
            <option>Nigeria</option>
            <option>Zambia</option>
          </select>
          <div class="mx-auto mt-4">
            <button class="index-button btn btn-db p-2 w-100 text-center text-white">
              <!-- <a href="account-3.html" class="btn btn-db p-2 w-100 text-center text-white">-->CONTINUE<!--</a> -->
            </button>
          </div>
          <div class="text-center fw-light">
            <p class="p-3 mb-3">
              By signing up, you agree to the <span class="text-dark fw-bold">Terms and condition</span> and <span class="text-dark fw-bold">Privacy Policy</span>
            </p>
          </div>
        </div>
`;
let account3='';
account3=`
<div class="card-body p-2">
<div class="row">
  <img src="images/Progress-bar-1.jpg" alt="" class="w-50 mx-auto">
</div>
<div class="text-center m-1">
  <p class="h4">Choose account type</p>
  <p>Please select your preferred account type below</p>
</div>




<div class="row w-100 mx-auto my-2 g-3">
  <div class="col-6 w-50">
    <div class="card">
      <div class="card-body">
        <i class="bi bi-person-lines-fill"></i><br>
        Individual Account
      </div>
    </div>
  </div>
  <div class="col-6 w-50">
    <div class="card">
      <div class="card-body">
        <i class="bi bi-buildings-fill"></i><br>
        Cooperate Account
      </div>
    </div>
  </div>
</div>
<div class="my-4 p-2 border rounded border-1">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Citizenship</label>
    <select name="country" class="form-select fw-bold light-text">
      <option selected>Choose Citizenship</option>
      <option>Algerian</option>
      <option>Botswanan</option>
      <option>Nigerian</option>
      <option>Zambian</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Identification Type</label>
    <select name="country" class="form-select fw-bold light-text">
      <option selected>Choose means of Identification</option>
      <option>PIN</option>
      <option>Driver's license</option>
      <option>NIN</option>
      <option>Paasport</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control light-text" id="exampleFormControlInput1" placeholder="Enter your Identification number here">
  </div>
</div>
</div>
<hr>
<div class="d-flex flex-row-reverse w-50 ms-auto text-body-secondary">
 <button class="account3-next btn btn-db p-2 m-2 text-center text-white rounded-4">
  NEXT
 </button>
 <button class="account3-prev btn btn-light p-2 m-2 text-center text-dark rounded-4">
  PREVIOUS
</button>
</div>
`

// inside Index 2 section
document.querySelector('.index-button').addEventListener('click', ()=>{
  document.querySelector('.card-body-js').innerHTML=account3
})