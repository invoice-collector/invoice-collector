
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DejBoxCollector extends SketchCollector {

    static CONFIG = {
        id: "dej_box",
        name: "DEJ BOX",
        description: "i18n.collectors.dej_box.description",
        version: "0",
        website: "https://www.dejbox.fr/account.jsp?to=solde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/943602.jpg",
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
        entryUrl: "https://www.dejbox.fr/account.jsp?to=solde",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DejBoxCollector.CONFIG);
    }
}
