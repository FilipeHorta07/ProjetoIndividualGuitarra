-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database if not exists the_metal_eras;

use the_metal_eras;

create table if not exists usuario (
    id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(150) not null unique,
    senha varchar(255) not null
);

select id, nome, email, senha from usuario;

create table banda (
    id int primary key auto_increment,
    nome varchar(100) not null unique,
    votos_iniciais int not null default 0
);

insert into banda (nome, votos_iniciais) values
('Pink Floyd', 350),
('Black Sabbath', 270),
('Metallica', 320),
('Iron Maiden', 300),
('Led Zeppelin', 245),
('Judas Priest', 210),
('Megadeth', 290),
('Van Halen', 205),
('Guns N'' Roses', 260),
('Pantera', 230);

select * from banda;

create table voto (
    id int primary key auto_increment,
    fk_usuario int not null unique,
    fk_banda int not null,
    foreign key (fk_usuario) references usuario(id),
    foreign key (fk_banda) references banda(id)
);

insert into voto (fk_usuario, fk_banda)
values (1, 1);


select
    usuario.nome as usuario,
    banda.nome as banda
from voto
join usuario on voto.fk_usuario = usuario.id
join banda on voto.fk_banda = banda.id;
