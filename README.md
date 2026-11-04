# Remix of PV - Guia da Casa Descomplicada

Crie uma página de vendas para público frio, focada em direct response de alta conversão para esse aplicativo: "https://easy-home-habit.lovable.app/". Quero que analise a URL, veja cada etapa do aplicativo, e monte uma oferta em cima dele, mostrando os benefícios e atacando as dores, mostrando para a dona de casa por quê ela precisa dele. O aplicativo será vendido pelo preço único de 10 reais e tem que ser apresentado como um facilitador na vida da pessoa. O link de checkout é esse:  https://pay.wiapy.com/Fi5MWoXDTg
E quero também que coloque na head da página o pixel da meta a seguir:
 
<!-- Meta Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window, document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1512157364297708');

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=1512157364297708&ev=PageView&noscript=1"

/></noscript>

<!-- End Meta Pixel Code -->

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://guia-casa-em-harmonia.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/10f149f3-31cf-4d59-82c0-3e166be5a534).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
