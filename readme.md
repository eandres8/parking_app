# Parking App

## Dependencias locales

Para ejecutarlo en ambiente local, debemos tener las siguentes dependencias instaladas en el computador:

- nodejs v14 o mayor
- postgres v8 o superior

* Si se quiere utilizar otro motor de base de datos, como MySQL se deben seguir los siguientes pasos:

- instalar el Driver de MySQL
```
npm i mysql
```

- Configurar el archivo config/database.ts
```ts
mysql: {
  client: 'mysql',
  connection: {
    host: Env.get('MYSQL_HOST'),
    port: Env.get('MYSQL_PORT'),
    user: Env.get('MYSQL_USER'),
    password: Env.get('MYSQL_PASSWORD', ''),
    database: Env.get('MYSQL_DB_NAME'),
  },
  migrations: {
    naturalSort: true,
  },
  healthCheck: false,
  debug: false,
}
```

* !! también se puede seguir la guia de la documentación oficial de AdonisJS en este [link](https://docs.adonisjs.com/guides/database/introduction)

## Ejecutar ambiente local

1. creamos el archivo `.env` 

```
cp .env.example .env
```

2. agregamos las configuraciones de la base de datos en las variables: 
**(estamos usando postgres para este proyecto)**

```
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=A12345678
PG_DB_NAME=parking_app
```

3. ejecutamos el siguiente comando de instalación de dependencias:

```
npm install

o 

yarn install
```

4. debemos crear la estructura de la base de datos, por lo que debemos ejecutar el comando:

```
npm run migrate

o 

yarn migrate
```

5. finalmente levantamos el servidor local

```
npm run dev

o 

yarn dev
```