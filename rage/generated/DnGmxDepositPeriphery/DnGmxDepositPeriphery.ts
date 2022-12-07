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

export class AddressesUpdated extends ethereum.Event {
  get params(): AddressesUpdated__Params {
    return new AddressesUpdated__Params(this);
  }
}

export class AddressesUpdated__Params {
  _event: AddressesUpdated;

  constructor(event: AddressesUpdated) {
    this._event = event;
  }

  get juniorVault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardRouter(): Address {
    return this._event.parameters[1].value.toAddress();
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

export class SlippageThresholdUpdated extends ethereum.Event {
  get params(): SlippageThresholdUpdated__Params {
    return new SlippageThresholdUpdated__Params(this);
  }
}

export class SlippageThresholdUpdated__Params {
  _event: SlippageThresholdUpdated;

  constructor(event: SlippageThresholdUpdated) {
    this._event = event;
  }

  get newSlippageThreshold(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TokenDeposited extends ethereum.Event {
  get params(): TokenDeposited__Params {
    return new TokenDeposited__Params(this);
  }
}

export class TokenDeposited__Params {
  _event: TokenDeposited;

  constructor(event: TokenDeposited) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get assets(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tokensSpent(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DnGmxDepositPeriphery extends ethereum.SmartContract {
  static bind(address: Address): DnGmxDepositPeriphery {
    return new DnGmxDepositPeriphery('DnGmxDepositPeriphery', address);
  }

  depositToken(token: Address, receiver: Address, tokenAmount: BigInt): BigInt {
    let result = super.call(
      'depositToken',
      'depositToken(address,address,uint256):(uint256)',
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
      ]
    );

    return result[0].toBigInt();
  }

  try_depositToken(
    token: Address,
    receiver: Address,
    tokenAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      'depositToken',
      'depositToken(address,address,uint256):(uint256)',
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  slippageThreshold(): BigInt {
    let result = super.call('slippageThreshold', 'slippageThreshold():(uint256)', []);

    return result[0].toBigInt();
  }

  try_slippageThreshold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('slippageThreshold', 'slippageThreshold():(uint256)', []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get sharesReceived(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

export class SetAddressesCall extends ethereum.Call {
  get inputs(): SetAddressesCall__Inputs {
    return new SetAddressesCall__Inputs(this);
  }

  get outputs(): SetAddressesCall__Outputs {
    return new SetAddressesCall__Outputs(this);
  }
}

export class SetAddressesCall__Inputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }

  get _dnGmxJuniorVault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardRouter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _glpManager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetAddressesCall__Outputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }
}

export class SetSlippageThresholdCall extends ethereum.Call {
  get inputs(): SetSlippageThresholdCall__Inputs {
    return new SetSlippageThresholdCall__Inputs(this);
  }

  get outputs(): SetSlippageThresholdCall__Outputs {
    return new SetSlippageThresholdCall__Outputs(this);
  }
}

export class SetSlippageThresholdCall__Inputs {
  _call: SetSlippageThresholdCall;

  constructor(call: SetSlippageThresholdCall) {
    this._call = call;
  }

  get _slippageThreshold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSlippageThresholdCall__Outputs {
  _call: SetSlippageThresholdCall;

  constructor(call: SetSlippageThresholdCall) {
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
