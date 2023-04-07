import logoFooter from '../../assets/svgs/logo_footer.svg'

import "./Footer.scss"

function Footer() {
  return (
    <footer className="containerFooter">
         <div className="columLeft dpl-flex">
            <img src={logoFooter} />
        </div>
        <div className="columRight dpl-flex">
            <p className="columRightText">Agência N1 - Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer