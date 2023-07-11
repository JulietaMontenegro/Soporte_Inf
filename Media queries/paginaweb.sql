
create database paginaweb;
use paginaweb;
create table Productos(
codigo int not null,
nombre varchar(45),
precio int,
primary key(codigo)
);
create table Pedido(
idPedido int not null,
Productos_codigo int not null,
dni int,
nombre varchar(45),
apellido varchar(45),
telefono int,
correo varchar(45),
fecha date,
primary key(idPedido, Productos_codigo),
foreign key (Productos_codigo) references Productos(codigo)
on delete restrict
on update cascade
);
create table Detalle(
Pedido_idPedido int not null,
Pedido_Productos_codigo int not null,
cantidad int,
primary key(Pedido_idPedido, Pedido_Productos_codigo),
foreign key (Pedido_idPedido) references Pedido(idPedido),
foreign key (Pedido_Productos_codigo) references Pedido(Productos_codigo)
on delete restrict
on update cascade
);
insert into Productos values(1, "amatista", 1500);
insert into Productos values(2, "piedra lunar", 1600);
insert into Productos values(3, "lluvia de estrellas", 1700);
insert into Productos values(4, "cuarzo rosa", 1800);
insert into Productos values(5, "ojo de tigre", 1600);
insert into Productos values(6, "lapislázuli", 1700);
insert into Productos values(7, "esmeralda", 1800);
insert into Productos values(8, "citrino", 1500);
insert into Productos values(9, "ónix negro", 1800);
insert into Productos values(10, "rodocrosita", 1750);

