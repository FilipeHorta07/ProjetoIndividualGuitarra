# The Metal Eras

<p align="center">
  <img src="../assets/imagem%20readme.jpeg" width="800px">
</p>

**A história do rock e da guitarra através das décadas de 1970 e 1980.**

O The Metal Eras é um projeto individual desenvolvido como parte do curso de Bacharelado em Ciência da Computação da São Paulo Tech School (SPTech).

O projeto consiste em um site interativo sobre a história do rock e a evolução da guitarra, com foco nas décadas de 1970 e 1980. Além de apresentar bandas, artistas e características musicais dessas épocas, o site também compartilha minha trajetória pessoal como guitarrista e minha paixão pela música.

## Objetivo

Aplicar os conhecimentos adquiridos durante o curso de Ciência da Computação no desenvolvimento de uma aplicação web, utilizando o rock e a guitarra como tema central.

A proposta também busca apresentar a influência de diferentes bandas e guitarristas na evolução do instrumento, além de proporcionar uma experiência interativa aos visitantes.

## Funcionalidades

- **Apresentação das bandas:** conteúdos sobre bandas de rock e metal, suas histórias e características musicais.
- **Minha trajetória:** apresentação da minha relação pessoal com a guitarra e minhas influências musicais.
- **Cadastro e login:** sistema de identificação dos usuários.
- **Votação:** questionário para que cada usuário cadastrado escolha sua banda favorita.
- **Dashboard:** visualização dos resultados da votação por meio de gráficos e indicadores.
- **Indicadores:** quantidade de votos por banda, total de participantes, porcentagens e banda mais votada.

## Bandas abordadas

O projeto contempla bandas que marcaram diferentes momentos do rock e do metal, principalmente nas décadas de 1970 e 1980:

- Led Zeppelin
- Black Sabbath
- Pink Floyd
- Judas Priest
- Metallica
- Megadeth
- Iron Maiden
- Van Halen
- Guns N' Roses
- Pantera

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML | Estrutura das páginas |
| CSS | Estilização e identidade visual |
| JavaScript | Interatividade e funcionalidades |
| MySQL | Armazenamento das informações |
| Web-Data-Viz | Comunicação entre a aplicação e o banco de dados |
| Chart.js | Construção dos gráficos da dashboard |
| Linux | Ambiente virtual para hospedagem do banco de dados |
| Git e GitHub | Controle de versões e armazenamento do código |

## Arquitetura da aplicação

A comunicação entre o site e o banco de dados é realizada por meio da API Web-Data-Viz.

O fluxo de comunicação segue a seguinte estrutura:

1. O JavaScript envia uma requisição para a API.
2. As rotas recebem e direcionam as requisições.
3. Os Controllers organizam as operações solicitadas.
4. Os Models realizam as operações no banco de dados MySQL.
5. A API retorna as informações para o site.
6. O JavaScript utiliza os dados recebidos para atualizar as funcionalidades e os gráficos da aplicação.

## Como executar o projeto

Para executar o projeto em ambiente local, é necessário:

1. Clonar ou baixar este repositório.
2. Configurar o banco de dados MySQL conforme a estrutura do projeto.
3. Configurar a conexão da API Web-Data-Viz com o banco de dados.
4. Iniciar a API seguindo as instruções de seu repositório.
5. Executar o site em um servidor local ou ambiente de desenvolvimento.

**Observação:** a execução depende da configuração correta do banco de dados e da API. Os parâmetros de conexão devem ser definidos nos arquivos de configuração correspondentes.

## Contexto acadêmico

Projeto desenvolvido individualmente para as disciplinas da São Paulo Tech School (SPTech), com o objetivo de integrar conhecimentos de desenvolvimento web, banco de dados, programação e infraestrutura.

**Curso:** Bacharelado em Ciência da Computação  
**Instituição:** São Paulo Tech School (SPTech)  
**Autor:** Filipe Horta Santos  
**Ano:** 2026

---

*The Metal Eras — Uma jornada pela história do rock e da guitarra.*