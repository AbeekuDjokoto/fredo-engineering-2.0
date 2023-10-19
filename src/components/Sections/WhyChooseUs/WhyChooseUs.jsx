import styles from "./WhyChooseUs.module.scss";
import workDone from "../../../assets/images/workDone.png";

export const WhyChooseUs = () => {
  return (
    <section className={styles.section3}>
      <div className="flex flex-col justify-between gap-10 max-w-[669px] w-full mx-auto">
        <div>
          <div className={styles.smallCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M18.9392 10.5226V20.8376C18.9392 21.1321 18.8812 21.4237 18.7685 21.6958C18.6558 21.9678 18.4906 22.215 18.2824 22.4233C18.0742 22.6315 17.827 22.7967 17.5549 22.9093C17.2828 23.022 16.9913 23.08 16.6968 23.08H3.2424C2.64768 23.08 2.07731 22.8438 1.65678 22.4233C1.23625 22.0027 1 21.4324 1 20.8376V7.38327C1 6.78855 1.23625 6.21818 1.65678 5.79765C2.07731 5.37712 2.64768 5.14087 3.2424 5.14087H12.6313"
                stroke="#FFB342"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.9258 1.22301C22.8415 1.13036 22.7392 1.05577 22.6253 1.00374C22.5113 0.951714 22.388 0.923334 22.2627 0.920313C22.1375 0.917293 22.0129 0.939696 21.8966 0.986168C21.7802 1.03264 21.6745 1.10222 21.5858 1.19069L20.872 1.90103C20.7855 1.98759 20.7369 2.10496 20.7369 2.22734C20.7369 2.34972 20.7855 2.46709 20.872 2.55366L21.5264 3.20687C21.5693 3.24996 21.6203 3.28416 21.6764 3.30749C21.7326 3.33082 21.7928 3.34283 21.8536 3.34283C21.9144 3.34283 21.9746 3.33082 22.0308 3.30749C22.0869 3.28416 22.1379 3.24996 22.1808 3.20687L22.8768 2.51442C23.2288 2.163 23.2617 1.59058 22.9258 1.22301ZM19.4287 3.34362L9.01119 13.7419C8.94803 13.8048 8.90212 13.8829 8.87789 13.9686L8.39602 15.4037C8.38448 15.4427 8.38366 15.484 8.39366 15.5234C8.40365 15.5627 8.42409 15.5987 8.45281 15.6274C8.48153 15.6561 8.51747 15.6766 8.55684 15.6865C8.59621 15.6965 8.63754 15.6957 8.67649 15.6842L10.1105 15.2023C10.1963 15.1781 10.2744 15.1322 10.3373 15.0691L20.7364 4.65119C20.8326 4.55396 20.8865 4.42271 20.8865 4.28593C20.8865 4.14915 20.8326 4.01789 20.7364 3.92066L20.1622 3.34362C20.0648 3.24655 19.9329 3.19203 19.7954 3.19203C19.6579 3.19203 19.526 3.24655 19.4287 3.34362Z"
                fill="#FFB342"
              />
            </svg>
            <p>Why Choose Us</p>
          </div>
          <div className={styles.headCard}>
            <div className={styles.headContainer}>
              <h3 className={styles.title}>
                Few Reasons Why You Should Choose Us
              </h3>
              <p className={styles.section3subTitle}>
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt. Interdum et malesuada.{" "}
              </p>
            </div>

            <div className="flex flex-col gap-10 justify-center text-[#7E7E7E] text-sm font-normal max-w-[600px] w-full">
              <div className="flex items-start gap-[13px]">
                <div className="max-w-[32px] w-full h-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="16" fill="#FFB342" />
                    <path
                      d="M23 11L13.9 22L10 17.875"
                      stroke="#1C2752"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className={styles.section3Title}>
                    Machine Design and Fabrication On-the-Job Training
                  </p>
                  <p className={styles.section3subTitle}>
                    Learn by doing with hands-on experience in machine design
                    and fabrication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[13px]">
                <div className="max-w-[32px] w-full h-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="16" fill="#FFB342" />
                    <path
                      d="M23 11L13.9 22L10 17.875"
                      stroke="#1C2752"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className={styles.section3Title}>
                    Apprentice Training in mechanical and electronics
                    engineering
                  </p>
                  <p className={styles.section3subTitle}>
                    Gain valuable hands-on experience and expert mentorship in
                    both fields for a successful engineering career.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[13px]">
                <div className="max-w-[32px] w-full h-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="16" fill="#FFB342" />
                    <path
                      d="M23 11L13.9 22L10 17.875"
                      stroke="#1C2752"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className={styles.section3Title}>Affordable Price</p>
                  <p className={styles.section3subTitle}>
                    Our extensive experience in Milling and Drying solutions
                    comes with a commitment to affordability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={workDone} alt="" className="rounded-2xl mx-auto" />
    </section>
  );
};
