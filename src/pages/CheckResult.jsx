import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import { useAlert } from "react-alert";

import Header from "../partials/Header-Result";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";

function CheckResult() {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [results, setResults] = useState([]);
  const [vote, setVote] = useState(null);
  const [host, setHost] = useState("");
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const indicatorElement = useRef(null);
  const progressElement = useRef(null);
  const alert = useAlert();

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        `https://api.reduza.com.br/siteconfiavel/trustchecks/${clientId}?fakeloading=1`
      );
      setCompanyName(response.data.trustcheck.whois.data.ownerName);
      setCnpj(response.data.trustcheck.whois.data.ownerDocument);
      setResults(response.data.uiPanels);
      setVote(response.data.voting);
      setHost(response.data.trustcheck.withoutSubdomainHost);
      setIsLoading(false);
    }
    loadData();
  }, [clientId]);

  useEffect(() => {
    if (vote !== null && vote.visible === true) {
      let width = (indicatorElement.current.clientWidth / 100) * vote.liked;
      progressElement.current.style.width = width + "px";
    }
  }, [vote]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {isLoading ? (
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          text="Loading..."
        >Loading</LoadingScreen>
      ) : (
        <div className="grow">
          {/*  Page illustration */}
          <div
            className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
            aria-hidden="true"
          >
            <PageIllustration />
          </div>

          {/*  Page sections */}
          <section className="relative pt-16 md:pt-20">
            {/* Background gradient (light version only) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
              aria-hidden="true"
            ></div>
            {/* End background gradient (light version only) */}
            {cnpj === "" ? (
              <div className="bg-gray-400 w-full h-20 absolute"></div>
            ) : (
              <div className="bg-green-500 w-full h-20 absolute"></div>
            )}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              {cnpj === "" ? (
                <div className="flex justify-center align-center text-gray-400 pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex justify-center align-center text-green-500 pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {cnpj !== "" ? (
                <div className="lg:mx-16">
                  <div
                    className="text-2xl lg:text-[34px] mb-4 font-red-hat-display font-bold text-center"
                    data-aos="fade-down"
                  >
                    {"O " + host + " é confiável"}
                  </div>
                  <div
                    className="text-lg lg:text-xl font-bold"
                    data-aos="fade-down"
                  >
                    {companyName}
                  </div>
                  <div
                    className="text-md lg:text-lg mb-6 font-bold"
                    data-aos="fade-down"
                  >
                    {"CNPJ: " + cnpj}
                  </div>
                </div>
              ) : (
                <div
                  className="text-2xl lg:text-[34px] mb-4 font-red-hat-display font-bold text-center"
                  data-aos="fade-down"
                >
                  {"O " + host + " está em revisão"}
                </div>
              )}
              <div className="pb-12 md:pb-20">
                <div
                  className="grid grid-cols-1 gap-2 lg:gap-3 lg:mx-16 text-center"
                  data-aos-id-stats
                >
                  {results.map((result, index) =>
                    result.visible === true ? (
                      <div
                        className="bg-gradient-to-r from-gray-400 to-gray-200 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-600 py-3 px-5 shadow-2xl grid grid-cols-1 text-left md:grid-cols-2 rounded"
                        data-aos="fade-down"
                        data-aos-anchor="[data-aos-id-stats]"
                        key={index}
                      >
                        <div className="flex justify-between align-items-center">
                          <div className="font-red-hat-display text-md font-bold">
                            {result.type === "ssl" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/ssl.png"
                                  className="w-6 mr-2"
                                  alt="SSL"
                                />
                                SSL
                              </div>
                            ) : result.type === "https" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/https.png"
                                  className="w-6 mr-2"
                                  alt="HTTPS"
                                />
                                HTTPS
                              </div>
                            ) : result.type === "googleSearch" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/chrome.png"
                                  className="w-6 h-6 mr-2"
                                  alt="Google"
                                />
                                Resultado do Google
                              </div>
                            ) : result.type === "manuallyModerated" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/validate.png"
                                  className="w-6 h-6 mr-2"
                                  alt="Validate"
                                />
                                {result.titleText}
                              </div>
                            ) : result.type === "whois" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/date.png"
                                  className="w-6 h-6 mr-2"
                                  alt="Date"
                                />
                                {result.titleText}
                              </div>
                            ) : result.type === "suspectTld" ? (
                              <div className="flex">
                                <img
                                  src="/src/images/domain.png"
                                  className="w-6 h-6 mr-2"
                                  alt="Domain"
                                />
                                {result.titleText}
                              </div>
                            ) : (
                              result.titleText
                            )}
                          </div>

                          {result.warning ? (
                            <div className="font-red-hat-display text-md font-bold lg:pr-12 w-56 text-yellow-400 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                  clipRule="evenodd"
                                />
                              </svg>

                              {result.statusText}
                            </div>
                          ) : result.danger ? (
                            <div className="font-red-hat-display text-md font-bold lg:pr-12 w-56 text-red-400 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                  clipRule="evenodd"
                                />
                              </svg>

                              {result.statusText}
                            </div>
                          ) : (
                            <div className="font-red-hat-display text-md font-bold lg:pr-12 w-56 text-[#41ad49] flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clipRule="evenodd"
                                />
                              </svg>

                              {result.statusText}
                            </div>
                          )}
                        </div>
                        <div className="text-gray-800 text-sm dark:text-gray-200">
                          {result.messageText}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
                {vote !== null && vote.visible === true ? (
                  <div className="mt-16">
                    <div className="flex justify-center mb-4">
                      <div
                        className="text-xl lg:text-2xl font-bold"
                        data-aos="fade-down"
                      >
                        Reputação
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className="text-sm lg:text-md font-light mr-2"
                        data-aos="fade-down"
                      >
                        não confiável
                      </div>
                      <div className="mt-1" data-aos="fade-down">
                        <div
                          className="w-96 bg-gray-400 dark:bg-gray-200 rounded-full"
                          ref={indicatorElement}
                        >
                          <div
                            className="bg-teal-400 text-xs font-medium text-gray-900 text-center p-0.5 leading-none rounded-l-full"
                            ref={progressElement}
                          >
                            {vote.liked + "%"}
                          </div>
                        </div>
                      </div>
                      <div
                        className="text-sm lg:text-md font-light ml-2"
                        data-aos="fade-down"
                      >
                        confiável
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="flex justify-center mt-10">
                  <div
                    className="text-sm lg:text-md font-light text-gray-900 dark:text-gray-300 ml-2"
                    data-aos="fade-down"
                  >
                    Você acha que este site é confiável? Por favor, deixe seu
                    feedback usando os botões abaixo:
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    disabled={disable}
                    onClick={() => {
                      setDisable(true);
                      alert.success("Você informou que este site é confiável");
                      }}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-green-400 hover:bg-green-400 hover:text-gray-800 mr-8 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                    </svg>
                  </button>
                  <button
                    disabled={disable}
                    onClick={() => {
                      setDisable(true);
                      alert.error("Você informou que este site não é confiável");
                    }}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-red-400 hover:bg-red-400 hover:text-gray-800 ml-8 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-transparent dark:border-gray-800 py-20">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <div className="lg:mx-16">
                <div
                  className="text-2xl lg:text-[34px] mb-6 font-red-hat-display font-bold text-center"
                  data-aos="fade-down"
                >
                  Como saber se seu site é confiável
                </div>
                <div
                  className="text-md lg:text-lg mb-4 font-light text-gray-800 dark:text-gray-300"
                  data-aos="fade-down"
                >
                  Tome sua decisão de compra, acesso ou cadastro a partir do
                  resultado da verificação que fizemos. Abaixo algumas dicas
                  para você entender melhor os dados:
                </div>
                <div
                  className="text-md lg:text-lg mb-1 font-light text-gray-800 dark:text-gray-300 px-8"
                  data-aos="fade-down"
                >
                  <strong className="font-bold">Tempo de registro:</strong>{" "}
                  prefira sempre empresas que já estejam no mercado há mais
                  tempo, é comum que sites fraudulentos tenham pouco tempo de
                  vida;
                </div>
                <div
                  className="text-md lg:text-lg mb-1 font-light text-gray-800 dark:text-gray-300 px-8"
                  data-aos="fade-down"
                >
                  <strong className="font-bold">Sites clonados:</strong>
                  verifique sempre se o site não está tentando se passar por
                  outro, veja se a logo do site é a mesma da URL, sites clonados
                  usam domínios diferentes, nossa verificação de links diminui
                  em até 99% as chances de vocês cair em um golpe de site
                  clonado;
                </div>
                <div
                  className="text-md lg:text-lg mb-1 font-light text-gray-800 dark:text-gray-300 px-8"
                  data-aos="fade-down"
                >
                  <strong className="font-bold">Reputação:</strong> atenção
                  especial para a experiência de outros clientes pode te ajudar
                  a identificar sites fraudulentos. Prefira sempre, sites com
                  boa reputação.
                </div>
                <div
                  className="text-md lg:text-lg mb-1 font-light text-gray-800 dark:text-gray-300 px-8"
                  data-aos="fade-down"
                >
                  <strong className="font-bold">Tipos de domínios:</strong> os
                  domínios mais populares no Brasil, são os domínios que
                  terminam .com.br e .com. Atenção especial com domínios que não
                  tenham essas extensões. É comum que sites criminosos, usem
                  extensões como: .xyz, .ru, .cn ou outros.
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default CheckResult;
