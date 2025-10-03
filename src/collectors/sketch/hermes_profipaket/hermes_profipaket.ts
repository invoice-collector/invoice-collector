
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HermesProfipaketCollector extends SketchCollector {

    static CONFIG = {
        id: "hermes_profipaket",
        name: "Hermes - ProfiPaket",
        description: "i18n.collectors.hermes_profipaket.description",
        version: "0",
        website: "https://profipaketservice.hlg.de/wps/portal/PROPS_DEU/Home/LOGIN/!ut/p/b1/04_Sj9Q1NDMwNzeyMDE21o_Qj8pLLMtMTyzJzM9LzAHxo8ziTT0CQx2dDB0NLELMDA08g8x8TH2cDI0NPE2BCiLxKDAyIk6_AQ7gaEBIf7h-FF4lIBeAFeCxws8jPzdVPzcqx83SU9cRAK2efM8!/dl4/d5/L2dBISEvZ0FBIS9nQSEh/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162045.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://profipaketservice.hlg.de/wps/portal/PROPS_DEU/Home/LOGIN/!ut/p/b1/04_Sj9Q1NDMwNzeyMDE21o_Qj8pLLMtMTyzJzM9LzAHxo8ziTT0CQx2dDB0NLELMDA08g8x8TH2cDI0NPE2BCiLxKDAyIk6_AQ7gaEBIf7h-FF4lIBeAFeCxws8jPzdVPzcqx83SU9cRAK2efM8!/dl4/d5/L2dBISEvZ0FBIS9nQSEh/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HermesProfipaketCollector.CONFIG);
    }
}
