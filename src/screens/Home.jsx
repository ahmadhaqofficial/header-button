import React from "react";
import "./App.scss";
import Logo from "../assets/logo.png";
import { useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(true);
  const [isScrolling, setScrolling] = React.useState(false);

  function checkSize() {
    if (window.innerWidth < 1510) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  useLayoutEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    window.addEventListener("scroll", () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <div className="home__joumbotron">
        <div className="img__container">
          {" "}
          <img className="hearder__logo" src={Logo} alt="" />
        </div>

        {menuOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1510) {
                setMenuOpen(false);
              }
            }}
          >
            <div className="navbar__main">
              <a className="header__buttons english__button" href="Home">
                English
              </a>
              <a className="header__buttons" href="Services">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </a>
              <a className="header__buttons header__button" href="About us">
                Home
              </a>
              <a className="header__buttons header__button" href="Blogs">
                Things to Do
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Directories
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Living in Doha
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Jobs in Doha
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Healthy Living
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Family Matters
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Blog
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Contests
              </a>
            </div>
          </OutsideClickHandler>
        ) : null}
        <button
          className="ibt__contant__nav"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          title="Menu"
        >
          {menuOpen ? (
            <Close size={20} color="White" />
          ) : (
            <Menu size={20} color="White" />
          )}
        </button>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nisi
      voluptate. Ad voluptatum, natus cupiditate exercitationem minus ipsam aut
      molestiae veritatis similique dolorum quae molestias voluptatem enim vero
      maiores quos amet eveniet vitae expedita. Itaque expedita sapiente nobis
      dolore, repellendus minima reprehenderit facere explicabo. Impedit, magni
      libero. Doloribus repudiandae cumque dolore eos modi ex quod tempore
      placeat facere aliquam totam veritatis, natus vero laboriosam beatae
      voluptatem illum veniam ab cupiditate. Consequuntur, corporis quod sit
      harum sapiente reiciendis impedit fugiat necessitatibus, praesentium error
      excepturi voluptatibus, quas sed possimus amet fugit natus est unde
      deserunt autem nostrum deleniti dolorem! Ut incidunt fugit minima
      reprehenderit placeat mollitia doloremque nam quae, veniam corporis amet
      molestiae id eveniet officia labore nihil quidem corrupti magnam facere
      dolorum ipsa illo debitis deleniti. Aliquam eius explicabo consectetur
      velit! Excepturi maiores corrupti voluptatibus dolores laboriosam dolore
      odio illum iusto aperiam ea, quibusdam quia, debitis, blanditiis quos
      sapiente! Soluta inventore commodi fugiat maiores accusamus eius
      recusandae ipsam veniam culpa iste, architecto enim quia quos dolorum! At
      vel corporis sunt necessitatibus ipsam culpa animi natus voluptate quos
      dignissimos, modi ipsa voluptas recusandae commodi neque dolores nostrum
      fugit voluptatum velit ullam. Culpa eligendi nemo voluptas sit natus
      exercitationem officia vero debitis dolores quasi laudantium dolor dolorum
      ipsam pariatur quibusdam blanditiis, illum, itaque soluta porro eos cum.
      Veniam reiciendis dolorem nulla! Quibusdam rem unde provident quisquam
      vitae, quaerat id vero doloribus incidunt facere temporibus. Commodi odio
      atque, nemo magni odit delectus asperiores nesciunt quia iure dolore in
      sunt! Adipisci laudantium incidunt dolore dolor iste unde molestias aut
      itaque atque, consectetur soluta, error quae nostrum impedit fugit
      possimus dicta distinctio similique. Asperiores blanditiis id est
      accusantium similique iusto ad! Suscipit aperiam rem odit possimus
      doloremque dicta impedit adipisci modi ut earum quam neque dolorum iste a
      ipsum magnam aliquid, accusantium deserunt debitis voluptatum facilis amet
      mollitia. Rerum veniam sit magni vero dignissimos expedita dolor officia
      pariatur omnis quas ullam aliquam obcaecati odio eum possimus, esse
      quisquam fuga! Perferendis dicta labore, eligendi aspernatur
      exercitationem illo est quae voluptatibus doloribus id assumenda maxime
      totam nostrum animi. Autem a debitis mollitia tempore. Quas fugiat,
      repellat omnis totam illum mollitia ducimus magni, repellendus nihil
      cupiditate deleniti. Atque modi beatae alias praesentium repellat impedit
      dolore dolorum. Neque sit corrupti atque suscipit vero ab, officiis
      consequatur aperiam tempore cupiditate porro beatae praesentium possimus!
      Tenetur qui quis ipsa earum voluptatum aliquam repudiandae ipsum! Ullam
      eveniet, minus blanditiis dolorum vitae, libero fuga nobis qui
      necessitatibus consequuntur fugit veniam aliquid eius dolore consectetur
      magni placeat esse, impedit fugiat atque eos ipsa illum deserunt
      exercitationem? Velit distinctio maxime cum earum nisi reprehenderit
      facere pariatur consectetur vel error fugit voluptates optio facilis saepe
      assumenda, itaque rerum blanditiis, expedita provident unde accusantium.
      Asperiores et impedit exercitationem, voluptatum ea corrupti! Nemo, dolor
      accusantium explicabo neque commodi necessitatibus totam non cumque
      repellendus itaque reiciendis distinctio quasi velit, accusamus mollitia
      quos voluptate modi autem nam aut sequi qui quo exercitationem libero.
      Expedita quaerat soluta magni ratione exercitationem quibusdam molestias
      in ipsa, dolorum sed necessitatibus, laboriosam cum quisquam. Eos
      similique qui aspernatur ea voluptatibus laborum itaque doloremque aliquid
      eligendi libero architecto et, earum sapiente asperiores dolorum vel
      magni, quia exercitationem ab nobis quo quis omnis, aut eius? Facere
      reiciendis similique aliquid explicabo animi voluptate sit, magnam
      laudantium excepturi maxime atque veniam ab maiores accusamus deserunt
      officia itaque praesentium ullam expedita? Ipsa dolor, voluptatum dolore
      hic id quis dolorem fugit. Asperiores necessitatibus corrupti explicabo
      deserunt ipsam eum! Temporibus sapiente soluta omnis ullam consequuntur
      quisquam, incidunt laboriosam ipsam corporis veritatis, recusandae magni!
      Ratione eius consequuntur at harum dolorem perferendis commodi deserunt
      sequi laborum vero dicta doloremque quod illo est aut, sed deleniti
      dolores dolore aliquid. Beatae consequuntur earum sint reiciendis et
      nostrum unde? Repudiandae quibusdam expedita quis et rerum quo
      reprehenderit, vero ducimus totam ut sequi quae itaque aspernatur fugit
      natus sit incidunt tenetur ex explicabo consequuntur atque iure. Accusamus
      tempore aperiam, dolorem consequuntur minus modi omnis vel harum corrupti
      fugiat quis ipsa, quisquam cum autem quod reiciendis illum? Sint minima
      cupiditate harum recusandae aperiam voluptate pariatur! Quod hic et totam
      velit. Deleniti laboriosam aliquam rerum quibusdam similique. Optio ipsam
      consequuntur error, nobis ullam dicta quos veritatis nam repellat, in
      soluta! Culpa minima eum aspernatur alias quia fugit molestiae sapiente
      praesentium velit possimus quam provident, odio veniam doloribus incidunt.
      Aut labore explicabo enim ipsum ullam possimus, non vitae earum hic
      corporis debitis neque dignissimos placeat maxime dolore eum veniam! Animi
      nisi in minima! Explicabo odio voluptatem nesciunt fuga nihil, et
      consectetur quibusdam atque voluptas consequuntur enim, culpa modi
      maiores! Laudantium accusantium, labore atque dolorum officia aliquam
      porro ea obcaecati fugit pariatur minima illum qui, doloremque similique
      quia laborum soluta eveniet voluptas, cum ducimus! Inventore tempora
      similique, optio id expedita vero nulla corporis exercitationem dolorem et
      unde earum architecto minima. Facere beatae hic quasi modi quas maxime,
      consequuntur blanditiis corporis at provident id adipisci consectetur eos
      alias mollitia? Qui accusamus aut earum, iste voluptatibus vitae, minus
      doloribus expedita quo officia beatae sint! Blanditiis voluptatem pariatur
      ad fugit quisquam adipisci ea repudiandae earum voluptates similique quod
      cupiditate exercitationem labore expedita et inventore, fuga quibusdam
      voluptas placeat quis quas? Corporis harum neque quidem modi explicabo
      blanditiis, dolor eligendi omnis magnam qui illum rerum impedit est cum
      exercitationem adipisci vero deleniti temporibus totam tenetur voluptates
      incidunt, dolorum inventore accusamus? Incidunt soluta, autem aliquid
      corrupti ad esse quo ducimus hic est laudantium quis distinctio quasi
      praesentium, tempore, enim ipsa minima voluptatem! Consectetur ex
      inventore architecto eveniet laboriosam optio deleniti corporis
      consequatur, fuga rem, adipisci saepe maiores, cupiditate repellat
      distinctio possimus consequuntur necessitatibus vitae! Eaque modi suscipit
      sequi quaerat ducimus molestias necessitatibus quia aliquid aut excepturi,
      explicabo maxime perferendis? Quasi placeat dolores vitae, exercitationem,
      unde omnis iste consequuntur atque ipsam id quod esse excepturi ducimus,
      iure provident autem. Natus nostrum saepe in quidem provident quia dolor
      iure a, quos ratione. Eveniet voluptates ipsa, dolorum perspiciatis alias
      iure tempora numquam, libero quasi at totam velit ipsum soluta ipsam
      consectetur! Incidunt accusamus enim at consectetur eius! In ad corporis
      sapiente assumenda, ex minima odio non fugit ea ipsa ipsam dolores, illo
      quis hic porro blanditiis obcaecati id laborum a quo repudiandae
      recusandae. Suscipit, ea. Dolores, atque consequuntur hic pariatur,
      adipisci maxime minima perspiciatis vitae, quos cum culpa aperiam magni
      numquam. Iure sequi sunt in deleniti vero accusantium repellat aperiam
      minima, officia, voluptates blanditiis libero eius? Inventore, aliquam!
      Molestiae omnis unde necessitatibus. Saepe quisquam magni at, soluta
      debitis enim esse fugit facilis illo perspiciatis porro. Libero provident
      explicabo dolor ducimus tenetur necessitatibus excepturi consequuntur et.
      Itaque nesciunt quam fugiat ipsum voluptatem voluptate dolorem
      consequatur? Debitis corrupti quis repudiandae modi magni suscipit vero
      rem? Mollitia cumque omnis ex consequatur voluptates similique, iure, ea
      repellat odit deserunt non neque sunt, hic dignissimos. Ratione ut
      molestias fuga sint enim dolores, earum laboriosam fugit at consequatur et
      repellat aliquam iure nemo eligendi eius odio? Perspiciatis consequatur
      nostrum illo, neque nihil facere aspernatur explicabo mollitia eligendi
      rem necessitatibus architecto nam voluptate dolor ratione magnam natus
      accusamus unde nesciunt alias doloremque officia. Vero repellat ea quae?
      Maiores explicabo labore officiis debitis mollitia eum numquam temporibus
      quisquam vel soluta alias beatae suscipit sunt, modi asperiores
      consequatur architecto natus eaque? Ipsa adipisci officiis vel amet. Quos
      ad sunt voluptas veniam culpa provident itaque consequuntur sit molestias
      repellendus aut ea numquam ex voluptatibus dignissimos porro ab quae, est
      a doloremque veritatis sint doloribus molestiae. Dicta facilis eius
      voluptatibus nulla est. Eligendi vero ea laborum incidunt aperiam rerum
      maiores enim delectus labore non debitis soluta, ipsam, ipsa quis vitae
      natus fugit quo impedit eveniet, neque nulla inventore? Ipsam quia ipsum
      dolorum ex, fugiat provident dolorem labore rem praesentium. Eveniet
      reiciendis aliquid vel debitis eos eius tempora tempore ipsam fugit
      dolores earum quia omnis iusto cupiditate atque veniam explicabo, ullam
      repellendus, quasi molestias officia architecto id iste voluptate? Aut
      soluta sint quidem, maxime ullam iure. Aperiam maiores molestiae fuga
      tempora culpa autem laborum temporibus voluptatem exercitationem! Vel
      dicta veritatis neque accusantium eum, fugit quibusdam, ipsa praesentium,
      sapiente quod laborum eius unde recusandae numquam. Iusto error officia
      porro explicabo rerum, nobis eos enim in maxime blanditiis quaerat, rem,
      odit dolor a earum dignissimos numquam? Ipsum officia hic itaque eligendi
      maiores! Ipsam voluptate tempora ut, perspiciatis animi provident eum
      dolor, aspernatur maiores ipsa quasi nostrum vitae? Atque porro quasi
      maiores asperiores expedita in quos corrupti aperiam soluta labore ea
      magnam error, inventore sed culpa consequatur repellat ut quia iusto
      reprehenderit autem animi voluptas assumenda quibusdam? Asperiores officia
      quos at itaque inventore accusamus deleniti atque quae debitis facilis eos
      nesciunt quibusdam, magnam aliquid recusandae dicta cupiditate et in.
      Inventore vel obcaecati cumque, eum fuga odit asperiores quaerat adipisci
      qui doloremque, labore dicta iusto autem eveniet animi nesciunt iste, nisi
      omnis eligendi. Quia inventore voluptatum explicabo qui sunt,
      exercitationem, delectus cumque natus reiciendis saepe dignissimos eius
      iusto voluptas earum id beatae reprehenderit ipsa distinctio excepturi
      velit nihil eum quis! Voluptatibus repellat accusantium amet explicabo
      atque doloribus, fugiat qui odit provident ullam consequuntur voluptatum
      quam similique nulla dicta hic ut non exercitationem? Reiciendis tempore,
      ullam cum a suscipit rerum nostrum rem placeat libero doloremque tempora
      accusamus fuga, necessitatibus quod omnis eos iure facilis delectus
      exercitationem voluptatum neque? Culpa cupiditate itaque veniam, labore
      nisi aperiam est expedita illo nam enim laudantium ea quia deserunt
      blanditiis dignissimos doloremque incidunt, eaque sint officia error quos
      harum libero deleniti. Laudantium earum impedit natus necessitatibus
      provident rerum aliquam. Ipsum nisi, excepturi temporibus ratione
      molestias deleniti modi ea minima beatae iusto sed iste tenetur provident
      dolore, voluptatum sapiente placeat consequatur magni dolor. Tempora
      repellendus voluptatibus hic exercitationem pariatur aspernatur minus qui
      itaque, ea illo atque totam necessitatibus consequatur deserunt molestias
      maxime nesciunt unde sapiente natus eum? Sequi consectetur quos ullam,
      natus ab dolore quo nobis explicabo! Magni accusamus consequatur a dicta
      mollitia, facilis aliquam, dignissimos sint nulla rem veniam officia
      sapiente ut velit laboriosam dolore quas omnis natus et praesentium.
      Aspernatur cum, cupiditate molestiae animi similique aperiam totam vero!
      Officia incidunt autem obcaecati ullam perspiciatis, at consequatur optio
      quis animi nam voluptatum nesciunt impedit, libero vitae quisquam labore
      aliquam expedita? Ipsum earum expedita ad, odio voluptatibus ipsam
      perspiciatis velit, sequi, sunt vitae hic eveniet officiis iste
      dignissimos. Nam, ratione veritatis hic perspiciatis vero tempora, quidem,
      quibusdam eius veniam illo recusandae repudiandae. Perspiciatis
      voluptatibus at blanditiis architecto similique ipsa. Id in quaerat
      accusamus. Ea officia atque modi id excepturi facilis quis ullam! Adipisci
      consequuntur numquam rem nam rerum vero a eveniet architecto, provident
      soluta distinctio, sint repellat dicta similique neque atque in eos harum.
      Unde, nam et. Ducimus, vel! Voluptatum distinctio atque mollitia, omnis
      quia architecto a quod cumque ab et odit perspiciatis beatae in quasi non
      voluptatibus exercitationem deleniti corporis ex molestias magnam!
      Sapiente obcaecati eligendi dolor ratione autem nam rem. Tenetur sint non
      dolores id consequuntur voluptates officia repellendus harum atque modi
      debitis optio eaque nihil, in, nulla inventore, aut numquam! Saepe cum
      numquam laudantium excepturi recusandae similique omnis modi beatae culpa
      repellendus nulla perspiciatis, sed tempora corporis minima sunt hic
      pariatur perferendis consequatur magnam! Aspernatur sed quidem
      consequatur? Tempore velit nostrum consectetur eaque provident voluptates
      quae. Porro libero exercitationem mollitia voluptate excepturi? Delectus
      illo distinctio, error aliquid quam, illum assumenda perspiciatis officia
      modi porro explicabo. Dolore adipisci a quaerat totam, doloribus sequi
      delectus autem nemo nulla cum? Placeat quod expedita fugiat? Commodi minus
      libero, quo quidem inventore aliquid enim tempore corporis quae maiores
      repellendus eum. Eum, porro facere! Tempore alias iste ab blanditiis sunt.
      Obcaecati praesentium ea commodi illo incidunt sunt voluptas enim, neque
      laborum amet odio eum in cum nisi exercitationem labore omnis saepe,
      laboriosam ut sequi est. Molestiae eos, incidunt nam error modi et
      quibusdam. Architecto fuga hic aut numquam ea quos alias veritatis. Porro
      harum unde quia temporibus praesentium. Qui, nihil amet sit tempora quae
      rerum hic possimus minima necessitatibus similique officiis blanditiis
      esse enim omnis alias, sunt aspernatur reprehenderit maxime? Libero, amet
      voluptatibus impedit ad perspiciatis, cumque delectus officiis laboriosam
      atque id rem numquam voluptas tempora commodi. In, reiciendis eos,
      perferendis corporis provident ab ipsa repellat officia omnis illo numquam
      maiores. Qui iure quod sapiente consequatur odit molestiae maxime quisquam
      hic repellat ipsam inventore illo, temporibus animi vel sint quaerat
      repudiandae laborum ut quibusdam. Similique sunt nesciunt nihil sint,
      sequi iusto accusamus repellendus corrupti consequatur natus, architecto
      facilis, nemo culpa provident expedita ad alias aut quidem beatae.
      Aperiam, ipsum minima? Iure perferendis magnam harum? Praesentium officiis
      laboriosam, ea, magnam aperiam obcaecati hic fugit ipsum veritatis
      explicabo esse libero facere velit rem ut ex iste earum voluptatum
      molestias sit, consequuntur quis! Est quae explicabo, iure, quas
      laudantium repudiandae perspiciatis incidunt, unde officiis dignissimos
      quisquam vitae provident libero hic expedita molestiae. Atque architecto
      natus veritatis cumque nulla soluta iusto reprehenderit, aperiam
      dignissimos in modi unde laudantium est esse. Ipsa natus accusamus
      delectus tempora itaque ea ipsum sed quas eos voluptatum, deserunt,
      aperiam est nihil debitis, dicta neque explicabo odio. Commodi repudiandae
      quo saepe, optio iste molestias suscipit accusamus quasi perferendis ab ut
      totam, fugiat voluptatem molestiae exercitationem deserunt est, tempora
      porro similique provident odit illo at. Nam autem sapiente suscipit
      assumenda voluptate unde voluptas debitis dolorem numquam similique
      recusandae maiores saepe enim cum, alias voluptatum quasi iusto harum
      nostrum repellendus adipisci ab ipsa ut. Natus, sequi eos? Et numquam
      laudantium qui, veritatis mollitia minima est, explicabo consequuntur
      autem impedit aliquid tempora repellendus! Quos possimus ab quo non ea
      cupiditate atque odit amet distinctio, soluta, dignissimos quis impedit
      quas fugiat suscipit! Rem, repellendus sed minima eligendi cumque et amet
      error ipsa eos autem maiores expedita quia reprehenderit laudantium odio
      accusamus ad facere, culpa, debitis reiciendis temporibus quos saepe
      voluptates? Vitae quae eveniet reiciendis facere aliquid! Numquam
      inventore exercitationem rerum est reprehenderit ducimus nulla voluptas
      modi quas, officiis rem repudiandae, delectus tenetur vitae animi impedit
      voluptatum minus provident nihil cum. Atque quia aliquam delectus aperiam
      ad tenetur eveniet fuga dignissimos optio. Sapiente voluptate delectus
      repellat laudantium dolore, ipsa sunt sequi. Repudiandae quibusdam
      tenetur, iusto officia vel expedita eum cupiditate at et molestias,
      corporis aut impedit suscipit nesciunt sed modi? Culpa voluptatem rem id
      consectetur deserunt sint! Accusamus quod omnis alias pariatur sit ipsum
      nihil numquam facilis ducimus necessitatibus, rerum non repellat quisquam
      corporis vero eaque. Suscipit id error sunt assumenda eos eum, est neque?
      Placeat reprehenderit exercitationem ducimus qui mollitia, ea numquam,
      delectus deserunt autem enim, tempora officia aspernatur. Quos veritatis
      ab, recusandae a, optio quod voluptatum quae ullam accusamus dolore,
      praesentium aspernatur velit. Facilis officia, accusantium, vel
      praesentium accusamus doloribus excepturi rerum aut quis sed dolores
      aspernatur, laboriosam nesciunt atque repellendus quidem fuga. Soluta
      repudiandae, commodi sint vero, ullam atque inventore cum ipsa dolore
      accusamus id molestiae voluptate. Est quos totam eius placeat expedita
      accusamus nostrum reprehenderit mollitia ratione libero, rem, magni omnis
      amet molestias laudantium nam ex pariatur similique. At aspernatur vel
      exercitationem tempore, omnis illum mollitia voluptates ab similique alias
      dolores eius totam deserunt? Nobis quos alias, incidunt quasi facere
      accusantium quod ut itaque deleniti distinctio sequi soluta dicta iusto,
      cum perspiciatis autem maiores nisi optio. Hic ipsum beatae officia
      doloribus unde explicabo neque dolores tenetur sunt iusto dolorem atque
      voluptas voluptatibus delectus repudiandae vel voluptatem accusantium
      similique ipsam sequi alias, porro sint nesciunt. Doloribus facilis
      tempore optio minus earum quos ducimus corporis eveniet consequuntur, ipsa
      placeat in, ullam nisi similique dolor magni at atque eos facere adipisci
      quidem? Dignissimos sit est reiciendis dolor saepe obcaecati magni maxime
      fuga cumque deserunt, quibusdam temporibus alias aperiam omnis similique
      hic eveniet et? Expedita iste unde illum ad explicabo laudantium
      aspernatur provident facilis blanditiis eligendi quisquam quasi iusto,
      numquam adipisci incidunt et rem aperiam? Voluptatum dignissimos
      reiciendis facilis vitae rem saepe veritatis pariatur, at officiis quia
      temporibus aliquam expedita id adipisci eligendi ut nulla! Nostrum,
      ratione quo. Expedita doloribus, architecto error necessitatibus molestiae
      illum cum eum saepe porro voluptates, eaque vero quo consequatur earum
      quae eos? Optio aut sint incidunt maxime. Magnam quasi animi explicabo
      delectus labore fugiat libero qui commodi voluptas laborum praesentium,
      nostrum ut tempore beatae harum a numquam dignissimos omnis eius! Itaque,
      quas, rerum voluptatibus excepturi voluptatum temporibus nisi quidem,
      dignissimos tenetur porro ratione minus debitis alias! Magni, voluptas?
      Ipsam deserunt cupiditate mollitia laborum non architecto aliquam id
      magnam minus enim quo beatae blanditiis deleniti tempora debitis, ex
      quidem ducimus autem eum! Quis facere mollitia ipsam perferendis? Officia
      aut architecto, quasi cum nam id, illo exercitationem deleniti dolores
      debitis quidem temporibus voluptates est praesentium quisquam quis soluta
      eveniet consequatur obcaecati? Officia rerum ducimus ex quos numquam
      possimus tempore suscipit rem recusandae quis reprehenderit saepe,
      placeat, cupiditate fuga sed asperiores, praesentium impedit? Modi error
      velit nobis hic, voluptatum cupiditate quasi possimus, qui quae
      voluptatibus labore similique nihil inventore dolorum architecto dolore?
      Mollitia, assumenda? Porro consectetur odio ipsa beatae laudantium non
      recusandae, totam similique nihil fugiat, fugit delectus maxime quae
      veritatis vel nam, veniam voluptatibus corporis voluptates eaque deserunt
      enim dolores est? Eos, earum inventore! Ipsam sapiente aliquam aut
      mollitia enim earum, architecto laborum, magnam nisi consequuntur a
      recusandae perspiciatis atque eveniet vel natus nobis necessitatibus
      adipisci dolorum quasi cupiditate ratione itaque. Magnam sint id quis
      iste, maiores facilis minima nostrum molestias ullam distinctio tenetur ab
      dolore perspiciatis, aspernatur quo saepe magni laborum recusandae porro!
      Repellat temporibus, error consectetur atque laborum laudantium optio
      inventore, quaerat quisquam modi vitae nostrum et esse? Quo labore dolor
      omnis non quis voluptatum. Animi, nesciunt. Adipisci eos dolorum a
      officiis molestiae ab quo reprehenderit voluptatem est numquam nam quas
      sequi veritatis animi asperiores hic enim expedita illo impedit vitae,
      delectus praesentium. Voluptate provident in quasi ipsam nemo eos beatae
      dolore, nam id deleniti, facilis omnis architecto doloribus earum nisi
      libero consequuntur vel, cum totam ratione. Quasi veniam dolorem labore
      vitae soluta eveniet! Delectus, quam eveniet quis saepe at vero quisquam
      optio! At, tenetur ad. Voluptatibus aut totam nostrum molestias quas
      quisquam eos aperiam repellendus praesentium quibusdam consequatur animi
      cum, inventore optio enim necessitatibus ea eius nulla asperiores ex quae
      ipsum dolores perspiciatis mollitia. Labore, animi illo nam quam minima,
      hic ratione quaerat rerum quasi, tempora sequi placeat quis iure fuga
      laborum aperiam nemo pariatur? Similique doloribus reprehenderit libero
      ab, pariatur sunt saepe blanditiis tempora ratione enim aliquam expedita
      corporis dicta porro ad magnam dolore voluptate omnis quis alias rerum
      eligendi excepturi accusamus sequi! Recusandae, doloremque.
    </>
  );
}
function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
