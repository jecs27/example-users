import { Entity, Column, Index, Generated } from 'typeorm';

import BaseEntity from '../../entities/baseEntity';

@Entity('users')
export default class User extends BaseEntity {
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

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;
}
