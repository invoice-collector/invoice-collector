
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrightHouseBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "bright_house_business",
        name: "Bright House Business",
        description: "i18n.collectors.bright_house_business.description",
        version: "0",
        website: "https://www.spectrumbusiness.net/login?ReferringPartner=BH",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8641.jpg",
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
        entryUrl: "https://www.spectrumbusiness.net/login?ReferringPartner=BH",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrightHouseBusinessCollector.CONFIG);
    }
}
