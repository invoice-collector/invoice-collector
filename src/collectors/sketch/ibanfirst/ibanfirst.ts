
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IbanfirstCollector extends SketchCollector {

    static CONFIG = {
        id: "ibanfirst",
        name: "Ibanfirst",
        description: "i18n.collectors.ibanfirst.description",
        version: "0",
        website: "https://platform.ibanfirst.com/Compte/Documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221829.jpg",
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
        entryUrl: "https://platform.ibanfirst.com/Compte/Documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IbanfirstCollector.CONFIG);
    }
}
