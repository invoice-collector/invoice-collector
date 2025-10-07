
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CttComputertechnikAgCollector extends SketchCollector {

    static CONFIG = {
        id: "ctt_computertechnik_ag",
        name: "CTT Computertechnik AG",
        description: "i18n.collectors.ctt_computertechnik_ag.description",
        version: "0",
        website: "https://ctt.de/customer/account/login/referer/aHR0cHM6Ly9jdHQuZGUv/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439515.jpg",
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
        entryUrl: "https://ctt.de/customer/account/login/referer/aHR0cHM6Ly9jdHQuZGUv/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CttComputertechnikAgCollector.CONFIG);
    }
}
