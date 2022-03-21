// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccruedProtocolFeeCollected extends ethereum.Event {
  get params(): AccruedProtocolFeeCollected__Params {
    return new AccruedProtocolFeeCollected__Params(this);
  }
}

export class AccruedProtocolFeeCollected__Params {
  _event: AccruedProtocolFeeCollected;

  constructor(event: AccruedProtocolFeeCollected) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get tickLower(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get liquidity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get vTokenPrincipal(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get vQuotePrincipal(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LiquidityFeeUpdated extends ethereum.Event {
  get params(): LiquidityFeeUpdated__Params {
    return new LiquidityFeeUpdated__Params(this);
  }
}

export class LiquidityFeeUpdated__Params {
  _event: LiquidityFeeUpdated;

  constructor(event: LiquidityFeeUpdated) {
    this._event = event;
  }

  get liquidityFeePips(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get tickLower(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get liquidity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get vTokenPrincipal(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get vQuotePrincipal(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ProtocolFeeUpdated extends ethereum.Event {
  get params(): ProtocolFeeUpdated__Params {
    return new ProtocolFeeUpdated__Params(this);
  }
}

export class ProtocolFeeUpdated__Params {
  _event: ProtocolFeeUpdated;

  constructor(event: ProtocolFeeUpdated) {
    this._event = event;
  }

  get protocolFeePips(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get amountSpecified(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get vTokenIn(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get vQuoteIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liquidityFees(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get protocolFees(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get sqrtPriceX96Start(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get sqrtPriceX96End(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class VPoolWrapperLogic__burnResultWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class VPoolWrapperLogic__burnResult {
  value0: BigInt;
  value1: BigInt;
  value2: VPoolWrapperLogic__burnResultWrapperValuesInsideStruct;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: VPoolWrapperLogic__burnResultWrapperValuesInsideStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromTuple(this.value2));
    return map;
  }
}

export class VPoolWrapperLogic__fpGlobalResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class VPoolWrapperLogic__getExtrapolatedValuesInsideResultWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class VPoolWrapperLogic__getValuesInsideResultWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class VPoolWrapperLogic__mintResultWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class VPoolWrapperLogic__mintResult {
  value0: BigInt;
  value1: BigInt;
  value2: VPoolWrapperLogic__mintResultWrapperValuesInsideStruct;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: VPoolWrapperLogic__mintResultWrapperValuesInsideStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromTuple(this.value2));
    return map;
  }
}

export class VPoolWrapperLogic__swapResultSwapResultStruct extends ethereum.Tuple {
  get amountSpecified(): BigInt {
    return this[0].toBigInt();
  }

  get vTokenIn(): BigInt {
    return this[1].toBigInt();
  }

  get vQuoteIn(): BigInt {
    return this[2].toBigInt();
  }

  get liquidityFees(): BigInt {
    return this[3].toBigInt();
  }

  get protocolFees(): BigInt {
    return this[4].toBigInt();
  }

  get sqrtPriceX96Start(): BigInt {
    return this[5].toBigInt();
  }

  get sqrtPriceX96End(): BigInt {
    return this[6].toBigInt();
  }
}

export class VPoolWrapperLogic__ticksExtendedResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class VPoolWrapperLogic extends ethereum.SmartContract {
  static bind(address: Address): VPoolWrapperLogic {
    return new VPoolWrapperLogic("VPoolWrapperLogic", address);
  }

  accruedProtocolFee(): BigInt {
    let result = super.call(
      "accruedProtocolFee",
      "accruedProtocolFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_accruedProtocolFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "accruedProtocolFee",
      "accruedProtocolFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burn(
    tickLower: i32,
    tickUpper: i32,
    liquidity: BigInt
  ): VPoolWrapperLogic__burnResult {
    let result = super.call(
      "burn",
      "burn(int24,int24,uint128):(uint256,uint256,(int256,int256,int256,uint256))",
      [
        ethereum.Value.fromI32(tickLower),
        ethereum.Value.fromI32(tickUpper),
        ethereum.Value.fromUnsignedBigInt(liquidity)
      ]
    );

    return new VPoolWrapperLogic__burnResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toTuple() as VPoolWrapperLogic__burnResultWrapperValuesInsideStruct
    );
  }

  try_burn(
    tickLower: i32,
    tickUpper: i32,
    liquidity: BigInt
  ): ethereum.CallResult<VPoolWrapperLogic__burnResult> {
    let result = super.tryCall(
      "burn",
      "burn(int24,int24,uint128):(uint256,uint256,(int256,int256,int256,uint256))",
      [
        ethereum.Value.fromI32(tickLower),
        ethereum.Value.fromI32(tickUpper),
        ethereum.Value.fromUnsignedBigInt(liquidity)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VPoolWrapperLogic__burnResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toTuple() as VPoolWrapperLogic__burnResultWrapperValuesInsideStruct
      )
    );
  }

  clearingHouse(): Address {
    let result = super.call("clearingHouse", "clearingHouse():(address)", []);

    return result[0].toAddress();
  }

  try_clearingHouse(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "clearingHouse",
      "clearingHouse():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collectAccruedProtocolFee(): BigInt {
    let result = super.call(
      "collectAccruedProtocolFee",
      "collectAccruedProtocolFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_collectAccruedProtocolFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "collectAccruedProtocolFee",
      "collectAccruedProtocolFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  extsload(slot: Bytes): Bytes {
    let result = super.call("extsload", "extsload(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(slot)
    ]);

    return result[0].toBytes();
  }

  try_extsload(slot: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("extsload", "extsload(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(slot)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  extsload1(slots: Array<Bytes>): Array<Bytes> {
    let result = super.call("extsload", "extsload(bytes32[]):(bytes32[])", [
      ethereum.Value.fromFixedBytesArray(slots)
    ]);

    return result[0].toBytesArray();
  }

  try_extsload1(slots: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("extsload", "extsload(bytes32[]):(bytes32[])", [
      ethereum.Value.fromFixedBytesArray(slots)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  fpGlobal(): VPoolWrapperLogic__fpGlobalResult {
    let result = super.call(
      "fpGlobal",
      "fpGlobal():(int256,int256,int256,uint48)",
      []
    );

    return new VPoolWrapperLogic__fpGlobalResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_fpGlobal(): ethereum.CallResult<VPoolWrapperLogic__fpGlobalResult> {
    let result = super.tryCall(
      "fpGlobal",
      "fpGlobal():(int256,int256,int256,uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VPoolWrapperLogic__fpGlobalResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getExtrapolatedSumAX128(): BigInt {
    let result = super.call(
      "getExtrapolatedSumAX128",
      "getExtrapolatedSumAX128():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getExtrapolatedSumAX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getExtrapolatedSumAX128",
      "getExtrapolatedSumAX128():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getExtrapolatedValuesInside(
    tickLower: i32,
    tickUpper: i32
  ): VPoolWrapperLogic__getExtrapolatedValuesInsideResultWrapperValuesInsideStruct {
    let result = super.call(
      "getExtrapolatedValuesInside",
      "getExtrapolatedValuesInside(int24,int24):((int256,int256,int256,uint256))",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );

    return result[0].toTuple() as VPoolWrapperLogic__getExtrapolatedValuesInsideResultWrapperValuesInsideStruct;
  }

  try_getExtrapolatedValuesInside(
    tickLower: i32,
    tickUpper: i32
  ): ethereum.CallResult<
    VPoolWrapperLogic__getExtrapolatedValuesInsideResultWrapperValuesInsideStruct
  > {
    let result = super.tryCall(
      "getExtrapolatedValuesInside",
      "getExtrapolatedValuesInside(int24,int24):((int256,int256,int256,uint256))",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as VPoolWrapperLogic__getExtrapolatedValuesInsideResultWrapperValuesInsideStruct
    );
  }

  getSumAX128(): BigInt {
    let result = super.call("getSumAX128", "getSumAX128():(int256)", []);

    return result[0].toBigInt();
  }

  try_getSumAX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getSumAX128", "getSumAX128():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getValuesInside(
    tickLower: i32,
    tickUpper: i32
  ): VPoolWrapperLogic__getValuesInsideResultWrapperValuesInsideStruct {
    let result = super.call(
      "getValuesInside",
      "getValuesInside(int24,int24):((int256,int256,int256,uint256))",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );

    return result[0].toTuple() as VPoolWrapperLogic__getValuesInsideResultWrapperValuesInsideStruct;
  }

  try_getValuesInside(
    tickLower: i32,
    tickUpper: i32
  ): ethereum.CallResult<
    VPoolWrapperLogic__getValuesInsideResultWrapperValuesInsideStruct
  > {
    let result = super.tryCall(
      "getValuesInside",
      "getValuesInside(int24,int24):((int256,int256,int256,uint256))",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as VPoolWrapperLogic__getValuesInsideResultWrapperValuesInsideStruct
    );
  }

  liquidityFeePips(): i32 {
    let result = super.call(
      "liquidityFeePips",
      "liquidityFeePips():(uint24)",
      []
    );

    return result[0].toI32();
  }

  try_liquidityFeePips(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "liquidityFeePips",
      "liquidityFeePips():(uint24)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  mint(
    tickLower: i32,
    tickUpper: i32,
    liquidity: BigInt
  ): VPoolWrapperLogic__mintResult {
    let result = super.call(
      "mint",
      "mint(int24,int24,uint128):(uint256,uint256,(int256,int256,int256,uint256))",
      [
        ethereum.Value.fromI32(tickLower),
        ethereum.Value.fromI32(tickUpper),
        ethereum.Value.fromUnsignedBigInt(liquidity)
      ]
    );

    return new VPoolWrapperLogic__mintResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toTuple() as VPoolWrapperLogic__mintResultWrapperValuesInsideStruct
    );
  }

  try_mint(
    tickLower: i32,
    tickUpper: i32,
    liquidity: BigInt
  ): ethereum.CallResult<VPoolWrapperLogic__mintResult> {
    let result = super.tryCall(
      "mint",
      "mint(int24,int24,uint128):(uint256,uint256,(int256,int256,int256,uint256))",
      [
        ethereum.Value.fromI32(tickLower),
        ethereum.Value.fromI32(tickUpper),
        ethereum.Value.fromUnsignedBigInt(liquidity)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VPoolWrapperLogic__mintResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toTuple() as VPoolWrapperLogic__mintResultWrapperValuesInsideStruct
      )
    );
  }

  protocolFeePips(): i32 {
    let result = super.call(
      "protocolFeePips",
      "protocolFeePips():(uint24)",
      []
    );

    return result[0].toI32();
  }

  try_protocolFeePips(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "protocolFeePips",
      "protocolFeePips():(uint24)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  sumFeeGlobalX128(): BigInt {
    let result = super.call(
      "sumFeeGlobalX128",
      "sumFeeGlobalX128():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_sumFeeGlobalX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sumFeeGlobalX128",
      "sumFeeGlobalX128():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swap(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigInt,
    sqrtPriceLimitX96: BigInt
  ): VPoolWrapperLogic__swapResultSwapResultStruct {
    let result = super.call(
      "swap",
      "swap(bool,int256,uint160):((int256,int256,int256,uint256,uint256,uint160,uint160))",
      [
        ethereum.Value.fromBoolean(swapVTokenForVQuote),
        ethereum.Value.fromSignedBigInt(amountSpecified),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96)
      ]
    );

    return result[0].toTuple() as VPoolWrapperLogic__swapResultSwapResultStruct;
  }

  try_swap(
    swapVTokenForVQuote: boolean,
    amountSpecified: BigInt,
    sqrtPriceLimitX96: BigInt
  ): ethereum.CallResult<VPoolWrapperLogic__swapResultSwapResultStruct> {
    let result = super.tryCall(
      "swap",
      "swap(bool,int256,uint160):((int256,int256,int256,uint256,uint256,uint160,uint160))",
      [
        ethereum.Value.fromBoolean(swapVTokenForVQuote),
        ethereum.Value.fromSignedBigInt(amountSpecified),
        ethereum.Value.fromUnsignedBigInt(sqrtPriceLimitX96)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as VPoolWrapperLogic__swapResultSwapResultStruct
    );
  }

  ticksExtended(param0: i32): VPoolWrapperLogic__ticksExtendedResult {
    let result = super.call(
      "ticksExtended",
      "ticksExtended(int24):(int256,int256,int256,uint256)",
      [ethereum.Value.fromI32(param0)]
    );

    return new VPoolWrapperLogic__ticksExtendedResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_ticksExtended(
    param0: i32
  ): ethereum.CallResult<VPoolWrapperLogic__ticksExtendedResult> {
    let result = super.tryCall(
      "ticksExtended",
      "ticksExtended(int24):(int256,int256,int256,uint256)",
      [ethereum.Value.fromI32(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VPoolWrapperLogic__ticksExtendedResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  vPool(): Address {
    let result = super.call("vPool", "vPool():(address)", []);

    return result[0].toAddress();
  }

  try_vPool(): ethereum.CallResult<Address> {
    let result = super.tryCall("vPool", "vPool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vQuote(): Address {
    let result = super.call("vQuote", "vQuote():(address)", []);

    return result[0].toAddress();
  }

  try_vQuote(): ethereum.CallResult<Address> {
    let result = super.tryCall("vQuote", "vQuote():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vToken(): Address {
    let result = super.call("vToken", "vToken():(address)", []);

    return result[0].toAddress();
  }

  try_vToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("vToken", "vToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class __initialize_VPoolWrapperCall extends ethereum.Call {
  get inputs(): __initialize_VPoolWrapperCall__Inputs {
    return new __initialize_VPoolWrapperCall__Inputs(this);
  }

  get outputs(): __initialize_VPoolWrapperCall__Outputs {
    return new __initialize_VPoolWrapperCall__Outputs(this);
  }
}

export class __initialize_VPoolWrapperCall__Inputs {
  _call: __initialize_VPoolWrapperCall;

  constructor(call: __initialize_VPoolWrapperCall) {
    this._call = call;
  }

  get params(): __initialize_VPoolWrapperCallParamsStruct {
    return this._call.inputValues[0].value.toTuple() as __initialize_VPoolWrapperCallParamsStruct;
  }
}

export class __initialize_VPoolWrapperCall__Outputs {
  _call: __initialize_VPoolWrapperCall;

  constructor(call: __initialize_VPoolWrapperCall) {
    this._call = call;
  }
}

export class __initialize_VPoolWrapperCallParamsStruct extends ethereum.Tuple {
  get clearingHouse(): Address {
    return this[0].toAddress();
  }

  get vToken(): Address {
    return this[1].toAddress();
  }

  get vQuote(): Address {
    return this[2].toAddress();
  }

  get vPool(): Address {
    return this[3].toAddress();
  }

  get liquidityFeePips(): i32 {
    return this[4].toI32();
  }

  get protocolFeePips(): i32 {
    return this[5].toI32();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tickLower(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tickUpper(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get vTokenPrincipal(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get vQuotePrincipal(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get wrapperValuesInside(): BurnCallWrapperValuesInsideStruct {
    return this._call.outputValues[2].value.toTuple() as BurnCallWrapperValuesInsideStruct;
  }
}

export class BurnCallWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class CollectAccruedProtocolFeeCall extends ethereum.Call {
  get inputs(): CollectAccruedProtocolFeeCall__Inputs {
    return new CollectAccruedProtocolFeeCall__Inputs(this);
  }

  get outputs(): CollectAccruedProtocolFeeCall__Outputs {
    return new CollectAccruedProtocolFeeCall__Outputs(this);
  }
}

export class CollectAccruedProtocolFeeCall__Inputs {
  _call: CollectAccruedProtocolFeeCall;

  constructor(call: CollectAccruedProtocolFeeCall) {
    this._call = call;
  }
}

export class CollectAccruedProtocolFeeCall__Outputs {
  _call: CollectAccruedProtocolFeeCall;

  constructor(call: CollectAccruedProtocolFeeCall) {
    this._call = call;
  }

  get accruedProtocolFeeLast(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tickLower(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tickUpper(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get liquidity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get vTokenPrincipal(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get vQuotePrincipal(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get wrapperValuesInside(): MintCallWrapperValuesInsideStruct {
    return this._call.outputValues[2].value.toTuple() as MintCallWrapperValuesInsideStruct;
  }
}

export class MintCallWrapperValuesInsideStruct extends ethereum.Tuple {
  get sumAX128(): BigInt {
    return this[0].toBigInt();
  }

  get sumBInsideX128(): BigInt {
    return this[1].toBigInt();
  }

  get sumFpInsideX128(): BigInt {
    return this[2].toBigInt();
  }

  get sumFeeInsideX128(): BigInt {
    return this[3].toBigInt();
  }
}

export class SetLiquidityFeeCall extends ethereum.Call {
  get inputs(): SetLiquidityFeeCall__Inputs {
    return new SetLiquidityFeeCall__Inputs(this);
  }

  get outputs(): SetLiquidityFeeCall__Outputs {
    return new SetLiquidityFeeCall__Outputs(this);
  }
}

export class SetLiquidityFeeCall__Inputs {
  _call: SetLiquidityFeeCall;

  constructor(call: SetLiquidityFeeCall) {
    this._call = call;
  }

  get liquidityFeePips_(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetLiquidityFeeCall__Outputs {
  _call: SetLiquidityFeeCall;

  constructor(call: SetLiquidityFeeCall) {
    this._call = call;
  }
}

export class SetProtocolFeeCall extends ethereum.Call {
  get inputs(): SetProtocolFeeCall__Inputs {
    return new SetProtocolFeeCall__Inputs(this);
  }

  get outputs(): SetProtocolFeeCall__Outputs {
    return new SetProtocolFeeCall__Outputs(this);
  }
}

export class SetProtocolFeeCall__Inputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }

  get protocolFeePips_(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetProtocolFeeCall__Outputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get swapVTokenForVQuote(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }

  get amountSpecified(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get swapResult(): SwapCallSwapResultStruct {
    return this._call.outputValues[0].value.toTuple() as SwapCallSwapResultStruct;
  }
}

export class SwapCallSwapResultStruct extends ethereum.Tuple {
  get amountSpecified(): BigInt {
    return this[0].toBigInt();
  }

  get vTokenIn(): BigInt {
    return this[1].toBigInt();
  }

  get vQuoteIn(): BigInt {
    return this[2].toBigInt();
  }

  get liquidityFees(): BigInt {
    return this[3].toBigInt();
  }

  get protocolFees(): BigInt {
    return this[4].toBigInt();
  }

  get sqrtPriceX96Start(): BigInt {
    return this[5].toBigInt();
  }

  get sqrtPriceX96End(): BigInt {
    return this[6].toBigInt();
  }
}

export class UniswapV3MintCallbackCall extends ethereum.Call {
  get inputs(): UniswapV3MintCallbackCall__Inputs {
    return new UniswapV3MintCallbackCall__Inputs(this);
  }

  get outputs(): UniswapV3MintCallbackCall__Outputs {
    return new UniswapV3MintCallbackCall__Outputs(this);
  }
}

export class UniswapV3MintCallbackCall__Inputs {
  _call: UniswapV3MintCallbackCall;

  constructor(call: UniswapV3MintCallbackCall) {
    this._call = call;
  }

  get vTokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get vQuoteAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UniswapV3MintCallbackCall__Outputs {
  _call: UniswapV3MintCallbackCall;

  constructor(call: UniswapV3MintCallbackCall) {
    this._call = call;
  }
}

export class UniswapV3SwapCallbackCall extends ethereum.Call {
  get inputs(): UniswapV3SwapCallbackCall__Inputs {
    return new UniswapV3SwapCallbackCall__Inputs(this);
  }

  get outputs(): UniswapV3SwapCallbackCall__Outputs {
    return new UniswapV3SwapCallbackCall__Outputs(this);
  }
}

export class UniswapV3SwapCallbackCall__Inputs {
  _call: UniswapV3SwapCallbackCall;

  constructor(call: UniswapV3SwapCallbackCall) {
    this._call = call;
  }

  get amount0Delta(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount1Delta(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UniswapV3SwapCallbackCall__Outputs {
  _call: UniswapV3SwapCallbackCall;

  constructor(call: UniswapV3SwapCallbackCall) {
    this._call = call;
  }
}

export class UpdateGlobalFundingStateCall extends ethereum.Call {
  get inputs(): UpdateGlobalFundingStateCall__Inputs {
    return new UpdateGlobalFundingStateCall__Inputs(this);
  }

  get outputs(): UpdateGlobalFundingStateCall__Outputs {
    return new UpdateGlobalFundingStateCall__Outputs(this);
  }
}

export class UpdateGlobalFundingStateCall__Inputs {
  _call: UpdateGlobalFundingStateCall;

  constructor(call: UpdateGlobalFundingStateCall) {
    this._call = call;
  }

  get realPriceX128(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get virtualPriceX128(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateGlobalFundingStateCall__Outputs {
  _call: UpdateGlobalFundingStateCall;

  constructor(call: UpdateGlobalFundingStateCall) {
    this._call = call;
  }
}
