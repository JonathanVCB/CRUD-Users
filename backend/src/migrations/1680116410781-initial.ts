import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1680116410781 implements MigrationInterface {
    name = 'initial1680116410781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "telephone" character varying(200) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "telephone" character varying(200) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_f488353292a1f08767f4e30b6bd" UNIQUE ("email"), CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_c0e04e1068848911421d27f2d32" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_c0e04e1068848911421d27f2d32"`);
        await queryRunner.query(`DROP TABLE "Contact"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
