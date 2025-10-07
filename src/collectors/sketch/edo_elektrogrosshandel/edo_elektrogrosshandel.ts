
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdoElektrogrosshandelCollector extends SketchCollector {

    static CONFIG = {
        id: "edo_elektrogrosshandel",
        name: "EDO Elektrogrosshandel",
        description: "i18n.collectors.edo_elektrogrosshandel.description",
        version: "0",
        website: "https://shop.edo-elektrogrosshandel.de/mein_belege_rechnungen,edo,de?eingabe=RE&zeitraum=12&Typ=R",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480711.jpg",
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
        entryUrl: "https://shop.edo-elektrogrosshandel.de/mein_belege_rechnungen,edo,de?eingabe=RE&zeitraum=12&Typ=R",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdoElektrogrosshandelCollector.CONFIG);
    }
}
