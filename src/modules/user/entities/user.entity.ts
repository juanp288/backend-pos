import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 55, unique: true })
  username: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255, select: false })
  password: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({
    length: 55,
    unique: true,
    name: 'verify_token',
    nullable: true,
  })
  verifyToken: string;

  @Column({
    length: 55,
    unique: true,
    name: 'reset_password_token',
    nullable: true,
  })
  resetPasswordToken: string;

  @Column({
    type: 'boolean',
    default: true,
    name: 'first_login',
  })
  isFirstLogin: boolean;

  // @OneToOne(() => Profile, (profile) => profile.user)
  // @JoinColumn({ name: 'profile_id' })
  // profile: Profile;

  // @ManyToOne(() => Roles, (role) => role.id)
  // @JoinColumn({ name: 'role_id' })
  // role: Role;

  @CreateDateColumn({ select: false, name: 'created_on' })
  createdOn: Date;
}
