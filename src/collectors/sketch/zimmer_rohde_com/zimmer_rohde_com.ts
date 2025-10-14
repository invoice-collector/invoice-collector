
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZimmerRohdeComCollector extends SketchCollector {

    static CONFIG = {
        id: "zimmer_rohde_com",
        name: "Zimmer + Rohde",
        description: "i18n.collectors.zimmer_rohde_com.description",
        version: "0",
        website: "https://www.zimmer-rohde.com/en/",
        logo: "https://vectorseek.com/wp-content/uploads/2024/01/Zimmer-Rohde-Logo-Vector.svg--263x300.png",
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
        entryUrl: "https://partner.zimmer-rohde.com/fr/Login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZimmerRohdeComCollector.CONFIG);
    }
}
