import {
  Container,
  HomeSection,
  AboutSection,
  ContactSection,
  ProjectsSection,
  SkillsSection
} from './styles';

import {
  IoChevronDownOutline,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5';

import {
  SiTypescript
} from 'react-icons/si'

import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { ProjectCard, SectionTitle, SkillCard } from '../../components';
import HalfTextInput from '../../components/HalfTextInput';
import TextInput from '../../components/TextInput';
import MultlineInput from '../../components/MultilineTextInput';
import { toast } from 'react-toastify';
import FormValidation from '../../utils/formValidation';
import { ValidationError } from 'yup';
import emailjs from '@emailjs/browser';


function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const theme = useContext(ThemeContext);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = {
      name,
      lastName,
      email,
      subject,
      message
    }

    FormValidation.validate(form).then(() => {
      const statusNotification = toast.loading('Carregando... 🫣', {
        position: 'bottom-right'
      });

      emailjs.send(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form, `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`).then(() => {
        toast.update(statusNotification, {
          render: 'Mensagem enviada com sucesso. 😄',
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'success',
          isLoading: false
        })
      }).catch((err) => {
        console.error(err);

        toast.update(statusNotification, {
          render: 'Houve um erro ao enviar sua mensagem. 😢',
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'error',
          isLoading: false
        });
      });
    }).catch((err: ValidationError) => {
      err.errors.map(err => {
        return toast(`${err} 😩`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'error'
        });
      })
    })
  }

  function onArrowIconPress() {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const skills = [
    {
      skill: 'HTML5',
      SkillIcon: () => <IoLogoHtml5 size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'CSS3',
      SkillIcon: () => <IoLogoCss3 size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'Javascript',
      SkillIcon: () => <IoLogoJavascript size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'Typescript',
      SkillIcon: () => <SiTypescript size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'ReactJs',
      SkillIcon: () => <IoLogoReact size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'React Native',
      SkillIcon: () => <IoLogoReact size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    },

    {
      skill: 'NodeJs',
      SkillIcon: () => <IoLogoNodejs size={window.screen.width >= 1300 ? 140 : 57} color={theme.colors.buttonTextColor} />
    }
  ]

  function openCv() {
    window.open('cv.pdf');
  }

  return (
    <Container>
      <HomeSection>
        <div className='home-container'>
          <img src="https://github.com/clovis-chakrian.png?size=360" alt="Foto de perfil de Clóvis Chakrian"
          />
          <div className='home-content'>
            <h2>
              Olá, eu sou<br />
              <span>Clóvis Chakrian</span>
            </h2>
            <p>Desenvolvedor Fullstack</p>
            <button onClick={openCv}>
              Baixar CV
            </button>


          </div>
        </div>

        <IoChevronDownOutline onClick={onArrowIconPress} className="icon" size={28} color={theme.colors.icons} />
      </HomeSection>

      <SkillsSection ref={skillsRef} id='skills'>
        <SectionTitle
          title='Habilidades'
        />

        <div className="skills-content">
          {skills.map(skill => {
            return (
              <SkillCard
                key={skill.skill}
                skill={skill.skill}
                SkillIcon={skill.SkillIcon}
              />
            );
          })}
        </div>
      </SkillsSection>

      <ProjectsSection id='projects'>
        <SectionTitle
          title='Projetos'
        />

        <div className="projects-content">
          <ProjectCard
            codeUrl='https://github.com/Clovis-Chakrian/noTerraco-web'
            imageUrl='https://ik.imagekit.io/chakriandev/portfolio/projects/terraco.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677103468353'
            projectName='No Terraço Restaurante | Cardápio'
            projectUrl='https://noterraco.vercel.app/menu'
          />
        </div>
      </ProjectsSection>

      <ContactSection id='contact'>
        <SectionTitle
          title='Contato'
        />

        <div className="contact-content">

          <h2>
            Entre em contato comigo com alguma das opções disponíveis ao lado e responderei assim que possível. Aceito contato para trabalhos freelancer também :)
          </h2>
          <div className='contact-options'>
            <div className="social-buttons">
              <a aria-label='Link para acessar o linkedin de Clóvis Chakrian.' className='linkedin' href='https://www.linkedin.com/in/cl%C3%B3vis-chakrian-517228203/' target='_blank' rel='noreferrer'>
                <p>Linkedin</p>
                <IoLogoLinkedin size={34} color={theme.colors.buttonTextColor} />
              </a >

              <a aria-label='Link para enviar email para Clóvis Chakrian.' className='email' href='mailto:clovischakriandev@gmail.com' target='_blank' rel='noreferrer'>
                <p>Email</p>
                <IoMail size={34} color={theme.colors.buttonTextColor} />
              </a >
            </div>

            <p className='subtitle'>Ou</p>

            <form onSubmit={(e) => handleSubmitEmail(e)}>
              <div className='name-inputs'>
                <HalfTextInput
                  inputName='name'
                  labelText='Nome'
                  placeholder='Nome'
                  onChangeText={text => setName(text)}
                  value={name}
                />

                <HalfTextInput
                  inputName='lastname'
                  labelText='Sobrenome'
                  placeholder='Sobrenome'
                  onChangeText={text => setLastName(text)}
                  value={lastName}
                />
              </div>

              <TextInput
                inputName='email'
                labelText='E-mail'
                placeholder='email@gmail.com'
                onChangeText={text => setEmail(text)}
                value={email}
              />

              <TextInput
                inputName='subject'
                labelText='Assunto'
                placeholder='Seu lindo portfólio'
                onChangeText={text => setSubject(text)}
                value={subject}
              />

              <MultlineInput
                inputName='message'
                labelText='Mensagem'
                placeholder='Digite o que você deseja falar comigo aqui...'
                onChangeText={text => setMessage(text)}
                value={message}
              />

              <button type='submit'>
                Enviar
              </button>
            </form>
          </div>

        </div>
      </ContactSection>

      <AboutSection id='about'>
        <SectionTitle
          title='Sobre mim'
        />

        <div className="about-content">
          <div className='img-container'>
            <img src="https://github.com/clovis-chakrian.png?size=360" alt="Foto de perfil de Clóvis Chakrian"
              width={360}
              height={360}
            />

            <h2>
              Olá, eu sou<br />
              <span>Clóvis Chakrian</span>
            </h2>
            <p>Desenvolvedor Fullstack</p>
          </div>

          <p className='bio'>
            Sou Clóvis Chakrian, mas você pode me chamar de Clóvis (ou de Chakrian ;p). Comecei minha vida no mundo do desenvolvimento quando tinha 11/12 anos, brincando com programação em blocos em um curso. No começo fiquei bem perdido, mas com a mentoria das minhas profs consegui começar a construir as coisas... Quando fiz meu primeiro programa comcei a sentir a paixão pela coisa. Desde então mexi com várias coisas para encontrar a área que mais gostava, arduíno, desenvolvimento de jogos, apps, tudo que consegui até que percebi que o que eu mais gostava de desenvolver era aplicativos e sites. Estudei HTML, CSS e javascript mas ainda não conseguia realizar alguns projetos que tinha na cabeça. Foi então que eu descobri o backend e a construção de api’s, pois vi que seria a melhor forma de construir meus projetos pessoais. Escolhi estudar nodejs que parecia a escolha mais lógica uma vez que eu tinha conhecimento em JS. Amo estudar programação e tudo que envolve tecnologia.
          </p>
        </div>
      </AboutSection>
    </Container>
  );
};

export default Home;