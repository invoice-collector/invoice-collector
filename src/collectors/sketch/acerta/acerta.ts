import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AcertaCollector extends SketchCollector {

    static CONFIG = {
        id: "acerta",
        name: "Acerta",
        description: "i18n.collectors.acerta.description",
        version: "0",
        website: "https://acerta.be",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/ACERTA_Logo.jpg",
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
        entryUrl: "https://signin.acerta.be/am/XUI/?realm=/alpha&locale=en#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AcertaCollector.CONFIG);
    }
}
