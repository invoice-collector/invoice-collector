export let collectors: any[] = []
import { AmazonCollector } from "./amazon/amazon"; collectors.push(AmazonCollector);
import { BureauValleeCollector } from "./bureau_vallee/bureau_vallee"; collectors.push(BureauValleeCollector);
import { CarrefourCollector } from "./carrefour/carrefour"; collectors.push(CarrefourCollector);
import { FreeCollector } from "./free/free"; collectors.push(FreeCollector);
import { IntermarcheCollector } from "./intermarche/intermarche"; collectors.push(IntermarcheCollector);
import { LeclercCollector } from "./leclerc/leclerc"; collectors.push(LeclercCollector);
import { LeroyMerlinCollector } from "./leroy_merlin/leroy_merlin"; collectors.push(LeroyMerlinCollector);
import { OpenaiCollector } from "./openai/openai"; collectors.push(OpenaiCollector);
import { OvhCollector } from "./ovh/ovh"; collectors.push(OvhCollector);
import { UCollector } from "./u/u"; collectors.push(UCollector);
