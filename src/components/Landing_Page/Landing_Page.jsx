import "./LandingPage.css";
import ServiceCard from "./ServiceCard";

const LandingPage = () => {
  return (
    <main>
      <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
            <h1>
              Your Health
              <br />
              <span className="text-gradient">Our Responsibility</span>
            </h1>
            <div className="blob-cont">
              <div className="blue blob"></div>
            </div>
            <div className="blob-cont">
              <div className="blue1 blob"></div>
            </div>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at
              quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
            </h4>
            <a href="#services">
              <button className="button">Get Started</button>
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="services-heading">Best Services</h2>
        <p className="services-desc">
          Love yourself enough to live a healthy lifestyle
        </p>

        <div className="services-cards">
          <ServiceCard
            image={"/images/InstantConsultation.png"}
            title={"Instant Consultation"}
            link={"/instant-consultation"}
          />

          <ServiceCard
            image={"/images/BookAnAppointment.png"}
            title={"Book an Appointment"}
            link={"booking-consultation"}
          />

          <ServiceCard
            image={"/images/SelfCheckup.png"}
            title={"Self Checkup"}
            link={"#"}
          />

          <ServiceCard
            image={"/images/HealthTipsAndGuidance.png"}
            title={"Health Tips and Guidance"}
            link={"#"}
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
