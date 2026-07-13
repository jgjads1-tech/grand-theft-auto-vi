# Grand Theft Auto VI - Projeto de Pré-venda

## Visão Geral
Site de pré-venda do GTA VI com páginas de checkout para PlayStation e Xbox, hospedado no **GitHub Pages** com domínio personalizado `brasilrockstargames.store`.

## Repositório
- **GitHub:** `github.com/jgjads1-tech/grand-theft-auto-vi`
- **Branch:** `master`
- **Domínio:** https://brasilrockstargames.store

## Estrutura do Projeto

| Arquivo/Pasta | Descrição |
|---|---|
| `index.html` | Página inicial |
| `proxy.php` | Proxy CORS para API SyncPay (PHP) |
| `playstation.com/` | Página da PlayStation Store + assets |
| `xbox.com/` | Página da Xbox Store + assets |
| `pagamento-playstation.com/Standard-Edition/` | Checkout PS5 Standard (R$ 449,90) com PIX |
| `pagamento-playstation.com/Ultimate-Edition/` | Checkout PS5 Ultimate (R$ 549,90) com PIX |
| `pagamento-xbox.com/Standard-Edition/` | Checkout Xbox Standard (R$ 449,90) com PIX |
| `pagamento-xbox.com/Ultimate-Edition/` | Checkout Xbox Ultimate (R$ 549,90) com PIX |
| `css/` | Assets CSS globais |
| `js/` | Assets JS globais |
| `fonts/` | Fontes |
| `images/` | Imagens estáticas |
| `CNAME` | Domínio personalizado GitHub Pages |

## Funcionalidades
- **Checkouts com PIX** via SyncPay (API)
- **Proxy PHP** para resolver CORS da SyncPay
- **Clone visual** das páginas oficiais da PlayStation Store e Xbox Store
- **GitHub Pages** com deploy automático via push na branch `master`

## Fluxo de Desenvolvimento
1. Editar arquivos em `C:\Users\João Gabriel\Desktop\grand-theft-auto-vi`
2. Commitar e push para GitHub
3. GitHub Pages faz deploy automático em `brasilrockstargames.store`

## Padrões de Desenvolvimento
- HTML e CSS inline (sem frameworks)
- Tema escuro (#1a1a1a) com azul (#005CFF)
- Formulários PIX com campos de nome e email
- API SyncPay via proxy PHP (CORS)

## Observações
- playstation.com/ foi limpo de ~1130 arquivos inúteis de scraping
- Para usar o proxy.php, o servidor precisa ter suporte a PHP
