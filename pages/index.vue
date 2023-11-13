<template>
	<div class="container">
		<div class="cover-page">
			<h1 class="title-cover-page">
				Saludos soy.
			</h1>
			<h2 class="name-cover-page">
				CRISTHIAN ZEÑA
			</h2>

			<h3 class="subTitle-cover-page">
				Un maestro constructor en el mundo digital.
			</h3>

			<p class="description-cover-page">
				Mi vida se centra en Perú 🇵🇪, y mi pasión es dar vida a la web a través del desarrollo de software.
				Especializado en la creación de sitios web y aplicaciones, mi enfoque va más allá de la simple codificación.
				<!-- Soy desarrollador de software que vivo en Perú 🇵🇪 especializado en la creación de sitios webs, aplicaciones y
				todo lo demás. Actualmente estoy trabajando como <strong class="bold-strong">Freelancer</strong> -->
			</p>

			<div class="container-button">
				<a href="https://wa.me/51929528840" target="_blank" class="btn btn-whatsapp">
					Ponerse en contacto
				</a>
			</div>
		</div>

		<section class="about-me" id="about">
			<div class="container-about-me">
				<h4 class="title-section">
					<span class="number-title">
						01.
					</span>
					Sobre mí
				</h4>
				<div class="data-about-me">
					<div class="container-description-about-me">
						<p class="description-about-me">
							Soy Cristhian Zeña, un desarrollador con más de 5 años de experiencia y mi travesía como desarrollador
							comenzó en el instituto <strong class="bold-strong">ISMEM.</strong> Después de graduarme, una agencia
							reconoció mi potencial y me convocó para formar parte de su equipo de desarrollo como Full-Stack Jr.
						</p>
						<p class="description-about-me">
							He contribuido a proyectos diversos en <strong class="bold-strong">Startups, Agencias digitales</strong> y
							<strong class="bold-strong">Proyectos freelance</strong>.
							Mi enfoque va más allá del código; me apasiona impulsar el crecimiento de marcas, comprendiendo a fondo cada
							idea de negocio.
						</p>
						<p class="description-about-me">
							Mis habilidades abarcan desarrollo web, aplicaciones, marketing digital y experiencia de usuario.
							Adaptabilidad y aprendizaje continuo son mi esencia. Estoy aquí para convertir desafíos en triunfos.
						</p>
						<p class="description-about-me">
							Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
						</p>
						<div class="skills-developer">
							<ul class="skills">
								<li class="skill">
									<span class="text-skill">
										JavaScript
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										Nuxt.js
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										Vue.js
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										HTML
									</span>
								</li>
							</ul>

							<ul class="skills">
								<li class="skill">
									<span class="text-skill">
										WordPress
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										CSS
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										Postman
									</span>
								</li>

								<li class="skill">
									<span class="text-skill">
										Figma
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="container-image-about-me">
						<div class="card-image-me">
							<img src="@/assets/images/yo.svg" class="my-photo" alt="yo">
							<img src="@/assets/images/mifoto.svg" class="my-photo-desktop" alt="photo">
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="services" id="service">
			<div class="container-services">
				<h4 class="title-section">
					<span class="number-title">
						02.
					</span>
					Servicios
				</h4>
				<div class="container-my-services">
					<div class="container-service">
						<div class="card-service">
							<h5 class="title-service">
								Landing Page
							</h5>
							<p class="description-service">
								Una página web preliminar o pagina de aterrizaje donde queremos destacar algo en especial, ya sea un
								producto, novedad o promoción de un producto.
							</p>
						</div>
					</div>

					<div class="container-service">
						<div class="card-service">
							<h5 class="title-service">
								Tiendas Virtuales
							</h5>
							<p class="description-service">
								Una tienda virtual o tienda online es un sitio web donde los vendedores ponen a disposición de sus
								clientes los productos o servicios.
							</p>
						</div>
					</div>

					<div class="container-service">
						<div class="card-service">
							<h5 class="title-service">
								Webs Corporativos
							</h5>
							<p class="description-service">
								Una página web corporativa es un tipo de web que se utiliza con el objetivo de dar a conocer a sus
								usuarios, visitas o clientes toda la información relacionada con una empresa.
							</p>
						</div>
					</div>

					<div class="container-service">
						<div class="card-service">
							<h5 class="title-service">
								Aplicaciónes web
							</h5>
							<p class="description-service">
								Una aplicación web es un programa informático que se ejecuta en un servidor web, al que los usuarios
								acceden a través de internet, utilizando un navegador.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="projects" id="project">
			<div class="container-projects">
				<h4 class="title-section">
					<span class="number-title">
						03.
					</span>
					Ultimos Proyectos construidos
				</h4>

				<div class="container-my-projects">

					<div class="card-projects">
						<div class="container-image-proyect" @click="openProyect('vivetufuturo.pe')">
							<img src="@/assets/images/portafolio/vivetufuturo.svg" class="image-projects" alt="vivetufuturo">
						</div>
						<div class="data-proyect">
							<h5 class="type-proyect">
								03/06/2023
							</h5>
							<div class="open-title">
								<a href="https://www.vivetufuturo.pe/" class="url-proyect" target="_blank">
									<img src="@/assets/images/link.svg" class="image-url" alt="vivetufuturo">
									Vivetufuturo
								</a>

							</div>
							<p class="description-proyect">
								ONG que conecta voluntarios con estudiantes de colegios públicos para brindarles mentoria gratuita.
							</p>
							<div class="technological-tools">
								<span class="technology">
									Html
								</span>
								<span class="technology">
									Css
								</span>
								<span class="technology">
									JavaScript
								</span>
								<span class="technology">
									Wordpress
								</span>
								<span class="technology">
									MySQL
								</span>
							</div>
						</div>
					</div>

					<div class="card-projects">
						<div class="container-image-proyect" @click="openProyect('cipsac.pe')">
							<img src="@/assets/images/portafolio/cipsac.svg" class="image-projects" alt="cipsac">
						</div>
						<div class="data-proyect">
							<h5 class="type-proyect">
								10/09/2022
							</h5>
							<div class="open-title">
								<a href="https://www.cipsac.pe/" class="url-proyect" target="_blank">
									<img src="@/assets/images/link.svg" class="image-url" alt="cipsac">
									Cipsac
								</a>

							</div>
							<p class="description-proyect">
								Una empresa comercializadora con una amplia experiencia y conocimiento del mercado de equipos relacionados
								a la industria del petróleo y gas.
							</p>
							<div class="technological-tools">
								<span class="technology">
									Html
								</span>
								<span class="technology">
									Css
								</span>
								<span class="technology">
									JavaScript
								</span>
								<span class="technology">
									Wordpress
								</span>
								<span class="technology">
									WooCommerce
								</span>
							</div>
						</div>
					</div>

					<div class="card-projects">
						<div class="container-image-proyect" @click="openProyect('despertandoelser.com')">
							<img src="@/assets/images/portafolio/despertando.webp" class="image-projects" alt="despertandoelser">
						</div>
						<div class="data-proyect">
							<h5 class="type-proyect">
								25/03/2021
							</h5>
							<div class="open-title">
								<a href="https://despertandoelser.com/" class="url-proyect" target="_blank">
									<img src="@/assets/images/link.svg" class="image-url" alt="despertandoelser">
									Despertando el ser
								</a>

							</div>
							<p class="description-proyect">
								Sitio web de astrología con programas y terapias que ayuda a las personas en un proceso de
								autoconocimiento.
							</p>
							<div class="technological-tools">
								<span class="technology">
									Html
								</span>
								<span class="technology">
									Css
								</span>
								<span class="technology">
									JavaScript.js
								</span>
								<span class="technology">
									WordPress
								</span>
							</div>
						</div>
					</div>

					<div class="card-projects">
						<div class="container-image-proyect" @click="openProyect('monkeyfitpass.com')">
							<img src="@/assets/images/portafolio/monkeyfit.webp" class="image-projects" alt="monkeyfit">
						</div>
						<div class="data-proyect">
							<h5 class="type-proyect">
								15/07/2019
							</h5>
							<div class="open-title">
								<a href="https://www.monkeyfitpass.com/" class="url-proyect" target="_blank">
									<img src="@/assets/images/link.svg" class="image-url" alt="monkeyfit">
									MonkeyFit
								</a>

							</div>
							<p class="description-proyect">
								Plataforma digital que crear contenido fitness desde entrenamientos, recetas y wellness con clases
								grabadas.
							</p>
							<div class="technological-tools">
								<span class="technology">
									Html
								</span>
								<span class="technology">
									Css
								</span>
								<span class="technology">
									JavaScript.js
								</span>
								<span class="technology">
									Nuxt.js
								</span>
								<span class="technology">
									Django
								</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		<section class="contact" id="contact">
			<div class="container-contact">
				<h4 class="title-section">
					<span class="number-title">
						04.
					</span>
					Ponerse en contacto
				</h4>
				<p class="decription-contact">
					Ahora me estoy dedicando al desarrollo web de manera freelance al 100% y tengo espacios para poder tener
					reuniones o conversaciones y asi poder ayudarte armar tu sitio web buscando los mejores objetivos.
				</p>

				<h5 class="why-contact">
					¿Listo para hacer crecer tu empresa?
					<!-- ¿Tienes algún negocio que necesite una página web? -->
				</h5>
				<div class="container-button">
					<a href="https://wa.me/51929528840" target="_blank" class="btn btn-whatsapp">
						💌 Conversemos
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	methods: {
		openProyect(name) {
			window.open(`http://${name}`);
			// alert('HII!!');
		}
	}
}
</script>