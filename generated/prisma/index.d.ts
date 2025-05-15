
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model kategori
 * 
 */
export type kategori = $Result.DefaultSelection<Prisma.$kategoriPayload>
/**
 * Model pelanggan
 * 
 */
export type pelanggan = $Result.DefaultSelection<Prisma.$pelangganPayload>
/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model transaksi
 * 
 */
export type transaksi = $Result.DefaultSelection<Prisma.$transaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kategoris
 * const kategoris = await prisma.kategori.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Kategoris
   * const kategoris = await prisma.kategori.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kategori`: Exposes CRUD operations for the **kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.kategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pelanggan`: Exposes CRUD operations for the **pelanggan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pelanggans
    * const pelanggans = await prisma.pelanggan.findMany()
    * ```
    */
  get pelanggan(): Prisma.pelangganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.transaksiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    kategori: 'kategori',
    pelanggan: 'pelanggan',
    produk: 'produk',
    supplier: 'supplier',
    transaksi: 'transaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kategori" | "pelanggan" | "produk" | "supplier" | "transaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      kategori: {
        payload: Prisma.$kategoriPayload<ExtArgs>
        fields: Prisma.kategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findFirst: {
            args: Prisma.kategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findMany: {
            args: Prisma.kategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          create: {
            args: Prisma.kategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          createMany: {
            args: Prisma.kategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          delete: {
            args: Prisma.kategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          update: {
            args: Prisma.kategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          deleteMany: {
            args: Prisma.kategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          upsert: {
            args: Prisma.kategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.kategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.kategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      pelanggan: {
        payload: Prisma.$pelangganPayload<ExtArgs>
        fields: Prisma.pelangganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pelangganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pelangganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findFirst: {
            args: Prisma.pelangganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pelangganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findMany: {
            args: Prisma.pelangganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          create: {
            args: Prisma.pelangganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          createMany: {
            args: Prisma.pelangganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pelangganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          delete: {
            args: Prisma.pelangganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          update: {
            args: Prisma.pelangganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          deleteMany: {
            args: Prisma.pelangganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pelangganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pelangganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          upsert: {
            args: Prisma.pelangganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          aggregate: {
            args: Prisma.PelangganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelanggan>
          }
          groupBy: {
            args: Prisma.pelangganGroupByArgs<ExtArgs>
            result: $Utils.Optional<PelangganGroupByOutputType>[]
          }
          count: {
            args: Prisma.pelangganCountArgs<ExtArgs>
            result: $Utils.Optional<PelangganCountAggregateOutputType> | number
          }
        }
      }
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      transaksi: {
        payload: Prisma.$transaksiPayload<ExtArgs>
        fields: Prisma.transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findFirst: {
            args: Prisma.transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findMany: {
            args: Prisma.transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          create: {
            args: Prisma.transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          createMany: {
            args: Prisma.transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          delete: {
            args: Prisma.transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          update: {
            args: Prisma.transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          deleteMany: {
            args: Prisma.transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          upsert: {
            args: Prisma.transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    kategori?: kategoriOmit
    pelanggan?: pelangganOmit
    produk?: produkOmit
    supplier?: supplierOmit
    transaksi?: transaksiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriMinAggregateOutputType = {
    id_kategori: string | null
    nama_kategori: string | null
    deskripsi: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    id_kategori: string | null
    nama_kategori: string | null
    deskripsi: string | null
  }

  export type KategoriCountAggregateOutputType = {
    id_kategori: number
    nama_kategori: number
    deskripsi: number
    _all: number
  }


  export type KategoriMinAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    deskripsi?: true
  }

  export type KategoriMaxAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    deskripsi?: true
  }

  export type KategoriCountAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    deskripsi?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategori to aggregate.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type kategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kategoriWhereInput
    orderBy?: kategoriOrderByWithAggregationInput | kategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: kategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id_kategori: string
    nama_kategori: string | null
    deskripsi: string | null
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends kategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type kategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type kategoriSelectScalar = {
    id_kategori?: boolean
    nama_kategori?: boolean
    deskripsi?: boolean
  }

  export type kategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kategori" | "nama_kategori" | "deskripsi", ExtArgs["result"]["kategori"]>

  export type $kategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kategori"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_kategori: string
      nama_kategori: string | null
      deskripsi: string | null
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type kategoriGetPayload<S extends boolean | null | undefined | kategoriDefaultArgs> = $Result.GetResult<Prisma.$kategoriPayload, S>

  type kategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface kategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kategori'], meta: { name: 'kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {kategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kategoriFindUniqueArgs>(args: SelectSubset<T, kategoriFindUniqueArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, kategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kategoriFindFirstArgs>(args?: SelectSubset<T, kategoriFindFirstArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, kategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.findMany({ select: { id_kategori: true } })
     * 
     */
    findMany<T extends kategoriFindManyArgs>(args?: SelectSubset<T, kategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {kategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends kategoriCreateArgs>(args: SelectSubset<T, kategoriCreateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {kategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kategoriCreateManyArgs>(args?: SelectSubset<T, kategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {kategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id_kategori: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, kategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {kategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends kategoriDeleteArgs>(args: SelectSubset<T, kategoriDeleteArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {kategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kategoriUpdateArgs>(args: SelectSubset<T, kategoriUpdateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {kategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kategoriDeleteManyArgs>(args?: SelectSubset<T, kategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kategoriUpdateManyArgs>(args: SelectSubset<T, kategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {kategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id_kategori: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, kategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {kategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends kategoriUpsertArgs>(args: SelectSubset<T, kategoriUpsertArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends kategoriCountArgs>(
      args?: Subset<T, kategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kategoriGroupByArgs['orderBy'] }
        : { orderBy?: kategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kategori model
   */
  readonly fields: kategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kategori model
   */
  interface kategoriFieldRefs {
    readonly id_kategori: FieldRef<"kategori", 'String'>
    readonly nama_kategori: FieldRef<"kategori", 'String'>
    readonly deskripsi: FieldRef<"kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kategori findUnique
   */
  export type kategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findUniqueOrThrow
   */
  export type kategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findFirst
   */
  export type kategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findFirstOrThrow
   */
  export type kategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findMany
   */
  export type kategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori create
   */
  export type kategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data needed to create a kategori.
     */
    data: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
  }

  /**
   * kategori createMany
   */
  export type kategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kategoris.
     */
    data: kategoriCreateManyInput | kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori createManyAndReturn
   */
  export type kategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data used to create many kategoris.
     */
    data: kategoriCreateManyInput | kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori update
   */
  export type kategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data needed to update a kategori.
     */
    data: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
    /**
     * Choose, which kategori to update.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori updateMany
   */
  export type kategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kategoris.
     */
    data: XOR<kategoriUpdateManyMutationInput, kategoriUncheckedUpdateManyInput>
    /**
     * Filter which kategoris to update
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to update.
     */
    limit?: number
  }

  /**
   * kategori updateManyAndReturn
   */
  export type kategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The data used to update kategoris.
     */
    data: XOR<kategoriUpdateManyMutationInput, kategoriUncheckedUpdateManyInput>
    /**
     * Filter which kategoris to update
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to update.
     */
    limit?: number
  }

  /**
   * kategori upsert
   */
  export type kategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * The filter to search for the kategori to update in case it exists.
     */
    where: kategoriWhereUniqueInput
    /**
     * In case the kategori found by the `where` argument doesn't exist, create a new kategori with this data.
     */
    create: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
    /**
     * In case the kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
  }

  /**
   * kategori delete
   */
  export type kategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Filter which kategori to delete.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori deleteMany
   */
  export type kategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategoris to delete
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to delete.
     */
    limit?: number
  }

  /**
   * kategori without action
   */
  export type kategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
  }


  /**
   * Model pelanggan
   */

  export type AggregatePelanggan = {
    _count: PelangganCountAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  export type PelangganMinAggregateOutputType = {
    id_pelanggan: string | null
    nama: string | null
    email: string | null
    nomor_telepon: string | null
    alamat: string | null
  }

  export type PelangganMaxAggregateOutputType = {
    id_pelanggan: string | null
    nama: string | null
    email: string | null
    nomor_telepon: string | null
    alamat: string | null
  }

  export type PelangganCountAggregateOutputType = {
    id_pelanggan: number
    nama: number
    email: number
    nomor_telepon: number
    alamat: number
    _all: number
  }


  export type PelangganMinAggregateInputType = {
    id_pelanggan?: true
    nama?: true
    email?: true
    nomor_telepon?: true
    alamat?: true
  }

  export type PelangganMaxAggregateInputType = {
    id_pelanggan?: true
    nama?: true
    email?: true
    nomor_telepon?: true
    alamat?: true
  }

  export type PelangganCountAggregateInputType = {
    id_pelanggan?: true
    nama?: true
    email?: true
    nomor_telepon?: true
    alamat?: true
    _all?: true
  }

  export type PelangganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggan to aggregate.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pelanggans
    **/
    _count?: true | PelangganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PelangganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PelangganMaxAggregateInputType
  }

  export type GetPelangganAggregateType<T extends PelangganAggregateArgs> = {
        [P in keyof T & keyof AggregatePelanggan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelanggan[P]>
      : GetScalarType<T[P], AggregatePelanggan[P]>
  }




  export type pelangganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pelangganWhereInput
    orderBy?: pelangganOrderByWithAggregationInput | pelangganOrderByWithAggregationInput[]
    by: PelangganScalarFieldEnum[] | PelangganScalarFieldEnum
    having?: pelangganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PelangganCountAggregateInputType | true
    _min?: PelangganMinAggregateInputType
    _max?: PelangganMaxAggregateInputType
  }

  export type PelangganGroupByOutputType = {
    id_pelanggan: string
    nama: string | null
    email: string | null
    nomor_telepon: string | null
    alamat: string | null
    _count: PelangganCountAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  type GetPelangganGroupByPayload<T extends pelangganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PelangganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PelangganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PelangganGroupByOutputType[P]>
            : GetScalarType<T[P], PelangganGroupByOutputType[P]>
        }
      >
    >


  export type pelangganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pelanggan?: boolean
    nama?: boolean
    email?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pelanggan?: boolean
    nama?: boolean
    email?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pelanggan?: boolean
    nama?: boolean
    email?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["pelanggan"]>

  export type pelangganSelectScalar = {
    id_pelanggan?: boolean
    nama?: boolean
    email?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }

  export type pelangganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pelanggan" | "nama" | "email" | "nomor_telepon" | "alamat", ExtArgs["result"]["pelanggan"]>

  export type $pelangganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pelanggan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_pelanggan: string
      nama: string | null
      email: string | null
      nomor_telepon: string | null
      alamat: string | null
    }, ExtArgs["result"]["pelanggan"]>
    composites: {}
  }

  type pelangganGetPayload<S extends boolean | null | undefined | pelangganDefaultArgs> = $Result.GetResult<Prisma.$pelangganPayload, S>

  type pelangganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pelangganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PelangganCountAggregateInputType | true
    }

  export interface pelangganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pelanggan'], meta: { name: 'pelanggan' } }
    /**
     * Find zero or one Pelanggan that matches the filter.
     * @param {pelangganFindUniqueArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pelangganFindUniqueArgs>(args: SelectSubset<T, pelangganFindUniqueArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelanggan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pelangganFindUniqueOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pelangganFindUniqueOrThrowArgs>(args: SelectSubset<T, pelangganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pelangganFindFirstArgs>(args?: SelectSubset<T, pelangganFindFirstArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pelangganFindFirstOrThrowArgs>(args?: SelectSubset<T, pelangganFindFirstOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pelanggans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany()
     * 
     * // Get first 10 Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany({ take: 10 })
     * 
     * // Only select the `id_pelanggan`
     * const pelangganWithId_pelangganOnly = await prisma.pelanggan.findMany({ select: { id_pelanggan: true } })
     * 
     */
    findMany<T extends pelangganFindManyArgs>(args?: SelectSubset<T, pelangganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelanggan.
     * @param {pelangganCreateArgs} args - Arguments to create a Pelanggan.
     * @example
     * // Create one Pelanggan
     * const Pelanggan = await prisma.pelanggan.create({
     *   data: {
     *     // ... data to create a Pelanggan
     *   }
     * })
     * 
     */
    create<T extends pelangganCreateArgs>(args: SelectSubset<T, pelangganCreateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pelanggans.
     * @param {pelangganCreateManyArgs} args - Arguments to create many Pelanggans.
     * @example
     * // Create many Pelanggans
     * const pelanggan = await prisma.pelanggan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pelangganCreateManyArgs>(args?: SelectSubset<T, pelangganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pelanggans and returns the data saved in the database.
     * @param {pelangganCreateManyAndReturnArgs} args - Arguments to create many Pelanggans.
     * @example
     * // Create many Pelanggans
     * const pelanggan = await prisma.pelanggan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pelanggans and only return the `id_pelanggan`
     * const pelangganWithId_pelangganOnly = await prisma.pelanggan.createManyAndReturn({
     *   select: { id_pelanggan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pelangganCreateManyAndReturnArgs>(args?: SelectSubset<T, pelangganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pelanggan.
     * @param {pelangganDeleteArgs} args - Arguments to delete one Pelanggan.
     * @example
     * // Delete one Pelanggan
     * const Pelanggan = await prisma.pelanggan.delete({
     *   where: {
     *     // ... filter to delete one Pelanggan
     *   }
     * })
     * 
     */
    delete<T extends pelangganDeleteArgs>(args: SelectSubset<T, pelangganDeleteArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelanggan.
     * @param {pelangganUpdateArgs} args - Arguments to update one Pelanggan.
     * @example
     * // Update one Pelanggan
     * const pelanggan = await prisma.pelanggan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pelangganUpdateArgs>(args: SelectSubset<T, pelangganUpdateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pelanggans.
     * @param {pelangganDeleteManyArgs} args - Arguments to filter Pelanggans to delete.
     * @example
     * // Delete a few Pelanggans
     * const { count } = await prisma.pelanggan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pelangganDeleteManyArgs>(args?: SelectSubset<T, pelangganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pelanggans
     * const pelanggan = await prisma.pelanggan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pelangganUpdateManyArgs>(args: SelectSubset<T, pelangganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pelanggans and returns the data updated in the database.
     * @param {pelangganUpdateManyAndReturnArgs} args - Arguments to update many Pelanggans.
     * @example
     * // Update many Pelanggans
     * const pelanggan = await prisma.pelanggan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pelanggans and only return the `id_pelanggan`
     * const pelangganWithId_pelangganOnly = await prisma.pelanggan.updateManyAndReturn({
     *   select: { id_pelanggan: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pelangganUpdateManyAndReturnArgs>(args: SelectSubset<T, pelangganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pelanggan.
     * @param {pelangganUpsertArgs} args - Arguments to update or create a Pelanggan.
     * @example
     * // Update or create a Pelanggan
     * const pelanggan = await prisma.pelanggan.upsert({
     *   create: {
     *     // ... data to create a Pelanggan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelanggan we want to update
     *   }
     * })
     */
    upsert<T extends pelangganUpsertArgs>(args: SelectSubset<T, pelangganUpsertArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganCountArgs} args - Arguments to filter Pelanggans to count.
     * @example
     * // Count the number of Pelanggans
     * const count = await prisma.pelanggan.count({
     *   where: {
     *     // ... the filter for the Pelanggans we want to count
     *   }
     * })
    **/
    count<T extends pelangganCountArgs>(
      args?: Subset<T, pelangganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PelangganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PelangganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PelangganAggregateArgs>(args: Subset<T, PelangganAggregateArgs>): Prisma.PrismaPromise<GetPelangganAggregateType<T>>

    /**
     * Group by Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pelangganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pelangganGroupByArgs['orderBy'] }
        : { orderBy?: pelangganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pelangganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPelangganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pelanggan model
   */
  readonly fields: pelangganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pelanggan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pelangganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pelanggan model
   */
  interface pelangganFieldRefs {
    readonly id_pelanggan: FieldRef<"pelanggan", 'String'>
    readonly nama: FieldRef<"pelanggan", 'String'>
    readonly email: FieldRef<"pelanggan", 'String'>
    readonly nomor_telepon: FieldRef<"pelanggan", 'String'>
    readonly alamat: FieldRef<"pelanggan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pelanggan findUnique
   */
  export type pelangganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findUniqueOrThrow
   */
  export type pelangganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findFirst
   */
  export type pelangganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findFirstOrThrow
   */
  export type pelangganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findMany
   */
  export type pelangganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter, which pelanggans to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan create
   */
  export type pelangganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data needed to create a pelanggan.
     */
    data: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
  }

  /**
   * pelanggan createMany
   */
  export type pelangganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pelanggans.
     */
    data: pelangganCreateManyInput | pelangganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pelanggan createManyAndReturn
   */
  export type pelangganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data used to create many pelanggans.
     */
    data: pelangganCreateManyInput | pelangganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pelanggan update
   */
  export type pelangganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data needed to update a pelanggan.
     */
    data: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
    /**
     * Choose, which pelanggan to update.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan updateMany
   */
  export type pelangganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pelanggans.
     */
    data: XOR<pelangganUpdateManyMutationInput, pelangganUncheckedUpdateManyInput>
    /**
     * Filter which pelanggans to update
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to update.
     */
    limit?: number
  }

  /**
   * pelanggan updateManyAndReturn
   */
  export type pelangganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The data used to update pelanggans.
     */
    data: XOR<pelangganUpdateManyMutationInput, pelangganUncheckedUpdateManyInput>
    /**
     * Filter which pelanggans to update
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to update.
     */
    limit?: number
  }

  /**
   * pelanggan upsert
   */
  export type pelangganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * The filter to search for the pelanggan to update in case it exists.
     */
    where: pelangganWhereUniqueInput
    /**
     * In case the pelanggan found by the `where` argument doesn't exist, create a new pelanggan with this data.
     */
    create: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
    /**
     * In case the pelanggan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
  }

  /**
   * pelanggan delete
   */
  export type pelangganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Filter which pelanggan to delete.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan deleteMany
   */
  export type pelangganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggans to delete
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to delete.
     */
    limit?: number
  }

  /**
   * pelanggan without action
   */
  export type pelangganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
  }


  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id_produk: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id_produk: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: string | null
    foto: string | null
    deskripsi: string | null
    id_kategori: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: string | null
    foto: string | null
    deskripsi: string | null
    id_kategori: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id_produk: number
    nama_produk: number
    harga: number
    foto: number
    deskripsi: number
    id_kategori: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id_produk?: true
  }

  export type ProdukSumAggregateInputType = {
    id_produk?: true
  }

  export type ProdukMinAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    foto?: true
    deskripsi?: true
    id_kategori?: true
  }

  export type ProdukMaxAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    foto?: true
    deskripsi?: true
    id_kategori?: true
  }

  export type ProdukCountAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    foto?: true
    deskripsi?: true
    id_kategori?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id_produk: number
    nama_produk: string | null
    harga: string | null
    foto: string | null
    deskripsi: string | null
    id_kategori: string | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_kategori?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_kategori?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_kategori?: boolean
  }, ExtArgs["result"]["produk"]>

  export type produkSelectScalar = {
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_kategori?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produk" | "nama_produk" | "harga" | "foto" | "deskripsi" | "id_kategori", ExtArgs["result"]["produk"]>

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_produk: number
      nama_produk: string | null
      harga: string | null
      foto: string | null
      deskripsi: string | null
      id_kategori: string | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.findMany({ select: { id_produk: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {produkCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.createManyAndReturn({
     *   select: { id_produk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produkCreateManyAndReturnArgs>(args?: SelectSubset<T, produkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {produkUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.updateManyAndReturn({
     *   select: { id_produk: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produkUpdateManyAndReturnArgs>(args: SelectSubset<T, produkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id_produk: FieldRef<"produk", 'Int'>
    readonly nama_produk: FieldRef<"produk", 'String'>
    readonly harga: FieldRef<"produk", 'String'>
    readonly foto: FieldRef<"produk", 'String'>
    readonly deskripsi: FieldRef<"produk", 'String'>
    readonly id_kategori: FieldRef<"produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data?: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk createManyAndReturn
   */
  export type produkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk updateManyAndReturn
   */
  export type produkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id_supplier: string | null
    nama_supplier: string | null
    nomor_telepon: string | null
    alamat: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id_supplier: string | null
    nama_supplier: string | null
    nomor_telepon: string | null
    alamat: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id_supplier: number
    nama_supplier: number
    nomor_telepon: number
    alamat: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id_supplier?: true
    nama_supplier?: true
    nomor_telepon?: true
    alamat?: true
  }

  export type SupplierMaxAggregateInputType = {
    id_supplier?: true
    nama_supplier?: true
    nomor_telepon?: true
    alamat?: true
  }

  export type SupplierCountAggregateInputType = {
    id_supplier?: true
    nama_supplier?: true
    nomor_telepon?: true
    alamat?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id_supplier: string
    nama_supplier: string | null
    nomor_telepon: string | null
    alamat: string | null
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_supplier?: boolean
    nama_supplier?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_supplier?: boolean
    nama_supplier?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_supplier?: boolean
    nama_supplier?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectScalar = {
    id_supplier?: boolean
    nama_supplier?: boolean
    nomor_telepon?: boolean
    alamat?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_supplier" | "nama_supplier" | "nomor_telepon" | "alamat", ExtArgs["result"]["supplier"]>

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_supplier: string
      nama_supplier: string | null
      nomor_telepon: string | null
      alamat: string | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id_supplier`
     * const supplierWithId_supplierOnly = await prisma.supplier.findMany({ select: { id_supplier: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {supplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id_supplier`
     * const supplierWithId_supplierOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id_supplier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supplierCreateManyAndReturnArgs>(args?: SelectSubset<T, supplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {supplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id_supplier`
     * const supplierWithId_supplierOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id_supplier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends supplierUpdateManyAndReturnArgs>(args: SelectSubset<T, supplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly id_supplier: FieldRef<"supplier", 'String'>
    readonly nama_supplier: FieldRef<"supplier", 'String'>
    readonly nomor_telepon: FieldRef<"supplier", 'String'>
    readonly alamat: FieldRef<"supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier createManyAndReturn
   */
  export type supplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier updateManyAndReturn
   */
  export type supplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
  }


  /**
   * Model transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiMinAggregateOutputType = {
    id_transaksi: string | null
    id_produk: string | null
    nama_pelanggan: string | null
    tanggal_transaksi: string | null
    total_harga: string | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id_transaksi: string | null
    id_produk: string | null
    nama_pelanggan: string | null
    tanggal_transaksi: string | null
    total_harga: string | null
  }

  export type TransaksiCountAggregateOutputType = {
    id_transaksi: number
    id_produk: number
    nama_pelanggan: number
    tanggal_transaksi: number
    total_harga: number
    _all: number
  }


  export type TransaksiMinAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pelanggan?: true
    tanggal_transaksi?: true
    total_harga?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pelanggan?: true
    tanggal_transaksi?: true
    total_harga?: true
  }

  export type TransaksiCountAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pelanggan?: true
    tanggal_transaksi?: true
    total_harga?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi to aggregate.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithAggregationInput | transaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id_transaksi: string
    id_produk: string | null
    nama_pelanggan: string | null
    tanggal_transaksi: string | null
    total_harga: string | null
    _count: TransaksiCountAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pelanggan?: boolean
    tanggal_transaksi?: boolean
    total_harga?: boolean
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pelanggan?: boolean
    tanggal_transaksi?: boolean
    total_harga?: boolean
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pelanggan?: boolean
    tanggal_transaksi?: boolean
    total_harga?: boolean
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectScalar = {
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pelanggan?: boolean
    tanggal_transaksi?: boolean
    total_harga?: boolean
  }

  export type transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transaksi" | "id_produk" | "nama_pelanggan" | "tanggal_transaksi" | "total_harga", ExtArgs["result"]["transaksi"]>

  export type $transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_transaksi: string
      id_produk: string | null
      nama_pelanggan: string | null
      tanggal_transaksi: string | null
      total_harga: string | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type transaksiGetPayload<S extends boolean | null | undefined | transaksiDefaultArgs> = $Result.GetResult<Prisma.$transaksiPayload, S>

  type transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi'], meta: { name: 'transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {transaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaksiFindUniqueArgs>(args: SelectSubset<T, transaksiFindUniqueArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaksiFindFirstArgs>(args?: SelectSubset<T, transaksiFindFirstArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.findMany({ select: { id_transaksi: true } })
     * 
     */
    findMany<T extends transaksiFindManyArgs>(args?: SelectSubset<T, transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {transaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends transaksiCreateArgs>(args: SelectSubset<T, transaksiCreateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {transaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaksiCreateManyArgs>(args?: SelectSubset<T, transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {transaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { id_transaksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, transaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {transaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends transaksiDeleteArgs>(args: SelectSubset<T, transaksiDeleteArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {transaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaksiUpdateArgs>(args: SelectSubset<T, transaksiUpdateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {transaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaksiDeleteManyArgs>(args?: SelectSubset<T, transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaksiUpdateManyArgs>(args: SelectSubset<T, transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {transaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.updateManyAndReturn({
     *   select: { id_transaksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, transaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {transaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends transaksiUpsertArgs>(args: SelectSubset<T, transaksiUpsertArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends transaksiCountArgs>(
      args?: Subset<T, transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksiGroupByArgs['orderBy'] }
        : { orderBy?: transaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi model
   */
  readonly fields: transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaksi model
   */
  interface transaksiFieldRefs {
    readonly id_transaksi: FieldRef<"transaksi", 'String'>
    readonly id_produk: FieldRef<"transaksi", 'String'>
    readonly nama_pelanggan: FieldRef<"transaksi", 'String'>
    readonly tanggal_transaksi: FieldRef<"transaksi", 'String'>
    readonly total_harga: FieldRef<"transaksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaksi findUnique
   */
  export type transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findUniqueOrThrow
   */
  export type transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findFirst
   */
  export type transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findFirstOrThrow
   */
  export type transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findMany
   */
  export type transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter, which transaksis to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi create
   */
  export type transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data needed to create a transaksi.
     */
    data: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
  }

  /**
   * transaksi createMany
   */
  export type transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi createManyAndReturn
   */
  export type transaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi update
   */
  export type transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data needed to update a transaksi.
     */
    data: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
    /**
     * Choose, which transaksi to update.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi updateMany
   */
  export type transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi updateManyAndReturn
   */
  export type transaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi upsert
   */
  export type transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The filter to search for the transaksi to update in case it exists.
     */
    where: transaksiWhereUniqueInput
    /**
     * In case the transaksi found by the `where` argument doesn't exist, create a new transaksi with this data.
     */
    create: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
    /**
     * In case the transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
  }

  /**
   * transaksi delete
   */
  export type transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Filter which transaksi to delete.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi deleteMany
   */
  export type transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksis to delete
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to delete.
     */
    limit?: number
  }

  /**
   * transaksi without action
   */
  export type transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KategoriScalarFieldEnum: {
    id_kategori: 'id_kategori',
    nama_kategori: 'nama_kategori',
    deskripsi: 'deskripsi'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const PelangganScalarFieldEnum: {
    id_pelanggan: 'id_pelanggan',
    nama: 'nama',
    email: 'email',
    nomor_telepon: 'nomor_telepon',
    alamat: 'alamat'
  };

  export type PelangganScalarFieldEnum = (typeof PelangganScalarFieldEnum)[keyof typeof PelangganScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id_produk: 'id_produk',
    nama_produk: 'nama_produk',
    harga: 'harga',
    foto: 'foto',
    deskripsi: 'deskripsi',
    id_kategori: 'id_kategori'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id_supplier: 'id_supplier',
    nama_supplier: 'nama_supplier',
    nomor_telepon: 'nomor_telepon',
    alamat: 'alamat'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id_transaksi: 'id_transaksi',
    id_produk: 'id_produk',
    nama_pelanggan: 'nama_pelanggan',
    tanggal_transaksi: 'tanggal_transaksi',
    total_harga: 'total_harga'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type kategoriWhereInput = {
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    id_kategori?: StringFilter<"kategori"> | string
    nama_kategori?: StringNullableFilter<"kategori"> | string | null
    deskripsi?: StringNullableFilter<"kategori"> | string | null
  }

  export type kategoriOrderByWithRelationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
  }

  export type kategoriWhereUniqueInput = Prisma.AtLeast<{
    id_kategori?: string
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    nama_kategori?: StringNullableFilter<"kategori"> | string | null
    deskripsi?: StringNullableFilter<"kategori"> | string | null
  }, "id_kategori">

  export type kategoriOrderByWithAggregationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: kategoriCountOrderByAggregateInput
    _max?: kategoriMaxOrderByAggregateInput
    _min?: kategoriMinOrderByAggregateInput
  }

  export type kategoriScalarWhereWithAggregatesInput = {
    AND?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    OR?: kategoriScalarWhereWithAggregatesInput[]
    NOT?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    id_kategori?: StringWithAggregatesFilter<"kategori"> | string
    nama_kategori?: StringNullableWithAggregatesFilter<"kategori"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"kategori"> | string | null
  }

  export type pelangganWhereInput = {
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    id_pelanggan?: StringFilter<"pelanggan"> | string
    nama?: StringNullableFilter<"pelanggan"> | string | null
    email?: StringNullableFilter<"pelanggan"> | string | null
    nomor_telepon?: StringNullableFilter<"pelanggan"> | string | null
    alamat?: StringNullableFilter<"pelanggan"> | string | null
  }

  export type pelangganOrderByWithRelationInput = {
    id_pelanggan?: SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
  }

  export type pelangganWhereUniqueInput = Prisma.AtLeast<{
    id_pelanggan?: string
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    nama?: StringNullableFilter<"pelanggan"> | string | null
    email?: StringNullableFilter<"pelanggan"> | string | null
    nomor_telepon?: StringNullableFilter<"pelanggan"> | string | null
    alamat?: StringNullableFilter<"pelanggan"> | string | null
  }, "id_pelanggan">

  export type pelangganOrderByWithAggregationInput = {
    id_pelanggan?: SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: pelangganCountOrderByAggregateInput
    _max?: pelangganMaxOrderByAggregateInput
    _min?: pelangganMinOrderByAggregateInput
  }

  export type pelangganScalarWhereWithAggregatesInput = {
    AND?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    OR?: pelangganScalarWhereWithAggregatesInput[]
    NOT?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    id_pelanggan?: StringWithAggregatesFilter<"pelanggan"> | string
    nama?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    email?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    nomor_telepon?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
  }

  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id_produk?: IntFilter<"produk"> | number
    nama_produk?: StringNullableFilter<"produk"> | string | null
    harga?: StringNullableFilter<"produk"> | string | null
    foto?: StringNullableFilter<"produk"> | string | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    id_kategori?: StringNullableFilter<"produk"> | string | null
  }

  export type produkOrderByWithRelationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    id_kategori?: SortOrderInput | SortOrder
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id_produk?: number
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama_produk?: StringNullableFilter<"produk"> | string | null
    harga?: StringNullableFilter<"produk"> | string | null
    foto?: StringNullableFilter<"produk"> | string | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    id_kategori?: StringNullableFilter<"produk"> | string | null
  }, "id_produk">

  export type produkOrderByWithAggregationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrderInput | SortOrder
    harga?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    id_kategori?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id_produk?: IntWithAggregatesFilter<"produk"> | number
    nama_produk?: StringNullableWithAggregatesFilter<"produk"> | string | null
    harga?: StringNullableWithAggregatesFilter<"produk"> | string | null
    foto?: StringNullableWithAggregatesFilter<"produk"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"produk"> | string | null
    id_kategori?: StringNullableWithAggregatesFilter<"produk"> | string | null
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    id_supplier?: StringFilter<"supplier"> | string
    nama_supplier?: StringNullableFilter<"supplier"> | string | null
    nomor_telepon?: StringNullableFilter<"supplier"> | string | null
    alamat?: StringNullableFilter<"supplier"> | string | null
  }

  export type supplierOrderByWithRelationInput = {
    id_supplier?: SortOrder
    nama_supplier?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    id_supplier?: string
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    nama_supplier?: StringNullableFilter<"supplier"> | string | null
    nomor_telepon?: StringNullableFilter<"supplier"> | string | null
    alamat?: StringNullableFilter<"supplier"> | string | null
  }, "id_supplier">

  export type supplierOrderByWithAggregationInput = {
    id_supplier?: SortOrder
    nama_supplier?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: supplierCountOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    id_supplier?: StringWithAggregatesFilter<"supplier"> | string
    nama_supplier?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    nomor_telepon?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"supplier"> | string | null
  }

  export type transaksiWhereInput = {
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id_transaksi?: StringFilter<"transaksi"> | string
    id_produk?: StringNullableFilter<"transaksi"> | string | null
    nama_pelanggan?: StringNullableFilter<"transaksi"> | string | null
    tanggal_transaksi?: StringNullableFilter<"transaksi"> | string | null
    total_harga?: StringNullableFilter<"transaksi"> | string | null
  }

  export type transaksiOrderByWithRelationInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrderInput | SortOrder
    nama_pelanggan?: SortOrderInput | SortOrder
    tanggal_transaksi?: SortOrderInput | SortOrder
    total_harga?: SortOrderInput | SortOrder
  }

  export type transaksiWhereUniqueInput = Prisma.AtLeast<{
    id_transaksi?: string
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id_produk?: StringNullableFilter<"transaksi"> | string | null
    nama_pelanggan?: StringNullableFilter<"transaksi"> | string | null
    tanggal_transaksi?: StringNullableFilter<"transaksi"> | string | null
    total_harga?: StringNullableFilter<"transaksi"> | string | null
  }, "id_transaksi">

  export type transaksiOrderByWithAggregationInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrderInput | SortOrder
    nama_pelanggan?: SortOrderInput | SortOrder
    tanggal_transaksi?: SortOrderInput | SortOrder
    total_harga?: SortOrderInput | SortOrder
    _count?: transaksiCountOrderByAggregateInput
    _max?: transaksiMaxOrderByAggregateInput
    _min?: transaksiMinOrderByAggregateInput
  }

  export type transaksiScalarWhereWithAggregatesInput = {
    AND?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    OR?: transaksiScalarWhereWithAggregatesInput[]
    NOT?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    id_transaksi?: StringWithAggregatesFilter<"transaksi"> | string
    id_produk?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    nama_pelanggan?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    tanggal_transaksi?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
    total_harga?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
  }

  export type kategoriCreateInput = {
    id_kategori: string
    nama_kategori?: string | null
    deskripsi?: string | null
  }

  export type kategoriUncheckedCreateInput = {
    id_kategori: string
    nama_kategori?: string | null
    deskripsi?: string | null
  }

  export type kategoriUpdateInput = {
    id_kategori?: StringFieldUpdateOperationsInput | string
    nama_kategori?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kategoriUncheckedUpdateInput = {
    id_kategori?: StringFieldUpdateOperationsInput | string
    nama_kategori?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kategoriCreateManyInput = {
    id_kategori: string
    nama_kategori?: string | null
    deskripsi?: string | null
  }

  export type kategoriUpdateManyMutationInput = {
    id_kategori?: StringFieldUpdateOperationsInput | string
    nama_kategori?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kategoriUncheckedUpdateManyInput = {
    id_kategori?: StringFieldUpdateOperationsInput | string
    nama_kategori?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganCreateInput = {
    id_pelanggan: string
    nama?: string | null
    email?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type pelangganUncheckedCreateInput = {
    id_pelanggan: string
    nama?: string | null
    email?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type pelangganUpdateInput = {
    id_pelanggan?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganUncheckedUpdateInput = {
    id_pelanggan?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganCreateManyInput = {
    id_pelanggan: string
    nama?: string | null
    email?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type pelangganUpdateManyMutationInput = {
    id_pelanggan?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganUncheckedUpdateManyInput = {
    id_pelanggan?: StringFieldUpdateOperationsInput | string
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkCreateInput = {
    nama_produk?: string | null
    harga?: string | null
    foto?: string | null
    deskripsi?: string | null
    id_kategori?: string | null
  }

  export type produkUncheckedCreateInput = {
    id_produk?: number
    nama_produk?: string | null
    harga?: string | null
    foto?: string | null
    deskripsi?: string | null
    id_kategori?: string | null
  }

  export type produkUpdateInput = {
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    id_kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    id_kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkCreateManyInput = {
    id_produk?: number
    nama_produk?: string | null
    harga?: string | null
    foto?: string | null
    deskripsi?: string | null
    id_kategori?: string | null
  }

  export type produkUpdateManyMutationInput = {
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    id_kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateManyInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    id_kategori?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierCreateInput = {
    id_supplier: string
    nama_supplier?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type supplierUncheckedCreateInput = {
    id_supplier: string
    nama_supplier?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type supplierUpdateInput = {
    id_supplier?: StringFieldUpdateOperationsInput | string
    nama_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierUncheckedUpdateInput = {
    id_supplier?: StringFieldUpdateOperationsInput | string
    nama_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierCreateManyInput = {
    id_supplier: string
    nama_supplier?: string | null
    nomor_telepon?: string | null
    alamat?: string | null
  }

  export type supplierUpdateManyMutationInput = {
    id_supplier?: StringFieldUpdateOperationsInput | string
    nama_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierUncheckedUpdateManyInput = {
    id_supplier?: StringFieldUpdateOperationsInput | string
    nama_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateInput = {
    id_transaksi: string
    id_produk?: string | null
    nama_pelanggan?: string | null
    tanggal_transaksi?: string | null
    total_harga?: string | null
  }

  export type transaksiUncheckedCreateInput = {
    id_transaksi: string
    id_produk?: string | null
    nama_pelanggan?: string | null
    tanggal_transaksi?: string | null
    total_harga?: string | null
  }

  export type transaksiUpdateInput = {
    id_transaksi?: StringFieldUpdateOperationsInput | string
    id_produk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateInput = {
    id_transaksi?: StringFieldUpdateOperationsInput | string
    id_produk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateManyInput = {
    id_transaksi: string
    id_produk?: string | null
    nama_pelanggan?: string | null
    tanggal_transaksi?: string | null
    total_harga?: string | null
  }

  export type transaksiUpdateManyMutationInput = {
    id_transaksi?: StringFieldUpdateOperationsInput | string
    id_produk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateManyInput = {
    id_transaksi?: StringFieldUpdateOperationsInput | string
    id_produk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_pelanggan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    total_harga?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type kategoriCountOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    deskripsi?: SortOrder
  }

  export type kategoriMaxOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    deskripsi?: SortOrder
  }

  export type kategoriMinOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    deskripsi?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type pelangganCountOrderByAggregateInput = {
    id_pelanggan?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type pelangganMaxOrderByAggregateInput = {
    id_pelanggan?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type pelangganMinOrderByAggregateInput = {
    id_pelanggan?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type produkCountOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_kategori?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id_produk?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_kategori?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_kategori?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id_produk?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type supplierCountOrderByAggregateInput = {
    id_supplier?: SortOrder
    nama_supplier?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    id_supplier?: SortOrder
    nama_supplier?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    id_supplier?: SortOrder
    nama_supplier?: SortOrder
    nomor_telepon?: SortOrder
    alamat?: SortOrder
  }

  export type transaksiCountOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pelanggan?: SortOrder
    tanggal_transaksi?: SortOrder
    total_harga?: SortOrder
  }

  export type transaksiMaxOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pelanggan?: SortOrder
    tanggal_transaksi?: SortOrder
    total_harga?: SortOrder
  }

  export type transaksiMinOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pelanggan?: SortOrder
    tanggal_transaksi?: SortOrder
    total_harga?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}