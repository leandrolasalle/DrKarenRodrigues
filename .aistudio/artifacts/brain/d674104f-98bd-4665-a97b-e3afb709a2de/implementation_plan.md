# Otimização de URL Pública e Compartilhamento Social (WhatsApp & Instagram)

Implementação de metadados avançados de pré-visualização social (OpenGraph, Twitter Cards e dados estruturados Schema.org para Advocacia) combinados com uma central rápida de compartilhamento do link público gratuito gerado pela plataforma.

### User Review & Critical Decisions

> [!IMPORTANT]
> As escolhas abaixo refletem suas preferências confirmadas para publicação e divulgação do site da **Dra. Karen Rodrigues**:

- **Decisão Confirmada 1 (Aparência no WhatsApp e Instagram)**: Configuração completa de cartões sociais (*OpenGraph* e *Schema.org LegalService*) para que, ao enviar o link do site no WhatsApp, Instagram ou LinkedIn, apareça automaticamente um cartão elegante com o título **"Dra. Karen Rodrigues | Advocacia & Consultoria Jurídica"** e resumo acolhedor.
- **Decisão Confirmada 2 (Uso do Link Gratuito da Plataforma)**: Utilização direta da URL pública gratuita fornecida pela plataforma (`https://ais-pre-52eaue4tcyndq325etrcct-89955689891.us-east1.run.app`), adicionando um botão prático no site para você copiar seu link oficial ou enviá-lo diretamente a clientes no WhatsApp com 1 clique.

---

### 1. Overview & Core Concept

- **O Que Faz**: Prepara o site para divulgação imediata através de link público gratuito, garantindo que a URL gere uma pré-visualização profissional nas redes sociais e oferecendo um painel rápido de compartilhamento para a advogada e seus clientes.
- **Público-Alvo**: Clientes que recebem o link da Dra. Karen Rodrigues pelo WhatsApp ou clicam no link da bio do Instagram.
- **Valor Principal**: Credibilidade instantânea ao compartilhar o link, sem necessidade de comprar ou configurar domínios externos agora.

---

### 2. User Experience & Visual Design

- **Fluxos de Uso Principais**:
  1. **Acesso Rápido ao Link Público**: No cabeçalho e no rodapé, um botão arredondado **"Compartilhar Site"** abre um modal elegante exibindo a URL pública pronta para publicação.
  2. **Cópia e Envio em 1 Clique**: Dentro do modal, o usuário pode copiar a URL com feedback visual imediato (*"Link Copiado!"*), enviar o cartão do site diretamente para um contato no WhatsApp ou usar o compartilhamento nativo do celular.
  3. **Pré-visualização Automática (WhatsApp / Instagram)**: Quando o link é colado em uma conversa, os metadados geram automaticamente o título institucional, descrição humanizada e identificação profissional da OAB/SP.
- **Identidade Visual & Tema**:
  - *Direção Estética*: Feminina, acolhedora e sofisticada, mantendo os elementos arredondados (`rounded-3xl` e `rounded-full`) e textos diretos sem excesso de informação.
  - *Paleta de Cores*: Fundo em Marsala profundo (`#110508` / `#1C0A13`), superfícies em vinho suave (`#260E1A`) e destaques em Dourado Champanhe (`#D1AE3E` e `#E8D89B`).
  - *Tipografia*: Títulos em `Cinzel`, subtítulos em `Cormorant Garamond` e textos de interface em `Plus Jakarta Sans`.
- **Feedback Interativo**: Confirmação instantânea ao copiar a URL e transições suaves de abertura do cartão de compartilhamento.

---

### 3. Key Product Decisions & Trade-Offs

- **Decisão 1: Resolução Dinâmica da URL Pública**
  - *Abordagem Escolhida*: Detectar automaticamente a URL publicada do ambiente e exibir o endereço público de compartilhamento pronto para uso.
  - *Por Quê*: Permite usar o link gratuito da plataforma imediatamente sem configurações manuais de DNS.
  - *Alternativas Consideradas*: Exigir configuração manual de domínio próprio antes de liberar o botão de compartilhamento (descartado para manter simplicidade e custo zero).
- **Decisão 2: Dados Estruturados Jurídicos (`Schema.org Attorney / LegalService`)**
  - *Abordagem Escolhida*: Embutir metadados estruturados JSON-LD específicos para escritórios de advocacia junto às tags OpenGraph em português (`pt_BR`).
  - *Por Quê*: Melhora a leitura do link pelo WhatsApp, Instagram e mecanismos de busca (Google), destacando áreas de atendimento e registro OAB.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Arquitetura e Hierarquia de Componentes**:

```
┌───────────────────────────────────────────────────────────────────┐
│                    Camada de Metadados & SEO                       │
│  ┌─────────────────────────────┐  ┌────────────────────────────┐  │
│  │ OpenGraph & Social Tags     │  │ Schema.org JSON-LD         │  │
│  │ (WhatsApp / Instagram Card) │  │ (LegalService / Attorney)  │  │
│  └──────────────┬──────────────┘  └─────────────┬──────────────┘  │
└─────────────────┼───────────────────────────────┼─────────────────┘
                  │                               │
                  ▼                               ▼
┌───────────────────────────────────────────────────────────────────┐
│                Aplicação Principal (Dra. Karen Rodrigues)         │
│                                                                   │
│  ┌──────────────────────┐              ┌───────────────────────┐  │
│  │ Header & Footer      │─────────────▶│ Modal Compartilhar URL│  │
│  │ (Botão Compartilhar) │   Abre Modal │ (Cartão do Link)      │  │
│  └──────────────────────┘              └───────────┬───────────┘  │
│                                                    │              │
│                     ┌──────────────────────────────┼───────────┐  │
│                     ▼                              ▼           ▼  │
│          ┌────────────────────┐      ┌──────────────────┐ ┌──────┐│
│          │ Copiar Link Oficial│      │ Enviar via       │ │Share ││
│          │ (Clipboard API)    │      │ WhatsApp Direto  │ │Nativo││
│          └────────────────────┘      └──────────────────┘ └──────┘│
└───────────────────────────────────────────────────────────────────┘
```

- **Modelo de Dados & Estado**:
  - Estado de controle do modal de compartilhamento (`shareModalOpen`).
  - Estado de confirmação de cópia para a área de transferência (`copiedUrl`).
  - Sincronização dinâmica da tag `<link rel="canonical">` e `og:url` com a URL pública ativa da aplicação.
- **Mapeamento de Interações**:
  - Clique em **"Compartilhar"** no topo ou rodapé → Abre o modal arredondado com o cartão visual do site e a URL pública.
  - Clique em **"Copiar Link do Site"** → Copia a URL pública e exibe confirmação visual imediata.
  - Clique em **"Enviar Link no WhatsApp"** → Abre o WhatsApp com mensagem amigável acompanhada da URL pública pronta para envio.
