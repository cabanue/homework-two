var MODEL = (function () {
  var _homePage = `<div class="home-hero">
  <h1 class="home-hero__header">Drink Shop</h1>
  <p class="home-hero__text">Welcome to Drink Shop. We have just about any drink you can think of.</p>
</div>
<div class="featured">
 <h3 class="featured__heading">Some of our drinks</h3>
 <div class="featured__images">
    <div class="featured__images__single featured__images__single--one"></div>
    <div class="featured__images__single featured__images__single--two"></div>
    <div class="featured__images__single featured__images__single--three"></div>
    <div class="featured__images__single featured__images__single--four"></div>
 </div>
</div>`;

  var _aboutPage = `<div class="about">
  <div class="about__hero"></div>
  <h1 class="about__heading">About Us!</h1>
  <div class="about__bio">
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem deserunt enim voluptatibus ducimus, possimus facilis amet modi ut consequatur aspernatur quidem, distinctio ea, praesentium architecto nihil maxime quos illo officiis error eum recusandae accusantium! Doloremque quisquam explicabo veniam nam, in voluptate debitis eum nulla optio corporis, accusantium voluptatum repudiandae officia natus tempore. Distinctio modi reiciendis laudantium quos sapiente voluptatibus, culpa natus soluta nihil. Quaerat quidem voluptatum quis. Sed, commodi veritatis aliquid tempora autem officiis illum ut saepe aut culpa obcaecati dolores nisi odit nemo debitis ad hic quidem, suscipit enim? Ipsam praesentium et rem. Ut deserunt eos nulla cumque mollitia!</p>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quae incidunt esse dignissimos, nam ratione molestias. Quia sint incidunt mollitia aspernatur, quos voluptates illo doloribus, dolore culpa amet voluptatum nemo deleniti autem quod fuga consequatur dicta corrupti. Sunt beatae adipisci illum cum est, officiis reprehenderit ad quos! Odit in neque, officia totam quaerat architecto, ad optio rerum impedit, repellat iste voluptate maiores! Ipsa nemo adipisci temporibus nihil odit dignissimos. Vitae reiciendis pariatur molestiae aut ipsam ipsum aliquid possimus a maxime.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto soluta in, enim magni labore accusantium, blanditiis mollitia sit nisi assumenda odio reiciendis commodi eveniet possimus cumque ipsum laboriosam architecto. Illo commodi obcaecati quam assumenda nisi iure ipsum praesentium maxime possimus! Facilis aperiam natus sapiente maxime nostrum, exercitationem voluptatum voluptate! Minus a illo natus beatae, maiores vitae non at magnam.</p>
  </div>
</div>`;

  var _drinksPage = `<div class="drinks">
  <h1 class="drinks__heading">Drinks</h1>
  <div class="drinks__ours">
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      <div class="drinks__ours__individual">
         <div class="drinks__ours__individual__name">Pepsi</div>
         <div class="drinks__ours__individual__pic drinks__ours__individual__pic--one"></div>
      </div>
      

  </div>
</div>
<div class="requests">
  <h1 class="requests__heading">Request a New Drink!</h1>
  <div class="requests__form">
     <label for="input"> Drink Suggestion</label>
     <input type="text" placeholder="Name of Drink...">
     <button>Submit</button>
  </div>
</div>`;

  var _locationsPage = `<div class="locations">
  <h1 class="locations__header">Our locations</h1>
  <div class="locations__stores">
     <div class="locations__stores__individual">
        <p class="locations__stores__individual__text">Store 1</p>
        <p class="locations__stores__individual__text">123 Fake St</p>
        <div class="locations__stores__individual__but"> Get Directions</div>
     </div>
     <div class="locations__stores__individual">
      <p class="locations__stores__individual__text">Store 2</p>
      <p class="locations__stores__individual__text">123 Another St</p>
      <div class="locations__stores__individual__but"> Get Directions</div>
     </div>
     <div class="locations__stores__individual">
      <p class="locations__stores__individual__text">Store 3</p>
      <p class="locations__stores__individual__text">123 Other St</p>
      <div class="locations__stores__individual__but"> Get Directions</div>
     </div>
  </div>
</div>
<div class="start">
  <h1 class="start__header">Start Your Own Store!</h1>
  <div class="start__form">
     <input type="text" placeholder="Name...">
     <input type="text" placeholder="Email...">
     <input type="text" placeholder="Phone Number...">
     <div class="start__form__but">Get Started</div>
  </div>
</div>`;

  var _getPage = function (btnID) {
    let pageName = "_" + btnID + "Page";

    $("#content").html(eval(pageName));
  };

  return {
    getPage: _getPage,
  };
})();
