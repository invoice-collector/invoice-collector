
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DerGrunePunktDualesSystemCollector extends SketchCollector {

    static CONFIG = {
        id: "der_grune_punkt_duales_system",
        name: "Der Grune Punkt Duales System",
        description: "i18n.collectors.der_grune_punkt_duales_system.description",
        version: "0",
        website: "https://portal.gruener-punkt.de/onlinedsd/f?p=200:101:::NO:RP::",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429771.jpg",
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
        entryUrl: "https://portal.gruener-punkt.de/onlinedsd/f?p=200:101:::NO:RP::",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DerGrunePunktDualesSystemCollector.CONFIG);
    }
}
