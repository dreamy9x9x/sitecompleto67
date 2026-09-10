'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  ArrowDown,
  ArrowUpRight,
  BadgeAlert,
  Ban,
  Check,
  ChevronRight,
  CircleDot,
  Eye,
  FileSearch,
  Gavel,
  Share2,
  Menu,
  MessageCircle,
  Scale,
  Shield,
  Siren,
  X,
  Zap,
} from 'lucide-react'

const problems = [
  { icon: BadgeAlert, title: 'Toxicidade', text: 'Comunidades marcadas por comportamentos extremamente tóxicos.', tone: 'red' },
  { icon: AlertTriangle, title: 'Assédio', text: 'Situações de assédio e comportamentos inadequados tratados com seriedade.', tone: 'orange' },
  { icon: Ban, title: 'Golpes', text: 'Práticas enganosas que podem prejudicar jogadores.', tone: 'red' },
  { icon: Gavel, title: 'Abuso administrativo', text: 'Administradores utilizando seus cargos de forma irresponsável.', tone: 'orange' },
  { icon: Scale, title: 'Discriminação', text: 'Casos envolvendo preconceito ou tratamento discriminatório.', tone: 'red' },
  { icon: Siren, title: 'Má administração', text: 'Decisões irresponsáveis que colocam a experiência dos jogadores em risco.', tone: 'orange' },
]

const timeline = [
  ['01', 'Início das investigações', 'Mapeamento de denúncias e sinais de risco nas comunidades.'],
  ['02', 'Documentação de casos', 'Organização de relatos, registros e evidências verificáveis.'],
  ['03', 'Tentativas de denúncia', 'Encaminhamento de informações aos canais competentes.'],
  ['04', 'Divulgação de informações', 'Conscientização pública com contexto e responsabilidade.'],
  ['05', 'Encerramento de citys', 'Diversas comunidades investigadas deixaram de operar.'],
  ['06', 'O trabalho continua', 'Acompanhamento, arquivo e novas denúncias responsáveis.'],
]

const cases = [
  { tag: 'DESTAQUE', title: 'Sorocaba City', text: 'Considerada uma das maiores citys do Brookhaven em 2025, foi alvo de investigação e protestos digitais da Antiadmins. O caso também é relacionado, segundo a organização, ao chamado Caso RoCute, que envolve alegações sobre coleta de IP e falsas promessas de Robux grátis.', featured: true },
  { tag: 'CASO 01', title: 'Dark City', text: 'A organização documentou alegações de misandria, assédio direcionado a homens, comentários inadequados e tratamento injusto. O canal oficial da comunidade no WhatsApp foi derrubado após denúncias e apresentação de evidências, segundo a Antiadmins.' },
  { tag: 'CASO 02', title: 'Canal sem nome', text: 'Um canal teria utilizado servidores de outras citys sem autorização para realizar RPs, causando prejuízos às comunidades envolvidas. O nome do canal não foi identificado publicamente.' },
  { tag: 'CASO 03 · 2026', title: 'Sanrio City', text: 'A Antiadmins afirma ter comprometido o TikTok da city após alegações de advertências sem justificativa e tratamento injusto de administradores. O caso segue descrito como uma exposição da organização.' },
]

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /></span>
}

export function AntiadminsSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [['Sobre', 'sobre'], ['Problemas', 'problemas'], ['Casos', 'casos'], ['2025', 'retrospectiva'], ['Canal', 'canal']]

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#inicio" className="brand" onClick={closeMenu}><BrandMark /><span>ANTI<span className="brand-red">ADMINS</span></span></a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {nav.map(([label, href]) => <a key={href} href={`#${href}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Enviar relato <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> ORGANIZAÇÃO INDEPENDENTE · EST. 2025</div>
            <h1>Anti<span>admins</span></h1>
            <p className="hero-lead">Nós fazemos justiça.<br /><em>Nós sempre voltamos.</em></p>
            <p className="hero-description">Investigamos, documentamos e expomos práticas que ameaçam a integridade das comunidades de roleplay.</p>
            <div className="hero-actions"><a className="button button-primary" href="#sobre">Conheça a organização <ChevronRight size={17} /></a><a className="button button-ghost" href="#casos">Ver casos documentados <ArrowDown size={16} /></a></div>
          </div>
          <div className="hero-aside" aria-hidden="true"><div className="radar"><div className="radar-sweep" /><div className="radar-ring ring-one" /><div className="radar-ring ring-two" /><div className="radar-cross" /><span className="radar-point point-one" /><span className="radar-point point-two" /></div><div className="radar-label"><span>SCAN ACTIVE</span><strong>FIELD // 001</strong></div></div>
          <div className="hero-bottom"><span>SCROLL TO INVESTIGATE</span><span className="line" /><span>01 / 08</span></div>
        </section>

        <section className="section-wrap intro-section" id="sobre">
          <div className="section-kicker">01 <span>/</span> IDENTIDADE</div>
          <div className="two-col"><div><h2>Quem <span>somos?</span></h2><p className="large-copy">A Antiadmins é uma organização independente dedicada à documentação e conscientização sobre problemas em citys privadas de Brookhaven RP.</p></div><div className="body-copy"><p>Operamos em uma zona cinzenta, mas nosso trabalho é preciso. Reunimos informações, verificamos contextos e tornamos visíveis situações que muitas vezes são ignoradas.</p><p>Não buscamos o caos. Buscamos responsabilidade, transparência e proteção para quem participa dessas comunidades.</p><div className="signature"><div className="signature-line" /><span>ANTIADMINS / MANIFESTO 001</span></div></div></div>
          <div className="principles"><div><Eye size={20} /><strong>Documentar</strong><span>situações problemáticas</span></div><div><FileSearch size={20} /><strong>Investigar</strong><span>informações e evidências</span></div><div><Shield size={20} /><strong>Proteger</strong><span>a comunidade de abusos</span></div><div><Siren size={20} /><strong>Conscientizar</strong><span>jogadores e plataformas</span></div></div>
        </section>

        <section className="dark-band"><div className="section-wrap city-section"><div className="city-number">02</div><div><div className="section-kicker">CONTEXTO // BROOKHAVEN RP</div><h2>O que são<br /><span>as citys?</span></h2><p>As citys são servidores privados de roleplaying criados por comunidades dentro do universo de Brookhaven RP.</p><p>Muitas criam experiências memoráveis. Porém, algumas podem apresentar problemas administrativos ou comportamentos prejudiciais. A Antiadmins acompanha e documenta casos relevantes para a comunidade.</p><a className="text-link" href="#problemas">Ver o que documentamos <ArrowUpRight size={16} /></a></div><div className="city-graphic"><div className="city-graphic-lines" /><span>PRIVATE<br />ROLEPLAY<br /><b>SERVER</b></span></div></div></section>

        <section className="section-wrap problems-section" id="problemas"><div className="section-kicker">03 <span>/</span> PADRÕES DOCUMENTADOS</div><div className="section-heading"><div><h2>Problemas<br /><span>documentados.</span></h2></div><p>Nomear o problema é o primeiro passo para impedir que ele se repita. Estes são os padrões mais recorrentes nos relatos que acompanhamos.</p></div><div className="problem-grid">{problems.map(({ icon: Icon, title, text, tone }) => <article className={`problem-card ${tone}`} key={title}><div className="card-icon"><Icon size={21} /></div><span className="card-index">0{problems.findIndex((p) => p.title === title) + 1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18} /></article>)}</div></section>

        <section className="retrospective" id="retrospectiva"><div className="section-wrap"><div className="section-kicker">04 <span>/</span> ARQUIVO DE IMPACTO</div><div className="retro-head"><div><h2>2025: Um marco<br /><span>para a Antiadmins.</span></h2></div><div className="retro-statement"><span className="quote-mark">“</span><p>Um ano de investigação, exposição e mudanças reais. Diversas citys investigadas deixaram de operar ou foram encerradas.</p></div></div><div className="timeline">{timeline.map(([num, title, text], i) => <div className={`timeline-item ${i === timeline.length - 1 ? 'last' : ''}`} key={num}><div className="timeline-marker">{num}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

        <section className="section-wrap cases-section" id="casos"><div className="section-kicker">05 <span>/</span> DOSSIÊS ABERTOS</div><div className="section-heading"><div><h2>Casos<br /><span>documentados.</span></h2></div><p>Registros públicos baseados em informações reunidas pela organização. Alegações são apresentadas como alegações e devem ser analisadas criticamente.</p></div><div className="case-grid">{cases.map((item, i) => <article className={`case-card ${item.featured ? 'featured' : ''}`} key={item.title}><div className="case-top"><span>{item.tag}</span><span>CASE / 0{i + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="case-bottom"><span>{item.featured ? 'ARQUIVO PRIORITÁRIO' : 'ARQUIVO PÚBLICO'}</span><CircleDot size={14} /></div></article>)}</div><div className="caution"><AlertTriangle size={18} /><span>As informações acima representam a documentação e as alegações da Antiadmins. Não são sentenças judiciais. Consulte evidências e canais oficiais antes de formar uma opinião.</span></div></section>

        <section className="commitment dark-band" id="compromisso"><div className="section-wrap commitment-inner"><div className="section-kicker">06 <span>/</span> PRINCÍPIOS</div><div className="commitment-content"><h2>Justiça,<br /><span>informação e</span><br />responsabilidade.</h2><div><p>Defendemos a responsabilização por meio de documentação responsável, informações verificáveis, denúncias às plataformas competentes, transparência e conscientização da comunidade.</p><div className="check-list"><span><Check size={15} /> Documentação responsável</span><span><Check size={15} /> Informações verificáveis</span><span><Check size={15} /> Denúncias apropriadas</span><span><Check size={15} /> Transparência</span></div></div></div><div className="warning-box"><AlertTriangle size={20} /><p><strong>Um aviso necessário</strong><br />A Antiadmins não incentiva ataques, ameaças, perseguição ou assédio. O objetivo é informar, documentar e utilizar meios responsáveis para denunciar comportamentos prejudiciais.</p></div></div></section>

        <section className="channel-section" id="canal"><div className="section-wrap channel-inner"><div className="channel-icon"><MessageCircle size={34} /></div><div><div className="section-kicker">07 <span>/</span> COMUNICAÇÃO OFICIAL</div><h2>Acompanhe a<br /><span>Antiadmins.</span></h2><p>Receba atualizações, informações e novidades da organização através do canal oficial.</p><a className="button button-primary" href="https://whatsapp.com/channel/0029Vb5hEcELCoX6mLWeS82h" target="_blank" rel="noreferrer">Entrar no canal Antiadmins <ArrowUpRight size={17} /></a><small>Siga o canal “Antiadmins : Rewinded” no WhatsApp.</small></div><div className="channel-code">WA<br /><span>CHANNEL</span></div></div></section>

        <section className="section-wrap contact-section" id="contato"><div className="contact-grid"><div><div className="section-kicker">08 <span>/</span> PARTICIPE</div><h2>Você tem<br /><span>um relato?</span></h2><p>Futuramente, este espaço receberá relatos, evidências, denúncias e solicitações de correção ou remoção de informações incorretas.</p></div><div className="contact-panel"><div className="panel-top"><span>SUBMISSÃO DE RELATO</span><span>EM BREVE</span></div><div className="panel-lines"><div /><div /><div /></div><p>Todas as informações devem ser analisadas antes da publicação. Acusações devem ser baseadas em evidências e apresentadas de forma responsável.</p><button className="button button-disabled" disabled>Formulário em desenvolvimento <Zap size={16} /></button></div></div></section>
      </main>

      <footer className="site-footer"><div className="section-wrap"><div className="footer-top"><a href="#inicio" className="brand"><BrandMark /><span>ANTI<span className="brand-red">ADMINS</span></span></a><p>Documentar é resistir.<br />Informar é proteger.</p><div className="footer-social"><a href="https://whatsapp.com/channel/0029Vb5hEcELCoX6mLWeS82h" target="_blank" rel="noreferrer" aria-label="Canal do WhatsApp"><MessageCircle size={18} /></a><a href="#contato" aria-label="Contato"><Share2 size={18} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Antiadmins. Todos os direitos reservados.</span><span>Antiadmins não é afiliada ao Roblox Corporation ou ao Brookhaven RP.<br />Organização independente fundada em 2025.</span><span>BUILT FOR ACCOUNTABILITY <span className="brand-red">●</span></span></div></div></footer>
    </div>
  )
}

export default AntiadminsSite
