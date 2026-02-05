
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BitdefenderCollector extends SketchCollector {

    static CONFIG = {
        id: "bitdefender",
        name: "Bitdefender",
        description: "i18n.collectors.bitdefender.description",
        version: "0",
        website: "https://login.bitdefender.com/central/login.html?lang=en_US&redirect_url=https:%2F%2Fcentral.bitdefender.com%2F&adobe_mc=MCMID%3D71225503015089124310800599563903362659%7CMCORGID%3D0E920C0F53DA9E9B0A490D45%2540AdobeOrg%7CTS%3D1695651675&_gl=1*1o3i77c*_ga*M",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2168753.jpg",
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
        loginUrl: "https://login.bitdefender.com/central/login.html?lang=en_US&redirect_url=https:%2F%2Fcentral.bitdefender.com%2F&adobe_mc=MCMID%3D71225503015089124310800599563903362659%7CMCORGID%3D0E920C0F53DA9E9B0A490D45%2540AdobeOrg%7CTS%3D1695651675&_gl=1*1o3i77c*_ga*M",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BitdefenderCollector.CONFIG);
    }
}
