import { MigrationInterface, QueryRunner } from "typeorm";

export class deletecascade1680639447197 implements MigrationInterface {
    name = 'deletecascade1680639447197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_c0e04e1068848911421d27f2d32"`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_c0e04e1068848911421d27f2d32" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_c0e04e1068848911421d27f2d32"`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_c0e04e1068848911421d27f2d32" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
