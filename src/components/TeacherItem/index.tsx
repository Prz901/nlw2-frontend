import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4'
          alt='Diego Fernandes'
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida de pessoas através de experiências.Mais de 200 mil
        pessoas ja passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={WhatsappIcon} alt='whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
