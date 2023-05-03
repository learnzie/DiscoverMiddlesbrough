import React from "react";
import Article from "assets/Images/middlesbrough art.jpeg";

export const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <h1 className="text-center">Top 10 Places to Visit in Middlesbrough</h1>
        <img src={Article} alt="Yopa homeowner" />
        <div className="row mt-5">
          <div className="col-md-6 col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              aliquid labore quae cupiditate ipsum maxime. Quae similique dicta
              reprehenderit temporibus. Libero, odio dolores nemo aut temporibus
              reiciendis nam non cum dolorum earum, repellendus aperiam dolor
              rem, officiis laudantium natus qui illum similique quaerat
              ratione? Quo tempora necessitatibus, soluta non a temporibus
              dolorem perspiciatis rem incidunt minus consectetur tempore
              reprehenderit? Soluta sed, error quasi asperiores eaque nihil
              accusamus neque quibusdam omnis. Voluptatum expedita, quibusdam
              quo modi nam impedit distinctio repellendus voluptatem?
            </p>
          </div>
          <div className="col-md-6 col-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              nostrum commodi amet iusto perspiciatis nam excepturi obcaecati
              assumenda. Nam, omnis. Nisi veniam beatae, consequuntur nesciunt a
              saepe quo quaerat deleniti dolores, nulla accusantium omnis
              necessitatibus placeat ad harum. Facilis cum, soluta consequatur
              aliquam reiciendis aliquid aut magni iste iusto accusamus iure
              fugit perferendis maxime quae dolorum suscipit quidem enim error
              nemo temporibus nesciunt rerum? Eligendi ducimus incidunt soluta
              quo, ea nesciunt, laudantium velit consequuntur quas vitae dolorem
              aut reiciendis id?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
