
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArbeitszeiterfassungCollector extends SketchCollector {

    static CONFIG = {
        id: "arbeitszeiterfassung",
        name: "Arbeitszeiterfassung",
        description: "i18n.collectors.arbeitszeiterfassung.description",
        version: "0",
        website: "https://arbeitszeiterfassung.com/meine-rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1811533.jpg",
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
        entryUrl: "https://arbeitszeiterfassung.com/meine-rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArbeitszeiterfassungCollector.CONFIG);
    }
}
