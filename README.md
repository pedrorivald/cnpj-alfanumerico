# 🏢 CNPJ Alfanumérico

Uma aplicação web moderna desenvolvida em Angular para gerar e validar CNPJs alfanuméricos, seguindo as especificações técnicas da Receita Federal do Brasil.

![Angular](https://img.shields.io/badge/Angular-20.1.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-20.1.4-FF6D00?style=for-the-badge&logo=angular&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CF649A?style=for-the-badge&logo=sass&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é uma ferramenta web que permite a geração e validação de CNPJs no formato alfanumérico, uma modalidade que inclui letras e números conforme as diretrizes da Receita Federal.

![Demo do Sistema](https://pedrorivald.github.io/cnpj-alfanumerico/readme.gif)

### ✨ Funcionalidades

- 🎲 **Geração de CNPJ Alfanumérico**: Cria CNPJs válidos no formato alfanumérico
- ✅ **Validação de CNPJ**: Verifica se um CNPJ alfanumérico é válido
- 📋 **Cópia para Área de Transferência**: Permite copiar o CNPJ gerado com um clique
- 🎨 **Formatação Automática**: Aplica ou remove a máscara de formatação (XX.XXX.XXX/XXXX-XX)
- 📱 **Design Responsivo**: Interface adaptável para diferentes dispositivos

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular 20.1.0** 
- **Angular Material 20.1.4**
- **TypeScript**
- **SCSS**
- **RxJS 7.8.0** 

### Build e Deploy
- **Angular SSG** - Static Site Generation
- **GitHub Actions** - CI/CD com hospedagem no Github Pages

## 🛠️ Instalação e Execução Local

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com o Node.js)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/pedrorivald/cnpj-alfanumerico.git
   cd cnpj-alfanumerico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Instale o Angular CLI globalmente (se ainda não tiver)**
   ```bash
   npm install -g @angular/cli
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   ng serve
   ```
   ou
   ```bash
   npm start
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador e acesse: `http://localhost:4200`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run build:gh` | Build otimizado para GitHub Pages |
| `npm run watch` | Build em modo watch para desenvolvimento |

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── cnpj-alfanumerico/          # Componente principal
│   ├── explanatory-section/        # Seção explicativa
│   ├── footer/                     # Rodapé da aplicação
│   ├── cnpj.ts                     # Classe utilitária para CNPJ
│   ├── app.ts                      # Componente raiz
│   └── app.routes.ts               # Configuração de rotas
├── styles.scss                     # Estilos globais
└── index.html                      # Arquivo HTML principal
```

## 📚 Referência Técnica

A implementação segue as especificações técnicas da Receita Federal do Brasil, incluindo:

- Algoritmo de cálculo de dígitos verificadores
- Validação de formato alfanumérico
- Suporte a caracteres A-Z e 0-9 nas posições permitidas
- Aplicação correta da máscara de formatação

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Pedro Rivaldo**

- GitHub: [@pedrorivald](https://github.com/pedrorivald)
- LinkedIn: [Pedro Rivaldo](https://linkedin.com/in/pedrorivaldo)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!