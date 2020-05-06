<style>
  .l-sign-in-container-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .l-sign-in-container {
    max-width: 40rem;
    margin: 0 auto;
  }
</style>

<div class="l-sign-in-container-wrapper">
  <div class="l-sign-in-container">
    <h2 class="c-h3">Please sign in</h2>

    <form action="/app/dashboard">
      <div class="c-form-group">
        <label class="c-label">Your e-mail</label>
        <input type="text" class="c-input">
      </div>
      <div class="c-form-group">
        <label>Your password</label>
        <input type="password" class="c-input">
      </div>
      <p><button class="c-button c-button--primary">Sign in</button></p>
    </form>
  </div>
</div>