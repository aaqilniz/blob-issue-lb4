import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'track', table: 'amounts'}}})
export class Amounts extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'currentAmount', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  currentAmount: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'netAmount', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  netAmount: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'totalDebt', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  totalDebt: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'totalLoan', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  totalLoan?: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'createdAt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'updatedAt', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  updatedAt: string;

  @property({
    type: 'Binary',
    length: 4294967295,
    mysql: {columnName: 'image', dataType: 'longblob', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  image?: Binary;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Amounts>) {
    super(data);
  }
}

export interface AmountsRelations {
  // describe navigational properties here
}

export type AmountsWithRelations = Amounts & AmountsRelations;
