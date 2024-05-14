import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import secrets from "./secrets";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // const service_id = secrets.SERVICE_ID;
    // const template_id = secrets.TEMPLATE_ID;
    // const user_id = secrets.USER_ID;

    emailjs
      .send(
        "service_7w4kp0t",
        "template_dpfvh3c",
        {
          from_name: form.name,
          to_name: "Nishant Jswl",
          from_email: form.email,
          to_email: "nishantjais541@gmail.com",
          message: form.message,
        },
        "_uIpx_LXmaolnOHLa"
      )
      .then(() => {
        setLoading(false);
        alert("Thankyou! I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);
        alert("Something went wrong! Please try again.");
        console.log(error);
      };
  };

  return (
    <div
      className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      style={{
        background: "transparent",
        boxShadow: "-20px -20px 47px #000017,20px 20px 47px #020059",
      }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{
                background: "#010038",
                boxShadow: "5px 5px 10px #000016,-5px -5px 10px #02005a",
              }}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{
                background: "#010038",
                boxShadow: "5px 5px 10px #000016,-5px -5px 10px #02005a",
              }}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className=" py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{
                background: "#010038",
                boxShadow: "5px 5px 10px #000016,-5px -5px 10px #02005a",
              }}
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 rounded-xl outline-none w-fit text-white font-bold "
            style={{
              background: "#010038",
              boxShadow: "5px 5px 10px #000016,-5px -5px 10px #02005a",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[250px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
