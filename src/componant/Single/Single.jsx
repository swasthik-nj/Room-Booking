import "../Single/single.css";
import { Link, useParams } from "react-router-dom";
import { rooms } from "../../data/data";
import Navbar from "../Navbar/Navbar";

export default function Single() {
  let OrderConfirm = () => alert("Are you sure Book this!");

  const { id } = useParams("id");
  const [singleroom] = rooms.filter((r) => r.id === id);


  return (
    <div>
      <Navbar />
      <div className="item-container" id="book-ready">
        <div
          style={{
            height: "100%",
            width: "190vh",
            margin: "auto",
            backgroundColor: "rgb(203, 240, 247)",
            borderRadius: "10px",
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          <div className="item-details">
            <div>
              <img className="img-container" src={singleroom.images} alt="img" />
            </div>
            <div className="bed-type-container">
              <div className="bed-type">
               <marquee direction="left"> <h1
                  style={{
                    fontSize: "55px",

                    paddingTop: "50px",
                  }}
                >
                  {singleroom.roomType}
                </h1></marquee>
              </div>
              <div className="price-book">
                <h2>
                  {singleroom.pricing.perNight} &#8377;
                  <span
                    style={{
                      color: "#424c2ea6",
                      fontWeight: "300",
                      fontSize: "20px",
                    }}
                  >
                    /night
                  </span>
                </h2>
                <h3>Ratings :4.8</h3>
              </div>
              <div style={{ paddingTop: "40px", display: "flex", gap: "40px" }}>
                <div>
                  <div>icon**</div>
                  <div>Extra Bedsheet</div>
                </div>
                <div>
                  <div>icon**</div>
                  <div>1 BathRoom</div>
                </div>
                <div>
                  <div>icon**</div>
                  <div>Dress Block</div>
                </div>
              </div>
              <div style={{ marginTop: "70px", marginLeft: "100px" }}>
                <Link
                  onClick={OrderConfirm}
                  className="book-ready"
                  to={`/booking-confirm/${singleroom.id}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div style={{ padding: "0 40px 20px 40px" }}>
            <div>
              <h1
                style={{
                  fontSize: "45px",
                  textDecoration: "underline",
                  color: "#502c02",
                  fontFamily: "console",
                }}
              >
                More about {singleroom.roomType}
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "40px" }}>
                <p
                  style={{
                    paddingTop: "20px",
                    fontSize: "26px",
                    lineHeight: "36px",
                  }}
                >
                  {singleroom.description}
                  <span style={{ fontWeight: "300" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis distinctio fugiat dolore, inventore nesciunt
                    laboriosam exercitationem at ut magni nobis. Quo, incidunt
                    natus. Adipisci, amet cum alias quibusdam illum molestias
                  </span>
                </p>
                <div>
                  <h1
                    style={{
                      fontSize: "40px",
                      paddingTop: "38px",
                      color: "#284619",
                    }}
                  >
                    Available Services
                  </h1>
                </div>
                {/* <Feature /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "170px",
                  }}
                >
                  <h2>
                    It will provide unbelievable expirience ,Click and reserve
                    your Room--
                  </h2>
                  <a href="#book-ready">book(UpArrow)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
