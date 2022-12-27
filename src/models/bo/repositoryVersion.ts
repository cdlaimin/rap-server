/*
 * @Author: xia xian
 * @Date: 2022-08-10 09:50:03
 * @LastEditors: xia xian
 * @LastEditTime: 2022-12-22 10:53:03
 * @Description: repository version
 */
import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Repository } from '../'
export enum LockType { merge = 'merge', import = 'import' }

@Table({ paranoid: true, freezeTableName: false, timestamps: true, underscored: true, tableName: 'repository_version_tab' })
export default class RepositoryVersion extends Model<RepositoryVersion> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
    id: number

  @ForeignKey(() => Repository)
  @Column
    repositoryId: number

  @AllowNull(false)
  @Column(DataType.STRING(256))
    versionName: string

  @Default(null)
  @Column(DataType.ENUM(LockType.merge, LockType.import))
    lockType: string

  @Default(0)
  @Column
    isMaster: boolean

  @BelongsTo(() => Repository, 'repositoryId')
    repository: Repository
}
