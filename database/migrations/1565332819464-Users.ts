import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1565332819464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isNullable: false,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'character varying',
                  isNullable: false,
                  length: '100',
                },
                {
                  name: 'email',
                  type: 'character varying',
                  isNullable: false,
                },
                {
                  name: 'password',
                  type: 'character varying',
                  isNullable: false,
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users');
    }

}
