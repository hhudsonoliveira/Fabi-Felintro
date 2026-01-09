# 🏋️‍♀️ Landing Page - Fabi Felintro Trainer

Landing page profissional e de alta conversão para **Fabi Felintro**, Personal Trainer e Fisiologista do Exercício especializada em mulheres 35+ e pós-parto.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Características](#características)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Funcionalidades](#funcionalidades)
- [SEO e Performance](#seo-e-performance)
- [Responsividade](#responsividade)
- [Navegadores Suportados](#navegadores-suportados)
- [Customização](#customização)
- [Deploy](#deploy)
- [Manutenção](#manutenção)

## 🎯 Visão Geral

Landing page moderna focada em **conversão** e **venda de programas digitais de treinamento**. O site oferece uma experiência premium com animações suaves, design responsivo e navegação intuitiva.

### Objetivo Principal
Vender programas de treinamento digital segmentados por objetivo (Emagrecimento/Hipertrofia) e nível (Iniciante/Intermediário/Avançado).

### Público-Alvo
Mulheres 35+ e pós-parto interessadas em transformação corporal, saúde e bem-estar.

## ✨ Características

### Design
- 🎨 **Paleta Elegante**: Dourado (#B8954A) + Preto (#1A1A1A) + Branco
- 💎 **Design Premium**: Clean, profissional e sofisticado
- 📱 **Mobile-First**: 100% responsivo em todos os dispositivos
- 🎭 **Animações Suaves**: Scroll reveal, fade-ins, parallax

### Conversão
- 🎯 **CTAs Estratégicos**: Botões de ação em todas as seções
- 💬 **WhatsApp Flutuante**: Sempre visível para contato imediato
- ⚡ **Filtros Intuitivos**: Seleção fácil de programas por objetivo e nível
- 🏆 **Prova Social**: Depoimentos, estatísticas e badges de urgência
- 💰 **Pricing Tables**: Destaque visual de preços e benefícios

### Performance
- ⚡ **Carregamento Rápido**: CSS otimizado e lazy loading
- 🚀 **Intersection Observer**: Animações performáticas
- 📦 **Código Limpo**: Estrutura organizada e manutenível

## 🛠️ Tecnologias

### Front-end
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design system com variáveis CSS, Grid e Flexbox
- **JavaScript Vanilla**: Sem dependências externas

### Fontes
- **Google Fonts**:
  - Montserrat (Títulos)
  - Open Sans (Corpo de texto)

### Ferramentas Opcionais
- Google Analytics 4
- Facebook Pixel
- Hotjar (Heatmaps)

## 📁 Estrutura do Projeto

```
Site Fabi Felintro Trainer/
│
├── index.html              # Página principal
│
├── css/
│   ├── style.css          # Estilos principais e design system
│   ├── animations.css     # Todas as animações e keyframes
│   └── responsive.css     # Media queries mobile-first
│
├── js/
│   ├── main.js           # Funcionalidades principais (navbar, FAQ, etc)
│   ├── programas.js      # Lógica de filtros e toggle de programas
│   └── animations.js     # Intersection Observer e scroll animations
│
├── img/
│   ├── logo.png          # Logo da marca
│   ├── hero-fabi.jpg     # Imagem hero (placeholder)
│   └── icons/            # Ícones SVG
│
└── README.md             # Documentação do projeto
```

## 🚀 Instalação

### Pré-requisitos
Nenhum! O projeto usa apenas HTML, CSS e JavaScript vanilla.

### Passos

1. **Clone ou baixe o projeto**
   ```bash
   cd "C:\Users\HUDSON\Desktop\Projetos Sites\Site Fabi Felintro Trainer"
   ```

2. **Adicione as imagens**
   - Coloque o logo em: `img/logo.png`
   - Coloque a foto hero em: `img/hero-fabi.jpg`

3. **Abra o projeto**
   - Abra `index.html` no navegador
   - Ou use um servidor local:
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js
     npx http-server

     # VS Code
     Use a extensão "Live Server"
     ```

## ⚙️ Configuração

### 1. Informações de Contato

Edite os links do WhatsApp no arquivo [index.html](index.html):

```html
<!-- Procure por: -->
https://wa.me/5511953532718

<!-- Substitua pelo número correto se necessário -->
```

### 2. Redes Sociais

Atualize os links das redes sociais no footer:

```html
<a href="https://instagram.com/fabifelintro.trainer" target="_blank">
```

### 3. Cores do Site

Personalize as cores no arquivo [css/style.css](css/style.css):

```css
:root {
    --color-primary: #B8954A;      /* Dourado */
    --color-primary-light: #D4B772;
    --color-primary-dark: #9A7D3A;
    --color-secondary: #1A1A1A;    /* Preto */
    --color-white: #FFFFFF;
}
```

### 4. Preços dos Programas

Edite os preços no [index.html](index.html):

```html
<div class="card-pricing">
    <p class="price-old">De R$ 497</p>
    <p class="price-current">R$ 297</p>
    <p class="price-installment">ou 12x de R$ 29,90</p>
</div>
```

### 5. Conteúdo dos Programas

Personalize os benefícios de cada programa:

```html
<ul class="card-features">
    <li>✅ 12 semanas de treino</li>
    <li>✅ Treinos 3x por semana</li>
    <!-- Adicione ou remova benefícios aqui -->
</ul>
```

## 🎨 Funcionalidades

### 1. Hero Section com Parallax
- Imagem de fundo com efeito parallax sutil
- Badges de confiança (32,2k seguidores)
- CTAs destacados

### 2. Toggle de Objetivos
- Alternância entre Emagrecimento e Hipertrofia
- Transições suaves com animações
- Filtros interativos por nível

### 3. Cards de Programas
- Badges animados (MAIS VENDIDO, RECOMENDADO, ELITE)
- Hover effects com elevação e brilho
- Contador de vagas com urgência
- Botões CTA direto para WhatsApp

### 4. Seção Como Funciona
- Timeline de 3 passos
- Ícones ilustrativos
- Animações sequenciais

### 5. Depoimentos
- Cards com avaliação 5 estrelas
- Grid responsivo
- Fade-in ao scroll

### 6. FAQ Accordion
- Perguntas e respostas expansíveis
- Ícone animado de seta
- Transições suaves

### 7. WhatsApp Flutuante
- Botão fixo no canto inferior direito
- Animação de pulso constante
- Link com mensagem pré-preenchida

## 📊 SEO e Performance

### Meta Tags Incluídas
- Title e Description otimizados
- Open Graph para compartilhamento social
- Keywords relevantes
- Viewport configuration

### Performance
- **Lazy Loading**: Imagens carregadas sob demanda
- **Intersection Observer**: Animações apenas quando visíveis
- **CSS Otimizado**: Uso de variáveis e classes reutilizáveis
- **JavaScript Modular**: Código organizado e performático

### Próximos Passos (Recomendado)
1. **Adicionar Google Analytics 4**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. **Implementar Facebook Pixel**
   ```html
   <!-- Facebook Pixel -->
   <script>!function(f,b,e,v,n,t,s)...</script>
   ```

3. **Otimizar Imagens**
   - Converter para WebP
   - Comprimir com TinyPNG
   - Usar tamanhos adequados (1920px max)

4. **Minificar CSS/JS**
   ```bash
   # Use ferramentas como:
   npm install -g clean-css-cli uglify-js
   cleancss -o style.min.css style.css
   uglifyjs main.js -c -m -o main.min.js
   ```

## 📱 Responsividade

### Breakpoints

| Dispositivo | Largura | Layout |
|-------------|---------|--------|
| Mobile      | 320px+  | 1 coluna |
| Small       | 480px+  | 1 coluna |
| Tablet      | 768px+  | 2 colunas |
| Desktop     | 1024px+ | 3 colunas |
| Large       | 1440px+ | 3 colunas (expandido) |

### Mobile Features
- Menu hamburger animado
- Cards em coluna única
- Botões full-width
- Textos otimizados
- Touch-friendly (44px min target)

## 🌐 Navegadores Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ⚠️ IE 11 (funcionalidade limitada)

## 🎨 Customização

### Adicionar Nova Seção

1. **HTML**: Adicione a seção no [index.html](index.html)
   ```html
   <section id="nova-secao" class="section-padding">
       <div class="container">
           <h2 class="section-title reveal">Título</h2>
           <p class="reveal">Conteúdo</p>
       </div>
   </section>
   ```

2. **CSS**: Adicione estilos no [css/style.css](css/style.css)
   ```css
   .nova-secao {
       background: var(--color-gray-50);
   }
   ```

3. **Menu**: Adicione link na navegação
   ```html
   <li><a href="#nova-secao">Nova Seção</a></li>
   ```

### Alterar Animações

Edite [css/animations.css](css/animations.css):

```css
/* Mudar velocidade */
.fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    /* Altere 0.8s para a velocidade desejada */
}

/* Criar nova animação */
@keyframes minhaAnimacao {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## 🚀 Deploy

### Opções de Hospedagem

#### 1. Netlify (Recomendado)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### 2. Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### 3. GitHub Pages
1. Crie um repositório no GitHub
2. Faça push do código
3. Vá em Settings > Pages
4. Selecione a branch `main`

#### 4. Hospedagem Tradicional
1. Faça upload via FTP
2. Aponte o domínio para a pasta
3. Configure SSL (Let's Encrypt)

### Domínio Personalizado

Após o deploy, configure seu domínio:
- Aponte o DNS A record para o servidor
- Configure SSL/HTTPS
- Teste em diferentes dispositivos

## 🔧 Manutenção

### Atualizar Preços
Edite diretamente no [index.html](index.html) na seção de programas.

### Adicionar Depoimento
1. Copie um card existente em `.testimonial-card`
2. Atualize o nome, texto e idade
3. Mantenha a classe `reveal` para animação

### Modificar FAQ
Adicione novas perguntas seguindo o padrão:

```html
<div class="faq-item reveal">
    <button class="faq-question">
        <span>Sua pergunta aqui?</span>
        <svg class="faq-icon">...</svg>
    </button>
    <div class="faq-answer">
        <p>Sua resposta aqui.</p>
    </div>
</div>
```

### Estatísticas
Atualize os números em `.stat-number`:

```html
<div class="stat-number" data-target="500">0</div>
```

O JavaScript animará automaticamente até o valor em `data-target`.

## 📞 Contato e Suporte

### Cliente
- **Nome**: Fabi Felintro
- **Instagram**: [@fabifelintro.trainer](https://instagram.com/fabifelintro.trainer)
- **WhatsApp**: (11) 95353-2718

### Desenvolvedor
Para dúvidas sobre o código ou customizações, consulte este README ou os comentários nos arquivos.

## 📄 Licença

© 2026 Fabi Felintro Trainer. Todos os direitos reservados.

## 🎯 Checklist de Lançamento

Antes de colocar o site no ar, verifique:

- [ ] Todas as imagens foram adicionadas à pasta `img/`
- [ ] Logo está visível no header e footer
- [ ] Todos os links do WhatsApp estão corretos
- [ ] Links das redes sociais estão funcionando
- [ ] Preços dos programas estão atualizados
- [ ] Textos foram revisados (ortografia/gramática)
- [ ] Site foi testado em mobile
- [ ] Site foi testado em tablet
- [ ] Site foi testado em desktop
- [ ] Formulários de contato funcionam (se houver)
- [ ] Google Analytics foi configurado
- [ ] Facebook Pixel foi instalado (se aplicável)
- [ ] SSL/HTTPS está ativo
- [ ] Domínio aponta corretamente
- [ ] Velocidade de carregamento está boa (< 3s)
- [ ] SEO básico foi implementado
- [ ] Site foi testado em diferentes navegadores

## 🚀 Métricas de Sucesso

Objetivos de conversão:
- **Taxa de Conversão**: > 3% (visitantes → WhatsApp)
- **Tempo na Página**: > 2 minutos
- **Bounce Rate**: < 60%
- **Lighthouse Score**: > 90

Acompanhe essas métricas usando Google Analytics e ajuste conforme necessário.

---

**Desenvolvido com dedicação para transformar vidas** 💪✨
