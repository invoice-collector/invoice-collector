
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElectricIrelandBusinessAccountCollector extends SketchCollector {

    static CONFIG = {
        id: "electric_ireland_business_account",
        name: "Electric Ireland - Business Account",
        description: "i18n.collectors.electric_ireland_business_account.description",
        version: "0",
        website: "https://businessonline.electricireland.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/953734.jpg",
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
        entryUrl: "https://businessonline.electricireland.ie/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElectricIrelandBusinessAccountCollector.CONFIG);
    }
}
