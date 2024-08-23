export * from "./Navbar";
export * from "./Header";
export * from "./Footer";
export * from "./NotFound";
export * from "./Inspirations";

<div className="section bg-beige" data-anchor="slide1">
              <div className="slide">
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1 }}
                    className="w-fit"
                  >
                    <Img 
                        src="https://static.igem.wiki/teams/5079/img-0433.png" 
                        alt="patient painting" 
                        className="float-left" 
                    />
                  </motion.div>
                  <div className="flex flex-col justify-center h-[100vh] gap-[40px] z-10 px-[50px] xl:px-[90px] py-[90px] max-w-[60%]">
                    <motion.div
                      className="text-h3 xl:text-h2 font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 1.5 }}
                    >
                      There is currently no disease modifying treatment for Parkinson’s Disease…{" "}
                    </motion.div>
                    <motion.div
                      className="text-bodyEmp xl:text-h3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 2.5 }}
                    >
                      We are changing that.
                    </motion.div>
                    <motion.div
                      className="text-bodyEmp xl:text-h3 flex gap-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 3.5 }}
                    >
                     </motion.div>
                  </div>
                </div>
              </div>
            </div>
