import { Cloudinary } from "@cloudinary/url-gen";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { Position } from "@cloudinary/url-gen/qualifiers";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

function Home({ userDetails, setUserDetails, setShowPDF, initialState }) {
  const {
    firstname,
    lastname,
    email,
    mobile,
    website,
    course,
    role,
    company,
    position,
    school,
    country,
    state,
    interest_1,
    interest_2,
    interest_3,
  } = userDetails;

  const cld = new Cloudinary({
    cloud: {
      cloudName: "YOUR_CLOUD_NAME",
    },
  });

  const template = cld
    .image("local-uploads/zq5mfbimt1vxjhrdbn1l.pdf")
    .addFlag("rasterize");

  template.overlay(
    source(
      text(`${firstname} ${lastname}`, new TextStyle("Nunito", 60)).textColor(
        "black"
      )
    ).position(
      new Position().gravity(compass("north")).offsetY(200).offsetX(-400)
    )
  );
  //Education Overlay
  template
    .overlay(
      source(text(`${school}`, new TextStyle("Times", 30))).position(
        new Position().gravity(compass("west")).offsetY(50).offsetX(100)
      )
    )
    .overlay(
      source(
        text(`${course}`, new TextStyle("Times", 30)).textColor("gray")
      ).position(
        new Position().gravity(compass("west")).offsetY(120).offsetX(100)
      )
    );
  // Contacts Overlay
  template
    .overlay(
      source(
        text(`${mobile}`, new TextStyle("Times", 30)).textColor("gray")
      ).position(
        new Position().gravity(compass("west")).offsetY(410).offsetX(100)
      )
    )
    .overlay(
      source(
        text(`${email}`, new TextStyle("Times", 30)).textColor("gray")
      ).position(
        new Position().gravity(compass("west")).offsetY(510).offsetX(100)
      )
    )
    .overlay(
      source(
        text(`${website}`, new TextStyle("Times", 30)).textColor("gray")
      ).position(
        new Position().gravity(compass("west")).offsetY(610).offsetX(100)
      )
    );
  // Profile Overlays
  template
    .overlay(
      source(
        text(
          `I'm ${firstname}  ${lastname},`,
          new TextStyle("Times", 40)
        ).textColor("gray")
      ).position(
        new Position().gravity(compass("north")).offsetY(300).offsetX(200)
      )
    )
    .overlay(
      source(
        text(
          `a ${role} from ${state}, ${country}.`,
          new TextStyle("Times", 30)
        ).textColor("gray")
      ).position(
        new Position().gravity(compass("north")).offsetY(350).offsetX(200)
      )
    );
  // Experience Overlay
  template
    .overlay(
      source(
        text(`${company}`, new TextStyle("Times", 45)).textColor("gray")
      ).position(
        new Position().gravity(compass("north")).offsetY(700).offsetX(200)
      )
    )
    .overlay(
      source(
        text(`${position}`, new TextStyle("Times", 30)).textColor("gray")
      ).position(
        new Position().gravity(compass("north")).offsetY(750).offsetX(200)
      )
    );
  // Interests Overlay
  template
    .overlay(
      source(
        text(`${interest_1}`, new TextStyle("Times", 45)).textColor("gray")
      ).position(
        new Position().gravity(compass("south")).offsetY(540).offsetX(210)
      )
    )
    .overlay(
      source(
        text(`${interest_2}`, new TextStyle("Times", 45)).textColor("gray")
      ).position(
        new Position().gravity(compass("south")).offsetY(450).offsetX(180)
      )
    )
    .overlay(
      source(
        text(`${interest_3}`, new TextStyle("Times", 45)).textColor("gray")
      ).position(
        new Position().gravity(compass("south")).offsetY(360).offsetX(200)
      )
    );
  const pdfTemplate = template.toURL();
  return (
    <div>
      <iframe src={pdfTemplate} width="500" height="778"></iframe>
      <div className="mt-3">
        <button
          onClick={() => {
            setUserDetails(initialState);
            setShowPDF(false);
          }}
          className="btn btn-primary"
        >
          Generate New Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
