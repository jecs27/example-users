import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseData1725602875025 implements MigrationInterface {
    name = 'BaseData1725602875025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userId" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" UNIQUE ("password"), CONSTRAINT "PK_97672ac88f789774dd47f7c8be3" PRIMARY KEY ("email"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8bf09ba754322ab9c22a215c91" ON "users" ("userId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_8bf09ba754322ab9c22a215c91"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
