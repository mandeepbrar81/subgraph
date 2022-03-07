import { BigInt, log } from '@graphprotocol/graph-ts';
import { PoolInitialized } from '../../../generated/RageTradeFactory/RageTradeFactory';
import {
  RageTradeFactory,
  RageTradePool,
  VToken,
} from '../../../generated/schema';
import { getSumAX128, truncate } from '../../utils';
import { contracts } from '../../utils/addresses';

export function handlePoolInitialized(event: PoolInitialized): void {
  log.debug('custom_logs: handlePoolInitialized triggered {} {} {}', [
    event.params.vToken.toHexString(),
    event.params.vPoolWrapper.toString(),
    event.params.vPool.toString(),
  ]);

  let rageTradeFactory = RageTradeFactory.load(event.address.toHexString());
  if (rageTradeFactory === null) {
    rageTradeFactory = new RageTradeFactory(event.address.toHexString());
    rageTradeFactory.save();
  }

  let poolId = truncate(event.params.vToken.toHexString());
  log.debug('custom_logs: handlePoolInitialized poolId {}', [poolId]);

  let rageTradePool = RageTradePool.load(poolId);

  if (rageTradePool !== null) {
    log.error('custom_logs: rageTradePool exists when it should not {}', [
      poolId,
    ]);
  }

  let vToken = new VToken(event.params.vToken.toHexString());
  vToken.pool = poolId;
  vToken.save();

  rageTradePool = new RageTradePool(poolId);
  rageTradePool.vToken = vToken.id;
  rageTradePool.vPool = event.params.vPool.toHexString();
  rageTradePool.vPoolWrapper = event.params.vPoolWrapper.toHexString();
  rageTradePool.factory = rageTradeFactory.id;

  /// TODO
  rageTradePool.price = BigInt.fromI32(10000);

  rageTradePool.sumAX128 = getSumAX128(contracts.VPoolWrapper);
  rageTradePool.liquidity = BigInt.fromI32(10000);
  rageTradePool.funding = BigInt.fromI32(10000);
  rageTradePool.volume24H = BigInt.fromI32(10000);
  rageTradePool.priceChange24H = BigInt.fromI32(10000);
  rageTradePool.funding1H = BigInt.fromI32(10000);

  rageTradePool.save();
}
