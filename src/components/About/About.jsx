import React from "react";

const About = () => {
  return (
    <div className="md:h-[100vh] py-5 px-3 md:px-10 md:py-10">
      <div className="">
        <div className="">
          <h1 className="md:text-3xl text-2xl mb-5 font-semibold">
            Welcome to <span className="text-[#E30022]">Task</span>
            <span className="text-[#00a676]">Harbor!</span>
          </h1>
        </div>
        <div className="md:px-10 space-y-5">
          <p className="">
            At <span className="font-semibold">TaskHarbor</span>, we understand
            that managing your tasks efficiently is essential for personal and
            professional success. That's why we've created a user-friendly and
            feature-rich todo application designed to streamline your
            productivity and bring clarity to your daily tasks.
          </p>
          <p className="">
            Our journey began with a simple idea: to provide individuals and
            teams with a powerful yet intuitive tool to organize, prioritize,
            and accomplish their tasks effectively. With a team passionate about
            productivity and innovation, we've worked tirelessly to develop a
            platform that adapts to your unique workflow and empowers you to
            achieve your goals.
          </p>
          <p>
            But we're not just about features; we're about making a difference
            in your life. We believe that when you have the right tools at your
            disposal, you can unlock your full potential and accomplish
            extraordinary things. That's why we're dedicated to continually
            improving <span className="font-semibold">TaskHarbor</span>,
            listening to your feedback, and delivering an exceptional user
            experience.
          </p>
          <p>
            Join us on this journey towards productivity and success. Whether
            you're embarking on a new project, tackling your daily chores, or
            pursuing your long-term goals, let{" "}
            <span className="font-semibold">TaskHarbor </span>
            be your trusted companion every step of the way.
          </p>
          <p className="font-semibold">
            Thank you for choosing{" "}
            <span>
              <span className="font-semibold">TaskHarbor</span>
            </span>
            . Together, let's make every task count.
          </p>
          <h1 className="text-xl font-bold">
            Developer: <span className="text-[#E30022]">Jatin</span>{" "}
            <span className="text-[#00a676]">Shakya</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
