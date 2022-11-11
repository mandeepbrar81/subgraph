// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from '@graphprotocol/graph-ts';

export class BatchDeposit extends ethereum.Event {
  get params(): BatchDeposit__Params {
    return new BatchDeposit__Params(this);
  }
}

export class BatchDeposit__Params {
  _event: BatchDeposit;

  constructor(event: BatchDeposit) {
    this._event = event;
  }

  get round(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get userUsdcAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get userGlpAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get userShareAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BatchStake extends ethereum.Event {
  get params(): BatchStake__Params {
    return new BatchStake__Params(this);
  }
}

export class BatchStake__Params {
  _event: BatchStake;

  constructor(event: BatchStake) {
    this._event = event;
  }

  get round(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get userUsdcAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get userGlpAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ClaimedAndRedeemed extends ethereum.Event {
  get params(): ClaimedAndRedeemed__Params {
    return new ClaimedAndRedeemed__Params(this);
  }
}

export class ClaimedAndRedeemed__Params {
  _event: ClaimedAndRedeemed;

  constructor(event: ClaimedAndRedeemed) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get assetsReceived(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositToken extends ethereum.Event {
  get params(): DepositToken__Params {
    return new DepositToken__Params(this);
  }
}

export class DepositToken__Params {
  _event: DepositToken;

  constructor(event: DepositToken) {
    this._event = event;
  }

  get round(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get glpStaked(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class KeeperUpdated extends ethereum.Event {
  get params(): KeeperUpdated__Params {
    return new KeeperUpdated__Params(this);
  }
}

export class KeeperUpdated__Params {
  _event: KeeperUpdated;

  constructor(event: KeeperUpdated) {
    this._event = event;
  }

  get newKeeper(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SharesClaimed extends ethereum.Event {
  get params(): SharesClaimed__Params {
    return new SharesClaimed__Params(this);
  }
}

export class SharesClaimed__Params {
  _event: SharesClaimed;

  constructor(event: SharesClaimed) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get claimAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ThresholdsUpdated extends ethereum.Event {
  get params(): ThresholdsUpdated__Params {
    return new ThresholdsUpdated__Params(this);
  }
}

export class ThresholdsUpdated__Params {
  _event: ThresholdsUpdated;

  constructor(event: ThresholdsUpdated) {
    this._event = event;
  }

  get newSlippageThresholdGmx(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VaultDeposit extends ethereum.Event {
  get params(): VaultDeposit__Params {
    return new VaultDeposit__Params(this);
  }
}

export class VaultDeposit__Params {
  _event: VaultDeposit;

  constructor(event: VaultDeposit) {
    this._event = event;
  }

  get vaultGlpAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DnGmxBatchingManager__roundDepositsResultValue0Struct extends ethereum.Tuple {
  get totalUsdc(): BigInt {
    return this[0].toBigInt();
  }

  get totalShares(): BigInt {
    return this[1].toBigInt();
  }
}

export class DnGmxBatchingManager__userDepositsResultValue0Struct extends ethereum.Tuple {
  get round(): BigInt {
    return this[0].toBigInt();
  }

  get usdcBalance(): BigInt {
    return this[1].toBigInt();
  }

  get unclaimedShares(): BigInt {
    return this[2].toBigInt();
  }
}

export class DnGmxBatchingManager__vaultBatchingStateResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set('value0', ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set('value1', ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set('value2', ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getCurrentRound(): BigInt {
    return this.value0;
  }

  getRoundGlpStaked(): BigInt {
    return this.value1;
  }

  getRoundUsdcBalance(): BigInt {
    return this.value2;
  }
}

export class DnGmxBatchingManager extends ethereum.SmartContract {
  static bind(address: Address): DnGmxBatchingManager {
    return new DnGmxBatchingManager('DnGmxBatchingManager', address);
  }

  claimAndRedeem(receiver: Address): BigInt {
    let result = super.call('claimAndRedeem', 'claimAndRedeem(address):(uint256)', [
      ethereum.Value.fromAddress(receiver),
    ]);

    return result[0].toBigInt();
  }

  try_claimAndRedeem(receiver: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('claimAndRedeem', 'claimAndRedeem(address):(uint256)', [
      ethereum.Value.fromAddress(receiver),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentRound(): BigInt {
    let result = super.call('currentRound', 'currentRound():(uint256)', []);

    return result[0].toBigInt();
  }

  try_currentRound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('currentRound', 'currentRound():(uint256)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositToken(token: Address, amount: BigInt, minUSDG: BigInt): BigInt {
    let result = super.call(
      'depositToken',
      'depositToken(address,uint256,uint256):(uint256)',
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(minUSDG),
      ]
    );

    return result[0].toBigInt();
  }

  try_depositToken(
    token: Address,
    amount: BigInt,
    minUSDG: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      'depositToken',
      'depositToken(address,uint256,uint256):(uint256)',
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(minUSDG),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositUsdc(amount: BigInt, receiver: Address): BigInt {
    let result = super.call('depositUsdc', 'depositUsdc(uint256,address):(uint256)', [
      ethereum.Value.fromUnsignedBigInt(amount),
      ethereum.Value.fromAddress(receiver),
    ]);

    return result[0].toBigInt();
  }

  try_depositUsdc(amount: BigInt, receiver: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('depositUsdc', 'depositUsdc(uint256,address):(uint256)', [
      ethereum.Value.fromUnsignedBigInt(amount),
      ethereum.Value.fromAddress(receiver),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dnGmxJuniorVault(): Address {
    let result = super.call('dnGmxJuniorVault', 'dnGmxJuniorVault():(address)', []);

    return result[0].toAddress();
  }

  try_dnGmxJuniorVault(): ethereum.CallResult<Address> {
    let result = super.tryCall('dnGmxJuniorVault', 'dnGmxJuniorVault():(address)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dnGmxJuniorVaultGlpBalance(): BigInt {
    let result = super.call(
      'dnGmxJuniorVaultGlpBalance',
      'dnGmxJuniorVaultGlpBalance():(uint256)',
      []
    );

    return result[0].toBigInt();
  }

  try_dnGmxJuniorVaultGlpBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      'dnGmxJuniorVaultGlpBalance',
      'dnGmxJuniorVaultGlpBalance():(uint256)',
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  keeper(): Address {
    let result = super.call('keeper', 'keeper():(address)', []);

    return result[0].toAddress();
  }

  try_keeper(): ethereum.CallResult<Address> {
    let result = super.tryCall('keeper', 'keeper():(address)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call('owner', 'owner():(address)', []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall('owner', 'owner():(address)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call('paused', 'paused():(bool)', []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall('paused', 'paused():(bool)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  roundDeposits(round: BigInt): DnGmxBatchingManager__roundDepositsResultValue0Struct {
    let result = super.call(
      'roundDeposits',
      'roundDeposits(uint256):((uint128,uint128))',
      [ethereum.Value.fromUnsignedBigInt(round)]
    );

    return changetype<DnGmxBatchingManager__roundDepositsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_roundDeposits(
    round: BigInt
  ): ethereum.CallResult<DnGmxBatchingManager__roundDepositsResultValue0Struct> {
    let result = super.tryCall(
      'roundDeposits',
      'roundDeposits(uint256):((uint128,uint128))',
      [ethereum.Value.fromUnsignedBigInt(round)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<DnGmxBatchingManager__roundDepositsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  roundGlpStaked(): BigInt {
    let result = super.call('roundGlpStaked', 'roundGlpStaked():(uint256)', []);

    return result[0].toBigInt();
  }

  try_roundGlpStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('roundGlpStaked', 'roundGlpStaked():(uint256)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  roundUsdcBalance(): BigInt {
    let result = super.call('roundUsdcBalance', 'roundUsdcBalance():(uint256)', []);

    return result[0].toBigInt();
  }

  try_roundUsdcBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('roundUsdcBalance', 'roundUsdcBalance():(uint256)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  slippageThresholdGmxBps(): BigInt {
    let result = super.call(
      'slippageThresholdGmxBps',
      'slippageThresholdGmxBps():(uint256)',
      []
    );

    return result[0].toBigInt();
  }

  try_slippageThresholdGmxBps(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      'slippageThresholdGmxBps',
      'slippageThresholdGmxBps():(uint256)',
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unclaimedShares(account: Address): BigInt {
    let result = super.call('unclaimedShares', 'unclaimedShares(address):(uint256)', [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_unclaimedShares(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('unclaimedShares', 'unclaimedShares(address):(uint256)', [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  usdcBalance(account: Address): BigInt {
    let result = super.call('usdcBalance', 'usdcBalance(address):(uint256)', [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_usdcBalance(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('usdcBalance', 'usdcBalance(address):(uint256)', [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userDeposits(account: Address): DnGmxBatchingManager__userDepositsResultValue0Struct {
    let result = super.call(
      'userDeposits',
      'userDeposits(address):((uint256,uint128,uint128))',
      [ethereum.Value.fromAddress(account)]
    );

    return changetype<DnGmxBatchingManager__userDepositsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_userDeposits(
    account: Address
  ): ethereum.CallResult<DnGmxBatchingManager__userDepositsResultValue0Struct> {
    let result = super.tryCall(
      'userDeposits',
      'userDeposits(address):((uint256,uint128,uint128))',
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<DnGmxBatchingManager__userDepositsResultValue0Struct>(value[0].toTuple())
    );
  }

  vaultBatchingState(): DnGmxBatchingManager__vaultBatchingStateResult {
    let result = super.call(
      'vaultBatchingState',
      'vaultBatchingState():(uint256,uint256,uint256)',
      []
    );

    return new DnGmxBatchingManager__vaultBatchingStateResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_vaultBatchingState(): ethereum.CallResult<
    DnGmxBatchingManager__vaultBatchingStateResult
  > {
    let result = super.tryCall(
      'vaultBatchingState',
      'vaultBatchingState():(uint256,uint256,uint256)',
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DnGmxBatchingManager__vaultBatchingStateResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimAndRedeemCall extends ethereum.Call {
  get inputs(): ClaimAndRedeemCall__Inputs {
    return new ClaimAndRedeemCall__Inputs(this);
  }

  get outputs(): ClaimAndRedeemCall__Outputs {
    return new ClaimAndRedeemCall__Outputs(this);
  }
}

export class ClaimAndRedeemCall__Inputs {
  _call: ClaimAndRedeemCall;

  constructor(call: ClaimAndRedeemCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimAndRedeemCall__Outputs {
  _call: ClaimAndRedeemCall;

  constructor(call: ClaimAndRedeemCall) {
    this._call = call;
  }

  get glpReceived(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositTokenCall extends ethereum.Call {
  get inputs(): DepositTokenCall__Inputs {
    return new DepositTokenCall__Inputs(this);
  }

  get outputs(): DepositTokenCall__Outputs {
    return new DepositTokenCall__Outputs(this);
  }
}

export class DepositTokenCall__Inputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minUSDG(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get glpStaked(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositUsdcCall extends ethereum.Call {
  get inputs(): DepositUsdcCall__Inputs {
    return new DepositUsdcCall__Inputs(this);
  }

  get outputs(): DepositUsdcCall__Outputs {
    return new DepositUsdcCall__Outputs(this);
  }
}

export class DepositUsdcCall__Inputs {
  _call: DepositUsdcCall;

  constructor(call: DepositUsdcCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositUsdcCall__Outputs {
  _call: DepositUsdcCall;

  constructor(call: DepositUsdcCall) {
    this._call = call;
  }

  get glpStaked(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteBatchDepositCall extends ethereum.Call {
  get inputs(): ExecuteBatchDepositCall__Inputs {
    return new ExecuteBatchDepositCall__Inputs(this);
  }

  get outputs(): ExecuteBatchDepositCall__Outputs {
    return new ExecuteBatchDepositCall__Outputs(this);
  }
}

export class ExecuteBatchDepositCall__Inputs {
  _call: ExecuteBatchDepositCall;

  constructor(call: ExecuteBatchDepositCall) {
    this._call = call;
  }
}

export class ExecuteBatchDepositCall__Outputs {
  _call: ExecuteBatchDepositCall;

  constructor(call: ExecuteBatchDepositCall) {
    this._call = call;
  }
}

export class ExecuteBatchStakeCall extends ethereum.Call {
  get inputs(): ExecuteBatchStakeCall__Inputs {
    return new ExecuteBatchStakeCall__Inputs(this);
  }

  get outputs(): ExecuteBatchStakeCall__Outputs {
    return new ExecuteBatchStakeCall__Outputs(this);
  }
}

export class ExecuteBatchStakeCall__Inputs {
  _call: ExecuteBatchStakeCall;

  constructor(call: ExecuteBatchStakeCall) {
    this._call = call;
  }
}

export class ExecuteBatchStakeCall__Outputs {
  _call: ExecuteBatchStakeCall;

  constructor(call: ExecuteBatchStakeCall) {
    this._call = call;
  }
}

export class GrantAllowancesCall extends ethereum.Call {
  get inputs(): GrantAllowancesCall__Inputs {
    return new GrantAllowancesCall__Inputs(this);
  }

  get outputs(): GrantAllowancesCall__Outputs {
    return new GrantAllowancesCall__Outputs(this);
  }
}

export class GrantAllowancesCall__Inputs {
  _call: GrantAllowancesCall;

  constructor(call: GrantAllowancesCall) {
    this._call = call;
  }
}

export class GrantAllowancesCall__Outputs {
  _call: GrantAllowancesCall;

  constructor(call: GrantAllowancesCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _sGlp(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _usdc(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rewardRouter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _glpManager(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _dnGmxJuniorVault(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _keeper(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseDepositCall extends ethereum.Call {
  get inputs(): PauseDepositCall__Inputs {
    return new PauseDepositCall__Inputs(this);
  }

  get outputs(): PauseDepositCall__Outputs {
    return new PauseDepositCall__Outputs(this);
  }
}

export class PauseDepositCall__Inputs {
  _call: PauseDepositCall;

  constructor(call: PauseDepositCall) {
    this._call = call;
  }
}

export class PauseDepositCall__Outputs {
  _call: PauseDepositCall;

  constructor(call: PauseDepositCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBypassCall extends ethereum.Call {
  get inputs(): SetBypassCall__Inputs {
    return new SetBypassCall__Inputs(this);
  }

  get outputs(): SetBypassCall__Outputs {
    return new SetBypassCall__Outputs(this);
  }
}

export class SetBypassCall__Inputs {
  _call: SetBypassCall;

  constructor(call: SetBypassCall) {
    this._call = call;
  }

  get _bypass(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBypassCall__Outputs {
  _call: SetBypassCall;

  constructor(call: SetBypassCall) {
    this._call = call;
  }
}

export class SetKeeperCall extends ethereum.Call {
  get inputs(): SetKeeperCall__Inputs {
    return new SetKeeperCall__Inputs(this);
  }

  get outputs(): SetKeeperCall__Outputs {
    return new SetKeeperCall__Outputs(this);
  }
}

export class SetKeeperCall__Inputs {
  _call: SetKeeperCall;

  constructor(call: SetKeeperCall) {
    this._call = call;
  }

  get _keeper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetKeeperCall__Outputs {
  _call: SetKeeperCall;

  constructor(call: SetKeeperCall) {
    this._call = call;
  }
}

export class SetThresholdsCall extends ethereum.Call {
  get inputs(): SetThresholdsCall__Inputs {
    return new SetThresholdsCall__Inputs(this);
  }

  get outputs(): SetThresholdsCall__Outputs {
    return new SetThresholdsCall__Outputs(this);
  }
}

export class SetThresholdsCall__Inputs {
  _call: SetThresholdsCall;

  constructor(call: SetThresholdsCall) {
    this._call = call;
  }

  get _slippageThresholdGmxBps(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetThresholdsCall__Outputs {
  _call: SetThresholdsCall;

  constructor(call: SetThresholdsCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseDepositCall extends ethereum.Call {
  get inputs(): UnpauseDepositCall__Inputs {
    return new UnpauseDepositCall__Inputs(this);
  }

  get outputs(): UnpauseDepositCall__Outputs {
    return new UnpauseDepositCall__Outputs(this);
  }
}

export class UnpauseDepositCall__Inputs {
  _call: UnpauseDepositCall;

  constructor(call: UnpauseDepositCall) {
    this._call = call;
  }
}

export class UnpauseDepositCall__Outputs {
  _call: UnpauseDepositCall;

  constructor(call: UnpauseDepositCall) {
    this._call = call;
  }
}
