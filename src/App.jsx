import './App.css'
import profileIcon from "./assets/profile.png"
import likedinIcon from "./assets/likedin.png"
import formation from "./formations.json"
import capacity from "./capacitys.json"

function App() {

  return (
    <>
    <div class="dark:bg-[#181a1b] dark:text-white ">
      <section class="p-14">
        <header class="flex justify-center items-center border-2 border-gray-200 shadow-2xl rounded-4xl dark:border-[#363b3d]">
          <div class="grid p-8 gap-6">
            <div class="flex justify-center">
              <div class="bg-linear-to-r/longer from-indigo-500 to-teal-400 p-1 rounded-[90rem] shadow-2xl transition hover:scale-110">
                <img src={profileIcon} class="rounded-[100rem] w-2xs" />
              </div>  
            </div>
            <h1 class="text-center text-4xl">Gabriela Emerick</h1>
            <p class="text-center text-xl">Idade: <span class="text-amber-300">19 anos</span></p>
            <div class="flex flex-wrap gap-3 justify-center">
              {
                capacity.map((capacidades) =>
                  <div class="flex p-2 gap-2 border-2 rounded-xl items-center shadow-2xl border-gray-200 bg-gray-100 transition dark:border-[#363b3d] dark:bg-[#181a1b] hover:bg-amber-500 hover:scale-110">
                    <img src={capacidades.img} class="max-w-10"/>
                    <p>{capacidades.name}</p>
                  </div>
                )
              }
            </div>
          </div>
        </header>
      </section>
      <section class="grid p-10 gap-6 lg:grid-cols-2 sm:grid-cols-1">
        <div class="border-2 border-gray-200 shadow-2xl rounded-4xl p-4 dark:border-[#363b3d]">
          <h2 class="text-2xl text-center">Sobre mim:</h2>
          <p>Olá, <br/> <br/>Sou Jovem Aprendiz em Comunicação Institucional no Poliedro Educação, onde desenvolvo habilidades analíticas e criativas com o objetivo de fortalecer a comunicação e o engajamento interno.<br/> <br/>Minha atuação é pautada pelo suporte ao setor, com ênfase em: <br/> <br/>- Elaboração de planilhas, documentos e suporte a demandas do setor. <br/>- Monitoramento de redes sociais e gestão focada na saúde da marca. <br/>- Elaboração de textos e copywriting alinhados ao tom de voz da marca.<br/> <br/>Sou entusiasta das áreas de Comunicação, Marketing e Publicidade, e busco expandir meus conhecimentos e colaborar com iniciativas estratégicas e criativas, com foco em resultados e impactos reais.<br/> <br/>Se você também é um entusiasta dessas áreas, entre em contato comigo e vamos conversar sobre esse mercado ;)</p>
        </div>
        <div class="border-2 border-gray-200 shadow-2xl rounded-4xl p-4 dark:border-[#363b3d]">
          <h2 class="text-2xl text-center">Minhas Formações:</h2>
          <div class="grid gap-3 lg:grid-cols-3 sm:grid-cols-1 items-center">
            {
              formation.map(( formacao, p ) => 
                  <div class="border-2 border-gray-100 rounded-xl p-4 dark:border-[#363b3d]">
                    <p>🏅</p>
                    <h3>Formação: {formacao.name}</h3>
                    <p>Data: {formacao.date}</p>
                  </div>
              )
            }
          </div>
        </div>
      </section>
      <section>
        <div class="grid p-5 gap-6">
          <div class="border-2 border-gray-200 shadow-2xl rounded-4xl p-4 text-center dark:border-[#363b3d]">
            <h2 class="text-2xl">Meu Trabalho</h2>
            <p>Atualmente trabalho no Poliedro Educação</p>
            <div class="grid gap-5 p-6 lg:grid-cols-3 sm:grid-cols-1">
              <div class="border-3 shadow-2xl border-gray-100 rounded-2xl p-6 dark:border-[#363b3d]">
                <p class="border-2 rounded-2xl">imagem aqui</p>
                <h1>incrivel</h1>
                <p>maravilhoso</p>
              </div>
              <div class="border-3 shadow-2xl border-gray-100 rounded-2xl p-6 dark:border-[#363b3d]">
                <p class="border-2 rounded-2xl">imagem aqui</p>
                <h1>incrivel</h1>
                <p>maravilhoso</p>
              </div>
              <div class="border-3 shadow-2xl border-gray-100 rounded-2xl p-6 dark:border-[#363b3d]">
                <p class="border-2 rounded-2xl">imagem aqui</p>
                <h1>incrivel</h1>
                <p>maravilhoso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
            <div class="grid p-5 gap-6">
              <div class="grid gap-10 text-center justify-center">
                <h2 class="text-2xl">Contato</h2>
                <div class="border-2 border-gray-200 shadow-2xl rounded-xl p-4 text-center max-w-fit transition dark:border-[#363b3d] hover:scale-110 hover:bg-white hover:text-black">
                  <a href="https://www.linkedin.com/in/gabriela-emerick/">
                    <div class="flex items-center gap-2">
                      <img src={likedinIcon} class="max-w-10" />
                      <p>Likedin</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
      </section>
    </div>
    </>
  )
}

export default App
