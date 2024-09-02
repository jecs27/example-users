import { Entity, Column, Index, Generated, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class User {
  @Index()
  @Generated('increment')
  @Column({ type: 'bigint', nullable: false })
  userId: number;

  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', name: 'password', nullable: false, unique: true })
  password: string;

  @PrimaryColumn({ type: 'varchar', nullable: false, unique: true })
  email: string;
}
