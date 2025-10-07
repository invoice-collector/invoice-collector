
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrangePolskaBiznesUslugiMobilneCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_polska_biznes_uslugi_mobilne",
        name: "Orange Polska - Biznes - uslugi mobilne",
        description: "i18n.collectors.orange_polska_biznes_uslugi_mobilne.description",
        version: "0",
        website: "https://www.orange.pl/zaloguj.phtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135227.jpg",
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
        entryUrl: "https://www.orange.pl/zaloguj.phtml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrangePolskaBiznesUslugiMobilneCollector.CONFIG);
    }
}
