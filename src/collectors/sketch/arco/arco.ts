
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArcoCollector extends SketchCollector {

    static CONFIG = {
        id: "arco",
        name: "Arco",
        description: "i18n.collectors.arco.description",
        version: "0",
        website: "https://simplyui-icd2.azurewebsites.net/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172785.jpg",
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
        entryUrl: "https://simplyui-icd2.azurewebsites.net/statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArcoCollector.CONFIG);
    }
}
