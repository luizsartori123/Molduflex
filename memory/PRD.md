# Molduflex Landing Page - PRD

## Problema Original
Landing Page de alta conversão para a marca Molduflex - empresa de materiais de construção e acabamentos. Seções: Hero, Diferenciais, Linha de Produtos, Galeria com Lightbox, Sobre a Molduflex e Rodapé. SEO otimizado com JSON-LD Schema Markup. Animações de entrada no scroll. Botões CTA direcionando para WhatsApp.

## User Personas
- **Arquitetos e Designers de Interiores**: Buscam materiais de qualidade para projetos
- **Construtores e Empreiteiros**: Precisam de fornecedores confiáveis
- **Consumidores Finais**: Reformando ou construindo residências

## Contato
- Instagram: @molduflex
- WhatsApp: (11) 9 2290-3862
- Email: contato@molduflex.com.br

## Core Requirements (Estático)
1. ✅ Hero com headline impactante e CTA
2. ✅ Seção de Diferenciais (4 cards)
3. ✅ Linha de Produtos (6 categorias)
4. ✅ Galeria com Lightbox funcional
5. ✅ Seção Sobre com estatísticas
6. ✅ Footer completo com contatos
7. ✅ Botão flutuante WhatsApp
8. ✅ Navbar responsiva com menu mobile
9. ✅ Animações com framer-motion
10. ✅ SEO com JSON-LD Schema Markup

## O Que Foi Implementado (30/01/2025)

### Frontend
- **Hero Section**: Logo Molduflex, headline "Transforme sua obra em realidade", CTAs animados
- **Navbar**: Navegação fixa, transparente que fica branca ao scroll, menu mobile
- **Diferenciais**: 4 cards (Qualidade, Entrega, Marcas, Suporte)
- **Produtos**: Grid bento com 6 categorias (Climatização, Cozinha, Revestimento, Banheiro, Tintas, Pedras)
- **Galeria**: 6 imagens com lightbox navegável usando Shadcn Dialog
- **Sobre**: Texto institucional + 4 cards de estatísticas
- **Footer**: 4 colunas (Marca, Navegação, Produtos, Contato)
- **WhatsApp Button**: Botão flutuante verde com tooltip

### SEO
- Meta tags completas (title, description, keywords)
- Open Graph e Twitter Cards
- JSON-LD para HomeGoodsStore e Organization
- Canonical URL para molduflex.com.br

### Tech Stack
- React 19 + Tailwind CSS
- Framer Motion (animações)
- Shadcn UI (Dialog, Button)
- Lucide React (ícones)

## Backlog Priorizado

### P0 (Crítico)
- ✅ Todas as features principais implementadas

### P1 (Alta Prioridade)
- [ ] Substituir imagens placeholder pelas imagens reais do cliente
- [ ] Adicionar Google Analytics/Tag Manager

### P2 (Média Prioridade)
- [ ] Implementar formulário de contato alternativo
- [ ] Adicionar página de catálogo de produtos
- [ ] Blog com artigos sobre construção

### P3 (Baixa Prioridade)
- [ ] Implementar PWA para acesso offline
- [ ] Adicionar chat ao vivo
- [ ] Integração com WhatsApp Business API

## Próximas Tarefas
1. **Aguardando imagens do cliente** - Cliente informou que enviará imagens em partes
2. Hospedar no GitHub Pages (repositório baconzin)
3. Configurar domínio molduflex.com.br
4. Adicionar Google Analytics para rastreamento
