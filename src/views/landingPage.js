import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";

import LinkButton from "../components/linkButton";
import  Typography  from "@mui/material/Typography";

function Home() {
  useEffect(() => {
    let start = 0;
    const imgs = document.getElementById("imgs");
    const lftBtn = document.querySelector(".left-button");
    const rgtBtn = document.querySelector(".right-button");

    const img = document.querySelectorAll("#imgs img");
        let setImage = setInterval(IncrementIndex, 2500);

    function IncrementIndex() {
      start++;
      changeImage();
    }
    function changeImage() {
      if (start > img.length - 1) {
        start = 0;
      } else if (start < 0) {
        start = img.length - 1;
      }
      imgs.style.transform = `translateX(${-start * 100}%)`;
    }
    function resetInterval() {
      clearInterval(setImage);
      setImage = setInterval(IncrementIndex, 2500);
    }

    lftBtn?.addEventListener("click", () => {
      start++;
      changeImage();
      resetInterval();
    });
    rgtBtn?.addEventListener("click", () => {
      start++;
      changeImage();
      resetInterval();
    });
    return () => {
      clearInterval(setImage);
    };
  });

  return (
    <>
      <div className="carousel">
        <div className="image-container" id="imgs">
          <img src={require(`./../assets/image1.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image2.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image3.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image4.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image5.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image6.jpg`)} alt="images"></img>
          <img src={require(`./../assets/image7.jpg`)} alt="images"></img>
        </div>
      </div>

      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <h1>Quarterly Report</h1>
          <Grid item container>
            <img src={require(`./../assets/report.jpg`)} alt="images"></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum inventore necessitatibus, dolorum magni esse nostrum beatae
            fuga dicta tempora deleniti illo reiciendis? Vel pariatur veniam
            quaerat eos in magni magnam?
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
        <Grid item sm={12} md={4}>
          <h1>Shareholders Activity</h1>
          <Grid item container>
            <img
              src={require(`./../assets/shareholders.jpg`)}
              alt="images"
            ></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum invecvcxvbxvmbn c dfg ntore necessitatibus, dolorum magni esse
            nostrum beatae fuga dicta tempora deleniti illo reiciendis? Vel
            pariatur veniam quaerat eos in magni magnam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Qui, quidem maiores est alias
            tempora accusamus natus sequi esse earum nobis tenetur saepe, eius
            labore itaque voluptas hic impedit debitis magnam iste ipsum minima
            perspiciatis recusandae veniam excepturi. Qui, unde natus.
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
        <Grid item sm={12} md={4}>
          <h1>Sustainability and Annual Report </h1>
          <Grid item container>
            <img
              src={require(`./../assets/sustainability.jpg`)}
              alt="images"
            ></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum inventore necessitatibus, dolorum magni esse nostrum beatae
            fuga dicta tempora deleniti illo reiciendis? Vel pariatur veniam
            quaerat eos in magni magnam?
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4}>
          <h3>Investments</h3>
          <Grid item container>
            <img src={require(`./../assets/investment.jpg`)} alt="images"></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum inventore necessitatibus, dolorum magni esse nostrum beatae
            fuga dicta tempora deleniti illo reiciendis? Vel pariatur veniam
            quaerat eos in magni magnam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Et laudantium quis officia voluptatibus iusto
            asperiores ipsam eveniet distinctio recusandae sit numquam officiis
            amet beatae delectus expedita unde sed magni modi blanditiis
            dolorem, vel eos exercitationem. Sed dignissimos ratione a eum.
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
        <Grid item sm={12} md={4}>
          <h3>Corporate Clients</h3>
          <Grid item container>
            <img
              src={require(`./../assets/headquarters.jpg`)}
              alt="images"
            ></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum inventore necessitatibus, dolorum magni esse nostrum beatae
            fuga dicta tempora deleniti illo reiciendis? Vel pariatur veniam
            quaerat eos in magni magnam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Et laudantium quis officia voluptatibus iusto
            asperiores ipsam eveniet distinctio recusandae sit numquam officiis
            amet beatae delectus expedita unde sed magni modi blanditiis
            dolorem, vel eos exercitationem. Sed dignissimos ratione a eum.
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
        <Grid item sm={12} md={4}>
          <h3 variant="body2">Ethics and Accountability</h3>
          <Grid item container>
            <img src={require(`./../assets/report.jpg`)} alt="images"></img>
          </Grid>
          <Typography varian="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero, ut in eligendi accusamus veritatis optio sapiente, unde
            ipsum inventore necessitatibus, dolorum magni esse nostrum beatae
            fuga dicta tempora deleniti illo reiciendis? Vel pariatur veniam
            quaerat eos in magni magnam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Et laudantium quis officia voluptatibus iusto
            asperiores ipsam eveniet distinctio recusandae sit numquam officiis
            amet beatae delectus expedita unde sed magni modi blanditiis
            dolorem, vel eos exercitationem. Sed dignissimos ratione a eum.
          </Typography>
          <LinkButton name="[Read More]" link="/view/about" />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <h1>Corporate citizenship</h1>
          <Grid item container>
            <img src={require(`./../assets/ethics.jpeg`)} alt="images"></img>
            <Typography varian="body1">
              The most often quoted definition comes from the UN World
              Commission on Environment and Development: “sustainable
              development is development that meets the needs of the present
              without compromising the ability of future generations to meet
              their own needs.In the charter for the UCLA Sustainability
              Committee, sustainability is defined as: “the integration of
              environmental health, social equity and economic vitality in order
              to create thriving, healthy, diverse and resilient communities for
              this generation and generations to come. The practice of
              sustainability recognizes how these issues are interconnected and
              requires a systems approach and an acknowledgement of complexity.
            </Typography>
            <Typography varian="body1">
              Sustainable practices support ecological, human, and economic
              health and vitality. Sustainability presumes that resources are
              finite, and should be used conservatively and wisely with a view
              to long-term priorities and consequences of the ways in which
              resources are used. In simplest terms, sustainability is about our
              children and our grandchildren, and the world we will leave them.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit voluptatem reiciendis eveniet eligendi in est enim
              laborum unde et praesentium.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
