import Head from 'next/head'
import Main from '../layouts/Main'
import Icon from '../components/ui/Icon'

function Uses(props) {
  const { title, description } = props

  return (
    <div className="container green">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://frankrocha.dev/uses/" property="og:url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-thought-box">
			<Icon name="ri-tools-line" top={4} left={-4} />
				My everyday productivity toolbox
			</div>

      <section>
				<h2>Equipment</h2>
				<ul>
					<li>
						<a href="https://www.apple.com/br/macbook-air-m1/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Laptop - Macbook Air M1 (13-inch , 2020) 16GB RAM
						</a>
					</li>
					<li>
						<a href="https://www.apple.com/br/shop/product/MK2A3BZ/A/magic-keyboard-ingl%C3%AAs-eua?afid=p238%7CscjjvhmTL-dc_mtid_1870765e38482_pcrid_510110628181_pgrid_12669467810_pntwk_g_pchan_online_pexid__&cid=aos-br-kwgo-pla-btb--slid---product-MK2A3BZ/A-BR" target="_blank" rel="noopener noreferrer" className="uses-item">
							Keyboard - Apple Magic keyboard
						</a>
					</li>
					<li>
						<a href="https://www.apple.com/br/shop/product/MK2E3BE/A/magic-mouse-superf%C3%ADcie-multi-touch-branca?afid=p238%7CsHnl9AMuT-dc_mtid_1870765e38482_pcrid_510110628229_pgrid_12669467570_pntwk_g_pchan_online_pexid__&cid=aos-br-kwgo-pla-btb--slid---product-MK2E3BE/A-BR" target="_blank" rel="noopener noreferrer" className="uses-item">
							Mouse - Apple Magic keyboard
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Logitech-Unifying-Bluetooth-Easy-Switch-dispositivos/dp/B072M4YLN6/ref=asc_df_B072M4YLN6/?tag=googleshopp00-20&linkCode=df0&hvadid=379725868941&hvpos=&hvnetw=g&hvrand=12152369229476722974&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-432463527966&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Mouse - Logitech M585 Bluetooth black
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Monitor-LG-29UM69G-UltraWide-FreeSync/dp/B078TPLC2X/ref=asc_df_B078TPLC2X/?tag=googleshopp00-20&linkCode=df0&hvadid=379817900090&hvpos=&hvnetw=g&hvrand=9014939853812352225&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-809966188546&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Monitor - LG 29 pol Ultrawide Full HD IPS
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Logitech-960-001105-Webcam-BRIO/dp/B01N5UOYC4/ref=asc_df_B01N5UOYC4/?tag=googleshopp00-20&linkCode=df0&hvadid=379712974695&hvpos=&hvnetw=g&hvrand=13757443871243640264&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-381707158557&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Webcam - UltraHD 4K BRIO
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Microfone-HyperX-QuadCast-Preto-Vermelho/dp/B07NZZZ746/ref=asc_df_B07NZZZ746/?tag=googleshopp00-20&linkCode=df0&hvadid=379816334777&hvpos=&hvnetw=g&hvrand=16969344925768369520&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-668583786414&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Microfone - HyperX Gamer QuadCast
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Ouvido-Bluetooth-JBL-200TWS-Intra-Auricular/dp/B09HGGV5R5?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ACLO7BEL0BEZS" target="_blank" rel="noopener noreferrer" className="uses-item">
							Fone - Bluetooth JBL JBLW200TWS Black
						</a>
					</li>
					<li>
						<a href="https://pt.aliexpress.com/item/1005002525614138.html?spm=a2g0o.order_list.order_list_main.5.6e84caa4J6Cbv1&gatewayAdapt=glo2bra" target="_blank" rel="noopener noreferrer" className="uses-item">
							Suport - VIJIM LS02 Dual
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/SUPORTE-MONITOR-NOTEBOOK-ARTICULA%C3%87%C3%83O-DUPLA/dp/B08QKWVMQC/ref=asc_df_B08QKWVMQC/?tag=googleshopp00-20&linkCode=df0&hvadid=379728501964&hvpos=&hvnetw=g&hvrand=3729085437672524839&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-1122787980461&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Suport - Monitor And Notebok Double Army
						</a>
					</li>
					<li>
						<a href="https://www.cavaletti.com.br/produtos/way-gamer/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Chair - Cavaletti Way-Gamer Red
						</a>
					</li>
					<li>
						<a href="https://www.amazon.com.br/Completo-Dimmer-Youtuber-suporte-celular/dp/B088DG9BW6/ref=asc_df_B088DG9BW6/?tag=googleshopp00-20&linkCode=df0&hvadid=379726667452&hvpos=&hvnetw=g&hvrand=17002786990401786932&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031702&hvtargid=pla-911851078930&psc=1" target="_blank" rel="noopener noreferrer" className="uses-item">
							Ring Light
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Coding</h2>
				<ul>
					<li>
						<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							VSCode
						</a>
					</li>
					<li>
						<a href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme" target="_blank" rel="noopener noreferrer" className="uses-item">
							Min Theme
						</a>
					</li>
					<li>
						<a href="https://github.com/zed-industries/zed-fonts" target="_blank" rel="noopener noreferrer" className="uses-item">
							Zed Mono Font
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Terminal</h2>
				<ul>
					<li>
						<a href="https://iterm2.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Iterm2 - A replacement for default terminal Macos
						</a>
					</li>
					<li>
						<a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Oh My ZSH
						</a>
					</li>
					<li>
						<a href="https://github.com/fsrocha-dev/node-zsh-theme" target="_blank" rel="noopener noreferrer" className="uses-item">
							ZSH Theme - Node Theme
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Apps</h2>
				<ul>
					<li>
						<a href="https://www.dashlane.com/pt-br" target="_blank" rel="noopener noreferrer" className="uses-item">
							DashLane - Password Manager
						</a>
					</li>
					<li>
						<a href="https://www.raycast.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Raycast PRO - Launcher for MacOs
						</a>
					</li>
					<li>
						<a href="https://paw.cloud/" target="_blank" rel="noopener noreferrer" className="uses-item">
							RapidAPI - Triggering HTTP requests
						</a>
					</li>
					<li>
						<a href="https://git-fork.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Fork - Git Client
						</a>
					</li>
					<li>
						<a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Obsidian - Note taking
						</a>
					</li>
					<li>
						<a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Figma - Design
						</a>
					</li>
					<li>
						<a href="https://www.capcut.com/pt-br/" target="_blank" rel="noopener noreferrer" className="uses-item">
							CapCut - Video Editor
						</a>
					</li>
					<li>
						<a href="https://www.hotspotshield.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							VPN - HotSpot Shield
						</a>
					</li>
					<li>
						<a href="https://shottr.cc/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Shottr - Screenshot tool
						</a>
					</li>
					<li>
						<a href="https://devtoys.app/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Swiss Army knife for developers
						</a>
					</li>
					<li>
						<a href="https://dropoverapp.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Dropover - Drag & Drop easily
						</a>
					</li>
					<li>
						<a href="https://espanso.org/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Text expander
						</a>
					</li>
					<li>
						<a href="https://apps.apple.com/br/app/gestimer/id990588172?mt=12" target="_blank" rel="noopener noreferrer" className="uses-item">
							Reminders - Gestimer
						</a>
					</li>
					<li>
						<a href="https://gif.ski/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Gif Converter
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Screenshare</h2>
				<ul>
					<li>
						<a href="https://maykbrito.github.io/mini-video-me/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Mini Video Me
						</a>
					</li>
					<li>
						<a href="https://presentify.compzets.com/" target="_blank" rel="noopener noreferrer" className="uses-item">
							Presentify
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Productivity System</h2>
				<ul>
					<li>
						<a href="https://fortelabs.com/blog/para/" target="_blank" rel="noopener noreferrer" className="uses-item">
							The PARA Method: The Simple System for Organizing Your Digital Life
						</a>
					</li>
				</ul>
			</section>
    </div>
  )
}

export async function getStaticProps() {
  const meta = {
    title: 'Uses // Frank Rocha',
    description: 'My tooling'
  }

  return { props: meta }
}

Uses.Layout = Main

export default Uses
