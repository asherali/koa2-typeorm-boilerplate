import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import * as bcrypt from 'bcryptjs';

@Entity ('users')
export class Users {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying'
    })
    public name: string;

    @Column({
        type: 'character varying',
    })
    public email: string;

    @Column({
        type: 'character varying'
    })
    public password: string

    hashPassword() {
        return bcrypt.hashSync(this.password, 10);
      }
    
      isValidUnencryptedPassword(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }
}