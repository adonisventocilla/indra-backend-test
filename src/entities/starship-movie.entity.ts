import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Starship } from "./starship.entity"

@Entity("starship_movies")
export class StarshipMovie {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @ManyToOne(() => Starship, (starship: Starship) => starship.id)
  starship!: string

  @Column({
    type: "varchar",
    length: 100
  })
  @Index()
  nombre: string
}
